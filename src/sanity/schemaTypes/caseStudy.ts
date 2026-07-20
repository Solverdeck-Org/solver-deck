import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { apiVersion } from "../env";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Detailed case study content (how we helped, issues faced, solution).",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      description: "Optional external link for the case study",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (rule) => rule.required().min(1),
      description: "Select at least one category (e.g., E-Commerce, SaaS)",
    }),
    defineField({
      name: "order",
      title: "Homepage Order",
      type: "number",
      description:
        "Optional. Controls the display order on the homepage (1 = first). Must be unique — no two case studies can share the same position.",
      validation: (rule) =>
        rule.custom(async (value, context) => {
          if (value === undefined || value === null) return true;

          if (!Number.isInteger(value) || value < 1) {
            return "Order must be a whole number of 1 or greater.";
          }

          const { document, getClient } = context;
          const client = getClient({ apiVersion });

          const takenById = await client.fetch<string | null>(
            `*[_type == "caseStudy" && order == $order && _id != $id][0]._id`,
            { order: value, id: document?._id ?? "" },
          );

          return takenById
            ? `Position ${value} is already used by another case study. Choose a different number.`
            : true;
        }),
    }),
    defineField({
      name: "showOnHomepage",
      title: "Show on Homepage",
      type: "boolean",
      description: "Toggle this on to feature this case study on the homepage.",
      initialValue: false,
    }),
    defineField({
      name: "showInNavbar",
      title: "Show in Navbar",
      type: "boolean",
      description: "Toggle this on to feature this case study in the navigation menu.",
      initialValue: false,
    }),
  ],
});
