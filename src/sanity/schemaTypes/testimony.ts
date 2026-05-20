import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const testimony = defineType({
  name: "testimony",
  title: "Testimonial",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "testimony",
      title: "Testimony",
      type: "text",
      validation: (rule) => rule.required(),
      description: "The main body of the testimonial",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the person giving the testimonial (Optional)",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      description: "Generated from name for the URL (Optional)",
    }),
    defineField({
      name: "roles",
      title: "Roles / Positions",
      type: "array",
      of: [{ type: "reference", to: { type: "role" } }],
      description:
        "Select one or more roles for the person giving the testimonial (Optional)",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      description: "The company they represent (Optional)",
    }),
    defineField({
      name: "image",
      title: "Avatar / Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Optional photo of the person",
    }),
    defineField({
      name: "showOnHomepage",
      title: "Show on Homepage",
      type: "boolean",
      description:
        "Toggle this on to feature this testimonial on the homepage.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "testimony",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Anonymous Testimonial",
        subtitle: subtitle,
        media: media || UserIcon,
      };
    },
  },
});
