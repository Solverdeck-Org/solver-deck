import { CaseStudies } from "@/components/CaseStudies";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Solutions } from "@/components/Solution";
import { Testimonials } from "@/components/Testimonials";
import { sanityFetch } from "@/sanity/lib/live";
import {
  getHomepageCaseStudiesQuery,
  getHomepageTestimoniesQuery,
} from "@/sanity/lib/queries";

export default async function Home() {
  const [{ data: homepageCaseStudies }, { data: homepageTestimonials }] =
    await Promise.all([
      sanityFetch({
        query: getHomepageCaseStudiesQuery,
      }),
      sanityFetch({
        query: getHomepageTestimoniesQuery,
      }),
    ]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Proven 5-Phase Process",
    description:
      "From discovery to continuous optimization — a structured, transparent approach that delivers measurable results with minimal disruption.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "DISCOVERY",
        text: "Store any valid JSON document, with schemas living in your Solverdeck Studio configuration, not as database constraints.",
        url: "https://solverdeck.com/#phase-01",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "STRATEGY",
        text: "Using insights from discovery, we craft a tailored technology strategy and phased roadmap that prioritizes quick wins, scalability, and ROI.",
        url: "https://solverdeck.com/#phase-02",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "IMPLEMENTATION",
        text: "Enable creative freedom with infinitely customizable workflows. Our agile execution includes regular sprints, transparent updates, and rigorous testing.",
        url: "https://solverdeck.com/#phase-03",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "TESTING",
        text: "We don’t just launch — we validate. Through comprehensive testing (functional, performance, security, and user acceptance), we optimize solutions for launch.",
        url: "https://solverdeck.com/#phase-04",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "SUPPORT",
        text: "Technology doesn't stand still. We provide active monitoring, regular upgrades, security audits, and continuous improvement so you stay ahead.",
        url: "https://solverdeck.com/#phase-05",
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen bg-black">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD requires raw injection and is safe from XSS
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <Hero />
      <Solutions />
      <CaseStudies studies={homepageCaseStudies} />
      <Process />
      <Testimonials testimonials={homepageTestimonials} />
    </main>
  );
}
