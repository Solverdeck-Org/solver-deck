const DEPLOYMENTS = [
  { y: 160, message: "fix: resolve hydration mismatch", time: "2m ago" },
  { y: 188, message: "feat: add new testimonials section", time: "1h ago" },
  { y: 216, message: "chore: dependency updates + audit", time: "5h ago" },
  { y: 244, message: "perf: optimize image loading pipeline", time: "1d ago" },
] as const;

const NAV_ITEMS = [
  { x: 160, label: "Analytics" }, { x: 230, label: "Logs" },
  { x: 275, label: "Storage" },
] as const;

export function DeploymentDashboardSvg() {
  return (
    <svg viewBox="0 0 500 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deployment and Uptime Dashboard">
      <title>Deployment and Uptime Dashboard</title>
      <rect width="500" height="42" fill="#111" />
      <polygon points="20,28 28,14 36,28" fill="#fff" />
      <text x="46" y="27" fill="#fff" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">Deployments</text>
      {NAV_ITEMS.map((n) => (
        <text key={n.x} x={n.x} y="27" fill="#555" fontSize="11" fontFamily="system-ui, sans-serif">{n.label}</text>
      ))}
      <rect x="400" y="12" width="85" height="20" rx="10" fill="#052e16" />
      <circle cx="414" cy="22" r="4" fill="#4ade80" />
      <text x="422" y="26" fill="#4ade80" fontSize="10" fontWeight="bold" fontFamily="system-ui, sans-serif">All Systems</text>
      <text x="20" y="68" fill="#888" fontSize="10" fontFamily="system-ui, sans-serif">Uptime — Last 90 days</text>
      <text x="420" y="68" fill="#4ade80" fontSize="12" fontWeight="bold" fontFamily="system-ui, sans-serif">99.99%</text>
      <g>
        {Array.from({ length: 90 }).map((_, i) => {
          const isDown = i === 34 || i === 67;
          return (
            <rect key={`uptime-${i}`} x={20 + i * 5} y="76" width="3.5" height="16" rx="1"
              fill={isDown ? "#f87171" : "#16a34a"}
              opacity={isDown ? 1 : 0.7 + (((i * 2654435761) >>> 0) % 100) / 333}
            />
          );
        })}
      </g>
      <text x="20" y="107" fill="#555" fontSize="9" fontFamily="system-ui, sans-serif">90 days ago</text>
      <text x="430" y="107" fill="#555" fontSize="9" fontFamily="system-ui, sans-serif">Today</text>
      <line x1="15" y1="118" x2="485" y2="118" stroke="#1a1a1a" strokeWidth="1" />
      <text x="20" y="138" fill="#888" fontSize="10" fontFamily="system-ui, sans-serif">Recent Deployments</text>
      {DEPLOYMENTS.map((d) => (
        <g key={d.y}>
          <circle cx="28" cy={d.y} r="5" fill="#052e16" stroke="#16a34a" strokeWidth="1.5" />
          <text x="25" y={d.y + 3} fill="#16a34a" fontSize="8" fontFamily="system-ui, sans-serif">✓</text>
          <text x="42" y={d.y + 3} fill="#ccc" fontSize="11" fontFamily="ui-monospace, monospace">{d.message}</text>
          <text x="370" y={d.y + 3} fill="#555" fontSize="10" fontFamily="system-ui, sans-serif">{d.time}</text>
          <rect x="430" y={d.y - 9} width="52" height="16" rx="8" fill="#111" stroke="#333" strokeWidth="1" />
          <text x="440" y={d.y + 4} fill="#aaa" fontSize="9" fontFamily="system-ui, sans-serif">prod</text>
        </g>
      ))}
      <line x1="15" y1="265" x2="485" y2="265" stroke="#1a1a1a" strokeWidth="1" />
      <text x="20" y="285" fill="#555" fontSize="10" fontFamily="system-ui, sans-serif">Total:</text>
      <text x="55" y="285" fill="#ccc" fontSize="10" fontWeight="bold" fontFamily="system-ui, sans-serif">847 deployments</text>
      <text x="200" y="285" fill="#555" fontSize="10" fontFamily="system-ui, sans-serif">Success rate:</text>
      <text x="275" y="285" fill="#4ade80" fontSize="10" fontWeight="bold" fontFamily="system-ui, sans-serif">99.8%</text>
      <text x="340" y="285" fill="#555" fontSize="10" fontFamily="system-ui, sans-serif">Avg build:</text>
      <text x="400" y="285" fill="#ccc" fontSize="10" fontWeight="bold" fontFamily="system-ui, sans-serif">34s</text>
    </svg>
  );
}
