import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { sanityFetch } from "@/sanity/lib/live";
import { getBlogPostQuery } from "@/sanity/lib/queries";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({ query: getBlogPostQuery, params: { slug } });
  if (!post) return {};
  return {
    title: `${post.title} — Solverdeck`,
    description: post.description ?? undefined,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({ query: getBlogPostQuery, params: { slug } });

  if (!post) notFound();

  const date = post._createdAt
    ? new Date(post._createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : null;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      {/* Hero */}
      <div className="relative w-full h-[55vh] min-h-[400px] overflow-hidden">
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.title ?? ""}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-white/[0.03]" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20" />

        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-6 md:px-12 pb-8 sm:pb-10 max-w-4xl">
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) =>
                cat ? (
                  <span key={cat} className="text-[10px] font-mono font-medium tracking-wider uppercase px-3 py-1 rounded-full bg-black/60 text-white border border-white/15 backdrop-blur-sm">
                    {cat}
                  </span>
                ) : null
              )}
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold font-outfit tracking-tight leading-tight text-white max-w-3xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-white/8 px-5 sm:px-6 md:px-12 py-4 max-w-4xl mx-auto w-full">
        {date && (
          <span className="font-mono text-xs text-white/40 tracking-wide">{date}</span>
        )}
      </div>

      {/* Body */}
      <article className="px-5 sm:px-6 md:px-12 py-10 sm:py-14 max-w-4xl mx-auto w-full">
        {post.description && (
          <p className="text-white/60 text-lg font-outfit leading-relaxed mb-12 border-b border-white/8 pb-10">
            {post.description}
          </p>
        )}
        {post.content && <BlogPostBody content={post.content} />}
      </article>

      <Cta />
    </main>
  );
}
