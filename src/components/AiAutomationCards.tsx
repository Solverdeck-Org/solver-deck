"use client";

import { forwardRef } from "react";
import { AgentPipelineCard } from "./solution/ai/AgentPipelineCard";
import { InferenceEngineCard } from "./solution/ai/InferenceEngineCard";
import { OperationsCard } from "./solution/ai/OperationsCard";

export const AiAutomationCards = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
    <AgentPipelineCard />
    <InferenceEngineCard />
    <OperationsCard />
  </div>
));

AiAutomationCards.displayName = "AiAutomationCards";
