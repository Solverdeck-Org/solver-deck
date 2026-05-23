import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { sanityFetch } from "@/sanity/lib/live";
import { getAllCaseStudiesQuery } from "@/sanity/lib/queries";
import { WorkPageClient } from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Our Work — Client Projects & Case Studies | Solverdeck",
  description:
    "Browse Solverdeck's portfolio of client projects — bespoke websites, AI automation systems, SaaS platforms, and digital marketing campaigns built for UK businesses.",
  alternates: { canonical: "https://solverdeck.com/work" },
  openGraph: {
    title: "Our Work — Solverdeck Client Projects",
    description: "Portfolio of bespoke websites, AI tools, and software built for UK businesses.",
    url: "https://solverdeck.com/work",
  },
};

export default async function WorkPage() {
  const { data: allCaseStudies } = await sanityFetch({
    query: getAllCaseStudiesQuery,
  });

  return (
    <main className="flex flex-col min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <section className="relative min-h-screen pt-28 sm:pt-32 pb-24 px-5 sm:px-8 flex flex-col justify-start border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-linear-to-br from-primary/5 to-transparent blur-[160px] rounded-full mix-blend-screen opacity-50" />
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-linear-to-tr from-violet-500/5 to-transparent blur-[140px] rounded-full mix-blend-screen opacity-40" />
        </div>
        <WorkPageClient allCaseStudies={allCaseStudies} />
      </section>
      <Cta />
    </main>
  );
}
