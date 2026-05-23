import { PERFORMANCE_MODELS } from "./pricing-data";

export function PerformanceModels() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-outfit font-semibold text-white tracking-tight">
          Performance-based models
        </h2>
        <p className="text-white text-sm font-outfit leading-relaxed max-w-xl">
          Prefer to pay only when we deliver? We offer performance-based pricing for qualifying clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PERFORMANCE_MODELS.map((model) => (
          <div
            key={model.model}
            className="flex flex-col gap-4 p-6 rounded-xl border border-white/10 bg-white/[0.02]"
          >
            <span className="text-white font-outfit font-semibold text-base">{model.model}</span>
            <p className="text-white text-sm font-outfit leading-relaxed">{model.offer}</p>
            <div className="pt-3 border-t border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white block mb-1">
                Example
              </span>
              <p className="text-white text-xs font-outfit leading-relaxed">{model.example}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
