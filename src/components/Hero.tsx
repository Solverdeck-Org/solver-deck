"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { LogoTicker } from "./hero/LogoTicker";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    gsap.fromTo(textRef.current.children, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[700px] md:min-h-[800px] flex flex-col justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="relative z-20 px-5 sm:px-8 flex flex-col items-start justify-center flex-1 pt-24 pb-32">
        <div ref={textRef} className="flex flex-col max-w-8xl gap-8 md:gap-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-outfit font-medium leading-[0.95] tracking-tight mb-3 text-white">
            YOUR WEB SOLUTIONS <br /> PARTNER
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white max-w-5xl font-outfit font-medium leading-normal">
            We build websites and AI tools, so you spend less time on admin and more on growth.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="#services"
              className="bg-primary text-white hover:bg-white hover:text-primary text-lg sm:text-2xl md:text-3xl rounded-full px-8 md:px-12 py-3 md:py-4 h-14 sm:h-16 md:h-20 font-outfit font-medium transition-colors inline-flex items-center justify-center"
            >
              Our Services
            </Link>
            <Link
              href="https://cal.com/solverdeck"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black text-lg sm:text-2xl md:text-3xl rounded-full px-8 md:px-12 py-3 md:py-4 h-14 sm:h-16 md:h-20 font-outfit font-medium transition-colors inline-flex items-center justify-center"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      <LogoTicker />
    </section>
  );
}
