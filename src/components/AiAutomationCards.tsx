"use client";

import {
  Bot,
  Cpu,
  GitBranch,
  Play,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { forwardRef } from "react";

export const AiAutomationCards = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
      {/* Card 1: Agentic Workflow Pipeline */}
      <div className="feature-card bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl relative">
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between text-[11px] text-white/50 bg-[#0f0f0f] font-mono tracking-widest uppercase">
          <span>WORKFLOW / AGENT_PIPELINE</span>
          <GitBranch className="w-3.5 h-3.5 text-primary" />
        </div>
        <div className="p-6 flex flex-col gap-5 flex-1 font-outfit justify-between">
          <div className="flex flex-col gap-4">
            {/* Node 1 */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Play className="w-4 h-4 text-primary animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">
                  1. Trigger: Inbound Email
                </h4>
                <p className="text-[10px] text-white/50">Categorized via NLP</p>
              </div>
            </div>

            {/* Dotted connector */}
            <div className="h-4 border-l border-dashed border-white/20 ml-7" />

            {/* Node 2 */}
            <div className="flex items-center gap-4 bg-white/5 border border-primary/30 p-3 rounded-xl shadow-[0_0_15px_rgba(var(--primary),0.1)]">
              <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-semibold text-white">
                    2. Agentic Reasoning
                  </h4>
                  <span className="text-[8px] bg-primary/20 text-primary px-1 rounded-full font-bold">
                    GPT-4o
                  </span>
                </div>
                <p className="text-[10px] text-white/50">
                  Extracting intent & entity metadata
                </p>
              </div>
            </div>

            {/* Dotted connector */}
            <div className="h-4 border-l border-dashed border-white/20 ml-7" />

            {/* Node 3 */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">
                  3. Action: Auto-Response
                </h4>
                <p className="text-[10px] text-white/50">
                  Draft personalized reply & update CRM
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[11px] text-white/40">
            <span>Status: Running autonomously</span>
            <span className="text-green-400 animate-pulse font-medium">
              ● ACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Card 2: Custom LLM Performance & Inference */}
      <div className="feature-card bg-[#111111] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl relative">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between text-[11px] text-white/50 bg-[#141414] font-medium font-outfit">
          <span>Inference Engine</span>
          <Cpu className="w-4 h-4" />
        </div>
        <div className="p-6 flex flex-col gap-6 flex-1 font-outfit justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-[12px] text-white/50 block font-medium">
              Model Deployment
            </span>
            <div className="border border-primary/50 rounded-lg p-3 bg-black/50 text-white flex items-center justify-between shadow-[0_0_15px_rgba(var(--primary),0.2)]">
              <span className="text-xs font-mono">
                solver-deck-intelligence-v3
              </span>
              <span className="text-[9px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-md font-mono">
                ONLINE
              </span>
            </div>

            <div className="mt-2 flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/60">Average Latency</span>
                <span className="font-mono text-white font-medium">
                  18ms / token
                </span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[85%] rounded-full" />
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-white/60">Context Window</span>
                <span className="font-mono text-white font-medium">
                  128k Tokens
                </span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[95%] rounded-full" />
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <div>
                <p className="text-xs text-white">Daily Cost Optimization</p>
                <p className="text-[10px] text-white/50">
                  Smart routing active
                </p>
              </div>
            </div>
            <span className="text-sm font-semibold text-green-400">-42%</span>
          </div>
        </div>
      </div>

      {/* Card 3: Workflow Automation Metrics */}
      <div className="feature-card bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl">
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between text-[12px] text-white bg-[#0f0f0f] font-medium font-outfit">
          <span>Operations Intelligence</span>
          <TrendingUp className="w-4 h-4 text-white/50" />
        </div>
        <div className="p-6 flex flex-col gap-6 flex-1 font-outfit justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-[12px] text-white/50 block font-medium">
              Efficiency Index
            </span>
            <div className="text-4xl font-semibold text-white font-outfit tracking-tight">
              420 Hours
            </div>
            <p className="text-[11px] text-white/40">
              Total developer and staff hours saved this month
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-xl border border-white/5">
            <div className="flex justify-between text-xs text-white/70">
              <span>Automations Ran</span>
              <span className="font-mono font-medium text-white">124,592</span>
            </div>
            <div className="flex justify-between text-xs text-white/70">
              <span>Success Rate</span>
              <span className="font-mono font-medium text-green-400">
                99.98%
              </span>
            </div>
            <div className="flex justify-between text-xs text-white/70">
              <span>API Cost Savings</span>
              <span className="font-mono font-medium text-white">$4,850</span>
            </div>
          </div>

          <button
            type="button"
            className="bg-white/10 hover:bg-white/20 text-white text-[12px] font-medium px-4 py-3 rounded-lg w-full text-center transition-colors"
          >
            Optimize Workflows
          </button>
        </div>
      </div>
    </div>
  );
});

AiAutomationCards.displayName = "AiAutomationCards";
