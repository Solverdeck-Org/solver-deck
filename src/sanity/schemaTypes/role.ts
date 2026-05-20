import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const role = defineType({
  name: "role",
  title: "Role",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
      description: "E.g. VP of Product, CTO, Founder, CEO",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
