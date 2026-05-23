import type { SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPost";
import { caseStudy } from "./caseStudy";
import { testimony } from "./testimony";
import { category } from "./category";
import { role } from "./role";
import { faq } from "./faq";
import { legalPage } from "./legalPage";
import { pricing } from "./pricing";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudy, testimony, category, role, faq, legalPage, blogPost, pricing],
};
