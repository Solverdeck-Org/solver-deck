import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface BlogPost {
  slug: string;
  thumbnail: string;
  title: string;
  excerpt: string;
}

const Blog = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center mb-8">
        <h2 className="font-bold mb-4 heading-gradient">Latest from Our Blog</h2>
        <p className="text-xl max-w-75 md:max-w-3xl mx-auto">Stay updated with our insightful articles.</p>
      </div>
      <div className="w-full max-w-75 md:max-w-2xl lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-300">
            <div className="relative w-full h-48">
              <Image
                src={post.thumbnail}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
              <Button className="bg-[#020817] mt-4 text-white py-2 px-4 rounded-md hover:bg-[#020817] hover:scale-[.98] transition-transform ease-in-out">
                Read More
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Blog