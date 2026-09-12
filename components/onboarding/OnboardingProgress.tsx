import React from "react";
import { cn } from "@/lib/utils";

interface OnboardingProgressProps { currentStep: number; totalSteps: number; }

export function OnboardingProgress({ currentStep, totalSteps }: OnboardingProgressProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className={cn("h-1.5 rounded-full transition-all duration-500", i < currentStep ? "bg-broko-primary flex-[2]" : "bg-neutral-200 flex-1", i === currentStep - 1 && "bg-broko-body")} />
      ))}
    </div>
  );
}
