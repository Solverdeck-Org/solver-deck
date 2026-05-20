"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AiAutomationCards } from "./AiAutomationCards";
import { ChatbotCards } from "./ChatbotCards";
import { SoftwareDevelopmentCards } from "./SoftwareDevelopmentCards";

const slides = [
  {
    id: "software" as const,
    tabTitle: "Software Development",
    heading: (
      <>
        Engineer software <br className="hidden lg:block" /> that scales your
        business
      </>
    ),
    subheading: "Where robust engineering and intuitive design converge",
    description: (
      <>
        From high-performance web, native mobile, and robust desktop
        applications to complex SaaS platforms and conversion-optimized{" "}
        <span className="whitespace-nowrap">e-commerce</span> sites. We build
        scalable, secure, and beautiful software tailored to your specific
        operational needs.
      </>
    ),
    highlights: [
      "Web, Mobile & Desktop Applications",
      "Custom SaaS Architecture",
      "E-Commerce Engineering",
    ],
    Cards: SoftwareDevelopmentCards,
  },
  {
    id: "ai" as const,
    tabTitle: "AI & Automation",
    heading: (
      <>
        Accelerate growth with <br className="hidden lg:block" /> autonomous AI
        intelligence
      </>
    ),
    subheading: "Implement AI solutions tailored to your business needs.",
    description: (
      <>
        Unlock unprecedented productivity. We replace manual complexity with
        custom machine learning models, smart reasoning agents, and automated
        data pipelines that execute enterprise workflows 24/7 without friction.
      </>
    ),
    highlights: [
      "AI Integration & LLMs",
      "Workflow Automation",
      "Business Process Automation",
    ],
    Cards: AiAutomationCards,
  },
  {
    id: "chatbots" as const,
    tabTitle: "Chatbots",
    heading: (
      <>
        Engage and resolve <br className="hidden lg:block" /> instantly with
        conversational AI
      </>
    ),
    subheading:
      "Streamline operations and reduce manual tasks with custom automation workflows.",
    description: (
      <>
        Delight customers and supercharge your team&apos;s throughput. Our
        custom conversational assistants integrate with your CRMs and knowledge
        bases to automate support, qualify leads, and assist teams in real-time.
      </>
    ),
    highlights: [
      "Customer Support Chatbots",
      "Internal Team Assistants",
      "Social Media Lead Bots",
    ],
    Cards: ChatbotCards,
  },
];

export function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[selectedIndex];

  const transitionToSlide = useCallback((nextIndex: number) => {
    // 1. Fade out current content & cards cleanly
    const tl = gsap.timeline({
      onComplete: () => {
        setSelectedIndex(nextIndex);
        setProgress(0);

        // 2. Set entry state
        gsap.set(contentRef.current, { y: 25, opacity: 0 });
        gsap.set(cardsContainerRef.current, { y: 35, opacity: 0 });

        // 3. Fade in entry animation
        const entryTl = gsap.timeline();
        entryTl.to(contentRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        });
        entryTl.to(
          cardsContainerRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4",
        );

        // Stagger visual feature cards within incoming container
        entryTl.fromTo(
          ".feature-card",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "expo.out" },
          "-=0.5",
        );
      },
    });

    tl.to([contentRef.current, cardsContainerRef.current], {
      y: -15,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      stagger: 0.03,
    });
  }, []);

  // Auto-progress slide cycle
  useEffect(() => {
    const duration = 15000; // 15 seconds per slide to allow full, relaxed reading
    const intervalTime = 30; // High precision progress
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (isPaused) return prev; // Pause progress when hovered
        if (prev >= 100) {
          setSelectedIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % slides.length;
            transitionToSlide(nextIndex);
            return prevIndex;
          });
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [transitionToSlide, isPaused]);

  const handleTabClick = (index: number) => {
    if (index === selectedIndex) return;
    transitionToSlide(index);
  };

  // Scroll Trigger Entrance Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      mainTl.from(headlineRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      mainTl.from(
        ".solution-tab",
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.5",
      );

      mainTl.from(
        contentRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4",
      );

      mainTl.from(
        cardsContainerRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      );

      mainTl.fromTo(
        ".feature-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "expo.out" },
        "-=0.6",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ActiveCardsComponent = activeSlide.Cards;

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative min-h-[120vh] bg-black text-white pt-40 pb-32 overflow-hidden flex flex-col justify-center border-t border-white/5"
    >
      {/* Background Image - Top visible, fades to black below */}
      <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[80vh] pointer-events-none overflow-hidden select-none z-0 opacity-30">
        <Image
          src="https://res.cloudinary.com/dqovfvo29/image/upload/q_auto/f_auto/v1779195441/fb674d02-1583-4f13-b0a0-fde8963717ac_n75te3.jpg"
          alt="Solutions background backdrop"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/40 to-black" />
      </div>

      <div className="px-8 w-full relative z-10 flex flex-col gap-16 md:gap-24">
        {/* Solution tabs controller */}
        <div
          ref={tabsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/10 pb-2.5"
        >
          {slides.map((slide, index) => {
            const isActive = index === selectedIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => handleTabClick(index)}
                className="solution-tab flex flex-col items-start text-left gap-2 group pb-6 relative transition-colors duration-300 cursor-pointer"
              >
                <span
                  className={`text-xs font-mono tracking-wider transition-colors ${
                    isActive ? "text-white font-medium" : "text-white/40"
                  }`}
                >
                  0{index + 1}
                </span>
                <span
                  className={`text-xl md:text-2xl font-medium font-outfit transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-white/50 group-hover:text-white/85"
                  }`}
                >
                  {slide.tabTitle}
                </span>
                {/* Visual active state lines & progress */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-white/5 w-full" />
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Rotational Text Info Section */}
        {/* biome-ignore lint/a11y/noStaticElementInteractions: Mouse events used solely to pause the background slider cycle for a better reading experience */}
        <div
          className="flex flex-col gap-16 md:gap-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div ref={contentRef} className="flex flex-col gap-12 md:gap-16">
            <h2
              ref={headlineRef}
              className="section-heading max-w-7xl wrap-break-word"
            >
              {activeSlide.heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start font-outfit">
              <div className="md:col-span-5">
                <h3 className="section-subheading wrap-break-word">
                  {activeSlide.subheading}
                </h3>
              </div>
              <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6">
                <p className="section-description wrap-break-word">
                  {activeSlide.description}
                </p>

                {/* Highlight badges */}
                <div className="flex flex-wrap gap-2.5 mt-2">
                  {activeSlide.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-outfit text-white/80 font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Render Active Mockup Cards Container */}
          <div ref={cardsContainerRef} className="relative w-full">
            <ActiveCardsComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
