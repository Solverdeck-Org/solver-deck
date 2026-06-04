"use client";

import Link from "next/link";
import type { GetHomepageTestimoniesQueryResult } from "@/sanity/types";
import { TestimonialQuote } from "./testimonials/TestimonialQuote";
import { useVideoCarousel } from "./testimonials/useVideoCarousel";

const GRAIN =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==";

export function Testimonials({
  testimonials = [],
}: {
  testimonials?: GetHomepageTestimoniesQueryResult;
}) {
  const { VIDEOS, currentVideoIndex, isTransitioning, videoRef, nextVideoRef, handleVideoEnded } =
    useVideoCarousel();

  if (!testimonials.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 md:py-24">
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
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url('${GRAIN}')` }}
      />

      <div className="relative z-10 px-5 sm:px-8 md:px-16 lg:px-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <p className="font-outfit italic text-white text-lg sm:text-xl mb-3">
              Don&apos;t Take Our Word For It
            </p>
            <h2 className="font-outfit text-xl sm:text-2xl md:text-3xl font-medium leading-snug tracking-tight text-white">
              Trusted by local businesses and trades across the United Kingdom.
              See what our clients have to say about our services.
            </h2>
          </div>
          <Link
            href="/testimonials"
            className="hidden sm:flex items-center gap-3 px-6 py-3 border border-white/20 text-white text-sm font-outfit font-medium tracking-wide uppercase hover:bg-white/10 transition-all duration-300 shrink-0"
          >
            All Customer Stories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {testimonials.map((t) => (
            <TestimonialQuote key={t._id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
