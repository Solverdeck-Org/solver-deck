import { NextRequest } from 'next/server';
import { google } from '@ai-sdk/google';
import {
  streamText,
  convertToModelMessages,
  type UIMessage,
  embedMany,
} from 'ai';
import * as cheerio from 'cheerio';
import { XMLParser } from 'fast-xml-parser';
import pLimit from 'p-limit';

export const runtime = 'nodejs';
export const maxDuration = 60;

// ------------------------- Types -------------------------

type PageDoc = {
  url: string;
  title: string;
  content: string;
};

type EmbChunk = {
  url: string;
  title: string;
  content: string;
  embedding: number[];
};

// ------------------------- Config -------------------------

const BASE = 'https://www.solverdeck.com';
const MAX_PAGES = 60;
const MAX_CONTENT_CHARS = 12000;
const CHUNK_WORDS = 1100;
const CHUNK_OVERLAP = 150;
const INDEX_TTL_MS = 1000 * 60 * 60 * 24; // 24h re-index
const FETCH_TIMEOUT_MS = 12000;

// ------------------------- In-memory cache -------------------------

let INDEX:
  | {
      chunks: EmbChunk[];
      builtAt: number;
    }
  | null = null;

// ------------------------- Helpers -------------------------

function cleanText(html: string): { title: string; text: string } {
  const $ = cheerio.load(html);
  $('script,style,nav,footer,noscript,svg').remove();
  const title = ($('title').text() || '').trim();
  const text = $('body').text().replace(/\s+/g, ' ').trim();
  return { title, text };
}

function clip(s: string, n: number) {
  return s.length > n ? s.slice(0, n) : s;
}

function chunkText(text: string, size = CHUNK_WORDS, overlap = CHUNK_OVERLAP) {
  const words = text.split(/\s+/);
  const chunks: string[] = [];
  for (let i = 0; i < words.length; i += size - overlap) {
    const slice = words.slice(i, i + size).join(' ').trim();
    if (slice) chunks.push(slice);
  }
  return chunks;
}

function cosineSim(a: number[], b: number[]) {
  let dot = 0,
    na = 0,
    nb = 0;
  for (let i = 0; i < a.length; i++) {
    const x = a[i];
    const y = b[i];
    dot += x * y;
    na += x * x;
    nb += y * y;
  }
  const denom = Math.sqrt(na) * Math.sqrt(nb);
  return denom ? dot / denom : 0;
}

async function fetchWithTimeout(url: string, ms = FETCH_TIMEOUT_MS): Promise<Response> {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { redirect: 'follow', signal: ctrl.signal });
    return res;
  } finally {
    clearTimeout(id);
  }
}

