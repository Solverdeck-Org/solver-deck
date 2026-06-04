"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface TierPrice {
  oneOff?: string | null;
  monthly?: string | null;
  details?: (string | null)[] | null;
}

interface PricingRow {
  _key: string;
  label?: string | null;
  note?: string | null;
  starter?: TierPrice | null;
  growth?: TierPrice | null;
  enterprise?: TierPrice | null;
}

interface PricingSection {
  _id: string;
  sectionTitle?: string | null;
  rows?: PricingRow[] | null;
}

type PricingSections = PricingSection[];

const TIERS = ["Starter", "Growth", "Enterprise"] as const;

const TIER_SUBTITLES = {
  Starter: "For small teams & early-stage businesses",
  Growth: "For scaling businesses",
  Enterprise: "For complex, high-volume needs",
} as const;

function hasDetails(row: PricingRow) {
  return [row.starter, row.growth, row.enterprise].some(
    (t) => (t?.details?.filter(Boolean).length ?? 0) > 0,
  );
}

function Cell({ value }: { value: string | null | undefined }) {
  return (
    <td className="px-4 py-4 text-center">
      <span className="text-white font-outfit text-sm">{value || "—"}</span>
    </td>
  );
}

function DetailsColumn({ tier, price }: { tier: string; price?: TierPrice | null }) {
  const items = price?.details?.filter((d): d is string => Boolean(d)) ?? [];
  return (
    <div className="flex flex-col gap-2">
      <span className="text-white font-outfit text-sm font-semibold">{tier}</span>
      {items.length ? (
        <ul className="flex flex-col gap-1.5">
          {items.map((item) => (
            <li key={item} className="text-white/70 font-outfit text-xs leading-relaxed flex gap-2">
              <span aria-hidden className="text-white/40">—</span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <span className="text-white/40 font-outfit text-xs">Not included</span>
      )}
    </div>
  );
}

function ServiceRow({ row }: { row: PricingRow }) {
  const [open, setOpen] = useState(false);
  const canExpand = hasDetails(row);

  return (
    <>
      <tr className="border-b border-white/5 transition-colors duration-150 hover:bg-white/2">
        <td className="px-6 py-4">
          <span className="text-white font-outfit text-sm font-medium">{row.label}</span>
          {row.note && (
            <span className="block text-white text-[11px] font-outfit mt-0.5">{row.note}</span>
          )}
          {canExpand && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-2 inline-flex items-center gap-1 text-white/60 hover:text-white text-[11px] font-outfit transition-colors cursor-pointer"
            >
              {open ? "Hide details" : "Show details"}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </td>
        <Cell value={row.starter?.oneOff} />
        <td className="px-4 py-4 text-center border-r border-white/5">
          <span className="text-white font-outfit text-sm">{row.starter?.monthly || "—"}</span>
        </td>
        <Cell value={row.growth?.oneOff} />
        <td className="px-4 py-4 text-center border-r border-white/5">
          <span className="text-white font-outfit text-sm">{row.growth?.monthly || "—"}</span>
        </td>
        <Cell value={row.enterprise?.oneOff} />
        <td className="px-4 py-4 text-center">
          <span className="text-white font-outfit text-sm">{row.enterprise?.monthly || "—"}</span>
        </td>
      </tr>

      {canExpand && open && (
        <tr className="border-b border-white/5 bg-white/2">
          <td colSpan={7} className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DetailsColumn tier="Starter" price={row.starter} />
              <DetailsColumn tier="Growth" price={row.growth} />
              <DetailsColumn tier="Enterprise" price={row.enterprise} />
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

function SectionRows({ section }: { section: PricingSection }) {
  return (
    <>
      <tr>
        <td
          colSpan={7}
          className="px-6 pt-10 pb-3 text-[10px] font-outfit font-semibold tracking-[0.15em] uppercase text-white border-b border-white/10"
        >
          {section.sectionTitle ?? ""}
        </td>
      </tr>
      {section.rows?.map((row) => (
        <ServiceRow key={row._key} row={row} />
      ))}
    </>
  );
}

export function PricingTable({ sections }: { sections: PricingSections }) {
  if (!sections.length) return null;
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[900px] border-collapse">
        <thead>
          <tr className="border-b border-white/10 bg-black">
            <th className="px-6 py-6 text-left w-[28%]" />
            {TIERS.map((tier) => (
              <th key={tier} colSpan={2} className="px-6 py-6 text-center border-l border-white/10">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-white font-outfit font-semibold text-lg tracking-tight">{tier}</span>
                  <span className="text-white text-[11px] font-outfit font-normal leading-tight max-w-[180px]">
                    {TIER_SUBTITLES[tier]}
                  </span>
                </div>
              </th>
            ))}
          </tr>
          <tr className="border-b border-white/10 bg-black">
            <th className="px-6 py-3 text-left">
              <span className="text-white text-[10px] font-outfit uppercase tracking-widest">Service</span>
            </th>
            {TIERS.map((tier) => (
              <React.Fragment key={tier}>
                <th className="px-4 py-3 text-center border-l border-white/10 w-[12%]">
                  <span className="text-white text-[10px] font-outfit uppercase tracking-widest">One-off</span>
                </th>
                <th className="px-4 py-3 text-center w-[12%]">
                  <span className="text-white text-[10px] font-outfit uppercase tracking-widest">Monthly</span>
                </th>
              </React.Fragment>
            ))}
          </tr>
        </thead>

        <tbody>
          {sections.map((section) => (
            <SectionRows key={section._id} section={section} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
