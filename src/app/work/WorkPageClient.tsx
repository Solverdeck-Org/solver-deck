"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { SanityCaseStudy } from "@/components/CaseStudies";

export function WorkPageClient({
  allCaseStudies,
}: {
  allCaseStudies: SanityCaseStudy[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Extract unique categories dynamically from the fetched Sanity data
  const categories = useMemo(() => {
    const cats = new Set<string>();
    allCaseStudies.forEach((study) => {
      if (study.categories) {
        study.categories.forEach((c) => {
          if (c) cats.add(c);
        });
      }
    });
    return ["ALL", ...Array.from(cats)];
  }, [allCaseStudies]);

  // Filter case studies based on client-side state
  const filteredCaseStudies = useMemo(() => {
    if (selectedCategory === "ALL") return allCaseStudies;
    return allCaseStudies.filter((study) =>
      study.categories?.includes(selectedCategory),
    );
  }, [selectedCategory, allCaseStudies]);

  return (
    <div className="w-full relative z-10 flex flex-col gap-12 md:gap-16">
      {/* Header section without redundant badge */}
      <div className="flex flex-col gap-6 max-w-4xl font-outfit">
        <h1 className="text-4xl md:text-7xl font-medium tracking-tight leading-[1.05] text-white">
          Strategic partnerships, <br className="hidden md:block" /> engineered
          to perform.
        </h1>
        <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light max-w-2xl">
          An archive of enterprise-grade software systems, robust integrations,
          and premium digital products built for industry leaders.
        </p>
      </div>

      {/* Interactive Horizontal Category Filter Bar */}
      <div className="flex flex-col gap-4 border-y border-white/5 py-6">
        <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 font-semibold px-2">
          Filter by engineering domain:
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`font-mono text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-full border transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-primary text-black border-primary font-bold shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                    : "bg-white/3 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Grid Container - Identical 3-Column Rectangular Width > Height Cards */}
      <div className="relative w-full overflow-visible">
        {filteredCaseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative w-full transition-all duration-300">
            {filteredCaseStudies.map((study) => (
              <div
                key={study._id}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col p-5 shadow-2xl transition-all duration-300 hover:border-white/20 hover:bg-[#0f0f0f] aspect-16/12 justify-between animate-fade-in"
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
                    <span className="text-white font-medium text-lg font-outfit tracking-tight group-hover:text-primary transition-colors duration-300">
                      {study.name}
                    </span>
                    <p className="text-xs text-white/50 leading-relaxed font-light line-clamp-2">
                      {study.description}
                    </p>
                  </div>

                  {/* Tech Stack ONLY */}
                  <div className="flex items-center font-mono text-[9px] pt-3 border-t border-white/5 mt-3">
                    <span className="text-white/40 tracking-wide text-[8px] truncate">
                      DOMAINS:{" "}
                      <span className="text-white/60">
                        {study.categories?.join(" / ") || "GENERAL"}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Subtle Interactive Card Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-linear-to-tr from-primary via-transparent to-transparent rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 rounded-2xl bg-[#050505] p-8">
            <span className="font-mono text-xs text-white/30 mb-2">
              NO_CASES_FOUND
            </span>
            <p className="text-white/50 max-w-sm text-sm">
              We currently do not have matching case studies listed under this
              specific filter category. Check back soon for updates.
            </p>
          </div>
        )}
      </div>

      {/* Quick CTA Bottom Banner */}
      <div className="relative mt-8 p-8 md:p-12 rounded-2xl bg-linear-to-r from-[#070707] to-black border border-white/10 overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-3xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.05),transparent_60%)] pointer-events-none" />
        <div className="flex flex-col gap-3 relative z-10">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white font-outfit">
            Ready to engineer your next success story?
          </h3>
          <p className="text-sm text-white/50 max-w-xl font-light">
            Partner with Solverdeck to build custom enterprise solutions, highly
            optimized user experiences, and performant cloud architecture
            designed to scale.
          </p>
        </div>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-black font-semibold text-xs tracking-wider uppercase px-6 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 shrink-0 font-mono shadow-[0_0_20px_rgba(16,185,129,0.2)] group relative z-10"
        >
          Get In Touch
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-200" />
        </Link>
      </div>
    </div>
  );
}
