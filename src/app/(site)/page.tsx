import type { Metadata } from "next";
import { CaseStudies } from "@/components/CaseStudies";
import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { Process } from "@/components/Process";
import { Solutions } from "@/components/Solution";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { processSchema } from "@/lib/process-schema";
import { sanityFetch } from "@/sanity/lib/live";
import { getHomepageCaseStudiesQuery, getHomepageTestimoniesQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Solverdeck — Web Design, AI Automation & Software Development UK",
  description:
    "Solverdeck is a UK digital agency building bespoke websites, AI automation systems, and custom software for ambitious businesses. Based in England.",
  alternates: { canonical: "https://solverdeck.com" },
  openGraph: {
    title: "Solverdeck — Web Design, AI Automation & Software Development UK",
    description:
      "UK digital agency building high-performance websites, AI tools, and bespoke software for growing businesses.",
    url: "https://solverdeck.com",
  },
};

export default async function Home() {
  const [{ data: homepageCaseStudies }, { data: homepageTestimonials }] = await Promise.all([
    sanityFetch({ query: getHomepageCaseStudiesQuery }),
    sanityFetch({ query: getHomepageTestimoniesQuery }),
  ]);

  return (
    <main className="flex flex-col min-h-screen bg-black">
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD requires raw injection and is safe from XSS */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }} />
      <Hero />
      <Solutions />
      <CaseStudies studies={homepageCaseStudies} />
      <WhyChooseUs />
      <Process />
      <Testimonials testimonials={homepageTestimonials} />
      <Cta />
    </main>
  );
}
