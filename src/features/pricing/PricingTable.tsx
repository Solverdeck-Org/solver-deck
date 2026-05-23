import React from "react";

interface TierPrice {
  oneOff?: string | null;
  monthly?: string | null;
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

function Cell({ value }: { value: string | null | undefined }) {
  return (
    <td className="px-4 py-4 text-center">
      <span className="text-white font-outfit text-sm">{value || "—"}</span>
    </td>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <tr>
      <td
        colSpan={7}
        className="px-6 pt-10 pb-3 text-[10px] font-mono font-semibold tracking-[0.15em] uppercase text-white border-b border-white/10"
      >
        {title}
      </td>
    </tr>
  );
}

function SectionRows({ section }: { section: PricingSection }) {
  return (
    <>
      <SectionHeader title={section.sectionTitle ?? ""} />
      {section.rows?.map((row: PricingRow, i: number) => (
        <tr
          key={row._key}
          className={`border-b border-white/5 transition-colors duration-150 hover:bg-white/2 ${
            i % 2 === 0 ? "bg-transparent" : "bg-white/1"
          }`}
        >
          <td className="px-6 py-4">
            <span className="text-white font-outfit text-sm font-medium">{row.label}</span>
            {row.note && (
              <span className="block text-white text-[11px] font-mono mt-0.5">{row.note}</span>
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
                  <span className="text-white text-[11px] font-mono font-normal leading-tight max-w-[180px]">
                    {TIER_SUBTITLES[tier]}
                  </span>
                </div>
              </th>
            ))}
          </tr>
          <tr className="border-b border-white/10 bg-black">
            <th className="px-6 py-3 text-left">
              <span className="text-white text-[10px] font-mono uppercase tracking-widest">Service</span>
            </th>
            {TIERS.map((tier) => (
              <React.Fragment key={tier}>
                <th className="px-4 py-3 text-center border-l border-white/10 w-[12%]">
                  <span className="text-white text-[10px] font-mono uppercase tracking-widest">One-off</span>
                </th>
                <th className="px-4 py-3 text-center w-[12%]">
                  <span className="text-white text-[10px] font-mono uppercase tracking-widest">Monthly</span>
                </th>
              </React.Fragment>
            ))}
          </tr>
        </thead>

        <tbody>
          {sections.map((section: PricingSection) => (
            <SectionRows key={section._id} section={section} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
