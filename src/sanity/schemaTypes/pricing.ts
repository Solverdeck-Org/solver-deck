import { TagIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const tierField = (name: "starter" | "growth" | "enterprise", title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({
        name: "oneOff",
        title: "One-off price",
        type: "string",
        description: 'e.g. "£299 – £1,200" or "Custom"',
      }),
      defineField({
        name: "monthly",
        title: "Monthly price",
        type: "string",
        description: 'e.g. "£299/mo" or leave blank if not applicable',
      }),
    ],
  });

const pricingRow = defineArrayMember({
  type: "object",
  name: "pricingRow",
  title: "Service row",
  fields: [
    defineField({
      name: "label",
      title: "Service name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "note",
      title: "Sub-label",
      type: "string",
      description: "Short description shown beneath the service name",
    }),
    tierField("starter", "Starter"),
    tierField("growth", "Growth"),
    tierField("enterprise", "Enterprise"),
  ],
  preview: {
    select: { title: "label", subtitle: "note" },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});

export const pricing = defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section title",
      type: "string",
      description: 'e.g. "Core Services", "Growth & Marketing", "Creative"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
    defineField({
      name: "rows",
      title: "Service rows",
      type: "array",
      of: [pricingRow],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "sectionTitle", rows: "rows" },
    prepare({ title, rows }: { title: string; rows?: unknown[] }) {
      return {
        title,
        subtitle: `${rows?.length ?? 0} services`,
      };
    },
  },
});
