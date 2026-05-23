import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { GetAllBlogPostsQueryResult } from "@/sanity/types";
import { BlogCard } from "./blog/BlogCard";

type BlogPost = NonNullable<GetAllBlogPostsQueryResult>[number];

export function Blog({ posts = [] }: { posts?: BlogPost[] }) {
  return (
    <section id="blog" className="relative bg-black text-white py-32 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] bg-linear-to-bl from-primary/5 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="px-8 w-full relative z-10 flex flex-col gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-screen-xl mx-auto w-full">
          <div className="flex flex-col gap-4 font-outfit max-w-2xl">
            <h2 className="section-heading">
              Insights & perspectives <br className="hidden md:block" /> from the team
            </h2>
            <p className="section-description">
              Practical thinking on software, AI, and building products that last.
            </p>
          </div>
          <Link href="/blog">
            <button type="button" className="inline-flex items-center gap-2 bg-transparent hover:bg-white border border-white/20 hover:border-white text-white hover:text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 font-mono cursor-pointer shrink-0">
              ALL ARTICLES
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>

        <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
