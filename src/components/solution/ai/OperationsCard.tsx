import { TrendingUp } from "lucide-react";

const STATS = [
  { label: "Automations Ran", value: "124,592", color: "text-white" },
  { label: "Success Rate", value: "99.98%", color: "text-green-400" },
  { label: "API Cost Savings", value: "$4,850", color: "text-white" },
] as const;

export function OperationsCard() {
  return (
    <div className="feature-card bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl">
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between text-[12px] text-white bg-[#0f0f0f] font-medium font-outfit">
        <span>Operations Intelligence</span>
        <TrendingUp className="w-4 h-4 text-white/50" />
      </div>
      <div className="p-6 flex flex-col gap-6 flex-1 font-outfit justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-[12px] text-white/50 block font-medium">Efficiency Index</span>
          <div className="text-4xl font-semibold text-white font-outfit tracking-tight">420 Hours</div>
          <p className="text-[11px] text-white/40">Total developer and staff hours saved this month</p>
        </div>
        <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-xl border border-white/5">
          {STATS.map((s) => (
            <div key={s.label} className="flex justify-between text-xs text-white/70">
              <span>{s.label}</span>
              <span className={`font-mono font-medium ${s.color}`}>{s.value}</span>
            </div>
          ))}
        </div>
        <button type="button" className="bg-white/10 hover:bg-white/20 text-white text-[12px] font-medium px-4 py-3 rounded-lg w-full text-center transition-colors">
          Optimize Workflows
        </button>
      </div>
    </div>
  );
}
