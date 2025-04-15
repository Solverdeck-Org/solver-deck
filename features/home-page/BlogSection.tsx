import Blog from "@/components/Blog";
import { blogs } from "@/data/blog";

const BlogSection = () => {
  return (
    <div className="bg-[#050e28]">
      <Blog posts={blogs.slice(0, 3)} />
    </div>
  );
};

export default BlogSection;
