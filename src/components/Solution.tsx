"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Solutions() {
  return (
    <section id="services" className="relative bg-black text-white pt-24 pb-24 overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[80vh] pointer-events-none overflow-hidden select-none z-0 opacity-30">
        <Image src="https://res.cloudinary.com/dqovfvo29/image/upload/q_auto/f_auto/v1779195441/fb674d02-1583-4f13-b0a0-fde8963717ac_n75te3.jpg" alt="Solutions background backdrop" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/40 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 flex flex-col gap-16 md:gap-24 mt-10">
        
        {/* Service 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
            <Image 
              src="/strategy2.jpg" 
              alt="For Local Businesses & Trades" 
              fill 
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
            />
          </div>
          <div className="flex flex-col gap-6 items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-medium tracking-tight">
              For Local Businesses & Trades
            </h2>
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-xl">
              Websites, Local SEO, and simple AI agents.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-black border border-white/20 hover:border-white text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 mt-2"
            >
              Discover More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/10" />

        {/* Service 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
            <Image 
              src="/implementation.jpg" 
              alt="For Startups & Enterprises" 
              fill 
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
            />
          </div>
          <div className="flex flex-col gap-6 items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-medium tracking-tight">
              For Startups & Enterprises
            </h2>
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-xl">
              Custom SaaS, APIs, and Native App development.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-black border border-white/20 hover:border-white text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 mt-2"
            >
              Discover More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
