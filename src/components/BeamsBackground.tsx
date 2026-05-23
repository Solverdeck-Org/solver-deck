"use client";

import dynamic from "next/dynamic";

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

export function BeamsBackground() {
  return (
    <Beams
      beamWidth={2}
      beamHeight={15}
      beamNumber={10}
      lightColor="#ffffff"
      speed={1.5}
      noiseIntensity={1.5}
      scale={0.2}
      rotation={0}
    />
  );
}
