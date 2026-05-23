const SUITES = [
  {
    file: "src/components/Hero.test.tsx",
    y: 58,
    tests: [
      { name: "renders hero heading correctly", time: "12ms", y: 78 },
      { name: "CTA button navigates to /contact", time: "8ms", y: 96 },
      { name: "animation triggers on scroll", time: "23ms", y: 114 },
    ],
  },
  {
    file: "src/lib/api.test.ts",
    y: 144,
    tests: [
      { name: "fetches projects from API", time: "45ms", y: 164 },
      { name: "handles 404 gracefully", time: "6ms", y: 182 },
    ],
  },
] as const;

export function TestRunnerSvg() {
  return (
    <svg viewBox="0 0 340 240" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Test Runner Results Panel">
      <title>Test Runner Results Panel</title>
      <rect width="340" height="36" fill="#161616" />
      <circle cx="18" cy="18" r="5" fill="#ed6a5e" />
      <circle cx="36" cy="18" r="5" fill="#f4bf4f" />
      <circle cx="54" cy="18" r="5" fill="#61c554" />
      <text x="75" y="22" fill="#666" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" letterSpacing="0.5">TEST RESULTS</text>
      <rect x="255" y="9" width="70" height="18" rx="9" fill="#16532e" />
      <text x="270" y="22" fill="#4ade80" fontSize="10" fontWeight="bold" fontFamily="system-ui, sans-serif">ALL PASS</text>
      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="11">
        {SUITES.map((suite, si) => (
          <g key={suite.file}>
            {si > 0 && <line x1="16" y1={suite.y - 18} x2="324" y2={suite.y - 18} stroke="#222" strokeWidth="1" />}
            <text x="16" y={suite.y} fill="#888">PASS</text>
            <text x="52" y={suite.y} fill="#ccc">{suite.file}</text>
            {suite.tests.map((t) => (
              <g key={t.name}>
                <text x="28" y={t.y} fill="#4ade80">✓</text>
                <text x="44" y={t.y} fill="#aaa">{t.name}</text>
                <text x="280" y={t.y} fill="#555">{t.time}</text>
              </g>
            ))}
          </g>
        ))}
        <line x1="16" y1="198" x2="324" y2="198" stroke="#222" strokeWidth="1" />
        <text x="16" y="218" fill="#888">Tests:</text>
        <text x="58" y="218" fill="#4ade80" fontWeight="bold">5 passed</text>
        <text x="128" y="218" fill="#888">, 5 total</text>
        <text x="195" y="218" fill="#888">Time:</text>
        <text x="230" y="218" fill="#ccc">0.094s</text>
      </g>
    </svg>
  );
}
