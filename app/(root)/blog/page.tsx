import React from "react";
import Blog from "@/components/Blog";
import { blogs } from "@/data/blog";

const BlogPage = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Blog posts={blogs} />
    </section>
  );
};

export default BlogPage;
