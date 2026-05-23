import { Zap, BarChart3, Layers, Award } from "lucide-react";

const FEATURES = [
  {
    Icon: Zap,
    title: "Streamline Operations",
    body: "We automate repetitive workflows so your team can focus on what actually moves the needle. Less friction, faster execution, lower operating costs.",
  },
  {
    Icon: BarChart3,
    title: "Data-Driven Insights",
    body: "We transform raw data into clear, actionable dashboards and reports — giving you the visibility to make confident decisions at every stage.",
  },
  {
    Icon: Layers,
    title: "Scalable Solutions",
    body: "Every system we build is designed to grow with you. From day one, we architect future-proof foundations that handle scale without costly rewrites.",
  },
  {
    Icon: Award,
    title: "Enterprise Value",
    body: "We deliver the quality and rigour of a large agency at a price that makes sense for ambitious businesses — no compromises, no hidden costs.",
  },
];

export function AboutFeatures() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {FEATURES.map(({ Icon, title, body }) => (
            <div key={title} className="bg-black p-6 sm:p-10 flex flex-col gap-5 hover:bg-white/[0.03] transition group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg mb-2 leading-snug">{title}</p>
                <p className="text-white text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
