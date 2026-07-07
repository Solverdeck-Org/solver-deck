"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";
import { slugify } from "@/lib/slugify";
import type { GetBlogPostQueryResult } from "@/sanity/types";

type Content = NonNullable<NonNullable<GetBlogPostQueryResult>["content"]>;

/** Minimal shape for block value — only what we need for slug ID generation */
type BlockProps = {
  children?: React.ReactNode;
  value?: { children?: { text?: string }[] };
};

const components = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-white/80 leading-relaxed text-base font-outfit mb-5">{children}</p>
    ),
    h2: ({ children, value }: BlockProps) => {
      const text = value?.children?.map((c) => c.text).join("") || "";
      return (
        <h2 id={slugify(text)} className="text-white text-2xl md:text-3xl font-semibold font-outfit tracking-tight mt-12 mb-5">{children}</h2>
      );
    },
    h3: ({ children, value }: BlockProps) => {
      const text = value?.children?.map((c) => c.text).join("") || "";
      return (
        <h3 id={slugify(text)} className="text-white text-xl font-semibold font-outfit tracking-tight mt-10 mb-4">{children}</h3>
      );
    },
    h4: ({ children, value }: BlockProps) => {
      const text = value?.children?.map((c) => c.text).join("") || "";
      return (
        <h4 id={slugify(text)} className="text-white text-lg font-semibold font-outfit tracking-tight mt-8 mb-3">{children}</h4>
      );
    },
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-white/30 pl-6 my-8 text-white/60 italic text-lg font-outfit leading-relaxed">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-none space-y-2 mb-6 pl-0">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-white/80 font-outfit">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-3 text-white/80 font-outfit text-base">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-white/80 font-outfit text-base">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic text-white/70">{children}</em>
    ),
    underline: ({ children }: { children?: React.ReactNode }) => (
      <span className="underline underline-offset-4">{children}</span>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-white/8 text-white font-mono text-sm px-1.5 py-0.5 rounded">{children}</code>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string; blank?: boolean } }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-white underline underline-offset-4 hover:text-white/60 transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImageSource & { alt?: string; caption?: string } }) => {
      if (!value) return null;
      const url = urlFor(value).width(1200).url();
      return (
        <figure className="my-10">
          <div className="relative w-full rounded-xl overflow-hidden aspect-video">
            <Image src={url} alt={(value as { alt?: string }).alt ?? ""} fill className="object-cover" />
          </div>
          {(value as { caption?: string }).caption && (
            <figcaption className="text-center text-white text-xs font-mono mt-3">{(value as { caption?: string }).caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};

export function BlogPostBody({ content }: { content: Content }) {
  return (
    <div className="w-full">
      <PortableText value={content} components={components} />
    </div>
  );
}
