import Image from "next/image";

const STATS = [
  { value: "25+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24h", label: "Proposal turnaround" },
  { value: "3×", label: "Average ROI growth" },
];

export function AboutHero() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Background image */}
      <Image
        src="https://res.cloudinary.com/dqovfvo29/image/upload/q_auto/f_auto/v1779288672/empty-floor-front-modern-building_flpopc.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
        priority
      />
      {/* Gradient overlay: black top (under nav) fading to transparent, then black at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black pointer-events-none" />
      <div className="relative px-5 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-32 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-white font-mono text-xs uppercase tracking-widest mb-6">
            About Solverdeck
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6 sm:mb-8">
            What makes us stand out in the industry
          </h1>
          <p className="text-white text-base sm:text-xl leading-relaxed max-w-2xl">
            Discover how our innovative strategies, data-driven approach, and
            commitment to results set us apart from the competition — and drive
            real outcomes for your business.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-14 sm:mt-24 border border-white/10 rounded-2xl overflow-hidden">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-black/60 backdrop-blur-sm px-5 sm:px-8 py-6 sm:py-10 hover:bg-white/[0.06] transition"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                {value}
              </p>
              <p className="text-white text-xs sm:text-sm mt-2 leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
