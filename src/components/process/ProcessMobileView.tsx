"use client";

import { ChevronRight } from "lucide-react";
import { phases } from "./types";

interface ProcessMobileViewProps {
  activePhaseIndex: number;
  onNavClick: (index: number) => void;
}

export function ProcessMobileView({ activePhaseIndex, onNavClick }: ProcessMobileViewProps) {
  const active = phases[activePhaseIndex];
  return (
    <div className="col-span-12 lg:hidden flex flex-col h-full justify-between p-6 bg-black text-white font-outfit">
      <div className="flex items-center gap-1.5 py-4 border-b border-white/10 w-full justify-center">
        {phases.map((phase, idx) => (
          <button
            key={phase.id}
            type="button"
            onClick={() => onNavClick(idx)}
            className={`w-10 h-10 rounded-none font-mono text-xs font-bold border transition-all duration-200 cursor-pointer ${
              idx === activePhaseIndex
                ? "bg-white text-black border-white"
                : "bg-transparent border-white/20 text-white"
            }`}
          >
            {phase.num}
          </button>
        ))}
      </div>
      <div className="flex-1 flex flex-col justify-center gap-6 py-6 text-left">
        <span className="font-mono text-[9px] uppercase tracking-widest text-white font-bold">
          PHASE {active.num} {"// ACTIVE_WORKFLOW"}
        </span>
        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-tight">{active.subtitle}</h3>
        <p className="text-sm text-white leading-relaxed">{active.content}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-mono text-[10px] tracking-wider text-white uppercase">Key Focus:</span>
          <span className="text-xs font-mono text-white font-bold border border-white px-2 py-0.5 bg-white/5 rounded-none">
            {active.highlight}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 py-4 w-full text-[10px] text-white font-mono">
        <span>TAP TO TRANSITION</span>
        <div className="flex items-center gap-1">
          <span>ACTIVE</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
