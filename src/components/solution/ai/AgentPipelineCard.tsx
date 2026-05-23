import { Bot, GitBranch, Play, Zap } from "lucide-react";

export function AgentPipelineCard() {
  return (
    <div className="feature-card bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl relative">
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between text-[11px] text-white/50 bg-[#0f0f0f] font-mono tracking-widest uppercase">
        <span>WORKFLOW / AGENT_PIPELINE</span>
        <GitBranch className="w-3.5 h-3.5 text-primary" />
      </div>
      <div className="p-6 flex flex-col gap-5 flex-1 font-outfit justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Play className="w-4 h-4 text-primary animate-pulse" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">1. Trigger: Inbound Email</h4>
              <p className="text-[10px] text-white/50">Categorized via NLP</p>
            </div>
          </div>
          <div className="h-4 border-l border-dashed border-white/20 ml-7" />
          <div className="flex items-center gap-4 bg-white/5 border border-primary/30 p-3 rounded-xl shadow-[0_0_15px_rgba(var(--primary),0.1)]">
            <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-semibold text-white">2. Agentic Reasoning</h4>
                <span className="text-[8px] bg-primary/20 text-primary px-1 rounded-full font-bold">GPT-4o</span>
              </div>
              <p className="text-[10px] text-white/50">Extracting intent & entity metadata</p>
            </div>
          </div>
          <div className="h-4 border-l border-dashed border-white/20 ml-7" />
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">3. Action: Auto-Response</h4>
              <p className="text-[10px] text-white/50">Draft personalized reply & update CRM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[11px] text-white/40">
          <span>Status: Running autonomously</span>
          <span className="text-green-400 animate-pulse font-medium">● ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
