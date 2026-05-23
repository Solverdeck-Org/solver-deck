import { Bot, Zap, MessageCircle } from "lucide-react";

export function SocialLeadCard() {
  return (
    <div className="feature-card bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl">
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-[#0f0f0f]">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-pink-400" />
          <span className="text-[11px] text-white/70 font-outfit font-medium uppercase tracking-wider">Social Automation</span>
        </div>
        <span className="text-[10px] text-white/30 font-mono">INSTAGRAM DM</span>
      </div>
      <div className="p-5 flex flex-col gap-4 flex-1 justify-between font-outfit">
        <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
          <div className="flex gap-2.5 items-start self-end max-w-[85%]">
            <div className="bg-pink-500/10 text-white text-xs p-3 rounded-2xl rounded-tr-none leading-relaxed">Hi! Do you build custom SaaS platforms?</div>
          </div>
          <div className="flex gap-2.5 items-start max-w-[85%]">
            <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-pink-500/20">
              <Bot className="w-3.5 h-3.5 text-pink-400" />
            </div>
            <div className="bg-white/5 text-white/90 text-xs p-3 rounded-2xl rounded-tl-none leading-relaxed">
              Yes we do! We build high-performance custom SaaS platforms, native clients, and workflows. Let&apos;s schedule a 10-minute demo. What is your business email?
            </div>
          </div>
          <div className="flex gap-2.5 items-start self-end max-w-[85%]">
            <div className="bg-pink-500/10 text-white text-xs p-3 rounded-2xl rounded-tr-none leading-relaxed font-mono text-[11px]">john@acme.com</div>
          </div>
          <div className="flex gap-2.5 items-start max-w-[85%]">
            <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-pink-500/20">
              <Bot className="w-3.5 h-3.5 text-pink-400" />
            </div>
            <div className="bg-white/5 text-white/90 text-xs p-3 rounded-2xl rounded-tl-none leading-relaxed flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span>Invited sent to john@acme.com! 🚀</span>
            </div>
          </div>
        </div>
        <div className="bg-pink-500/5 border border-pink-500/10 p-3.5 rounded-xl flex justify-between items-center text-[11px]">
          <span className="text-white/60">Lead Quality: High</span>
          <span className="text-pink-400 font-semibold uppercase tracking-wider">CRM Synced</span>
        </div>
      </div>
    </div>
  );
}
