import Image from "next/image";
import { CodeEditorSvg } from "./CodeEditorSvg";
import { PhaseFrame } from "./PhaseFrame";

interface ImplementationVisualProps {
  isActive: boolean;
}

export function ImplementationVisual({ isActive }: ImplementationVisualProps) {
  return (
    <PhaseFrame isActive={isActive} phaseId="phase-03">
      <div className="absolute top-[10%] right-[10%] w-[55%] aspect-4/3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 z-10 overflow-hidden">
        <Image src="/implementation.jpg" alt="Implementation Process" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
      </div>
      <div className="absolute bottom-[10%] left-[8%] w-[55%] z-30 drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] bg-[#0d0d0d] rounded-xl border border-white/5 overflow-hidden">
        <CodeEditorSvg />
      </div>
    </PhaseFrame>
  );
}
