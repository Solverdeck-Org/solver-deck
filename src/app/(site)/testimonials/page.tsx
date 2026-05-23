import type { Metadata } from "next";
import { TestimonialsGrid } from "@/features/testimonials/TestimonialsGrid";
import { sanityFetch } from "@/sanity/lib/live";
import { getAllTestimoniesQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Client Testimonials — Solverdeck",
  description:
    "Read what our clients say about working with Solverdeck — real stories from UK businesses we've helped grow.",
  alternates: { canonical: "https://solverdeck.com/testimonials" },
  openGraph: {
    title: "Client Testimonials — Solverdeck",
    description: "Real words from real clients about working with Solverdeck.",
    url: "https://solverdeck.com/testimonials",
  },
};

export default async function TestimonialsPage() {
  const { data: testimonials } = await sanityFetch({
    query: getAllTestimoniesQuery,
  });

  return (
    <main className="min-h-screen bg-black">
      <TestimonialsGrid testimonials={testimonials ?? []} />
    </main>
  );
}