async function tryFetchText(url: string): Promise<string | null> {
  try {
    const res = await fetchWithTimeout(url);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

async function getSitemapUrls(): Promise<string[]> {
  const parser = new XMLParser();
  const xml = await tryFetchText(`${BASE}/sitemap.xml`);
  if (!xml) return [];
  try {
    const data = parser.parse(xml) as any;
    const urls: string[] =
      data?.urlset?.url?.map((u: any) => u.loc).filter(Boolean) ?? [];
    const set = new Set(
      urls
        .map((u) => (typeof u === 'string' ? u : ''))
        .filter((u) => u.startsWith(BASE))
    );
    return Array.from(set);
  } catch {
    return [];
  }
}

async function discoverUrls(): Promise<string[]> {
  try {
    const fromSitemap = await getSitemapUrls();
    if (fromSitemap.length) return fromSitemap.slice(0, MAX_PAGES);
  } catch {
    // noop
  }
  return [BASE, `${BASE}/blog`, `${BASE}/case-studies`].slice(0, MAX_PAGES);
}

async function crawl(): Promise<PageDoc[]> {
  const urls = await discoverUrls();
  const limit = pLimit(6);
  const tasks = urls.map((url) =>
    limit(async () => {
      const html = await tryFetchText(url);
      if (!html) return null;
      const { title, text } = cleanText(html);
      const content = clip(text, MAX_CONTENT_CHARS);
      if (content.length < 200) return null;
      return { url, title: title || url, content };
    })
  );
  const results = await Promise.all(tasks);
  return results.filter(Boolean) as PageDoc[];
}

async function buildIndex(): Promise<EmbChunk[]> {
  try {
    const pages = await crawl();
    if (!pages.length) return [];

    const chunks: { url: string; title: string; content: string }[] = [];
    for (const p of pages) {
      const parts = chunkText(p.content);
      for (const part of parts) {
        chunks.push({ url: p.url, title: p.title, content: part });
      }
    }

    if (!chunks.length) return [];

    const { embeddings } = await embedMany({
      model: google.textEmbedding('text-embedding-004'),
      values: chunks.map((c) => c.content),
    });

    return chunks.map((c, i) => ({
      ...c,
      embedding: embeddings[i],
    }));
  } catch (e) {
    console.error('buildIndex error:', e);
    return [];
  }
}

async function ensureIndex(): Promise<void> {
  const now = Date.now();
  const stale = !INDEX || !INDEX.builtAt || now - INDEX.builtAt > INDEX_TTL_MS;

  if (!stale && INDEX?.chunks?.length) return;

  try {
    const chunks = await buildIndex();
    INDEX = { chunks, builtAt: Date.now() };
    console.log(
      `SolverDeck index built: ${chunks.length} chunks at ${new Date().toISOString()}`
    );
  } catch (e) {
    console.error('ensureIndex error:', e);
    // keep prior index if any
  }
}

async function retrieve(
  query: string,
  topK = 6
): Promise<{
  items: { url: string; title: string; content: string; s: number }[];
  best: number;
}> {
  await ensureIndex();
  const chunks = INDEX?.chunks ?? [];
  if (!chunks.length) return { items: [], best: 0 };

  try {
    const { embeddings } = await embedMany({
      model: google.textEmbedding('text-embedding-004'),
      values: [query],
    });
    const q = embeddings[0];

    const scored = chunks
      .map((c) => ({ c, s: cosineSim(q, c.embedding) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, topK);

    return {
      items: scored.map((x) => ({
        url: x.c.url,
        title: x.c.title,
        content: x.c.content,
        s: x.s,
      })),
      best: scored[0]?.s ?? 0,
    };
  } catch (e) {
    console.error('retrieve embed error:', e);
    return { items: [], best: 0 };
  }
}

function buildContextText(
  items: { url: string; title: string; content: string; s: number }[]
) {
  if (!items.length) return '';
  return items
    .map(
      (c, i) => `Source ${i + 1} (${c.url}):
${c.content}`
    )
    .join('\n\n---\n\n');
}

function lastUserText(uiMessages: UIMessage[]): string {
  const lastUser = [...uiMessages].reverse().find((m) => m.role === 'user');
  if (!lastUser) return '';
  const texts =
    (lastUser as any).parts
      ?.filter((p: any) => p?.type === 'text' && typeof p.text === 'string')
      ?.map((p: any) => p.text) ?? [];
  return texts.join(' ').trim();
}

// ------------------------- Guardrails -------------------------

const SYSTEM_PROMPT = `
You are the SolverDeck assistant for solverdeck.com.
Rules:
- Only answer questions specifically about SolverDeck: services, case studies,
  blog content, contact info, industries, technologies, team, FAQs, or other
  content on https://www.solverdeck.com.
- If a request is unrelated, politely refuse and say you can only answer
  about SolverDeck.
- Use only the provided context. If it doesn't contain the answer, say you
  don't have enough information and suggest contacting SolverDeck via the
  website.
- Be concise and professional.
`;

// ------------------------- Route -------------------------

export async function POST(req: NextRequest) {
  try {
    const { messages: uiMessages }: { messages: UIMessage[] } =
      await req.json();

    const userQuery = lastUserText(uiMessages);

    if (!userQuery) {
      const result = streamText({
        model: google('gemini-2.5-flash'),
        system:
          SYSTEM_PROMPT +
          '\n\nNo retrieved context available.\n\nThe user did not provide a question.',
        messages: convertToModelMessages(uiMessages).filter(
          (m) => m.role !== 'system'
        ),
        temperature: 0.2,
      });
      return result.toUIMessageStreamResponse();
    }

    // Retrieve context
    const { items, best } = await retrieve(userQuery, 6);
    const contextText = buildContextText(items);

    // Relevance gate
    const mentions = /solverdeck/i.test(userQuery);
    const threshold = mentions ? 0.7 : 0.78;
    const isRelevant = best >= threshold;

    // Single system string with prompt + context + guardrail
    const systemText =
      SYSTEM_PROMPT +
      (contextText
        ? `\n\nContext from solverdeck.com:\n\n${contextText}`
        : `\n\nNo retrieved context available.`) +
      (!isRelevant
        ? `\n\nThe last request appears unrelated to SolverDeck. Politely refuse and say you can only answer questions about SolverDeck.`
        : '');

    const result = streamText({
      model: google('gemini-2.5-flash'),
      system: systemText,
      messages: convertToModelMessages(uiMessages).filter(
        (m) => m.role !== 'system'
      ),
      temperature: 0.2,
    });

    return result.toUIMessageStreamResponse();
  } catch (e: any) {
    console.error('api/chat error:', e);

    // Fallback: return a one-off UIMessage stream explaining the error
    const fallback = streamText({
      model: google('gemini-2.5-flash'),
      system:
        SYSTEM_PROMPT +
        `\n\nNo retrieved context available.\n\nInternal error occurred: ${
          e?.message || 'unknown'
        }`,
      messages: [],
      temperature: 0.2,
    });

    return fallback.toUIMessageStreamResponse();
  }
}