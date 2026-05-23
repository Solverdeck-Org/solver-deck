import Link from "next/link";
import { Bot, Globe, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    Icon: Globe,
    title: "High-Performance Websites",
    description:
      "We craft fast, beautiful websites and web apps using Next.js and Sanity — built to convert visitors and scale effortlessly.",
  },
  {
    Icon: Bot,
    title: "Custom AI & Automation",
    description:
      "From intelligent chatbots to end-to-end AI pipelines, we automate the repetitive and amplify the exceptional.",
  },
  {
    Icon: ShieldCheck,
    title: "Ongoing Partnership",
    description:
      "We don't just ship and disappear. We monitor, optimise, and evolve your technology as your business grows.",
  },
];

export function Cta() {
  return (
    <section className="relative py-20 sm:py-36 px-5 sm:px-6 bg-black border-t border-white/5 overflow-hidden">
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight max-w-4xl mx-auto">
          Ready to Build Something Remarkable?
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white max-w-2xl mx-auto leading-relaxed">
          From high-performance websites to intelligent AI tools — we help ambitious teams build
          technology that drives real results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
          {FEATURES.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 sm:gap-5 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] text-center"
            >
              <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </span>
              <h3 className="text-white font-semibold text-base sm:text-lg">{title}</h3>
              <p className="text-white text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-4 mt-10 sm:mt-16">
          <Link
            href="https://cal.com/solverdeck"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:flex-1 text-center px-8 sm:px-10 py-4 sm:py-6 rounded-full bg-primary text-white font-semibold text-lg sm:text-2xl hover:bg-white hover:text-primary transition-all duration-300"
          >
            Book a consultation
          </Link>
          <Link
            href="/contact"
            className="sm:flex-1 text-center px-8 sm:px-10 py-4 sm:py-6 rounded-full bg-white text-black font-semibold text-lg sm:text-2xl border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300"
          >
            Contact us
          </Link>
          <Link
            href="/faq"
            className="sm:flex-1 text-center px-8 sm:px-10 py-4 sm:py-6 rounded-full border-2 border-white text-white font-semibold text-lg sm:text-2xl hover:bg-white hover:text-black transition-all duration-300"
          >
            View FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
