import Image from "next/image";
import Link from "next/link";
import type { GetAllBlogPostsQueryResult } from "@/sanity/types";

type BlogPost = NonNullable<GetAllBlogPostsQueryResult>[number];

export function BlogCard({ post }: { post: BlogPost }) {
  const date = post._createdAt
    ? new Date(post._createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col bg-[#0a0a0a] border border-white/8 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/5 shrink-0">
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.title ?? ""}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 bg-white/[0.03]" />
        )}
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {post.categories.slice(0, 2).map((cat) =>
              cat ? (
                <span key={cat} className="text-[10px] font-mono font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/70 text-white border border-white/10 backdrop-blur-sm">
                  {cat}
                </span>
              ) : null
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 gap-3 p-5">
        {date && (
          <span className="text-[11px] font-mono text-white/40 tracking-wide">{date}</span>
        )}
        <h3 className="text-white font-semibold text-base font-outfit leading-snug tracking-tight line-clamp-2 group-hover:text-white/80 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-white/50 text-xs font-outfit leading-relaxed line-clamp-3 flex-1">
          {post.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/40 group-hover:text-white transition-colors duration-300 mt-1">
          Read More
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
