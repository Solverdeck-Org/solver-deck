"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import type { GetAllCaseStudiesQueryResult } from "@/sanity/types";
import { CaseStudyCard } from "./work/CaseStudyCard";

export type SanityCaseStudy = NonNullable<GetAllCaseStudiesQueryResult>[number];

export function CaseStudies({ studies = [] }: { studies?: SanityCaseStudy[] }) {
  return (
    <section id="work" className="relative min-h-screen bg-black text-white py-32 overflow-hidden flex flex-col justify-center border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-linear-to-br from-emerald-500/5 to-transparent blur-[160px] rounded-full mix-blend-screen opacity-60" />
      </div>
      <div className="px-5 sm:px-8 w-full relative z-10 flex flex-col gap-10 md:gap-20">
        <div className="flex flex-col gap-6 max-w-4xl font-outfit">
          <h2 className="section-heading">
            Engineering digital case studies <br className="hidden md:block" /> that define performance
          </h2>
          <p className="section-description">
            Explore a curated index of strategic partnerships and high-impact software systems delivered for enterprise clients.
          </p>
          <div className="mt-2">
            <Link href="/work">
              <button type="button" className="inline-flex items-center gap-2 bg-transparent hover:bg-white border border-white/20 hover:border-white text-white hover:text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 font-mono cursor-pointer">
                EXPLORE ALL
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative w-full overflow-visible py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative w-full origin-center">
            {studies.map((study) => (
              <CaseStudyCard key={study._id} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
