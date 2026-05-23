import { Cpu, Sparkles } from "lucide-react";

const METRICS = [
  { label: "Average Latency", value: "18ms / token", width: "85%" },
  { label: "Context Window", value: "128k Tokens", width: "95%" },
] as const;

export function InferenceEngineCard() {
  return (
    <div className="feature-card bg-[#111111] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl relative">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between text-[11px] text-white/50 bg-[#141414] font-medium font-outfit">
        <span>Inference Engine</span>
        <Cpu className="w-4 h-4" />
      </div>
      <div className="p-6 flex flex-col gap-6 flex-1 font-outfit justify-between">
        <div className="flex flex-col gap-4">
          <span className="text-[12px] text-white/50 block font-medium">Model Deployment</span>
          <div className="border border-primary/50 rounded-lg p-3 bg-black/50 text-white flex items-center justify-between shadow-[0_0_15px_rgba(var(--primary),0.2)]">
            <span className="text-xs font-mono">solver-deck-intelligence-v3</span>
            <span className="text-[9px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-md font-mono">ONLINE</span>
          </div>
          <div className="mt-2 flex flex-col gap-3">
            {METRICS.map((m) => (
              <div key={m.label}>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-white/60">{m.label}</span>
                  <span className="font-mono text-white font-medium">{m.value}</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: m.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <div>
              <p className="text-xs text-white">Daily Cost Optimization</p>
              <p className="text-[10px] text-white/50">Smart routing active</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-green-400">-42%</span>
        </div>
      </div>
    </div>
  );
}
