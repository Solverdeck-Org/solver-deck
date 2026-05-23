import { MoreHorizontal } from "lucide-react";

export function StudioCard() {
  return (
    <div className="feature-card bg-[#111111] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl relative">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between text-[11px] text-white/50 bg-[#141414] font-medium font-outfit">
        <span>App / Dashboard / Overview</span>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[9px] text-primary-foreground font-bold">WF</div>
          <MoreHorizontal className="w-4 h-4" />
        </div>
      </div>
      <div className="p-6 flex flex-col gap-6 flex-1 font-outfit relative z-10">
        <div>
          <span className="text-[12px] text-white/50 mb-2 block font-medium">Project Name</span>
          <div className="border border-primary/50 rounded-lg p-3 bg-black/50 text-white flex items-center justify-between shadow-[0_0_15px_rgba(var(--primary),0.2)]">
            <span className="text-sm wrap-break-word">Cross-Platform Native Client</span>
            <div className="flex items-center justify-center w-6 h-6 border-l border-white/10 pl-3">
              <div className="w-0.5 h-4 bg-primary animate-pulse" />
            </div>
          </div>
        </div>
        <div>
          <span className="text-[12px] text-white/50 mb-2 block font-medium">Description</span>
          <div className="border border-white/10 rounded-lg p-4 bg-black/50 text-white/70 text-sm leading-relaxed wrap-break-word">
            Native performance for iOS, Android, macOS, and Windows. Built once, deployed everywhere with flawless UX.
          </div>
        </div>
        <div className="mt-auto flex justify-between items-center border-t border-white/5 pt-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-bold">JD</div>
            <span className="text-[11px] text-white/40">John updated just now</span>
          </div>
          <button type="button" className="bg-white/10 hover:bg-white/20 text-white text-[12px] font-medium px-5 py-2 rounded-md transition-colors">Deploy</button>
        </div>
      </div>
    </div>
  );
}
