"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GetHomepageTestimoniesQueryResult } from "@/sanity/types";

const videos = [
  "https://res.cloudinary.com/dqovfvo29/video/upload/q_auto/f_auto/v1779192604/6308670_Women_Friends_3840x2160_ecmokw.mp4",
  "https://res.cloudinary.com/dqovfvo29/video/upload/q_auto/f_auto/v1779192570/5406502_Coll_wavebreak_Raised_Arms_3840x2160_bb71nb.mp4",
  "https://res.cloudinary.com/dqovfvo29/video/upload/q_auto/f_auto/v1779193434/5394036_Coll_wavebreak_People_4096x2160_1_cknaj0.mp4",
];

export function Testimonials({
  testimonials = [],
}: {
  testimonials?: GetHomepageTestimoniesQueryResult;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  // Handle video ended — crossfade to next
  const handleVideoEnded = useCallback(() => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setIsTransitioning(true);

    // Preload and play the next video
    if (nextVideoRef.current) {
      nextVideoRef.current.src = videos[nextIndex];
      nextVideoRef.current.play().catch(() => {});
    }

    // After crossfade, swap
    setTimeout(() => {
      setCurrentVideoIndex(nextIndex);
      setIsTransitioning(false);
      if (videoRef.current) {
        videoRef.current.src = videos[nextIndex];
        videoRef.current.play().catch(() => {});
      }
    }, 1200);
  }, [currentVideoIndex]);

  // Auto-cycle testimonials every 6s
  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video - Primary */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
      />

      {/* Background Video - Crossfade buffer */}
      <video
        ref={nextVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-8 md:px-16 lg:px-20 py-16 md:py-20">
        {/* Top section - Heading + Number Navigation */}
        <div className="flex items-start justify-between">
          {/* Heading */}
          <div className="max-w-3xl">
            <h2 className="font-outfit text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-white">
              Trusted by 500+ businesses
            </h2>
            <h2 className="font-outfit text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-white/60 mt-2">
              Loved by ambitious teams worldwide
            </h2>
          </div>

          {/* Number navigation */}
          <div className="flex items-center gap-1 mt-2">
            {testimonials.map((testimonial, idx) => {
              const numId = String(idx + 1).padStart(2, "0");
              return (
                <button
                  key={testimonial._id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-9 h-9 flex items-center justify-center text-sm font-mono font-medium transition-all duration-300 border ${
                    idx === activeIndex
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white/50 border-white/20 hover:border-white/40 hover:text-white/80"
                  }`}
                >
                  {numId}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom section - Review + Button */}
        <div className="flex items-end justify-between">
          {/* Testimonial quote */}
          <div className="max-w-lg relative">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial._id}
                className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  idx === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="border-l-2 border-white/30 pl-6">
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-outfit">
                    &ldquo;{testimonial.testimony}&rdquo;
                  </p>
                  {(testimonial.name ||
                    testimonial.roles ||
                    testimonial.company) && (
                    <div className="mt-4 font-outfit">
                      {testimonial.name && (
                        <div className="text-white font-medium text-sm">
                          {testimonial.name}
                        </div>
                      )}
                      {(testimonial.roles || testimonial.company) && (
                        <div className="text-white/50 text-xs mt-0.5">
                          {[
                            testimonial.roles &&
                              testimonial.roles.filter(Boolean).join(" & "),
                            testimonial.company,
                          ]
                            .filter(Boolean)
                            .join(", ")}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* All Customer Stories Button */}
          <Link
            href="/customers"
            className="flex items-center gap-3 px-6 py-3 border border-white/20 text-white text-sm font-outfit font-medium tracking-wide uppercase hover:bg-white/10 transition-all duration-300 shrink-0"
          >
            All Customer Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
