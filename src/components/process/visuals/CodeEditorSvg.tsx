const LINE_NUMS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

export function CodeEditorSvg() {
  return (
    <svg viewBox="0 0 480 340" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Code Editor Mockup">
      <title>Code Editor Mockup</title>
      <circle cx="20" cy="20" r="5" fill="#ed6a5e" />
      <circle cx="38" cy="20" r="5" fill="#f4bf4f" />
      <circle cx="56" cy="20" r="5" fill="#61c554" />
      <text x="80" y="24" fill="#666" fontSize="12" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" letterSpacing="1">HERO.TS</text>
      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="13" fill="#a3a3a3">
        <g fill="#444" textAnchor="end">
          {LINE_NUMS.map((n) => (
            <text key={n} x="35" y={60 + (n - 1) * 20}>{n}</text>
          ))}
        </g>
        <text x="55" y="60"><tspan fill="#c678dd">import</tspan> <tspan fill="#abb2bf">&#123;</tspan> <tspan fill="#e5c07b">defineField</tspan><tspan fill="#abb2bf">,</tspan> <tspan fill="#e5c07b">defineType</tspan> <tspan fill="#abb2bf">&#125;</tspan> <tspan fill="#c678dd">from</tspan> <tspan fill="#98c379">&apos;sanity&apos;</tspan></text>
        <text x="55" y="100"><tspan fill="#c678dd">export const</tspan> <tspan fill="#e5c07b">landingPage</tspan> <tspan fill="#c678dd">=</tspan> <tspan fill="#61afef">defineType</tspan><tspan fill="#abb2bf">&#123;</tspan></text>
        <text x="75" y="120"><tspan fill="#e06c75">name</tspan><tspan fill="#abb2bf">:</tspan> <tspan fill="#98c379">&apos;landingPage&apos;</tspan><tspan fill="#abb2bf">,</tspan></text>
        <text x="75" y="140"><tspan fill="#e06c75">title</tspan><tspan fill="#abb2bf">:</tspan> <tspan fill="#98c379">&apos;Landing Page&apos;</tspan><tspan fill="#abb2bf">,</tspan></text>
        <text x="75" y="160"><tspan fill="#e06c75">type</tspan><tspan fill="#abb2bf">:</tspan> <tspan fill="#98c379">&apos;object&apos;</tspan><tspan fill="#abb2bf">,</tspan></text>
        <text x="75" y="180"><tspan fill="#e06c75">fields</tspan><tspan fill="#abb2bf">: [</tspan></text>
        <text x="95" y="200"><tspan fill="#61afef">defineField</tspan><tspan fill="#abb2bf">(&#123;</tspan></text>
        <text x="115" y="220"><tspan fill="#e06c75">name</tspan><tspan fill="#abb2bf">:</tspan> <tspan fill="#98c379">&apos;title&apos;</tspan><tspan fill="#abb2bf">,</tspan></text>
        <text x="115" y="240"><tspan fill="#e06c75">title</tspan><tspan fill="#abb2bf">:</tspan> <tspan fill="#98c379">&apos;Title&apos;</tspan><tspan fill="#abb2bf">,</tspan></text>
        <text x="115" y="260"><tspan fill="#e06c75">type</tspan><tspan fill="#abb2bf">:</tspan> <tspan fill="#98c379">&apos;string&apos;</tspan><tspan fill="#abb2bf">,</tspan></text>
        <text x="115" y="280"><tspan fill="#e06c75">validation</tspan><tspan fill="#abb2bf">:</tspan> <tspan fill="#abb2bf">(</tspan><tspan fill="#d19a66">Rule</tspan><tspan fill="#abb2bf">)</tspan> <tspan fill="#c678dd">=&gt;</tspan> <tspan fill="#e5c07b">Rule</tspan><tspan fill="#abb2bf">.</tspan><tspan fill="#61afef">required</tspan><tspan fill="#abb2bf">().</tspan><tspan fill="#61afef">max</tspan><tspan fill="#abb2bf">(100)</tspan></text>
        <text x="95" y="300"><tspan fill="#abb2bf">&#125;),</tspan></text>
        <text x="95" y="320"><tspan fill="#61afef">defineField</tspan><tspan fill="#abb2bf">(&#123;</tspan></text>
      </g>
    </svg>
  );
}
