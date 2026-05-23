import { Bot, Check } from "lucide-react";

function SlackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" role="img">
      <title>Slack Logo</title>
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1-2.52-2.522A2.528 2.528 0 0 1 8.823 0a2.528 2.528 0 0 1 2.52 2.521v2.522H8.823zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043zm10.135 3.779a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.262 0a2.528 2.528 0 0 1-2.52 2.522h-5.043a2.528 2.528 0 0 1-2.522-2.522V5.043a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.781 10.135a2.528 2.528 0 0 1 2.52 2.522A2.528 2.528 0 0 1 15.177 24a2.528 2.528 0 0 1-2.52-2.521v-2.522h2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043z" />
    </svg>
  );
}

export function SlackAssistantCard() {
  return (
    <div className="feature-card bg-[#111111] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl relative">
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-[#141414]">
        <div className="flex items-center gap-2">
          <SlackIcon className="w-4 h-4 text-purple-400" />
          <span className="text-[11px] text-white/70 font-outfit font-medium uppercase tracking-wider">#tech-ops</span>
        </div>
        <span className="text-[9px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded font-mono font-bold">SLACK INTERACTIVE</span>
      </div>
      <div className="p-5 flex flex-col gap-4 flex-1 justify-between font-outfit">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex gap-3 items-start">
            <div className="w-7 h-7 rounded bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 font-bold shrink-0 mt-0.5">JD</div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-semibold text-white/90">John Dev</span>
                <span className="text-[9px] text-white/30">10:15 AM</span>
              </div>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">@Solverbot which env config handles custom API isolation?</p>
            </div>
          </div>
          <div className="flex gap-3 items-start bg-white/3 border border-white/5 p-3 rounded-xl">
            <div className="w-7 h-7 rounded bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-semibold text-white/95">Solverbot</span>
                <span className="text-[8px] bg-primary/20 text-primary px-1 rounded font-mono">APP</span>
                <span className="text-[9px] text-white/30">10:15 AM</span>
              </div>
              <p className="text-xs text-white/80 mt-1.5 leading-relaxed font-light">🔍 Querying internal technical documentation vector store...</p>
              <div className="border-l-2 border-primary/60 pl-3 mt-2 py-1 text-[11px] text-white/60 leading-relaxed font-mono">
                Custom API keys are handled via the <span className="text-yellow-200">isolatedKeys</span> block inside your <span className="text-green-400">config.json</span>.
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[11px] text-white/40">
          <span>Linked to Knowledge Base v4.2</span>
          <div className="flex items-center gap-1.5 text-green-400">
            <Check className="w-3.5 h-3.5" />
            <span>SYNCED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
