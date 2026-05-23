import Image from "next/image";
import { PhaseFrame } from "./PhaseFrame";
import { PixelBlurGrid } from "./PixelBlurGrid";

const BLURRED_CELLS = new Set([
  "0-0","0-1","0-2","0-3","0-4","0-5","0-6",
  "1-0","1-1","1-2","1-3","1-4","1-5","1-6",
  "2-1","2-3","2-4","2-6",
  "3-2","3-5",
  "4-1",
]);

interface DiscoveryVisualProps {
  isActive: boolean;
}

export function DiscoveryVisual({ isActive }: DiscoveryVisualProps) {
  return (
    <PhaseFrame isActive={isActive} phaseId="phase-01">
      <div className="absolute top-[15%] right-[10%] w-[60%] aspect-4/3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 z-10 overflow-hidden">
        <Image src="/discovery.jpg" alt="Discovery Process" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
        <PixelBlurGrid cols={5} rows={7} blurredCells={BLURRED_CELLS} className="absolute left-0 top-0 bottom-0 w-[50%]" />
      </div>
      <div className="absolute bottom-[20%] left-[10%] w-[45%] aspect-16/10 shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-white/10 z-20 overflow-hidden group">
        <Image src="/discovery2.jpg" alt="Discovery Details" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" priority />
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none group-hover:bg-black/0 transition-colors duration-[2s]" />
      </div>
    </PhaseFrame>
  );
}
