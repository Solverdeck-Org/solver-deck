import { DocumentTextIcon, InsertAboveIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const bodyField = defineField({
  name: "body",
  title: "Content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
        ],
        annotations: [
          defineArrayMember({
            type: "object",
            name: "link",
            title: "Link",
            fields: [
              defineField({
                name: "href",
                type: "url",
                title: "URL",
                validation: (rule) => rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
              }),
              defineField({ name: "blank", type: "boolean", title: "Open in new tab", initialValue: false }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({ type: "table" }),
  ],
});

export const legalPage = defineType({
  name: "legalPage",
  title: "Legal Page",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "pageType",
      title: "Page Type",
      type: "string",
      options: {
        list: [
          { title: "Privacy Policy", value: "privacy-policy" },
          { title: "Terms of Service", value: "terms-of-service" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: 'e.g. "Privacy Policy" or "Terms of Service"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "pageType" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Introduction (optional summary shown at the top)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sections",
      title: "Sections",
      description: "Add each section in order. Drag to reorder.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          icon: InsertAboveIcon,
          fields: [
            defineField({
              name: "title",
              title: "Section Title",
              type: "string",
              description: 'e.g. "1. Introduction" or "Data We Collect"',
              validation: (rule) => rule.required(),
            }),
            bodyField,
          ],
          preview: {
            select: { title: "title" },
            prepare({ title }) {
              return { title };
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "pageType" },
    prepare({ title, subtitle }) {
      const labels: Record<string, string> = {
        "privacy-policy": "Privacy Policy",
        "terms-of-service": "Terms of Service",
      };
      return { title, subtitle: labels[subtitle] ?? subtitle };
    },
  },
});
