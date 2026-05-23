import { defineQuery } from "next-sanity";

export const getPricingSectionsQuery = defineQuery(`
  *[_type == "pricing"] | order(order asc) {
    _id,
    sectionTitle,
    rows[] {
      _key,
      label,
      note,
      starter { oneOff, monthly },
      growth { oneOff, monthly },
      enterprise { oneOff, monthly }
    }
  }
`);

export const getNavbarCaseStudiesQuery = defineQuery(`
  *[_type == "caseStudy" && showInNavbar == true] | order(_createdAt desc) {
    _id,
    name,
    link
  }
`);

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
    jobTitle,
    "slug": slug.current,
    "roles": roles[]->title,
    company,
    "imageUrl": image.asset->url,
    image
  }
`);

export const getAllFaqsQuery = defineQuery(`
  *[_type == "faq"] | order(order asc, _createdAt asc) {
    _id,
    question,
    answer
  }
`);

export const getLegalPageQuery = defineQuery(`
  *[_type == "legalPage" && slug.current == $slug][0] {
    title,
    intro,
    sections[] {
      _key,
      title,
      body
    },
    _updatedAt
  }
`);

export const getBlogPostQuery = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    image,
    _createdAt,
    "categories": categories[]->title,
    content
  }
`);

export const getAllBlogPostsQuery = defineQuery(`
  *[_type == "blogPost"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    image,
    _createdAt,
    "categories": categories[]->title
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
