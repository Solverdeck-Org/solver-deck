import { Calendar, CreditCard, Database, Globe, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceRow {
  label: string;
  status: string;
  statusColor: string;
  Icon: LucideIcon;
}

const SERVICES: ServiceRow[] = [
  { label: "Inventory Sync", status: "Ready", statusColor: "text-green-400", Icon: Database },
  { label: "Global CDN", status: "Ready", statusColor: "text-green-400", Icon: Globe },
  { label: "Stripe Webhooks", status: "Testing", statusColor: "text-yellow-400", Icon: CreditCard },
];

export function ReleasePipelineCard() {
  return (
    <div className="feature-card bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl">
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between text-[12px] text-white bg-[#0f0f0f] font-medium font-outfit">
        <span>E-Commerce Release Pipeline</span>
        <Settings className="w-4 h-4 text-white/50" />
      </div>
      <div className="p-6 flex flex-col gap-6 flex-1 font-outfit">
        <div>
          <span className="text-[12px] text-white/50 mb-2 block font-medium">Set deployment date</span>
          <div className="border border-white/10 rounded-lg p-3.5 bg-black text-white/40 flex justify-between items-center hover:border-white/20 transition-colors cursor-pointer">
            <span className="text-sm">mm/dd/yyyy</span>
            <Calendar className="w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <div className="flex justify-between items-center text-[11px] text-white/50 mb-2 font-medium uppercase tracking-wider">
            <span>Services</span>
            <span>Action</span>
          </div>
          {SERVICES.map(({ label, status, statusColor, Icon }) => (
            <div key={label} className="flex justify-between items-center py-3 border-b border-white/5 hover:bg-white/2 -mx-2 px-2 rounded-md transition-colors">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Icon className="w-4 h-4 text-white/30" />
                <span className="wrap-break-word">{label}</span>
              </div>
              <span className={`text-[12px] font-medium whitespace-nowrap ${statusColor}`}>{status}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-4">
          <button type="button" className="bg-white/5 text-white/40 text-[12px] font-medium px-4 py-3 rounded-lg w-full text-left hover:bg-white/10 transition-colors">
            Run Deployment
          </button>
        </div>
      </div>
    </div>
  );
}
