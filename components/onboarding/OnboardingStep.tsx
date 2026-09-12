"use client";

import React from "react";
import { BrokoCharacter } from "@/components/broko/BrokoCharacter";
import { Button, Input } from "@/components/ui";

interface OnboardingStepProps {
  step: number;
  title: string;
  description: string;
  onNext: () => void;
  onBack?: () => void;
  onSkip?: () => void;
  isLast?: boolean;
}

export function OnboardingStep({
  step,
  title,
  description,
  onNext,
  onBack,
  onSkip,
  isLast,
}: OnboardingStepProps) {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in">
      <BrokoCharacter size="lg" animate className="mb-8" />

      <h2 className="text-display-sm text-neutral-900 mb-3">{title}</h2>
      <p className="text-body-lg text-neutral-500 max-w-md mb-8">{description}</p>

      {step === 2 && (
        <div className="w-full max-w-sm space-y-4 mb-8">
          <Input label="What should we call you?" placeholder="Your name" />
          <Input label="Your website or channel" placeholder="https://..." hint="Optional" />
        </div>
      )}

      {step === 3 && (
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
          {["Tech", "Fashion", "Health", "Finance", "Travel", "Food"].map((niche) => (
            <button
              key={niche}
              className="px-4 py-3 rounded-lg border border-neutral-200 text-body-sm font-medium text-neutral-700 hover:border-broko-primary hover:text-broko-primary hover:bg-broko-light transition-all"
            >
              {niche}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 w-full max-w-sm">
        {onBack && (
          <Button variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
        )}
        <Button onClick={onNext} className="flex-1" size="lg">
          {isLast ? "Get started" : "Continue"}
        </Button>
      </div>

      {onSkip && (
        <button
          onClick={onSkip}
          className="mt-4 text-body-sm text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          Skip for now
        </button>
      )}
    </div>
  );
}
