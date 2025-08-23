import { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="bg-[#0a0a0a] w-[350px] md:w-120 p-6 rounded-lg border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
      {/* Icon + Title same line */}
      <div className="flex items-center gap-3">
        <div className="text-2xl text-white">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      {/* Description */}
      <p className="mt-2 text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
