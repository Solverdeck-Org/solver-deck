import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { slugify } from "@/lib/slugify";
import { sanityFetch } from "@/sanity/lib/live";
import { getBlogPostQuery, getAllBlogPostsQuery } from "@/sanity/lib/queries";
import { BlogCard } from "@/components/blog/BlogCard";
import { TableOfContents } from "@/components/blog/TableOfContents";

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

  // Extract headings for Table of Contents
  const headings: { id: string; text: string; level: "h2" | "h3" }[] = [];
  if (post.content) {
    post.content.forEach((block: any) => {
      if (block._type === "block" && (block.style === "h2" || block.style === "h3")) {
        const text = block.children?.map((c: any) => c.text).join("") || "";
        if (text) {
          headings.push({
            id: slugify(text),
            text,
            level: block.style,
          });
        }
      }
    });
  }

  console.log("[BlogPost] Content blocks:", post.content?.length, "| Headings found:", headings.length, headings);

  // Fetch related posts
  const { data: allPosts } = await sanityFetch({ query: getAllBlogPostsQuery });
  const relatedPosts = allPosts?.filter((p) => p.slug !== slug).slice(0, 3) || [];

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

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-10 sm:py-14 w-full relative items-start">
        {/* Body */}
        <article className="flex-1 w-full max-w-4xl mx-auto lg:mx-0">
          {post.description && (
            <p className="text-white/60 text-lg font-outfit leading-relaxed mb-12 border-b border-white/8 pb-10">
              {post.description}
            </p>
          )}
          {post.content && <BlogPostBody content={post.content} />}
        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-72 shrink-0 relative hidden lg:block">
          <div className="sticky top-32">
            <TableOfContents headings={headings} />
          </div>
        </aside>
      </div>

      {/* Read More */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-white/10 px-5 sm:px-6 md:px-12 py-16 sm:py-24 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-semibold font-outfit tracking-tight text-white mb-10">Read more blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost._id} post={relatedPost as any} />
            ))}
          </div>
        </section>
      )}

      <Cta />
    </main>
  );
}
