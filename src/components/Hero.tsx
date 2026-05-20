"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const tools = [
  "/vercel_wordmark.svg",
  "/cloudflare.svg",
  "/github_wordmark_light.svg",
  "/git.svg",
  "/stripe_wordmark.svg",
  "/shopify.svg",
  "/google-cloud.svg",
  "/google-analytics.svg",
  "/Codex_wordmark_light.svg",
  "/claude-ai-wordmark-icon_light.svg",
  "/antigravity-wordmark.svg",
  // "/bun.svg",
  "/Rust_light.svg",
  "/tauri.svg",
  "/react_wordmark_light.svg",
  "/nextjs_logo_light.svg",
  "/TailwindCSS_wordmark_light.svg",
  "/ui_light.svg",
  "/Motion_light.svg",
  "/clerk-wordmark-light.svg",
  "/sanity-wordmark-light.svg",
  "/Convex_wordmark_light.svg",
  "/Supabase_wordmark_light.svg",
  "/neon.svg",
  "/Resend_wordmark_light.svg",
  // "/javascript.svg",
  // "/typescript.svg",
  "/Go_light.svg",
];

// Pre-generate the duplicated array with stable unique IDs outside the render loop
const tickerTools = [...tools, ...tools, ...tools, ...tools].map((tool, i) => ({
  id: `${tool}-${i}`,
  src: tool,
}));

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      gsap.fromTo(
        el.children,
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
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[800px] flex flex-col justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 px-8 flex flex-col items-start justify-center flex-1 pt-24 pb-32">
        <div ref={textRef} className="flex flex-col max-w-8xl gap-16">
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-outfit font-medium leading-[0.95] tracking-tight mb-3 text-white">
            YOUR WEB SOLUTIONS <br /> PARTNER
          </h1>
          <p className="text-lg md:text-3xl lg:text-4xl text-white max-w-5xl font-outfit font-medium leading-normal">
            We build websites and AI tools, so you spend less time on admin and
            more on growth.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Button className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary text-2xl md:text-3xl rounded-full px-8 md:px-12 py-3 md:py-4 h-16 md:h-20 font-outfit font-medium border-none shadow-none">
              Our Solutions
            </Button>
            <Button className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black text-2xl md:text-3xl rounded-full px-8 md:px-12 py-3 md:py-4 h-16 md:h-20 font-outfit font-medium transition-colors shadow-none">
              Get in touch
            </Button>
          </div>
        </div>
      </div>

      {/* Moving Logos Ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-primary py-7 overflow-hidden flex items-center">
        <div
          className="flex items-center gap-16 whitespace-nowrap animate-ticker"
          style={{ width: "max-content" }}
        >
          {tickerTools.map((tool) => (
            <div key={tool.id} className="shrink-0 h-[18px] relative">
              <Image
                src={tool.src}
                alt="Tool logo"
                width={100}
                height={100}
                style={{ height: "18px", width: "auto" }}
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
