"use client";

import { phases } from "./types";

interface NavigationProps {
  activePhaseIndex: number;
  onNavClick: (index: number) => void;
}

export function Navigation({ activePhaseIndex, onNavClick }: NavigationProps) {
  return (
    <div className="relative w-full h-full flex flex-col justify-start bg-black pt-0 pb-0 pl-0 pr-6 font-mono text-white select-none">
      {/* Navigation Buttons Container */}
      <div className="flex flex-col gap-6 w-full">
        {phases.map((phase, index) => {
          const isActive = index === activePhaseIndex;
          return (
            <button
              key={phase.id}
              type="button"
              onClick={() => onNavClick(index)}
              className="flex items-center gap-6 text-left group transition-all duration-300 cursor-pointer w-full focus:outline-hidden"
            >
              {/* Number tag container - identical font-medium weight and layout across all items */}
              <span
                className={`w-10 h-10 flex items-center justify-center shrink-0 font-mono text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black font-semibold rounded-none"
                    : "bg-transparent text-white font-semibold"
                }`}
              >
                {phase.num}
              </span>

              {/* Uppercase Phase Title - identical pure white color, uppercase, tracking, and weight across all items */}
              <span className="text-[11px] md:text-[13px] tracking-widest font-mono uppercase transition-all duration-300 text-white font-semibold">
                {phase.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Decorative vertical space filler - Pure plus sign matrix aligned precisely */}
      <div className="flex-1 w-full relative mt-12 overflow-hidden min-h-[200px]">
        <svg
          className="absolute inset-0 w-full h-full text-white/15 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <title>Vertical Navigation Plus Grid Pattern</title>
          <defs>
            <pattern
              id="nav-plus-grid"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="4"
                y1="2"
                x2="4"
                y2="6"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="2"
                y1="4"
                x2="6"
                y2="4"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nav-plus-grid)" />
        </svg>
      </div>
    </div>
  );
}
