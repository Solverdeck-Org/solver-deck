import type { SchemaTypeDefinition } from "sanity";
import { caseStudy } from "./caseStudy";
import { testimony } from "./testimony";
import { category } from "./category";
import { role } from "./role";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudy, testimony, category, role],
};
