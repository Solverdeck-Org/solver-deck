import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { sanityFetch } from "@/sanity/lib/live";
import { getAllBlogPostsQuery } from "@/sanity/lib/queries";
import { BlogPageClient } from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog — Web Design, AI & Tech Insights | Solverdeck",
  description:
    "Practical insights on web design, AI automation, software development, and digital marketing from the Solverdeck team. Written for UK businesses.",
  alternates: { canonical: "https://solverdeck.com/blog" },
  openGraph: {
    title: "Blog — Web Design, AI & Tech Insights | Solverdeck",
    description: "Practical insights on web design, AI, and software from a UK digital agency.",
    url: "https://solverdeck.com/blog",
  },
};

export default async function BlogPage() {
  const { data: posts } = await sanityFetch({ query: getAllBlogPostsQuery });

  return (
    <main className="flex flex-col min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <section className="relative min-h-screen pt-28 sm:pt-32 pb-24 px-5 sm:px-8 flex flex-col justify-start border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-linear-to-br from-primary/5 to-transparent blur-[160px] rounded-full mix-blend-screen opacity-50" />
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-linear-to-tr from-violet-500/5 to-transparent blur-[140px] rounded-full mix-blend-screen opacity-40" />
        </div>
        <BlogPageClient posts={posts ?? []} />
      </section>
      <Cta />
    </main>
  );
}
