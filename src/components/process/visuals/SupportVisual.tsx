import { ContributionGraphSvg } from "./ContributionGraphSvg";
import { DeploymentDashboardSvg } from "./DeploymentDashboardSvg";
import { PhaseFrame } from "./PhaseFrame";

interface SupportVisualProps {
  isActive: boolean;
}

export function SupportVisual({ isActive }: SupportVisualProps) {
  return (
    <PhaseFrame isActive={isActive} phaseId="phase-05">
      <div className="absolute top-[5%] right-[5%] w-[58%] z-20 drop-shadow-[0_30px_70px_rgba(0,0,0,0.9)] bg-[#0a0a0a] rounded-xl border border-white/5 overflow-hidden">
        <DeploymentDashboardSvg />
      </div>
      <div className="absolute bottom-[8%] left-[5%] w-[55%] z-30 drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] bg-[#0d1117] rounded-xl border border-[#21262d] overflow-hidden">
        <ContributionGraphSvg />
      </div>
    </PhaseFrame>
  );
}
