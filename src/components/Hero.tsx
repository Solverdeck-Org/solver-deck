"use client";

import gsap from "gsap";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [showAuditBanner, setShowAuditBanner] = useState(true);

  useLayoutEffect(() => {
    if (!textRef.current) return;
    gsap.fromTo(
      textRef.current.querySelectorAll("[data-hero-reveal]"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      },
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] md:min-h-[800px] flex flex-col justify-center overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 z-0">
        <video
          aria-label="Abstract Solverdeck hero background video"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dqovfvo29/video/upload/q_auto/f_auto/v1781092995/solverdeck-background-hero_ta2r0c.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="relative z-20 px-5 sm:px-8 flex flex-col items-start justify-center flex-1 pt-24 pb-32">
        <div ref={textRef} className="flex flex-col max-w-8xl gap-8 md:gap-16">
          {showAuditBanner ? (
            <div
              data-hero-reveal
              className="flex w-full max-w-xl items-center justify-between gap-3 rounded-full border border-white/15 bg-black/45 px-3 py-2 text-white opacity-0 shadow-2xl shadow-black/30 backdrop-blur-md sm:px-4"
            >
              <Link
                href="https://cal.com/solverdeck"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 flex-1 items-center rounded-full px-3 font-outfit text-sm font-medium transition-colors hover:bg-white/10 sm:text-base"
              >
                Free Website audit
              </Link>
              <button
                type="button"
                aria-label="Dismiss free website audit banner"
                onClick={() => setShowAuditBanner(false)}
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
            </div>
          ) : null}
          <h1
            data-hero-reveal
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-medium leading-[0.95] tracking-tight mb-3 text-white opacity-0"
          >
            Modern Websites & AI Automation <br /> Built for Growing Businesses & Trades.
          </h1>
          {/* <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white max-w-5xl font-outfit font-medium leading-normal">
            We build websites and AI tools, so you spend less time on admin and more on growth.
          </p> */}
          <div
            data-hero-reveal
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 opacity-0"
          >
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
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-30 flex flex-col items-center gap-4 sm:gap-6">
        <p className="text-white/50 text-xs sm:text-sm font-outfit uppercase tracking-widest text-center">
          Partnered With
        </p>
        <div className="flex items-center justify-center gap-8 sm:gap-12">
          <Image
            src="/shopify.svg"
            alt="Shopify"
            width={180}
            height={60}
            className="h-8 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          <Image
            src="/google-cloud.svg"
            alt="Google Cloud"
            width={180}
            height={60}
            className="h-8 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}
