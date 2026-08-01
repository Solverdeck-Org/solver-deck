import type { Metadata } from "next";
import { AboutHeader } from "@/features/about/AboutHeader";
import { AboutHero } from "@/features/about/AboutHero";
import { AboutMission } from "@/features/about/AboutMission";
import { AboutValues } from "@/features/about/AboutValues";
import { AboutServices } from "@/features/about/AboutServices";
import { Cta } from "@/components/Cta";
import { Testimonials } from "@/components/Testimonials";
import { sanityFetch } from "@/sanity/lib/live";
import { getHomepageTestimoniesQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "About Us — UK Digital Agency | Solverdeck",
  description:
    "Meet the team behind Solverdeck — a UK digital agency specialising in web design, AI automation, and bespoke software. We build technology that drives real results.",
  alternates: { canonical: "https://solverdeck.com/about" },
  openGraph: {
    title: "About Solverdeck — UK Digital Agency",
    description: "Meet the team building high-performance websites, AI tools, and bespoke software for UK businesses.",
    url: "https://solverdeck.com/about",
  },
};

export default async function AboutPage() {
  const { data: testimonials } = await sanityFetch({ query: getHomepageTestimoniesQuery });

  return (
    <main className="min-h-screen bg-black">
      <AboutHeader />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <Testimonials testimonials={testimonials} />
      <AboutServices />
      <Cta />
    </main>
  );
}
