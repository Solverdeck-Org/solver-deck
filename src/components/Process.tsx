"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { ContentColumn } from "./process/ContentColumn";
import { Navigation } from "./process/Navigation";
import { phases } from "./process/types";
import { VisualsColumn } from "./process/VisualsColumn";

export function Process() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const textScrollRef = useRef<HTMLDivElement>(null);

  const setActiveIndexState = useCallback((index: number) => {
    setActivePhaseIndex(index);
    // Seamlessly update hash without causing window jumping
    window.history.pushState(null, "", `#${phases[index].id}`);
  }, []);

  // Deep linking sync on mount
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const index = phases.findIndex((p) => `#${p.id}` === hash);
        if (index !== -1) {
          setActivePhaseIndex(index);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // GSAP ScrollTrigger animation for desktop native scrolling and sticky sidebars
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create GSAP context scoped to sectionRef
    const ctx = gsap.context(() => {
      // Find all the phase content blocks
      const phaseBlocks = gsap.utils.toArray<HTMLElement>(
        ".phase-content-block",
      );

      phaseBlocks.forEach((block, index) => {
        ScrollTrigger.create({
          trigger: block,
          start: "top center", // When top of block hits center of viewport
          end: "bottom center", // When bottom of block hits center of viewport
          onToggle: (self) => {
            if (self.isActive) {
              setActiveIndexState(index);
            }
          },
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert(); // Cleanup ScrollTriggers on unmount
    };
  }, [setActiveIndexState]);

  const handleMobileNavClick = (index: number) => {
    setActivePhaseIndex(index);
  };

  const handleDesktopNavClick = (index: number) => {
    const phaseBlocks = gsap.utils.toArray<HTMLElement>(".phase-content-block");
    const targetBlock = phaseBlocks[index];

    if (targetBlock) {
      // Calculate position accounting for the top offset (e.g., sticky header height of 8rem/128px)
      const rect = targetBlock.getBoundingClientRect();
      const targetScrollY = window.scrollY + rect.top - 128;

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="process"
      className="relative bg-black text-white w-full z-10"
      ref={sectionRef}
    >
      {/* Section Header - Sits in normal flow above the process grid */}
      <div className="w-full px-8 md:px-12 pt-24 pb-12 lg:pb-20 flex flex-col shrink-0">
        <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-widest uppercase text-white font-mono font-semibold">
          Our Proven 5-Phase Process
        </h2>
      </div>

      {/* Main Layout Grid Container - Native scrolling */}
      <div className="w-full relative bg-black text-white flex flex-col justify-start px-8 md:px-12 pb-12">
        <div className="w-full flex-1 grid grid-cols-12 min-h-0 relative">
          {/* Left Column (01 to 05 Index) - 2 Columns (Desktop) - Sticky */}
          <div className="col-span-12 lg:col-span-2 hidden lg:block h-full relative">
            <div className="sticky top-32 h-[calc(100vh-8rem)]">
              <Navigation
                activePhaseIndex={activePhaseIndex}
                onNavClick={handleDesktopNavClick}
              />
            </div>
          </div>

          {/* Middle Column (Scrolling phase details) - 3 Columns (Desktop) - Native Scroll */}
          <div className="col-span-12 lg:col-span-3 hidden lg:block h-full">
            <ContentColumn
              activePhaseIndex={activePhaseIndex}
              textScrollRef={textScrollRef}
            />
          </div>

          {/* Right Column (Large cinematic collage mockup) - 7 Columns (Desktop) - Sticky */}
          <div className="col-span-12 lg:col-span-7 hidden lg:block h-full relative">
            <div className="sticky top-32 h-[calc(100vh-8rem)]">
              <VisualsColumn activePhaseIndex={activePhaseIndex} />
            </div>
          </div>

          {/* Mobile-Only Unified View - Beautiful responsive layout */}
          <div className="col-span-12 lg:hidden flex flex-col h-full justify-between p-6 bg-black text-white font-outfit">
            {/* Mobile Numbers Navigation */}
            <div className="flex items-center gap-1.5 py-4 border-b border-white/10 w-full justify-center">
              {phases.map((phase, idx) => (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => handleMobileNavClick(idx)}
                  className={`w-10 h-10 rounded-none font-mono text-xs font-bold border transition-all duration-200 cursor-pointer ${
                    idx === activePhaseIndex
                      ? "bg-white text-black border-white"
                      : "bg-transparent border-white/20 text-white"
                  }`}
                >
                  {phase.num}
                </button>
              ))}
            </div>

            {/* Active mobile content */}
            <div className="flex-1 flex flex-col justify-center gap-6 py-6 text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-white font-bold">
                PHASE {phases[activePhaseIndex].num} {"// ACTIVE_WORKFLOW"}
              </span>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-tight">
                {phases[activePhaseIndex].subtitle}
              </h3>
              <p className="text-sm text-white leading-relaxed">
                {phases[activePhaseIndex].content}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-mono text-[10px] tracking-wider text-white uppercase">
                  Key Focus:
                </span>
                <span className="text-xs font-mono text-white font-bold border border-white px-2 py-0.5 bg-white/5 rounded-none">
                  {phases[activePhaseIndex].highlight}
                </span>
              </div>
            </div>

            {/* Swipe indicator */}
            <div className="flex items-center justify-between border-t border-white/10 py-4 w-full text-[10px] text-white font-mono">
              <span>TAP TO TRANSITION</span>
              <div className="flex items-center gap-1">
                <span>ACTIVE</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
