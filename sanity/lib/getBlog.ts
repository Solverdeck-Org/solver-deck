import { groq } from "next-sanity";
import type { PortableTextBlock } from "sanity";

import { client } from "./client";

export interface BlogDocument {
  _id: string;
  title: string;
  description?: string;
  slug: string;
  body: PortableTextBlock[];
  image?: {
    asset?: {
      _ref: string;
      _type: string;
    };
  };
  _createdAt: string;
  _updatedAt: string;
}

const blogFields = `
  _id,
  title,
  description,
  "slug": slug.current,
  body,
  image,
  _createdAt,
  _updatedAt
`;

const blogListQuery = groq`*[_type == "blog"] | order(_createdAt desc) {
  ${blogFields}
}`;

const blogBySlugQuery = groq`*[_type == "blog" && slug.current == $slug][0] {
  ${blogFields}
}`;

export async function getBlogs() {
  return client.fetch<BlogDocument[]>(blogListQuery);
}

export async function getBlogBySlug(slug: string) {
  return client.fetch<BlogDocument | null>(blogBySlugQuery, { slug });
}
