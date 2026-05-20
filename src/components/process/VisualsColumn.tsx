"use client";

import Image from "next/image";
import { phases } from "./types";

interface VisualsColumnProps {
  activePhaseIndex: number;
}

export function VisualsColumn({ activePhaseIndex }: VisualsColumnProps) {
  return (
    <div className="relative w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background cross SVG as requested */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          className="w-full h-full text-white"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <title>Diagonal Grid Pattern Background</title>
          <defs>
            <pattern
              id="cross-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="20"
                y1="15"
                x2="20"
                y2="25"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="15"
                y1="20"
                x2="25"
                y2="20"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cross-grid)" />
        </svg>
      </div>

      {/* Very subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_80%)] pointer-events-none" />

      {/* Visual active frame switch */}
      <div className="w-full h-full relative flex items-center justify-center">
        {phases.map((phase, idx) => {
          const isActive = idx === activePhaseIndex;

          if (idx === 0) {
            // Discovery Phase - Collage of discovery.jpg and discovery2.jpg
            return (
              <div
                key={phase.id}
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                {/* Main large image */}
                <div className="absolute top-[15%] right-[10%] w-[60%] aspect-4/3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 z-10 overflow-hidden">
                  <Image
                    src="/discovery.jpg"
                    alt="Discovery Process"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />

                  {/* Pixel Blur Mosaic Grid on the left side */}
                  <div className="absolute left-0 top-0 bottom-0 w-[50%] grid grid-cols-5 grid-rows-7 pointer-events-none">
                    {Array.from({ length: 35 }).map((_, i) => {
                      const col = i % 5;
                      const row = Math.floor(i / 5);
                      const cellId = `discovery-grid-${col}-${row}`;
                      // Create a scattered pixelation effect (denser on left, scattering right)
                      const isBlurred =
                        col < 2 ||
                        (col === 2 && [1, 3, 4, 6].includes(row)) ||
                        (col === 3 && [2, 5].includes(row)) ||
                        (col === 4 && row === 1);

                      if (!isBlurred)
                        return <div key={cellId} className="w-full h-full" />;

                      return (
                        <div
                          key={cellId}
                          className="w-full h-full backdrop-blur-3xl backdrop-saturate-200 bg-white/5 border-[0.5px] border-white/5"
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Overlapping secondary image */}
                <div className="absolute bottom-[20%] left-[10%] w-[45%] aspect-16/10 shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-white/10 z-20 overflow-hidden group">
                  <Image
                    src="/discovery2.jpg"
                    alt="Discovery Details"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none group-hover:bg-black/0 transition-colors duration-[2s]" />
                </div>
              </div>
            );
          }

          if (idx === 1) {
            // Strategy Phase - Collage of strategy.jpg and strategy2.jpg
            return (
              <div
                key={phase.id}
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                {/* Main large image - Positioned Left */}
                <div className="absolute bottom-[10%] left-[8%] w-[55%] aspect-3/4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 z-10 overflow-hidden">
                  <Image
                    src="/strategy.jpg"
                    alt="Strategy Process"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />

                  {/* Pixel Blur Mosaic Grid on the right side */}
                  <div className="absolute right-0 top-0 bottom-0 w-[50%] grid grid-cols-4 grid-rows-8 pointer-events-none">
                    {Array.from({ length: 32 }).map((_, i) => {
                      const col = i % 4;
                      const row = Math.floor(i / 4);
                      const cellId = `strategy-grid-${col}-${row}`;
                      // Denser on the right, scattering left
                      const isBlurred =
                        col === 3 ||
                        (col === 2 && [1, 2, 4, 6, 7].includes(row)) ||
                        (col === 1 && [3, 5].includes(row)) ||
                        (col === 0 && row === 6);

                      if (!isBlurred)
                        return <div key={cellId} className="w-full h-full" />;

                      return (
                        <div
                          key={cellId}
                          className="w-full h-full backdrop-blur-3xl backdrop-saturate-200 bg-white/5 border-[0.5px] border-white/5"
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Overlapping secondary image - Positioned Top Right */}
                <div className="absolute top-[15%] right-[8%] w-[50%] aspect-video shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-white/10 z-20 overflow-hidden group">
                  <Image
                    src="/strategy2.jpg"
                    alt="Strategy Details"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none group-hover:bg-black/0 transition-colors duration-[2s]" />
                </div>
              </div>
            );
          }

          if (idx === 2) {
            // Implementation Phase
            return (
              <div
                key={phase.id}
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                {/* Main large image - Positioned Top Right */}
                <div className="absolute top-[10%] right-[10%] w-[55%] aspect-4/3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 z-10 overflow-hidden">
                  <Image
                    src="/implementation.jpg"
                    alt="Implementation Process"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
                </div>

                {/* Code Editor SVG Mockup - Positioned Bottom Left */}
                <div className="absolute bottom-[10%] left-[8%] w-[55%] z-30 drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] bg-[#0d0d0d] rounded-xl border border-white/5 overflow-hidden">
                  <svg
                    viewBox="0 0 480 340"
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Code Editor Mockup"
                  >
                    <title>Code Editor Mockup</title>
                    {/* Window Header Controls */}
                    <circle cx="20" cy="20" r="5" fill="#ed6a5e" />
                    <circle cx="38" cy="20" r="5" fill="#f4bf4f" />
                    <circle cx="56" cy="20" r="5" fill="#61c554" />
                    <text
                      x="80"
                      y="24"
                      fill="#666"
                      fontSize="12"
                      fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                      letterSpacing="1"
                    >
                      HERO.TS
                    </text>

                    {/* Code Content */}
                    <g
                      fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                      fontSize="13"
                      fill="#a3a3a3"
                    >
                      {/* Line numbers */}
                      <g fill="#444" textAnchor="end">
                        <text x="35" y="60">
                          1
                        </text>
                        <text x="35" y="80">
                          2
                        </text>
                        <text x="35" y="100">
                          3
                        </text>
                        <text x="35" y="120">
                          4
                        </text>
                        <text x="35" y="140">
                          5
                        </text>
                        <text x="35" y="160">
                          6
                        </text>
                        <text x="35" y="180">
                          7
                        </text>
                        <text x="35" y="200">
                          8
                        </text>
                        <text x="35" y="220">
                          9
                        </text>
                        <text x="35" y="240">
                          10
                        </text>
                        <text x="35" y="260">
                          11
                        </text>
                        <text x="35" y="280">
                          12
                        </text>
                        <text x="35" y="300">
                          13
                        </text>
                        <text x="35" y="320">
                          14
                        </text>
                      </g>

                      <text x="55" y="60">
                        <tspan fill="#c678dd">import</tspan>{" "}
                        <tspan fill="#abb2bf">&#123;</tspan>{" "}
                        <tspan fill="#e5c07b">defineField</tspan>
                        <tspan fill="#abb2bf">,</tspan>{" "}
                        <tspan fill="#e5c07b">defineType</tspan>{" "}
                        <tspan fill="#abb2bf">&#125;</tspan>{" "}
                        <tspan fill="#c678dd">from</tspan>{" "}
                        <tspan fill="#98c379">&apos;sanity&apos;</tspan>
                      </text>

                      <text x="55" y="100">
                        <tspan fill="#c678dd">export const</tspan>{" "}
                        <tspan fill="#e5c07b">landingPage</tspan>{" "}
                        <tspan fill="#c678dd">=</tspan>{" "}
                        <tspan fill="#61afef">defineType</tspan>
                        <tspan fill="#abb2bf">&#123;</tspan>
                      </text>

                      <text x="75" y="120">
                        <tspan fill="#e06c75">name</tspan>
                        <tspan fill="#abb2bf">:</tspan>{" "}
                        <tspan fill="#98c379">&apos;landingPage&apos;</tspan>
                        <tspan fill="#abb2bf">,</tspan>
                      </text>

                      <text x="75" y="140">
                        <tspan fill="#e06c75">title</tspan>
                        <tspan fill="#abb2bf">:</tspan>{" "}
                        <tspan fill="#98c379">&apos;Landing Page&apos;</tspan>
                        <tspan fill="#abb2bf">,</tspan>
                      </text>

                      <text x="75" y="160">
                        <tspan fill="#e06c75">type</tspan>
                        <tspan fill="#abb2bf">:</tspan>{" "}
                        <tspan fill="#98c379">&apos;object&apos;</tspan>
                        <tspan fill="#abb2bf">,</tspan>
                      </text>

                      <text x="75" y="180">
                        <tspan fill="#e06c75">fields</tspan>
                        <tspan fill="#abb2bf">: [</tspan>
                      </text>

                      <text x="95" y="200">
                        <tspan fill="#61afef">defineField</tspan>
                        <tspan fill="#abb2bf">(&#123;</tspan>
                      </text>

                      <text x="115" y="220">
                        <tspan fill="#e06c75">name</tspan>
                        <tspan fill="#abb2bf">:</tspan>{" "}
                        <tspan fill="#98c379">&apos;title&apos;</tspan>
                        <tspan fill="#abb2bf">,</tspan>
                      </text>

                      <text x="115" y="240">
                        <tspan fill="#e06c75">title</tspan>
                        <tspan fill="#abb2bf">:</tspan>{" "}
                        <tspan fill="#98c379">&apos;Title&apos;</tspan>
                        <tspan fill="#abb2bf">,</tspan>
                      </text>

                      <text x="115" y="260">
                        <tspan fill="#e06c75">type</tspan>
                        <tspan fill="#abb2bf">:</tspan>{" "}
                        <tspan fill="#98c379">&apos;string&apos;</tspan>
                        <tspan fill="#abb2bf">,</tspan>
                      </text>

                      <text x="115" y="280">
                        <tspan fill="#e06c75">validation</tspan>
                        <tspan fill="#abb2bf">:</tspan>{" "}
                        <tspan fill="#abb2bf">(</tspan>
                        <tspan fill="#d19a66">Rule</tspan>
                        <tspan fill="#abb2bf">)</tspan>{" "}
                        <tspan fill="#c678dd">=&gt;</tspan>{" "}
                        <tspan fill="#e5c07b">Rule</tspan>
                        <tspan fill="#abb2bf">.</tspan>
                        <tspan fill="#61afef">required</tspan>
                        <tspan fill="#abb2bf">().</tspan>
                        <tspan fill="#61afef">max</tspan>
                        <tspan fill="#abb2bf">(100)</tspan>
                      </text>

                      <text x="95" y="300">
                        <tspan fill="#abb2bf">&#125;),</tspan>
                      </text>

                      <text x="95" y="320">
                        <tspan fill="#61afef">defineField</tspan>
                        <tspan fill="#abb2bf">(&#123;</tspan>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            );
          }

          if (idx === 3) {
            // Testing Phase
            return (
              <div
                key={phase.id}
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                {/* Main image - Top Right */}
                <div className="absolute top-[8%] right-[8%] w-[55%] aspect-4/3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 z-10 overflow-hidden">
                  <Image
                    src="/testing.jpg"
                    alt="Testing Process"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
                </div>

                {/* Sentry Error Monitoring SVG - Bottom Left */}
                <div className="absolute bottom-[12%] left-[5%] w-[52%] z-30 drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] bg-[#1b1024] rounded-xl border border-white/5 overflow-hidden">
                  <svg
                    viewBox="0 0 460 260"
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Sentry Error Monitoring Dashboard"
                  >
                    <title>Sentry Error Monitoring Dashboard</title>
                    {/* Header bar */}
                    <rect width="460" height="40" fill="#2b1a3d" />
                    {/* Sentry logo mark */}
                    <path
                      d="M22 28c-1.5-2.6-0.6-5.9 2-7.4l5.8 10.1c-2.9 0-5.6-1-7.8-2.7zm10.4-7.4a5.4 5.4 0 0 1 7.4 2l-5.8 10c-2.8 0-5.5-1-7.5-2.6l5.9-9.4z"
                      fill="#e1567c"
                      transform="translate(2, 0) scale(0.9)"
                    />
                    <text
                      x="48"
                      y="25"
                      fill="#e1567c"
                      fontSize="13"
                      fontWeight="bold"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      sentry
                    </text>
                    <text
                      x="160"
                      y="25"
                      fill="#8b7a9e"
                      fontSize="11"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      Issues
                    </text>
                    <text
                      x="210"
                      y="25"
                      fill="#fff"
                      fontSize="11"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      Performance
                    </text>
                    <rect
                      x="210"
                      y="32"
                      width="68"
                      height="2"
                      rx="1"
                      fill="#e1567c"
                    />
                    <text
                      x="290"
                      y="25"
                      fill="#8b7a9e"
                      fontSize="11"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      Alerts
                    </text>

                    {/* Stats row */}
                    <text
                      x="20"
                      y="65"
                      fill="#ccc"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      Crash Free Rate
                    </text>
                    <text
                      x="20"
                      y="82"
                      fill="#4ade80"
                      fontSize="18"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      99.7%
                    </text>
                    <text
                      x="140"
                      y="65"
                      fill="#ccc"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      P75 Latency
                    </text>
                    <text
                      x="140"
                      y="82"
                      fill="#facc15"
                      fontSize="18"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      124ms
                    </text>
                    <text
                      x="260"
                      y="65"
                      fill="#ccc"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      Errors (24h)
                    </text>
                    <text
                      x="260"
                      y="82"
                      fill="#f87171"
                      fontSize="18"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      3
                    </text>
                    <text
                      x="370"
                      y="65"
                      fill="#ccc"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      Apdex
                    </text>
                    <text
                      x="370"
                      y="82"
                      fill="#4ade80"
                      fontSize="18"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      0.98
                    </text>

                    {/* Divider */}
                    <line
                      x1="15"
                      y1="95"
                      x2="445"
                      y2="95"
                      stroke="#3d2a54"
                      strokeWidth="1"
                    />

                    {/* Mini sparkline chart area */}
                    <text
                      x="20"
                      y="115"
                      fill="#8b7a9e"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      Transaction throughput — last 24h
                    </text>
                    {/* Chart bars */}
                    <g opacity="0.9">
                      <rect
                        x="20"
                        y="170"
                        width="8"
                        height="40"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="32"
                        y="155"
                        width="8"
                        height="55"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="44"
                        y="140"
                        width="8"
                        height="70"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="56"
                        y="160"
                        width="8"
                        height="50"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="68"
                        y="145"
                        width="8"
                        height="65"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="80"
                        y="130"
                        width="8"
                        height="80"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="92"
                        y="125"
                        width="8"
                        height="85"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="104"
                        y="135"
                        width="8"
                        height="75"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="116"
                        y="150"
                        width="8"
                        height="60"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="128"
                        y="160"
                        width="8"
                        height="50"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="140"
                        y="140"
                        width="8"
                        height="70"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="152"
                        y="125"
                        width="8"
                        height="85"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="164"
                        y="120"
                        width="8"
                        height="90"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="176"
                        y="130"
                        width="8"
                        height="80"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="188"
                        y="145"
                        width="8"
                        height="65"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="200"
                        y="155"
                        width="8"
                        height="55"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="212"
                        y="160"
                        width="8"
                        height="50"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="224"
                        y="135"
                        width="8"
                        height="75"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="236"
                        y="125"
                        width="8"
                        height="85"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="248"
                        y="115"
                        width="8"
                        height="95"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="260"
                        y="120"
                        width="8"
                        height="90"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="272"
                        y="140"
                        width="8"
                        height="70"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="284"
                        y="155"
                        width="8"
                        height="55"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="296"
                        y="165"
                        width="8"
                        height="45"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="308"
                        y="150"
                        width="8"
                        height="60"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="320"
                        y="135"
                        width="8"
                        height="75"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="332"
                        y="125"
                        width="8"
                        height="85"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="344"
                        y="130"
                        width="8"
                        height="80"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="356"
                        y="145"
                        width="8"
                        height="65"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="368"
                        y="160"
                        width="8"
                        height="50"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="380"
                        y="140"
                        width="8"
                        height="70"
                        rx="2"
                        fill="#362050"
                      />
                      <rect
                        x="392"
                        y="130"
                        width="8"
                        height="80"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="404"
                        y="120"
                        width="8"
                        height="90"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="416"
                        y="115"
                        width="8"
                        height="95"
                        rx="2"
                        fill="#7c3aed"
                      />
                      <rect
                        x="428"
                        y="125"
                        width="8"
                        height="85"
                        rx="2"
                        fill="#7c3aed"
                      />
                    </g>

                    {/* Bottom axis */}
                    <line
                      x1="15"
                      y1="215"
                      x2="445"
                      y2="215"
                      stroke="#3d2a54"
                      strokeWidth="1"
                    />
                    <text
                      x="20"
                      y="230"
                      fill="#665680"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      00:00
                    </text>
                    <text
                      x="120"
                      y="230"
                      fill="#665680"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      06:00
                    </text>
                    <text
                      x="220"
                      y="230"
                      fill="#665680"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      12:00
                    </text>
                    <text
                      x="320"
                      y="230"
                      fill="#665680"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      18:00
                    </text>
                    <text
                      x="415"
                      y="230"
                      fill="#665680"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      Now
                    </text>

                    {/* Live indicator */}
                    <circle
                      cx="435"
                      y="230"
                      cy="248"
                      r="4"
                      fill="#4ade80"
                      opacity="0.8"
                    />
                    <text
                      x="407"
                      y="252"
                      fill="#4ade80"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      Live
                    </text>
                  </svg>
                </div>

                {/* Jest/Playwright Test Runner SVG - Top Left */}
                <div className="absolute top-[5%] left-[5%] w-[40%] z-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)] bg-[#0d0d0d] rounded-xl border border-white/5 overflow-hidden">
                  <svg
                    viewBox="0 0 340 240"
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Test Runner Results Panel"
                  >
                    <title>Test Runner Results Panel</title>
                    {/* Header */}
                    <rect width="340" height="36" fill="#161616" />
                    <circle cx="18" cy="18" r="5" fill="#ed6a5e" />
                    <circle cx="36" cy="18" r="5" fill="#f4bf4f" />
                    <circle cx="54" cy="18" r="5" fill="#61c554" />
                    <text
                      x="75"
                      y="22"
                      fill="#666"
                      fontSize="11"
                      fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                      letterSpacing="0.5"
                    >
                      TEST RESULTS
                    </text>
                    {/* Pass badge */}
                    <rect
                      x="255"
                      y="9"
                      width="70"
                      height="18"
                      rx="9"
                      fill="#16532e"
                    />
                    <text
                      x="270"
                      y="22"
                      fill="#4ade80"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      ALL PASS
                    </text>

                    {/* Test lines */}
                    <g
                      fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                      fontSize="11"
                    >
                      {/* Suite header */}
                      <text x="16" y="58" fill="#888">
                        PASS
                      </text>
                      <text x="52" y="58" fill="#ccc">
                        src/components/Hero.test.tsx
                      </text>

                      {/* Test 1 */}
                      <text x="28" y="78" fill="#4ade80">
                        ✓
                      </text>
                      <text x="44" y="78" fill="#aaa">
                        renders hero heading correctly
                      </text>
                      <text x="280" y="78" fill="#555">
                        12ms
                      </text>

                      {/* Test 2 */}
                      <text x="28" y="96" fill="#4ade80">
                        ✓
                      </text>
                      <text x="44" y="96" fill="#aaa">
                        CTA button navigates to /contact
                      </text>
                      <text x="280" y="96" fill="#555">
                        8ms
                      </text>

                      {/* Test 3 */}
                      <text x="28" y="114" fill="#4ade80">
                        ✓
                      </text>
                      <text x="44" y="114" fill="#aaa">
                        animation triggers on scroll
                      </text>
                      <text x="280" y="114" fill="#555">
                        23ms
                      </text>

                      {/* Divider */}
                      <line
                        x1="16"
                        y1="126"
                        x2="324"
                        y2="126"
                        stroke="#222"
                        strokeWidth="1"
                      />

                      {/* Suite header 2 */}
                      <text x="16" y="144" fill="#888">
                        PASS
                      </text>
                      <text x="52" y="144" fill="#ccc">
                        src/lib/api.test.ts
                      </text>

                      {/* Test 4 */}
                      <text x="28" y="164" fill="#4ade80">
                        ✓
                      </text>
                      <text x="44" y="164" fill="#aaa">
                        fetches projects from API
                      </text>
                      <text x="280" y="164" fill="#555">
                        45ms
                      </text>

                      {/* Test 5 */}
                      <text x="28" y="182" fill="#4ade80">
                        ✓
                      </text>
                      <text x="44" y="182" fill="#aaa">
                        handles 404 gracefully
                      </text>
                      <text x="280" y="182" fill="#555">
                        6ms
                      </text>

                      {/* Bottom summary */}
                      <line
                        x1="16"
                        y1="198"
                        x2="324"
                        y2="198"
                        stroke="#222"
                        strokeWidth="1"
                      />
                      <text x="16" y="218" fill="#888">
                        Tests:
                      </text>
                      <text x="58" y="218" fill="#4ade80" fontWeight="bold">
                        5 passed
                      </text>
                      <text x="128" y="218" fill="#888">
                        , 5 total
                      </text>
                      <text x="195" y="218" fill="#888">
                        Time:
                      </text>
                      <text x="230" y="218" fill="#ccc">
                        0.094s
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            );
          }

          if (idx === 4) {
            // Ongoing Support & Evolution Phase
            return (
              <div
                key={phase.id}
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                {/* Deployment / Uptime Dashboard SVG - Top area */}
                <div className="absolute top-[5%] right-[5%] w-[58%] z-20 drop-shadow-[0_30px_70px_rgba(0,0,0,0.9)] bg-[#0a0a0a] rounded-xl border border-white/5 overflow-hidden">
                  <svg
                    viewBox="0 0 500 300"
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Deployment and Uptime Dashboard"
                  >
                    <title>Deployment and Uptime Dashboard</title>
                    {/* Header */}
                    <rect width="500" height="42" fill="#111" />
                    {/* Vercel-style triangle */}
                    <polygon points="20,28 28,14 36,28" fill="#fff" />
                    <text
                      x="46"
                      y="27"
                      fill="#fff"
                      fontSize="13"
                      fontWeight="600"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      Deployments
                    </text>
                    <text
                      x="160"
                      y="27"
                      fill="#555"
                      fontSize="11"
                      fontFamily="system-ui, sans-serif"
                    >
                      Analytics
                    </text>
                    <text
                      x="230"
                      y="27"
                      fill="#555"
                      fontSize="11"
                      fontFamily="system-ui, sans-serif"
                    >
                      Logs
                    </text>
                    <text
                      x="275"
                      y="27"
                      fill="#555"
                      fontSize="11"
                      fontFamily="system-ui, sans-serif"
                    >
                      Storage
                    </text>
                    {/* Status badge */}
                    <rect
                      x="400"
                      y="12"
                      width="85"
                      height="20"
                      rx="10"
                      fill="#052e16"
                    />
                    <circle cx="414" cy="22" r="4" fill="#4ade80" />
                    <text
                      x="422"
                      y="26"
                      fill="#4ade80"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      All Systems
                    </text>

                    {/* Uptime bar section */}
                    <text
                      x="20"
                      y="68"
                      fill="#888"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      Uptime — Last 90 days
                    </text>
                    <text
                      x="420"
                      y="68"
                      fill="#4ade80"
                      fontSize="12"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      99.99%
                    </text>
                    {/* 90-day uptime bars */}
                    <g>
                      {Array.from({ length: 90 }).map((_, i) => {
                        const barKey = `uptime-bar-${i}`;
                        const isDown = i === 34 || i === 67;
                        return (
                          <rect
                            key={barKey}
                            x={20 + i * 5}
                            y="76"
                            width="3.5"
                            height="16"
                            rx="1"
                            fill={isDown ? "#f87171" : "#16a34a"}
                            opacity={
                              isDown
                                ? 1
                                : 0.7 + (((i * 2654435761) >>> 0) % 100) / 333
                            }
                          />
                        );
                      })}
                    </g>
                    <text
                      x="20"
                      y="107"
                      fill="#555"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      90 days ago
                    </text>
                    <text
                      x="430"
                      y="107"
                      fill="#555"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      Today
                    </text>

                    {/* Divider */}
                    <line
                      x1="15"
                      y1="118"
                      x2="485"
                      y2="118"
                      stroke="#1a1a1a"
                      strokeWidth="1"
                    />

                    {/* Recent deployments list */}
                    <text
                      x="20"
                      y="138"
                      fill="#888"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      Recent Deployments
                    </text>

                    {/* Deployment row 1 */}
                    <circle
                      cx="28"
                      cy="160"
                      r="5"
                      fill="#052e16"
                      stroke="#16a34a"
                      strokeWidth="1.5"
                    />
                    <text
                      x="25"
                      y="163"
                      fill="#16a34a"
                      fontSize="8"
                      fontFamily="system-ui, sans-serif"
                    >
                      ✓
                    </text>
                    <text
                      x="42"
                      y="163"
                      fill="#ccc"
                      fontSize="11"
                      fontFamily="ui-monospace, monospace"
                    >
                      fix: resolve hydration mismatch
                    </text>
                    <text
                      x="370"
                      y="163"
                      fill="#555"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      2m ago
                    </text>
                    <rect
                      x="430"
                      y="153"
                      width="52"
                      height="16"
                      rx="8"
                      fill="#111"
                      stroke="#333"
                      strokeWidth="1"
                    />
                    <text
                      x="440"
                      y="164"
                      fill="#aaa"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      prod
                    </text>

                    {/* Deployment row 2 */}
                    <circle
                      cx="28"
                      cy="188"
                      r="5"
                      fill="#052e16"
                      stroke="#16a34a"
                      strokeWidth="1.5"
                    />
                    <text
                      x="25"
                      y="191"
                      fill="#16a34a"
                      fontSize="8"
                      fontFamily="system-ui, sans-serif"
                    >
                      ✓
                    </text>
                    <text
                      x="42"
                      y="191"
                      fill="#ccc"
                      fontSize="11"
                      fontFamily="ui-monospace, monospace"
                    >
                      feat: add new testimonials section
                    </text>
                    <text
                      x="370"
                      y="191"
                      fill="#555"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      1h ago
                    </text>
                    <rect
                      x="430"
                      y="181"
                      width="52"
                      height="16"
                      rx="8"
                      fill="#111"
                      stroke="#333"
                      strokeWidth="1"
                    />
                    <text
                      x="440"
                      y="192"
                      fill="#aaa"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      prod
                    </text>

                    {/* Deployment row 3 */}
                    <circle
                      cx="28"
                      cy="216"
                      r="5"
                      fill="#052e16"
                      stroke="#16a34a"
                      strokeWidth="1.5"
                    />
                    <text
                      x="25"
                      y="219"
                      fill="#16a34a"
                      fontSize="8"
                      fontFamily="system-ui, sans-serif"
                    >
                      ✓
                    </text>
                    <text
                      x="42"
                      y="219"
                      fill="#ccc"
                      fontSize="11"
                      fontFamily="ui-monospace, monospace"
                    >
                      chore: dependency updates + audit
                    </text>
                    <text
                      x="370"
                      y="219"
                      fill="#555"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      5h ago
                    </text>
                    <rect
                      x="430"
                      y="209"
                      width="52"
                      height="16"
                      rx="8"
                      fill="#111"
                      stroke="#333"
                      strokeWidth="1"
                    />
                    <text
                      x="440"
                      y="220"
                      fill="#aaa"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      prod
                    </text>

                    {/* Deployment row 4 */}
                    <circle
                      cx="28"
                      cy="244"
                      r="5"
                      fill="#052e16"
                      stroke="#16a34a"
                      strokeWidth="1.5"
                    />
                    <text
                      x="25"
                      y="247"
                      fill="#16a34a"
                      fontSize="8"
                      fontFamily="system-ui, sans-serif"
                    >
                      ✓
                    </text>
                    <text
                      x="42"
                      y="247"
                      fill="#ccc"
                      fontSize="11"
                      fontFamily="ui-monospace, monospace"
                    >
                      perf: optimize image loading pipeline
                    </text>
                    <text
                      x="370"
                      y="247"
                      fill="#555"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      1d ago
                    </text>
                    <rect
                      x="430"
                      y="237"
                      width="52"
                      height="16"
                      rx="8"
                      fill="#111"
                      stroke="#333"
                      strokeWidth="1"
                    />
                    <text
                      x="440"
                      y="248"
                      fill="#aaa"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      prod
                    </text>

                    {/* Footer stats */}
                    <line
                      x1="15"
                      y1="265"
                      x2="485"
                      y2="265"
                      stroke="#1a1a1a"
                      strokeWidth="1"
                    />
                    <text
                      x="20"
                      y="285"
                      fill="#555"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      Total:
                    </text>
                    <text
                      x="55"
                      y="285"
                      fill="#ccc"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      847 deployments
                    </text>
                    <text
                      x="200"
                      y="285"
                      fill="#555"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      Success rate:
                    </text>
                    <text
                      x="275"
                      y="285"
                      fill="#4ade80"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      99.8%
                    </text>
                    <text
                      x="340"
                      y="285"
                      fill="#555"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      Avg build:
                    </text>
                    <text
                      x="400"
                      y="285"
                      fill="#ccc"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      34s
                    </text>
                  </svg>
                </div>

                {/* GitHub-style Activity / Contribution Graph - Bottom Left */}
                <div className="absolute bottom-[8%] left-[5%] w-[55%] z-30 drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] bg-[#0d1117] rounded-xl border border-[#21262d] overflow-hidden">
                  <svg
                    viewBox="0 0 480 220"
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Contribution Activity Graph"
                  >
                    <title>Contribution Activity Graph</title>
                    {/* Header */}
                    <rect width="480" height="38" fill="#161b22" />
                    {/* GitHub-style octocat silhouette */}
                    <circle cx="22" cy="19" r="10" fill="#21262d" />
                    <circle cx="22" cy="16" r="6" fill="#8b949e" />
                    <text
                      x="42"
                      y="23"
                      fill="#e6edf3"
                      fontSize="12"
                      fontWeight="600"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      Activity
                    </text>
                    <text
                      x="105"
                      y="23"
                      fill="#8b949e"
                      fontSize="11"
                      fontFamily="system-ui, sans-serif"
                    >
                      — 1,247 contributions in the last year
                    </text>

                    {/* Contribution grid */}
                    <g>
                      {/* Month labels */}
                      <text
                        x="42"
                        y="60"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Jan
                      </text>
                      <text
                        x="90"
                        y="60"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Feb
                      </text>
                      <text
                        x="135"
                        y="60"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Mar
                      </text>
                      <text
                        x="180"
                        y="60"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Apr
                      </text>
                      <text
                        x="225"
                        y="60"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        May
                      </text>
                      <text
                        x="270"
                        y="60"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Jun
                      </text>
                      <text
                        x="315"
                        y="60"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Jul
                      </text>
                      <text
                        x="355"
                        y="60"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Aug
                      </text>
                      <text
                        x="400"
                        y="60"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Sep
                      </text>
                      <text
                        x="440"
                        y="60"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Oct
                      </text>

                      {/* Day labels */}
                      <text
                        x="12"
                        y="80"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Mon
                      </text>
                      <text
                        x="12"
                        y="104"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Wed
                      </text>
                      <text
                        x="12"
                        y="128"
                        fill="#8b949e"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        Fri
                      </text>

                      {/* Contribution squares - 40 weeks x 7 days */}
                      {Array.from({ length: 40 }).map((_, week) => {
                        const weekKey = `contrib-week-${week}`;
                        return (
                          <g key={weekKey}>
                            {Array.from({ length: 7 }).map((_, day) => {
                              const dayKey = `contrib-${week}-${day}`;
                              const seed = (week * 7 + day) * 2654435761;
                              const level = (seed >>> 0) % 100;
                              let fill = "#161b22";
                              if (level > 25) fill = "#0e4429";
                              if (level > 50) fill = "#006d32";
                              if (level > 72) fill = "#26a641";
                              if (level > 88) fill = "#39d353";
                              return (
                                <rect
                                  key={dayKey}
                                  x={36 + week * 11}
                                  y={66 + day * 12}
                                  width="9"
                                  height="9"
                                  rx="2"
                                  fill={fill}
                                />
                              );
                            })}
                          </g>
                        );
                      })}
                    </g>

                    {/* Legend */}
                    <text
                      x="320"
                      y="170"
                      fill="#8b949e"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      Less
                    </text>
                    <rect
                      x="345"
                      y="162"
                      width="9"
                      height="9"
                      rx="2"
                      fill="#161b22"
                    />
                    <rect
                      x="358"
                      y="162"
                      width="9"
                      height="9"
                      rx="2"
                      fill="#0e4429"
                    />
                    <rect
                      x="371"
                      y="162"
                      width="9"
                      height="9"
                      rx="2"
                      fill="#006d32"
                    />
                    <rect
                      x="384"
                      y="162"
                      width="9"
                      height="9"
                      rx="2"
                      fill="#26a641"
                    />
                    <rect
                      x="397"
                      y="162"
                      width="9"
                      height="9"
                      rx="2"
                      fill="#39d353"
                    />
                    <text
                      x="412"
                      y="170"
                      fill="#8b949e"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      More
                    </text>

                    {/* Divider */}
                    <line
                      x1="15"
                      y1="182"
                      x2="465"
                      y2="182"
                      stroke="#21262d"
                      strokeWidth="1"
                    />

                    {/* Recent activity feed */}
                    <circle cx="30" cy="200" r="4" fill="#238636" />
                    <text
                      x="42"
                      y="203"
                      fill="#8b949e"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      Opened PR
                    </text>
                    <text
                      x="110"
                      y="203"
                      fill="#58a6ff"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      #412
                    </text>
                    <text
                      x="135"
                      y="203"
                      fill="#c9d1d9"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      in solverdeck/web
                    </text>
                    <text
                      x="380"
                      y="203"
                      fill="#484f58"
                      fontSize="10"
                      fontFamily="system-ui, sans-serif"
                    >
                      2 hours ago
                    </text>
                  </svg>
                </div>
              </div>
            );
          }

          // Other phases - emptied out completely as requested
          return (
            <div
              key={phase.id}
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Waiting for content for other phases */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
