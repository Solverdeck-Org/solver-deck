"use client";

import { forwardRef } from "react";
import { CodeTerminalCard } from "./solution/software/CodeTerminalCard";
import { ReleasePipelineCard } from "./solution/software/ReleasePipelineCard";
import { StudioCard } from "./solution/software/StudioCard";

export const SoftwareDevelopmentCards = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
    <CodeTerminalCard />
    <StudioCard />
    <ReleasePipelineCard />
  </div>
));

SoftwareDevelopmentCards.displayName = "SoftwareDevelopmentCards";
