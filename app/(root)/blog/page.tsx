import React from "react";

import Blog from "@/components/Blog";
import { getBlogs } from "@/sanity/lib/getBlog";
import { urlFor } from "@/sanity/lib/image";

const FALLBACK_IMAGE = "/data3.jpg";

const BlogPage = async () => {
  const blogs = await getBlogs();

  const formattedPosts = blogs.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.description ?? "",
    thumbnail: post.image
      ? urlFor(post.image).width(800).height(600).url()
      : FALLBACK_IMAGE,
  }));

  return (
    <section className="py-16 md:py-24">
      <Blog posts={formattedPosts} />
    </section>
  );
};

export default BlogPage;
