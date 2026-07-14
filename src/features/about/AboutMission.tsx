export function AboutMission() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-32 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-white font-mono text-xs uppercase tracking-widest mb-6">Our mission</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-8">
            Built for businesses that refuse to settle
          </h2>
          <p className="text-white text-lg leading-relaxed mb-6">
            Solverdeck was founded on a simple belief: every ambitious business deserves access to
            world-class technology — not just the ones with enterprise budgets.
          </p>
          <p className="text-white text-base leading-relaxed">
            We combine deep technical expertise with a genuine understanding of commercial outcomes.
            We don&apos;t just ship code — we build tools that measurably improve your business,
            from revenue to efficiency to customer experience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Founded", value: "2025" },
            { label: "Based in", value: "Hull, England" },
            { label: "Clients served", value: "15" },
            { label: "Industries", value: "12" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-8 hover:bg-white/[0.06] transition">
              <p className="text-white text-xs font-mono uppercase tracking-widest mb-3">{label}</p>
              <p className="text-white text-2xl font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
