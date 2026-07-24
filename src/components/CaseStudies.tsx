"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import type { GetAllCaseStudiesQueryResult } from "@/sanity/types";
import { CaseStudyCard } from "./work/CaseStudyCard";

export type SanityCaseStudy = NonNullable<GetAllCaseStudiesQueryResult>[number];

const VISIBLE = 2;

export function CaseStudies({ studies = [] }: { studies?: SanityCaseStudy[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const navigate = useCallback(
    (dir: "left" | "right") => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) =>
          dir === "right"
            ? (prev + 1) % studies.length
            : (prev - 1 + studies.length) % studies.length,
        );
        setIsAnimating(false);
      }, 400);
    },
    [isAnimating, studies.length],
  );

  if (!studies.length) return null;

  const visible =
    studies.length >= VISIBLE
      ? [studies[currentIndex], studies[(currentIndex + 1) % studies.length]]
      : [studies[0]];

  const showControls = studies.length > VISIBLE;

  return (
    <section
      id="work"
      className="relative bg-black text-white py-20 sm:py-28 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] bg-linear-to-br from-emerald-500/5 to-transparent blur-[180px] rounded-full mix-blend-screen opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 font-outfit mb-12 md:mb-16">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1]">
              Businesses we’ve helped to grow online, get more customers and saved time
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white border border-white/20 hover:border-white text-white hover:text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 font-mono"
          >
            EXPLORE ALL
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cards + arrows */}
        <div className="flex items-center gap-3 sm:gap-4">
          {showControls && (
            <button
              type="button"
              onClick={() => navigate("left")}
              disabled={isAnimating}
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}

          <div
            className={`flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
              isAnimating
                ? direction === "right"
                  ? "opacity-0 translate-x-6"
                  : "opacity-0 -translate-x-6"
                : "opacity-100 translate-x-0"
            }`}
          >
            {visible.map((study) => (
              <CaseStudyCard key={study._id} study={study} />
            ))}
          </div>

          {showControls && (
            <button
              type="button"
              onClick={() => navigate("right")}
              disabled={isAnimating}
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
              aria-label="Next case study"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
        </div>

        {/* Dot indicators */}
        {showControls && (
          <div className="flex justify-center gap-2 mt-8">
            {studies.map((_, i) => (
              <button
                key={_._id}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to case study ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
