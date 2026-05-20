import { defineQuery } from "next-sanity";

export const getAllCaseStudiesQuery = defineQuery(`
  *[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    image,
    link,
    "categories": categories[]->title
  }
`);

export const getHomepageCaseStudiesQuery = defineQuery(`
  *[_type == "caseStudy" && showOnHomepage == true] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    image,
    link,
    "categories": categories[]->title
  }
`);

export const getAllTestimoniesQuery = defineQuery(`
  *[_type == "testimony"] | order(_createdAt asc) {
    _id,
    testimony,
    name,
    "slug": slug.current,
    "roles": roles[]->title,
    company,
    "imageUrl": image.asset->url,
    image
  }
`);

export const getHomepageTestimoniesQuery = defineQuery(`
  *[_type == "testimony" && showOnHomepage == true] | order(_createdAt asc)[0...3] {
    _id,
    testimony,
    name,
    "slug": slug.current,
    "roles": roles[]->title,
    company,
    "imageUrl": image.asset->url,
    image
  }
`);
