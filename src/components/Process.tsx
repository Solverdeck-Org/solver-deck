"use client";

import gsap from "gsap";
import { useState } from "react";
import { ContentColumn } from "./process/ContentColumn";
import { Navigation } from "./process/Navigation";
import { ProcessMobileView } from "./process/ProcessMobileView";
import { VisualsColumn } from "./process/VisualsColumn";
import { useProcessScroll } from "./process/useProcessScroll";

export function Process() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const { sectionRef, textScrollRef } = useProcessScroll(setActivePhaseIndex);

  const handleDesktopNavClick = (index: number) => {
    const blocks = gsap.utils.toArray<HTMLElement>(".phase-content-block");
    const target = blocks[index];
    if (!target) return;
    const top = window.scrollY + target.getBoundingClientRect().top - 128;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="process" className="relative bg-black text-white w-full z-10" ref={sectionRef}>
      <div className="w-full px-5 sm:px-8 md:px-12 pt-16 sm:pt-24 pb-8 sm:pb-12 lg:pb-20 flex flex-col shrink-0">
        <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-widest uppercase text-white font-mono font-semibold">
          Our Proven 5-Phase Process
        </h2>
      </div>
      <div className="w-full relative bg-black text-white flex flex-col justify-start px-5 sm:px-8 md:px-12 pb-12">
        <div className="w-full flex-1 grid grid-cols-12 min-h-0 relative">
          <div className="col-span-12 lg:col-span-2 hidden lg:block h-full relative">
            <div className="sticky top-32 h-[calc(100vh-8rem)]">
              <Navigation activePhaseIndex={activePhaseIndex} onNavClick={handleDesktopNavClick} />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 hidden lg:block h-full">
            <ContentColumn activePhaseIndex={activePhaseIndex} textScrollRef={textScrollRef} />
          </div>
          <div className="col-span-12 lg:col-span-7 hidden lg:block h-full relative">
            <div className="sticky top-32 h-[calc(100vh-8rem)]">
              <VisualsColumn activePhaseIndex={activePhaseIndex} />
            </div>
          </div>
          <ProcessMobileView activePhaseIndex={activePhaseIndex} onNavClick={setActivePhaseIndex} />
        </div>
      </div>
    </section>
  );
}
