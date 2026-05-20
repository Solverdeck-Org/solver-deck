"use client";

import type React from "react";
import { phases } from "./types";

interface ContentColumnProps {
  activePhaseIndex: number;
  textScrollRef: React.RefObject<HTMLDivElement | null>;
}

export function ContentColumn({
  activePhaseIndex,
  textScrollRef,
}: ContentColumnProps) {
  return (
    <div className="relative w-full bg-black pr-8 md:pr-12 flex flex-col justify-start">
      <div ref={textScrollRef} className="w-full flex flex-col">
        {phases.map((phase, index) => (
          <div
            key={phase.id}
            data-phase-index={index}
            className="phase-content-block w-full min-h-screen flex flex-col justify-start pt-0 pb-32 gap-6 pr-4 shrink-0 font-outfit"
          >
            {/* Phase Subtitle / Headline */}
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              {phase.subtitle}
            </h3>

            {/* Phase Description Paragraph */}
            <p className="text-sm md:text-lg text-white leading-relaxed font-normal">
              {phase.content}
            </p>

            {/* Technical deliverable highlight */}
            <div className="mt-2 flex flex-col gap-2">
              <div className="border border-white/10 bg-white/5 px-4 py-3.5 text-xs md:text-sm font-mono text-white font-bold tracking-tight rounded-none w-fit flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-white animate-pulse" />
                {phase.highlight}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
