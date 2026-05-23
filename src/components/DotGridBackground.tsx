"use client";

import dynamic from "next/dynamic";

const DotGrid = dynamic(() => import("@/components/DotGrid"), { ssr: false });

export function DotGridBackground() {
  return (
    <DotGrid
      dotSize={5}
      gap={24}
      baseColor="#3730A3"
      activeColor="#4338CA"
      proximity={200}
      shockRadius={300}
      shockStrength={5}
    />
  );
}
