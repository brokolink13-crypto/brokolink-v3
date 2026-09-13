"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BrokoCharacter } from "@/components/broko/BrokoCharacter";
import { Button, Input } from "@/components/ui";
import { ONBOARDING_STEPS, APP_NAME } from "@/lib/constants";
import { Link2, Wand2, Download, ArrowRight } from "lucide-react";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [affiliateLink, setAffiliateLink] = useState("");
  const router = useRouter();
  const totalSteps = ONBOARDING_STEPS.length;
  const step = ONBOARDING_STEPS[currentStep - 1];

  const handleNext = () => {
    if (currentStep >= totalSteps) {
      router.push("/dashboard");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSkip = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top bar */}
      <div className="container-page py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt={APP_NAME} width={24} height={24} className="rounded" />
            <span className="text-body-sm font-bold text-[#1A4D2E]">
              {APP_NAME}
            </span>
          </div>
          <span className="text-caption text-neutral-400">
            {currentStep} of {totalSteps}
          </span>
        </div>
        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i < currentStep ? "bg-broko-primary flex-[2]" : "bg-neutral-200 flex-1"
              } ${i === currentStep - 1 ? "bg-broko-body" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md animate-fade-in">
          <div className="flex flex-col items-center text-center">
            {currentStep === 1 && (
              <>
                <BrokoCharacter size="lg" animate className="mb-8" />
                <h2 className="text-display-sm text-neutral-900 mb-3">{step.title}</h2>
                <p className="text-body-lg text-neutral-500 max-w-md mb-8">{step.description}</p>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h2 className="text-display-sm text-neutral-900 mb-3">{step.title}</h2>
                <p className="text-body-lg text-neutral-500 max-w-md mb-8">{step.description}</p>
                <div className="w-full space-y-4 mb-8 text-left">
                  {[
                    { icon: Link2, title: "Paste your affiliate link", desc: "Amazon, Tokopedia, Shopee \u2014 any product URL" },
                    { icon: Wand2, title: "AI creates your video", desc: "Script, visuals, and voiceover \u2014 all automated" },
                    { icon: Download, title: "Download & share", desc: "Post on TikTok, Reels, Shorts and start earning" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                      <div className="w-10 h-10 rounded-lg bg-broko-light flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-broko-primary" />
                      </div>
                      <div>
                        <p className="text-body-sm font-semibold text-neutral-900">{item.title}</p>
                        <p className="text-caption text-neutral-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <BrokoCharacter size="md" className="mb-6" />
                <h2 className="text-display-sm text-neutral-900 mb-3">{step.title}</h2>
                <p className="text-body-lg text-neutral-500 max-w-md mb-8">{step.description}</p>
                <div className="w-full max-w-sm mb-8">
                  <Input
                    label="Your first affiliate link"
                    placeholder="https://amazon.com/dp/..."
                    value={affiliateLink}
                    onChange={(e) => setAffiliateLink(e.target.value)}
                    hint="You can skip this and add it later"
                  />
                </div>
              </>
            )}

            <div className="flex items-center gap-3 w-full max-w-sm">
              {currentStep > 1 && (
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  Back
                </Button>
              )}
              <Button onClick={handleNext} className="flex-1" size="lg">
                {currentStep === totalSteps ? (
                  <>
                    Get started
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </>
                ) : (
                  "Continue"
                )}
              </Button>
            </div>

            {currentStep < totalSteps && (
              <button
                onClick={handleSkip}
                className="mt-4 text-body-sm text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                Skip for now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
