"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { SolutionContent } from "./solution/SolutionContent";
import { SolutionTabs } from "./solution/SolutionTabs";
import { slides } from "./solution/slides";
import { useAutoProgress } from "./solution/useAutoProgress";

export function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const onTransition = useCallback((nextIndex: number) => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set([contentRef.current, cardsContainerRef.current], { y: 25, opacity: 0 });
        gsap.timeline()
          .to(contentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
          .to(cardsContainerRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
          .fromTo(".feature-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "expo.out" }, "-=0.5");
      },
    });
    tl.to([contentRef.current, cardsContainerRef.current], { y: -15, opacity: 0, duration: 0.3, ease: "power2.inOut", stagger: 0.03 });
    void nextIndex;
  }, []);

  const { selectedIndex, progress, goTo } = useAutoProgress({ count: slides.length, isPaused, onTransition });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
      tl.from(headlineRef.current, { y: 80, opacity: 0, duration: 1, ease: "power4.out" })
        .from(".solution-tab", { y: 20, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" }, "-=0.5")
        .from(contentRef.current, { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
        .from(cardsContainerRef.current, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .fromTo(".feature-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "expo.out" }, "-=0.6");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative bg-black text-white pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[80vh] pointer-events-none overflow-hidden select-none z-0 opacity-30">
        <Image src="https://res.cloudinary.com/dqovfvo29/image/upload/q_auto/f_auto/v1779195441/fb674d02-1583-4f13-b0a0-fde8963717ac_n75te3.jpg" alt="Solutions background backdrop" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/40 to-black" />
      </div>
      <div className="px-5 sm:px-8 w-full relative z-10 flex flex-col gap-10 md:gap-24">
        <SolutionTabs slides={slides} selectedIndex={selectedIndex} progress={progress} onTabClick={goTo} />
        {/* biome-ignore lint/a11y/noStaticElementInteractions: Mouse events pause background slider for reading */}
        <div className="flex flex-col gap-16 md:gap-20" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <SolutionContent slide={slides[selectedIndex]} contentRef={contentRef} cardsContainerRef={cardsContainerRef} />
        </div>
      </div>
    </section>
  );
}
