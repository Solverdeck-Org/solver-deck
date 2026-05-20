import { Bot, Check, MessageCircle, Send, Zap } from "lucide-react";
import { forwardRef } from "react";

const SlackIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" role="img">
    <title>Slack Logo</title>
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1-2.52-2.522A2.528 2.528 0 0 1 8.823 0a2.528 2.528 0 0 1 2.52 2.521v2.522H8.823zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043zm10.135 3.779a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.262 0a2.528 2.528 0 0 1-2.52 2.522h-5.043a2.528 2.528 0 0 1-2.522-2.522V5.043a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.781 10.135a2.528 2.528 0 0 1 2.52 2.522A2.528 2.528 0 0 1 15.177 24a2.528 2.528 0 0 1-2.52-2.521v-2.522h2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043z" />
  </svg>
);

export const ChatbotCards = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
      {/* Card 1: Customer Support Chatbot UI */}
      <div className="feature-card bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl relative">
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-[#0f0f0f]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] text-white/70 font-outfit font-medium uppercase tracking-wider">
              Support Agent AI
            </span>
          </div>
          <span className="text-[10px] text-white/30 font-mono">
            LATENCY: 80ms
          </span>
        </div>
        <div className="p-5 flex flex-col gap-4 flex-1 justify-between bg-black/40">
          <div className="flex flex-col gap-3.5 flex-1 overflow-y-auto pr-1">
            {/* User message */}
            <div className="flex gap-2.5 items-start self-end max-w-[85%]">
              <div className="bg-white/10 text-white text-xs p-3 rounded-2xl rounded-tr-none leading-relaxed font-outfit">
                How do I upgrade to enterprise and link custom domains?
              </div>
            </div>

            {/* AI Agent reply */}
            <div className="flex gap-2.5 items-start max-w-[85%]">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                <Bot className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="bg-white/5 border border-white/5 text-white/90 text-xs p-3 rounded-2xl rounded-tl-none leading-relaxed font-outfit">
                I can help you with that! Enterprise plans include unlimited
                domains. I can process this upgrade for you right here. Shall we
                proceed?
              </div>
            </div>

            {/* User message */}
            <div className="flex gap-2.5 items-start self-end max-w-[85%]">
              <div className="bg-white/10 text-white text-xs p-3 rounded-2xl rounded-tr-none leading-relaxed font-outfit">
                Yes please!
              </div>
            </div>
          </div>

          <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-2.5 flex items-center justify-between">
            <span className="text-[11px] text-white/40 font-outfit pl-2">
              Type a message...
            </span>
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Send className="w-3.5 h-3.5 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Slack Internal Assistant */}
      <div className="feature-card bg-[#111111] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl relative">
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-2">
            <SlackIcon className="w-4 h-4 text-purple-400" />
            <span className="text-[11px] text-white/70 font-outfit font-medium uppercase tracking-wider">
              #tech-ops
            </span>
          </div>
          <span className="text-[9px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded font-mono font-bold">
            SLACK INTERACTIVE
          </span>
        </div>
        <div className="p-5 flex flex-col gap-4 flex-1 justify-between font-outfit">
          <div className="flex flex-col gap-4 flex-1">
            {/* User prompt */}
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 font-bold shrink-0 mt-0.5">
                JD
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-semibold text-white/90">
                    John Dev
                  </span>
                  <span className="text-[9px] text-white/30">10:15 AM</span>
                </div>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  @Solverbot which env config handles custom API isolation?
                </p>
              </div>
            </div>

            {/* Bot response */}
            <div className="flex gap-3 items-start bg-white/3 border border-white/5 p-3 rounded-xl">
              <div className="w-7 h-7 rounded bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-semibold text-white/95">
                    Solverbot
                  </span>
                  <span className="text-[8px] bg-primary/20 text-primary px-1 rounded font-mono">
                    APP
                  </span>
                  <span className="text-[9px] text-white/30">10:15 AM</span>
                </div>
                <p className="text-xs text-white/80 mt-1.5 leading-relaxed font-light">
                  🔍 Querying internal technical documentation vector store...
                </p>
                <div className="border-l-2 border-primary/60 pl-3 mt-2 py-1 text-[11px] text-white/60 leading-relaxed font-mono">
                  Custom API keys and isolated environments are handled via the{" "}
                  <span className="text-yellow-200">isolatedKeys</span> block
                  inside your{" "}
                  <span className="text-green-400">config.json</span>.
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

      {/* Card 3: Social Media Lead Capture Bot */}
      <div className="feature-card bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl">
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-[#0f0f0f]">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-pink-400" />
            <span className="text-[11px] text-white/70 font-outfit font-medium uppercase tracking-wider">
              Social Automation
            </span>
          </div>
          <span className="text-[10px] text-white/30 font-mono">
            INSTAGRAM DM
          </span>
        </div>
        <div className="p-5 flex flex-col gap-4 flex-1 justify-between font-outfit">
          <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
            {/* User message */}
            <div className="flex gap-2.5 items-start self-end max-w-[85%]">
              <div className="bg-pink-500/10 text-white text-xs p-3 rounded-2xl rounded-tr-none leading-relaxed">
                Hi! Do you build custom SaaS platforms?
              </div>
            </div>

            {/* AI Agent reply */}
            <div className="flex gap-2.5 items-start max-w-[85%]">
              <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-pink-500/20">
                <Bot className="w-3.5 h-3.5 text-pink-400" />
              </div>
              <div className="bg-white/5 text-white/90 text-xs p-3 rounded-2xl rounded-tl-none leading-relaxed">
                Yes we do! We build high-performance custom SaaS platforms,
                native clients, and workflows. Let&apos;s schedule a 10-minute
                demo. What is your business email?
              </div>
            </div>

            {/* User message */}
            <div className="flex gap-2.5 items-start self-end max-w-[85%]">
              <div className="bg-pink-500/10 text-white text-xs p-3 rounded-2xl rounded-tr-none leading-relaxed font-mono text-[11px]">
                john@acme.com
              </div>
            </div>

            {/* Bot response */}
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
            <span className="text-pink-400 font-semibold uppercase tracking-wider">
              CRM Synced
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

ChatbotCards.displayName = "ChatbotCards";
