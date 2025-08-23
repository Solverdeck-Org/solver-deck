import { cn } from "@/lib/utils";
import React from "react";

export function DotBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-black">
      <div
        className={cn(
          "absolute inset-0 z-1",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_.5px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-2 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div
        className="absolute inset-0 z-2"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, transparent 40%, #350136 100%)",
        }}
      />
      {children}
    </div>
  );
}
