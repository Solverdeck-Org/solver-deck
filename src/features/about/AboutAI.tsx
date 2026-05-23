import Image from "next/image";
import { Brain, Clock, TrendingUp, Zap, GitMerge, ShieldCheck } from "lucide-react";

const AI_CAPABILITIES = [
  {
    Icon: Brain,
    title: "Smart AI-Driven Decisions",
    body: "We build AI systems that process your business data and surface the insights that matter — faster and more accurately than any manual process.",
  },
  {
    Icon: Clock,
    title: "24/7 Automated Workflows",
    body: "From lead qualification to customer support, our automations run around the clock so your business never sleeps — even when your team does.",
  },
  {
    Icon: TrendingUp,
    title: "Scalable & Cost-Effective",
    body: "AI automation grows with your volume. Handle 10x the workload without 10x the headcount — keeping margins healthy as you scale.",
  },
  {
    Icon: Zap,
    title: "Instant Data Processing",
    body: "Real-time pipelines that ingest, transform, and act on data the moment it arrives. No lag, no batch delays — just immediate intelligence.",
  },
  {
    Icon: GitMerge,
    title: "Seamless System Integration",
    body: "We connect your AI tools to the systems you already use — CRMs, ERPs, payment platforms, and custom APIs — with zero disruption.",
  },
  {
    Icon: ShieldCheck,
    title: "Consistent & Reliable Output",
    body: "Unlike manual processes, AI doesn't have off days. Every task is executed with the same precision, every time, with full audit trails.",
  },
];

export function AboutAI() {
  return (
    <section className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://res.cloudinary.com/dqovfvo29/image/upload/q_auto/f_auto/v1779289911/ai-technology-microchip-background-digital-transformation-concept_zntkya.jpg"
        alt=""
        fill
        className="object-cover opacity-[0.3]"
      />
      {/* Gradient: black top and bottom, transparent middle */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 pointer-events-none" />
      <div className="relative px-5 sm:px-8 py-16 sm:py-32 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-20">
          <p className="text-white font-mono text-xs uppercase tracking-widest mb-6">AI capabilities</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Intelligent automation, built for the real world
          </h2>
          <p className="text-white text-lg leading-relaxed max-w-xl">
            We don&apos;t bolt AI onto the side. We architect it into the core of your product —
            turning complex workflows into effortless, self-running systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_CAPABILITIES.map(({ Icon, title, body }) => (
            <div key={title} className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-black/60 hover:border-white/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-white font-semibold text-base mb-3 leading-snug">{title}</p>
              <p className="text-white text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
