interface ChartBar { x: number; y: number; h: number; active?: boolean }

const CHART_BARS: ChartBar[] = [
  { x: 20, y: 170, h: 40 }, { x: 32, y: 155, h: 55 }, { x: 44, y: 140, h: 70 },
  { x: 56, y: 160, h: 50 }, { x: 68, y: 145, h: 65 }, { x: 80, y: 130, h: 80, active: true },
  { x: 92, y: 125, h: 85, active: true }, { x: 104, y: 135, h: 75, active: true },
  { x: 116, y: 150, h: 60 }, { x: 128, y: 160, h: 50 }, { x: 140, y: 140, h: 70 },
  { x: 152, y: 125, h: 85, active: true }, { x: 164, y: 120, h: 90, active: true },
  { x: 176, y: 130, h: 80, active: true }, { x: 188, y: 145, h: 65 }, { x: 200, y: 155, h: 55 },
  { x: 212, y: 160, h: 50 }, { x: 224, y: 135, h: 75 }, { x: 236, y: 125, h: 85, active: true },
  { x: 248, y: 115, h: 95, active: true }, { x: 260, y: 120, h: 90, active: true },
  { x: 272, y: 140, h: 70 }, { x: 284, y: 155, h: 55 }, { x: 296, y: 165, h: 45 },
  { x: 308, y: 150, h: 60 }, { x: 320, y: 135, h: 75, active: true },
  { x: 332, y: 125, h: 85, active: true }, { x: 344, y: 130, h: 80, active: true },
  { x: 356, y: 145, h: 65 }, { x: 368, y: 160, h: 50 }, { x: 380, y: 140, h: 70 },
  { x: 392, y: 130, h: 80, active: true }, { x: 404, y: 120, h: 90, active: true },
  { x: 416, y: 115, h: 95, active: true }, { x: 428, y: 125, h: 85, active: true },
];

const STATS = [
  { x: 20, label: "Crash Free Rate", value: "99.7%", color: "#4ade80" },
  { x: 140, label: "P75 Latency", value: "124ms", color: "#facc15" },
  { x: 260, label: "Errors (24h)", value: "3", color: "#f87171" },
  { x: 370, label: "Apdex", value: "0.98", color: "#4ade80" },
] as const;

const AXIS_LABELS = [
  { x: 20, label: "00:00" }, { x: 120, label: "06:00" },
  { x: 220, label: "12:00" }, { x: 320, label: "18:00" }, { x: 415, label: "Now" },
] as const;

export function SentryDashboardSvg() {
  return (
    <svg viewBox="0 0 460 260" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sentry Error Monitoring Dashboard">
      <title>Sentry Error Monitoring Dashboard</title>
      <rect width="460" height="40" fill="#2b1a3d" />
      <path d="M22 28c-1.5-2.6-0.6-5.9 2-7.4l5.8 10.1c-2.9 0-5.6-1-7.8-2.7zm10.4-7.4a5.4 5.4 0 0 1 7.4 2l-5.8 10c-2.8 0-5.5-1-7.5-2.6l5.9-9.4z" fill="#e1567c" transform="translate(2, 0) scale(0.9)" />
      <text x="48" y="25" fill="#e1567c" fontSize="13" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">sentry</text>
      <text x="160" y="25" fill="#8b7a9e" fontSize="11" fontFamily="system-ui, sans-serif">Issues</text>
      <text x="210" y="25" fill="#fff" fontSize="11" fontFamily="system-ui, sans-serif">Performance</text>
      <rect x="210" y="32" width="68" height="2" rx="1" fill="#e1567c" />
      <text x="290" y="25" fill="#8b7a9e" fontSize="11" fontFamily="system-ui, sans-serif">Alerts</text>
      {STATS.map((s) => (
        <g key={s.x}>
          <text x={s.x} y="65" fill="#ccc" fontSize="10" fontFamily="system-ui, sans-serif">{s.label}</text>
          <text x={s.x} y="82" fill={s.color} fontSize="18" fontWeight="bold" fontFamily="system-ui, sans-serif">{s.value}</text>
        </g>
      ))}
      <line x1="15" y1="95" x2="445" y2="95" stroke="#3d2a54" strokeWidth="1" />
      <text x="20" y="115" fill="#8b7a9e" fontSize="10" fontFamily="system-ui, sans-serif">Transaction throughput — last 24h</text>
      <g opacity="0.9">
        {CHART_BARS.map((bar) => (
          <rect key={bar.x} x={bar.x} y={bar.y} width="8" height={bar.h} rx="2" fill={bar.active ? "#7c3aed" : "#362050"} />
        ))}
      </g>
      <line x1="15" y1="215" x2="445" y2="215" stroke="#3d2a54" strokeWidth="1" />
      {AXIS_LABELS.map((l) => (
        <text key={l.x} x={l.x} y="230" fill="#665680" fontSize="9" fontFamily="system-ui, sans-serif">{l.label}</text>
      ))}
      <circle cx="435" cy="248" r="4" fill="#4ade80" opacity="0.8" />
      <text x="407" y="252" fill="#4ade80" fontSize="9" fontFamily="system-ui, sans-serif">Live</text>
    </svg>
  );
}
