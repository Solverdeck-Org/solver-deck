import Link from "next/link";
import { Bot, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Pillar {
  Icon: LucideIcon;
  label: string;
  stat: string;
  body: string;
}

const PILLARS: Pillar[] = [
  {
    Icon: Globe,
    label: "Web Design",
    stat: "From £299",
    body: "Professional websites that load fast, look clean on mobile, and are built to convert visitors into customers — no enterprise price tag, no bloat.",
  },
  {
    Icon: Bot,
    label: "AI & Automation",
    stat: "Hours → Seconds",
    body: "Chatbots, automation workflows, and AI agents that answer enquiries automatically, confirm bookings without back-and-forth, and collapse hours of admin into seconds.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-white text-black border-t border-black/5 px-5 sm:px-8 md:px-12 pt-16 sm:pt-24 pb-16 sm:pb-24">
      <p className="font-mono text-xs tracking-widest uppercase text-primary mb-6 sm:mb-8">
        Why choose us
      </p>

      <h2 className="font-outfit font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] max-w-4xl mb-12 sm:mb-16">
        Built for the businesses that keep the UK running
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {PILLARS.map(({ Icon, label, stat, body }) => (
          <div
            key={label}
            className="flex flex-col gap-5 p-6 sm:p-10 rounded-2xl border border-black/5 bg-black/[0.02]"
          >
            <div className="flex items-center justify-between">
              <span className="w-11 h-11 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-black" />
              </span>
              <span className="font-mono text-xs text-primary border border-primary/30 rounded-full px-3 py-1 tracking-wide">
                {stat}
              </span>
            </div>
            <h3 className="font-outfit font-medium text-xl sm:text-2xl text-black">{label}</h3>
            <p className="text-black/60 text-sm sm:text-base leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <div className="border-l-2 border-primary pl-6 sm:pl-10 max-w-4xl">
        <p className="font-outfit text-base sm:text-lg md:text-xl leading-relaxed text-black/80">
          Our clients are based across{" "}
          <span className="text-black font-medium">Hull, Yorkshire, and the rest of the UK</span> — plumbers,
          clinic owners, retailers, and service businesses. They come to us because they want things
          built right, delivered fast, and maintained promptly.
        </p>
        <p className="mt-4 text-black/60 text-sm sm:text-base leading-relaxed">
          If you're a local business looking to grow with AI but don't know where to start — that's
          exactly who we built this for.
        </p>
        <Link
          href="https://cal.com/solverdeck"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-outfit font-medium text-base sm:text-lg hover:bg-black hover:text-white transition-all duration-300"
        >
          Book a free consultation
        </Link>
      </div>
    </section>
  );
}
