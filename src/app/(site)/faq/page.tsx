import type { Metadata } from "next";
import { DotGridBackground } from "@/components/DotGridBackground";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQs — Web Design & AI Automation Questions | Solverdeck",
  description:
    "Common questions about working with Solverdeck — web design, AI automation, pricing, timelines, and how we work with UK businesses.",
  alternates: { canonical: "https://solverdeck.com/faq" },
  openGraph: {
    title: "FAQs — Solverdeck UK Digital Agency",
    description: "Answers to common questions about our web design, AI automation, and software services.",
    url: "https://solverdeck.com/faq",
  },
};

export default function FaqPage() {
  return (
    <main className="relative min-h-screen bg-black">
      <div className="absolute inset-0 z-0" style={{ filter: "brightness(0.4)" }}>
        <DotGridBackground />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
      <div className="relative z-20 pt-24">
        <Faq />
      </div>
    </main>
  );
}
