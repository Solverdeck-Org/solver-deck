"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import type { GetAllBlogPostsQueryResult } from "@/sanity/types";

type BlogPost = NonNullable<GetAllBlogPostsQueryResult>[number];

function useCategories(posts: BlogPost[]) {
  return useMemo(() => {
    const cats = new Set<string>();
    for (const p of posts) {
      for (const c of p.categories ?? []) {
        if (c) cats.add(c);
      }
    }
    return ["ALL", ...Array.from(cats)];
  }, [posts]);
}

export function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const [selected, setSelected] = useState("ALL");
  const categories = useCategories(posts);

  const filtered = useMemo(
    () => selected === "ALL" ? posts : posts.filter((p) => p.categories?.includes(selected)),
    [selected, posts],
  );

  return (
    <div className="w-full relative z-10 flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-6 max-w-4xl font-outfit">
        <h1 className="text-4xl md:text-7xl font-medium tracking-tight leading-[1.05] text-white">
          Insights & perspectives <br className="hidden md:block" /> from the team
        </h1>
        <p className="text-lg md:text-xl text-white leading-relaxed font-light max-w-2xl">
          Practical thinking on software, AI, and building products that last.
        </p>
      </div>

      <div className="flex flex-col gap-4 border-y border-white/5 py-6">
        <span className="font-mono text-[9px] uppercase tracking-widest text-white font-semibold px-2">Filter by category:</span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelected(cat)}
              className={`font-mono text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-full border transition-all duration-300 shrink-0 cursor-pointer ${
                selected === cat
                  ? "bg-primary text-white border-primary font-bold shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                  : "bg-white/3 border-white/10 text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 rounded-2xl bg-[#050505] p-8">
          <span className="font-mono text-xs text-white/30 mb-2">NO_POSTS_FOUND</span>
          <p className="text-white/50 max-w-sm text-sm">No articles found under this category. Check back soon.</p>
        </div>
      )}
    </div>
  );
}
