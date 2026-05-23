"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { GetHomepageTestimoniesQueryResult } from "@/sanity/types";
import { TestimonialQuote } from "./testimonials/TestimonialQuote";
import { useVideoCarousel } from "./testimonials/useVideoCarousel";

const GRAIN = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==";

export function Testimonials({ testimonials = [] }: { testimonials?: GetHomepageTestimoniesQueryResult }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { VIDEOS, currentVideoIndex, isTransitioning, videoRef, nextVideoRef, handleVideoEnded } = useVideoCarousel();

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => setActiveIndex((prev) => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(interval);
  }, [testimonials]);

  if (!testimonials.length) return null;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video ref={videoRef} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`} src={VIDEOS[currentVideoIndex]} autoPlay muted playsInline onEnded={handleVideoEnded} />
      <video ref={nextVideoRef} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? "opacity-100" : "opacity-0"}`} muted playsInline />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('${GRAIN}')` }} />
      <div className="relative z-10 flex flex-col justify-between h-full px-5 sm:px-8 md:px-16 lg:px-20 py-10 sm:py-16 md:py-20">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="max-w-3xl">
            <h2 className="font-outfit text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-white">Trusted by 500+ businesses</h2>
            <h2 className="font-outfit text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-white mt-2">Loved by ambitious teams worldwide</h2>
          </div>
          <div className="hidden sm:flex items-center gap-1 mt-2">
            {testimonials.map((t, idx) => (
              <button key={t._id} type="button" onClick={() => setActiveIndex(idx)} className={`w-9 h-9 flex items-center justify-center text-sm font-mono font-medium transition-all duration-300 border ${idx === activeIndex ? "bg-white text-black border-white" : "bg-transparent text-white border-white/20 hover:border-white/40"}`}>
                {String(idx + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-auto">
          <TestimonialQuote testimonials={testimonials} activeIndex={activeIndex} />
          <Link href="/testimonials" className="hidden sm:flex items-center gap-3 px-6 py-3 border border-white/20 text-white text-sm font-outfit font-medium tracking-wide uppercase hover:bg-white/10 transition-all duration-300 shrink-0">
            All Customer Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
