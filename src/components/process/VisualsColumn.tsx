"use client";

import { DiscoveryVisual } from "./visuals/DiscoveryVisual";
import { ImplementationVisual } from "./visuals/ImplementationVisual";
import { PhaseBackground } from "./visuals/PhaseBackground";
import { StrategyVisual } from "./visuals/StrategyVisual";
import { SupportVisual } from "./visuals/SupportVisual";
import { TestingVisual } from "./visuals/TestingVisual";

interface VisualsColumnProps {
  activePhaseIndex: number;
}

export function VisualsColumn({ activePhaseIndex }: VisualsColumnProps) {
  return (
    <div className="relative w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <PhaseBackground />
      <div className="w-full h-full relative flex items-center justify-center">
        <DiscoveryVisual isActive={activePhaseIndex === 0} />
        <StrategyVisual isActive={activePhaseIndex === 1} />
        <ImplementationVisual isActive={activePhaseIndex === 2} />
        <TestingVisual isActive={activePhaseIndex === 3} />
        <SupportVisual isActive={activePhaseIndex === 4} />
      </div>
    </div>
  );
}
