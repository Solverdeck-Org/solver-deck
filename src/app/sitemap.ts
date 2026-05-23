import type { MetadataRoute } from "next";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return STATIC_ROUTES.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified,
    changeFrequency,
    priority,
  }));
}
