"use client";

import {
  Calendar,
  Copy,
  CreditCard,
  Database,
  Globe,
  MoreHorizontal,
  Settings,
} from "lucide-react";
import { forwardRef } from "react";

export const SoftwareDevelopmentCards = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
      {/* Card 1: Code/Terminal Style */}
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
          <span className="text-pink-500">import</span>{" "}
          {"{ defineApp, defineRoute }"}{" "}
          <span className="text-pink-500">from</span>{" "}
          <span className="text-green-400">&apos;@solverdeck/core&apos;</span>
          {"\n\n"}
          <span className="text-pink-500">export const</span>{" "}
          <span className="text-blue-400">enterpriseApp</span> ={" "}
          <span className="text-yellow-200">defineApp</span>({"{"}
          {"\n"}
          {"  "}name:{" "}
          <span className="text-green-400">&apos;saas_dashboard&apos;</span>,
          {"\n"}
          {"  "}features: [
          <span className="text-green-400">&apos;auth&apos;</span>,{" "}
          <span className="text-green-400">&apos;billing&apos;</span>,{" "}
          <span className="text-green-400">&apos;analytics&apos;</span>],
          {"\n"}
          {"  "}routes: [{"\n"}
          {"    "}
          <span className="text-yellow-200">defineRoute</span>({"{"}
          {"\n"}
          {"      "}path:{" "}
          <span className="text-green-400">&apos;/api/v1/sync&apos;</span>,
          {"\n"}
          {"      "}method:{" "}
          <span className="text-green-400">&apos;POST&apos;</span>,{"\n"}
          {"      "}handler: <span className="text-pink-500">async</span> (req,
          res) {"=>"} {"{"}
          {"\n"}
          {"        "}
          <span className="text-gray-500">
            {"// high performance sync logic"}
          </span>
          {"\n"}
          {"        "}
          <span className="text-pink-500">await</span> db.
          <span className="text-yellow-200">sync</span>(req.body){"\n"}
          {"      "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"}){"\n"}
          {"  "}]{"\n"}
          {"}"})
        </div>
      </div>

      {/* Card 2: Studio / Editor Style */}
      <div className="feature-card bg-[#111111] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl relative">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between text-[11px] text-white/50 bg-[#141414] font-medium font-outfit">
          <div className="flex gap-2 items-center">
            <span>App / Dashboard / Overview</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[9px] text-primary-foreground font-bold">
              WF
            </div>
            <MoreHorizontal className="w-4 h-4" />
          </div>
        </div>
        <div className="p-6 flex flex-col gap-6 flex-1 font-outfit relative z-10">
          <div>
            <span className="text-[12px] text-white/50 mb-2 block font-medium">
              Project Name
            </span>
            <div className="border border-primary/50 rounded-lg p-3 bg-black/50 text-white flex items-center justify-between shadow-[0_0_15px_rgba(var(--primary),0.2)]">
              <span className="text-sm wrap-break-word">
                Cross-Platform Native Client
              </span>
              <div className="flex items-center justify-center w-6 h-6 border-l border-white/10 pl-3">
                <div className="w-0.5 h-4 bg-primary animate-pulse" />
              </div>
            </div>
          </div>
          <div>
            <span className="text-[12px] text-white/50 mb-2 block font-medium">
              Description
            </span>
            <div className="border border-white/10 rounded-lg p-4 bg-black/50 text-white/70 text-sm leading-relaxed wrap-break-word">
              Native performance for iOS, Android, macOS, and Windows. Built
              once, deployed everywhere with flawless UX.
            </div>
          </div>
          <div className="mt-auto flex justify-between items-center border-t border-white/5 pt-5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-bold">
                JD
              </div>
              <span className="text-[11px] text-white/40">
                John updated just now
              </span>
            </div>
            <button
              type="button"
              className="bg-white/10 hover:bg-white/20 text-white text-[12px] font-medium px-5 py-2 rounded-md transition-colors"
            >
              Deploy
            </button>
          </div>
        </div>
      </div>

      {/* Card 3: Release / Operations Style */}
      <div className="feature-card bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group h-[450px] shadow-2xl">
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between text-[12px] text-white bg-[#0f0f0f] font-medium font-outfit">
          <span>E-Commerce Release Pipeline</span>
          <Settings className="w-4 h-4 text-white/50" />
        </div>
        <div className="p-6 flex flex-col gap-6 flex-1 font-outfit">
          <div>
            <span className="text-[12px] text-white/50 mb-2 block font-medium">
              Set deployment date
            </span>
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

            <div className="flex justify-between items-center py-3 border-b border-white/5 hover:bg-white/2 -mx-2 px-2 rounded-md transition-colors">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Database className="w-4 h-4 text-white/30" />
                <span className="wrap-break-word">Inventory Sync</span>
              </div>
              <span className="text-[12px] text-green-400 font-medium whitespace-nowrap">
                Ready
              </span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-white/5 hover:bg-white/2 -mx-2 px-2 rounded-md transition-colors">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Globe className="w-4 h-4 text-white/30" />
                <span className="wrap-break-word">Global CDN</span>
              </div>
              <span className="text-[12px] text-green-400 font-medium whitespace-nowrap">
                Ready
              </span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-white/5 hover:bg-white/2 -mx-2 px-2 rounded-md transition-colors">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <CreditCard className="w-4 h-4 text-white/30" />
                <span className="wrap-break-word">Stripe Webhooks</span>
              </div>
              <span className="text-[12px] text-yellow-400 font-medium whitespace-nowrap">
                Testing
              </span>
            </div>
          </div>

          <div className="mt-auto pt-4">
            <button
              type="button"
              className="bg-white/5 text-white/40 text-[12px] font-medium px-4 py-3 rounded-lg w-full text-left hover:bg-white/10 transition-colors"
            >
              Run Deployment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

SoftwareDevelopmentCards.displayName = "SoftwareDevelopmentCards";
