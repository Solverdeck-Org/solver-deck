"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import type { GetAllCaseStudiesQueryResult } from "@/sanity/types";

export type SanityCaseStudy = NonNullable<GetAllCaseStudiesQueryResult>[number];

export function CaseStudies({ studies = [] }: { studies?: SanityCaseStudy[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

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
      }, 500);
    },
    [isAnimating, studies.length],
  );

  const currentStudy = studies[currentIndex];

  if (!studies || studies.length === 0) return null;

  return (
    <section
      id="work"
      className="relative bg-black text-white py-20 sm:py-28 overflow-hidden border-t border-white/5"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] bg-linear-to-br from-emerald-500/5 to-transparent blur-[180px] rounded-full mix-blend-screen opacity-50" />
      </div>

      {/* Header — full width with padding */}
      <div className="px-5 sm:px-8 lg:px-12 w-full relative z-10 mb-12 md:mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 font-outfit">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Engineering digital case studies{" "}
              <br className="hidden md:block" /> that define performance
            </h2>
            <p className="text-white/60 text-lg sm:text-xl">
              Explore a curated index of strategic partnerships and high-impact
              software systems delivered for enterprise clients.
            </p>
          </div>

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

      {/* Carousel — full-width with arrows on each side */}
      <div className="px-3 sm:px-5 lg:px-8 w-full relative z-10 flex items-center gap-3 sm:gap-4 lg:gap-6">
        {/* Left Arrow */}
        <button
          type="button"
          onClick={() => navigate("left")}
          disabled={isAnimating}
          className="flex shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 items-center justify-center hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none cursor-pointer bg-white/5 backdrop-blur-sm"
          aria-label="Previous case study"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
        <div
          className={`w-full flex flex-col bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isAnimating
              ? direction === "right"
                ? "opacity-0 translate-x-8"
                : "opacity-0 -translate-x-8"
              : "opacity-100 translate-x-0"
          }`}
        >
          {/* Image Side — full width on top */}
          <div className="w-full relative bg-[#050505] min-h-[400px] sm:min-h-[500px] lg:min-h-[800px]">
            {currentStudy?.imageUrl && (
              <Image
                src={currentStudy.imageUrl}
                alt={currentStudy.name ?? "Case study"}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            )}
          </div>

          {/* Content Side — full width below image */}
          <div className="w-full p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center bg-black">
            <div className="flex flex-col gap-5 lg:gap-7">
              <span className="font-mono text-xs tracking-widest uppercase text-white border border-white/30 rounded-full px-4 py-2 w-fit">
                Case Study {currentIndex + 1} of {studies.length}
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-medium text-white tracking-tight leading-[1.15]">
                {currentStudy?.name}
              </h3>

              <p className="text-white text-base sm:text-lg leading-relaxed font-light line-clamp-4">
                {currentStudy?.description}
              </p>

              {currentStudy?.link && (
                <Link
                  href={currentStudy.link}
                  className="mt-2 sm:mt-4 inline-flex items-center gap-2 w-fit px-8 py-4 rounded-full bg-white text-black font-outfit font-medium text-base sm:text-lg hover:bg-white/90 transition-all duration-300"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={() => navigate("right")}
          disabled={isAnimating}
          className="flex shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 items-center justify-center hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none cursor-pointer bg-white/5 backdrop-blur-sm"
          aria-label="Next case study"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
    </section>
  );
}
