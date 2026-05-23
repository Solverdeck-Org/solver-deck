import { Copy } from "lucide-react";

export function CodeTerminalCard() {
  return (
    <div className="feature-card bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl">
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between text-[11px] font-mono text-white/50 uppercase tracking-widest bg-[#0f0f0f]">
        <div className="flex gap-6">
          <span className="text-white font-medium">API.TS</span>
          <span>TERMINAL</span>
        </div>
        <Copy className="w-3.5 h-3.5" />
      </div>
      <div className="p-6 font-mono text-xs md:text-sm leading-loose text-[#a3a3a3] flex-1 overflow-hidden relative whitespace-pre-wrap wrap-break-word">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0a0a0a] z-10 opacity-90 pointer-events-none" />
        <span className="text-pink-500">import</span>{" "}{"{ defineApp, defineRoute }"}{" "}
        <span className="text-pink-500">from</span>{" "}
        <span className="text-green-400">&apos;@solverdeck/core&apos;</span>{"\n\n"}
        <span className="text-pink-500">export const</span>{" "}
        <span className="text-blue-400">enterpriseApp</span> ={" "}
        <span className="text-yellow-200">defineApp</span>({"{"}
        {"\n"}{"  "}name: <span className="text-green-400">&apos;saas_dashboard&apos;</span>,
        {"\n"}{"  "}features: [<span className="text-green-400">&apos;auth&apos;</span>, <span className="text-green-400">&apos;billing&apos;</span>, <span className="text-green-400">&apos;analytics&apos;</span>],
        {"\n"}{"  "}routes: [{"\n"}{"    "}
        <span className="text-yellow-200">defineRoute</span>({"{"}
        {"\n"}{"      "}path: <span className="text-green-400">&apos;/api/v1/sync&apos;</span>,
        {"\n"}{"      "}method: <span className="text-green-400">&apos;POST&apos;</span>,
        {"\n"}{"      "}handler: <span className="text-pink-500">async</span> (req, res) {"=> {"}{"\n"}
        {"        "}<span className="text-gray-500">{"// high performance sync logic"}</span>
        {"\n"}{"        "}<span className="text-pink-500">await</span> db.<span className="text-yellow-200">sync</span>(req.body)
        {"\n"}{"      "}{"}"}{"\n"}{"    "}{"}"})
        {"\n"}{"  "}]{"\n"}{"}"})
      </div>
    </div>
  );
}
