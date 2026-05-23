import { Bot, Send } from "lucide-react";

export function SupportChatCard() {
  return (
    <div className="feature-card bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl relative">
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-[#0f0f0f]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[11px] text-white/70 font-outfit font-medium uppercase tracking-wider">Support Agent AI</span>
        </div>
        <span className="text-[10px] text-white/30 font-mono">LATENCY: 80ms</span>
      </div>
      <div className="p-5 flex flex-col gap-4 flex-1 justify-between bg-black/40">
        <div className="flex flex-col gap-3.5 flex-1 overflow-y-auto pr-1">
          <div className="flex gap-2.5 items-start self-end max-w-[85%]">
            <div className="bg-white/10 text-white text-xs p-3 rounded-2xl rounded-tr-none leading-relaxed font-outfit">
              How do I upgrade to enterprise and link custom domains?
            </div>
          </div>
          <div className="flex gap-2.5 items-start max-w-[85%]">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
              <Bot className="w-3.5 h-3.5 text-primary" />
            </div>
            <div className="bg-white/5 border border-white/5 text-white/90 text-xs p-3 rounded-2xl rounded-tl-none leading-relaxed font-outfit">
              I can help you with that! Enterprise plans include unlimited domains. I can process this upgrade for you right here. Shall we proceed?
            </div>
          </div>
          <div className="flex gap-2.5 items-start self-end max-w-[85%]">
            <div className="bg-white/10 text-white text-xs p-3 rounded-2xl rounded-tr-none leading-relaxed font-outfit">Yes please!</div>
          </div>
        </div>
        <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-2.5 flex items-center justify-between">
          <span className="text-[11px] text-white/40 font-outfit pl-2">Type a message...</span>
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Send className="w-3.5 h-3.5 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
