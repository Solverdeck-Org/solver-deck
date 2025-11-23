import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { getBlogBySlug, getBlogs } from "@/sanity/lib/getBlog";
import { urlFor } from "@/sanity/lib/image";

const FALLBACK_IMAGE = "/data3.jpg";

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-3 text-2xl font-semibold text-white">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-lg leading-relaxed text-white/80">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-white/30 pl-6 italic text-white/90">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="text-white/80 not-italic underline decoration-slate-400">
        {children}
      </em>
    ),
    link: ({ value, children }) => {
      const href = value?.href || "#";
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-[#4f8bff] underline decoration-dotted underline-offset-4 transition hover:text-[#89aefc]"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc space-y-2 pl-6 text-white/80">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-2 pl-6 text-white/80">
        {children}
      </ol>
    ),
  },
};

type BlogPageParams = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageParams): Promise<Metadata> {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: "Post not found | SolverDeck Blog",
    };
  }

  const imageUrl = post.image
    ? urlFor(post.image).width(1200).height(630).url()
    : FALLBACK_IMAGE;

  const description =
    post.description || "Discover more insights from SolverDeck.";

  return {
    title: `${post.title} | SolverDeck Blog`,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [imageUrl],
    },
  };
}

const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));

export default async function BlogPostPage({ params }: BlogPageParams) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const heroImage = blog.image
    ? urlFor(blog.image).width(1600).height(900).url()
    : FALLBACK_IMAGE;

  return (
    <article className="min-h-screen bg-[#050816] text-white">
      <div className="relative h-[50vh] w-full">
        <Image
          src={heroImage}
          alt={blog.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl px-6 pb-10">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70 mt-5">
            {formatDate(blog._createdAt)}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            {blog.title}
          </h1>
          {blog.description && (
            <p className="mt-4 text-lg text-white/80">{blog.description}</p>
          )}
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        <PortableText
          value={blog.body ?? []}
          components={portableTextComponents}
        />
      </div>
    </article>
  );
}
