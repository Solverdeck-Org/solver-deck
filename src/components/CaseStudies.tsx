"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import type { GetAllCaseStudiesQueryResult } from "@/sanity/types";

export type SanityCaseStudy = NonNullable<GetAllCaseStudiesQueryResult>[number];

export function CaseStudies({ studies = [] }: { studies?: SanityCaseStudy[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative min-h-screen bg-black text-white py-32 overflow-hidden flex flex-col justify-center border-t border-white/5"
    >
      {/* Visual background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-linear-to-br from-emerald-500/5 to-transparent blur-[160px] rounded-full mix-blend-screen opacity-60" />
      </div>

      <div className="px-8 w-full relative z-10 flex flex-col gap-16 md:gap-20">
        {/* Title header & CTA */}
        <div className="flex flex-col gap-6 max-w-4xl font-outfit">
          <h2 className="section-heading">
            Engineering digital case studies <br className="hidden md:block" />{" "}
            that define performance
          </h2>
          <p className="section-description">
            Explore a curated index of strategic partnerships and high-impact
            software systems delivered for enterprise clients.
          </p>
          <div className="mt-2">
            <Link href="/work">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white border border-white/20 hover:border-white text-white hover:text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 font-mono cursor-pointer"
              >
                EXPLORE ALL
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </div>

        {/* The Grid Container - 3 Columns of Rectangular Width > Height Cards */}
        <div className="relative w-full overflow-visible py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative w-full origin-center">
            {studies.map((study) => (
              <div
                key={study._id}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col p-5 shadow-2xl transition-all duration-300 hover:border-white/20 hover:bg-[#0f0f0f] aspect-16/12 justify-between"
              >
                {/* 1. Rectangular Graphic Mockup Space (aspect-video: Width > Height) */}
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black border border-white/5 flex items-center justify-center shrink-0">
                  {study.imageUrl ? (
                    <Image
                      src={study.imageUrl}
                      alt={study.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#060606] flex items-center justify-center overflow-hidden" />
                  )}

                  {/* Top-Right Mini Link Indicator */}
                  {study.link && (
                    <Link
                      href={study.link}
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-black/80 border border-white/10 text-white/50 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300 z-20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>

                {/* 2. Content Panel - ONLY Name, Desc */}
                <div className="flex flex-col flex-1 justify-between mt-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-white font-medium text-lg font-outfit tracking-tight transition-colors duration-300">
                      {study.name}
                    </span>
                    <p className="text-xs text-white leading-relaxed font-medium line-clamp-2">
                      {study.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Interactive Card Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-linear-to-tr from-primary via-transparent to-transparent rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
