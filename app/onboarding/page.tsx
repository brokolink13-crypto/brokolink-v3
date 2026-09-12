"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingStep } from "@/components/onboarding/OnboardingStep";
import { OnboardingProgress } from "@/components/onboarding/OnboardingProgress";
import { ONBOARDING_STEPS, APP_NAME } from "@/lib/constants";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const totalSteps = ONBOARDING_STEPS.length;
  const step = ONBOARDING_STEPS[currentStep - 1];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container-page py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-caption text-neutral-400">{APP_NAME}</span>
          <span className="text-caption text-neutral-400">{currentStep} of {totalSteps}</span>
        </div>
        <OnboardingProgress currentStep={currentStep} totalSteps={totalSteps} />
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <OnboardingStep
            step={currentStep}
            title={step.title}
            description={step.description}
            onNext={() => currentStep >= totalSteps ? router.push("/dashboard") : setCurrentStep(p => p + 1)}
            onBack={currentStep > 1 ? () => setCurrentStep(p => Math.max(1, p - 1)) : undefined}
            onSkip={currentStep < totalSteps ? () => router.push("/dashboard") : undefined}
            isLast={currentStep === totalSteps}
          />
        </div>
      </div>
    </div>
  );
}
