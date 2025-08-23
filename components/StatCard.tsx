import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function StatCard({ icon, title, description }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg p-6 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] bg-[#070707]">
      <div className="text-3xl mb-3 text-white">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-300 text-sm leading-relaxed">{description}</p>

      <div
        aria-hidden
        className="absolute -right-14 -bottom-14 w-[260px] h-[260px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(53,1,54,0.55) 0%, rgba(53,1,54,0.22) 18%, rgba(53,1,54,0.06) 35%, transparent 60%)",
          filter: "blur(28px)",
        }}
      />
    </div>
  );
}
