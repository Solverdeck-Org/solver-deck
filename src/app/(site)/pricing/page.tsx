import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { PerformanceModels } from "@/features/pricing/PerformanceModels";
import { PricingTable } from "@/features/pricing/PricingTable";
import { sanityFetch } from "@/sanity/lib/live";
import { getPricingSectionsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Pricing — Web Design & AI Automation Packages | Solverdeck",
  description:
    "Transparent pricing for web design, AI automation, SaaS development, SEO, and digital marketing. Tailored packages for UK businesses of all sizes.",
  alternates: { canonical: "https://solverdeck.com/pricing" },
  openGraph: {
    title: "Pricing — Solverdeck UK Digital Agency",
    description: "Transparent pricing for web design, AI automation, and digital marketing packages.",
    url: "https://solverdeck.com/pricing",
  },
};

export default async function PricingPage() {
  const { data: sections } = await sanityFetch({ query: getPricingSectionsQuery });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10 selection:text-white">
      <section className="relative pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-white/[0.02] blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col gap-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-outfit font-semibold tracking-tight text-white leading-[1.05] text-center">
            Solverdeck Packages
          </h1>

          <PricingTable sections={sections ?? []} />

          <p className="text-white text-xs font-mono text-center">
            * All prices are estimates. Final pricing is confirmed after a discovery call based on scope, timeline, and complexity.
          </p>

          <div className="border-t border-white/10 pt-16">
            <PerformanceModels />
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
