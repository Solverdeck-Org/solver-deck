import Image from "next/image";
import { PhaseFrame } from "./PhaseFrame";
import { PixelBlurGrid } from "./PixelBlurGrid";

const BLURRED_CELLS = new Set([
  "3-0","3-1","3-2","3-3","3-4","3-5","3-6","3-7",
  "2-1","2-2","2-4","2-6","2-7",
  "1-3","1-5",
  "0-6",
]);

interface StrategyVisualProps {
  isActive: boolean;
}

export function StrategyVisual({ isActive }: StrategyVisualProps) {
  return (
    <PhaseFrame isActive={isActive} phaseId="phase-02">
      <div className="absolute bottom-[10%] left-[8%] w-[55%] aspect-3/4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 z-10 overflow-hidden">
        <Image src="/strategy.jpg" alt="Strategy Process" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
        <PixelBlurGrid cols={4} rows={8} blurredCells={BLURRED_CELLS} className="absolute right-0 top-0 bottom-0 w-[50%]" />
      </div>
      <div className="absolute top-[15%] right-[8%] w-[50%] aspect-video shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-white/10 z-20 overflow-hidden group">
        <Image src="/strategy2.jpg" alt="Strategy Details" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" priority />
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none group-hover:bg-black/0 transition-colors duration-[2s]" />
      </div>
    </PhaseFrame>
  );
}
