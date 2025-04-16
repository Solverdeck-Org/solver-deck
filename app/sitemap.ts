import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.solverdeck.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: ["https://www.solverdeck.com/favicon.ico"],
    },
    {
      url: "https://www.solverdeck.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: ["https://www.solverdeck.com/favicon.ico"],
    },
    {
      url: "https://www.solverdeck.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: ["https://www.solverdeck.com/favicon.ico"],
    },
    {
      url: "https://www.solverdeck.com/case-studies",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: ["https://www.solverdeck.com/favicon.ico"],
    },
    {
      url: "https://www.solverdeck.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
      images: ["https://www.solverdeck.com/favicon.ico"],
    },
    {
      url: "https://www.solverdeck.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      images: ["https://www.solverdeck.com/favicon.ico"],
    },
  ];
}
