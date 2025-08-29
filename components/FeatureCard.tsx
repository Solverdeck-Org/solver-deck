import { FaCheck } from "react-icons/fa6";

export default function FeatureCard() {
  const features = [
    "Smart, AI-Driven Decisions",
    "24/7 Automated Workflows",
    "Scalable & Cost-Effective",
    "Instant Data Processing",
    "Seamless System Integration",
    "Consistent & Reliable Output",
  ];

  return (
    <div className="relative max-w-md p-6 rounded-lg text-white bg-black border border-white/10 overflow-hidden">
      {/* Violet Storm Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(24,0,173,0.75), transparent 70%), #000000",
        }}
      />

      {/* Content */}
      <div className="relative">
        <h2 className="text-xl font-semibold mb-4">
          Solverdeck AI Automation
        </h2>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <FaCheck />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
