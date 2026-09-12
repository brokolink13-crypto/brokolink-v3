"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui";
import { GenerationForm } from "@/components/generation/GenerationForm";
import { GenerationStates } from "@/components/generation/GenerationStates";
import { GenerationResultView } from "@/components/generation/GenerationResult";
import { useGeneration } from "@/hooks/useGeneration";
import { GenerationParams } from "@/types";

export default function GeneratePage() {
  const { status, result, generate, reset, error } = useGeneration();

  return (
    <DashboardLayout>
      <div className="container-page py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-display-sm text-neutral-900 mb-2">Generate Video</h1>
            <p className="text-body-lg text-neutral-500">Create an AI-powered affiliate video from any product link.</p>
          </div>
          <Card variant="default" padding="lg">
            {status === "idle" && <GenerationForm onSubmit={(p: GenerationParams) => generate(p)} isDisabled={false} />}
            {(status === "validating" || status === "generating" || status === "error") && <GenerationStates status={status} error={error} onReset={reset} />}
            {status === "complete" && result && <GenerationResultView result={result} onReset={reset} />}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
