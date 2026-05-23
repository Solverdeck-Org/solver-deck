"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GetAllTestimoniesQueryResult } from "@/sanity/types";

type Testimonial = GetAllTestimoniesQueryResult[number];

const VIDEOS = [
  "https://res.cloudinary.com/dqovfvo29/video/upload/q_auto/f_auto/v1779192604/6308670_Women_Friends_3840x2160_ecmokw.mp4",
  "https://res.cloudinary.com/dqovfvo29/video/upload/q_auto/f_auto/v1779192570/5406502_Coll_wavebreak_Raised_Arms_3840x2160_bb71nb.mp4",
  "https://res.cloudinary.com/dqovfvo29/video/upload/q_auto/f_auto/v1779193434/5394036_Coll_wavebreak_People_4096x2160_1_cknaj0.mp4",
];

const GRAIN =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==";

function getInitials(name: string | null) {
  if (!name) return "?";
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

function byline(t: Testimonial) {
  const role = t.jobTitle ?? t.roles?.filter(Boolean).join(" & ");
  return [role, t.company].filter(Boolean).join(", ");
}

interface Props {
  testimonials: GetAllTestimoniesQueryResult;
}

export function TestimonialsGrid({ testimonials }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setIsTransitioning(false);
    }, 350);
  }, []);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length);
  }, [activeIndex, testimonials.length, goTo]);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % testimonials.length);
  }, [activeIndex, testimonials.length, goTo]);

  // Auto-advance
  useEffect(() => {
    if (testimonials.length <= 1) return;
    autoplayRef.current = setInterval(next, 7000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [next, testimonials.length]);

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, 7000);
  }, [next]);

  const handleVideoEnded = useCallback(() => {
    const nextIdx = (currentVideoIndex + 1) % VIDEOS.length;
    setIsTransitioning(true);
    if (nextVideoRef.current) {
      nextVideoRef.current.src = VIDEOS[nextIdx];
      nextVideoRef.current.play().catch(() => {});
    }
    setTimeout(() => {
      setCurrentVideoIndex(nextIdx);
      setIsTransitioning(false);
      if (videoRef.current) {
        videoRef.current.src = VIDEOS[nextIdx];
        videoRef.current.play().catch(() => {});
      }
    }, 1200);
  }, [currentVideoIndex]);

  if (!testimonials.length) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-white text-lg font-outfit">No testimonials yet — be the first!</p>
      </div>
    );
  }

  const active = testimonials[activeIndex];
  const total = testimonials.length;

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Video background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        src={VIDEOS[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
      />
      <video
        ref={nextVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('${GRAIN}')` }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-5 sm:px-8 md:px-16 lg:px-20 py-16 md:py-20">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div>
            <h2 className="font-outfit text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-white">
              Trusted by 500+ businesses
            </h2>
            <h2 className="font-outfit text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-white mt-2">
              Loved by ambitious teams worldwide
            </h2>
          </div>

          {/* Counter */}
          <div className="shrink-0 mt-0 sm:mt-2 text-left sm:text-right">
            <span className="font-mono text-white text-sm">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8 mt-auto pt-8">

          {/* Quote */}
          <div
            className={`max-w-2xl transition-all duration-350 ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
          >
            <div className="border-l-2 border-white/40 pl-6">
              {active && (
                <>
                  <p className="text-white text-lg md:text-xl leading-relaxed font-outfit">
                    &ldquo;{active.testimony}&rdquo;
                  </p>
                  {(active.name || byline(active)) && (
                    <div className="mt-5 flex items-center gap-3">
                      {active.imageUrl ? (
                        <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                          <Image src={active.imageUrl} alt={active.name ?? "Client"} fill className="object-cover" sizes="36px" />
                        </div>
                      ) : active.name ? (
                        <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-semibold font-mono">{getInitials(active.name)}</span>
                        </div>
                      ) : null}
                      <div>
                        {active.name && <div className="text-white font-medium text-sm font-outfit">{active.name}</div>}
                        {byline(active) && <div className="text-white/60 text-xs mt-0.5 font-mono">{byline(active)}</div>}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Navigation + CTA */}
          <div className="flex items-center gap-3 shrink-0 self-end">
            <a
              href="/testimonials/submit"
              className="hidden sm:flex items-center gap-3 px-6 py-3 border border-white/20 text-white text-sm font-outfit font-medium tracking-wide uppercase hover:bg-white/10 transition-all duration-300"
            >
              Submit a Testimonial
            </a>
            <button
              type="button"
              onClick={() => { prev(); resetAutoplay(); }}
              aria-label="Previous testimonial"
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => { next(); resetAutoplay(); }}
              aria-label="Next testimonial"
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
