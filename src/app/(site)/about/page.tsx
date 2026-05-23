import type { Metadata } from "next";
import { AboutHero } from "@/features/about/AboutHero";
import { AboutFeatures } from "@/features/about/AboutFeatures";
import { AboutMission } from "@/features/about/AboutMission";
import { AboutAI } from "@/features/about/AboutAI";
import { Cta } from "@/components/Cta";

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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <AboutHero />
      <AboutFeatures />
      <AboutMission />
      <AboutAI />
      <Cta />
    </main>
  );
}
