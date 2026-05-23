const MONTHS = [
  { x: 42, label: "Jan" }, { x: 90, label: "Feb" }, { x: 135, label: "Mar" },
  { x: 180, label: "Apr" }, { x: 225, label: "May" }, { x: 270, label: "Jun" },
  { x: 315, label: "Jul" }, { x: 355, label: "Aug" }, { x: 400, label: "Sep" },
  { x: 440, label: "Oct" },
] as const;

const CONTRIBUTION_LEVELS = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"] as const;

function getContributionFill(week: number, day: number): string {
  const seed = (week * 7 + day) * 2654435761;
  const level = (seed >>> 0) % 100;
  if (level > 88) return CONTRIBUTION_LEVELS[4];
  if (level > 72) return CONTRIBUTION_LEVELS[3];
  if (level > 50) return CONTRIBUTION_LEVELS[2];
  if (level > 25) return CONTRIBUTION_LEVELS[1];
  return CONTRIBUTION_LEVELS[0];
}

export function ContributionGraphSvg() {
  return (
    <svg viewBox="0 0 480 220" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Contribution Activity Graph">
      <title>Contribution Activity Graph</title>
      <rect width="480" height="38" fill="#161b22" />
      <circle cx="22" cy="19" r="10" fill="#21262d" />
      <circle cx="22" cy="16" r="6" fill="#8b949e" />
      <text x="42" y="23" fill="#e6edf3" fontSize="12" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">Activity</text>
      <text x="105" y="23" fill="#8b949e" fontSize="11" fontFamily="system-ui, sans-serif">— 1,247 contributions in the last year</text>
      {MONTHS.map((m) => (
        <text key={m.x} x={m.x} y="60" fill="#8b949e" fontSize="9" fontFamily="system-ui, sans-serif">{m.label}</text>
      ))}
      <text x="12" y="80" fill="#8b949e" fontSize="9" fontFamily="system-ui, sans-serif">Mon</text>
      <text x="12" y="104" fill="#8b949e" fontSize="9" fontFamily="system-ui, sans-serif">Wed</text>
      <text x="12" y="128" fill="#8b949e" fontSize="9" fontFamily="system-ui, sans-serif">Fri</text>
      {Array.from({ length: 40 }).map((_, week) => (
        <g key={`week-${week}`}>
          {Array.from({ length: 7 }).map((_, day) => (
            <rect key={`${week}-${day}`} x={36 + week * 11} y={66 + day * 12} width="9" height="9" rx="2" fill={getContributionFill(week, day)} />
          ))}
        </g>
      ))}
      <text x="320" y="170" fill="#8b949e" fontSize="9" fontFamily="system-ui, sans-serif">Less</text>
      {CONTRIBUTION_LEVELS.map((fill, i) => (
        <rect key={fill} x={345 + i * 13} y="162" width="9" height="9" rx="2" fill={fill} />
      ))}
      <text x="412" y="170" fill="#8b949e" fontSize="9" fontFamily="system-ui, sans-serif">More</text>
      <line x1="15" y1="182" x2="465" y2="182" stroke="#21262d" strokeWidth="1" />
      <circle cx="30" cy="200" r="4" fill="#238636" />
      <text x="42" y="203" fill="#8b949e" fontSize="10" fontFamily="system-ui, sans-serif">Opened PR</text>
      <text x="110" y="203" fill="#58a6ff" fontSize="10" fontFamily="system-ui, sans-serif">#412</text>
      <text x="135" y="203" fill="#c9d1d9" fontSize="10" fontFamily="system-ui, sans-serif">in solverdeck/web</text>
      <text x="380" y="203" fill="#484f58" fontSize="10" fontFamily="system-ui, sans-serif">2 hours ago</text>
    </svg>
  );
}
