import Image from "next/image";
import { PhaseFrame } from "./PhaseFrame";
import { SentryDashboardSvg } from "./SentryDashboardSvg";
import { TestRunnerSvg } from "./TestRunnerSvg";

interface TestingVisualProps {
  isActive: boolean;
}

export function TestingVisual({ isActive }: TestingVisualProps) {
  return (
    <PhaseFrame isActive={isActive} phaseId="phase-04">
      <div className="absolute top-[8%] right-[8%] w-[55%] aspect-4/3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 z-10 overflow-hidden">
        <Image src="/testing.jpg" alt="Testing Process" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
      </div>
      <div className="absolute bottom-[12%] left-[5%] w-[52%] z-30 drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] bg-[#1b1024] rounded-xl border border-white/5 overflow-hidden">
        <SentryDashboardSvg />
      </div>
      <div className="absolute top-[5%] left-[5%] w-[40%] z-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)] bg-[#0d0d0d] rounded-xl border border-white/5 overflow-hidden">
        <TestRunnerSvg />
      </div>
    </PhaseFrame>
  );
}
