import type { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { getAllBlogPostsQuery } from "@/sanity/lib/queries";

const BASE = "https://solverdeck.com";

const STATIC_ROUTES: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: BASE,               priority: 1.0, changeFrequency: "weekly" },
  { url: `${BASE}/about`,    priority: 0.8, changeFrequency: "monthly" },
  { url: `${BASE}/work`,     priority: 0.9, changeFrequency: "weekly" },
  { url: `${BASE}/blog`,     priority: 0.9, changeFrequency: "daily" },
  { url: `${BASE}/pricing`,  priority: 0.8, changeFrequency: "monthly" },
  { url: `${BASE}/contact`,  priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/faq`,      priority: 0.6, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const routes = STATIC_ROUTES.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified,
    changeFrequency,
    priority,
  }));

  try {
    const { data: posts } = await sanityFetch({ query: getAllBlogPostsQuery });
    const postRoutes = (posts || []).map((post: any) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post._updatedAt ? new Date(post._updatedAt) : lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
    return [...routes, ...postRoutes];
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    return routes;
  }
}
