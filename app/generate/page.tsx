"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui";
import { GenerationForm } from "@/components/generation/GenerationForm";
import { GenerationStates } from "@/components/generation/GenerationStates";
import { GenerationResultView } from "@/components/generation/GenerationResult";
import { useGeneration } from "@/hooks/useGeneration";
import { GenerationParams } from "@/types";
import { Info, ShoppingBag, Globe, Smartphone } from "lucide-react";

export default function GeneratePage() {
  const { status, result, generate, reset, error } = useGeneration();

  const handleGenerate = (params: GenerationParams) => {
    generate(params);
  };

  return (
    <DashboardLayout>
      <div className="container-page py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-display-sm text-neutral-900 mb-2">Generate Video</h1>
            <p className="text-body-lg text-neutral-500">
              Create an AI-powered affiliate video from any product link.
            </p>
          </div>

          <Card variant="default" padding="lg">
            {status === "idle" && (
              <GenerationForm
                onSubmit={handleGenerate}
                isDisabled={status !== "idle"}
              />
            )}

            {(status === "validating" || status === "generating" || status === "error") && (
              <GenerationStates status={status} error={error} onReset={reset} />
            )}

            {status === "complete" && result && (
              <GenerationResultView result={result} onReset={reset} />
            )}
          </Card>

          {/* Tips Section */}
          <Card variant="outline" padding="md" className="mt-6 border-blue-100 bg-blue-50/30">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <Info className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h4 className="text-body-sm font-semibold text-neutral-900 mb-2">Pro Tips</h4>
                <ul className="space-y-2 text-body-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <ShoppingBag className="h-4 w-4 text-neutral-400 mt-0.5 shrink-0" />
                    <span><strong>Amazon, Tokopedia, and Shopee</strong> links work best — product data is richer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone className="h-4 w-4 text-neutral-400 mt-0.5 shrink-0" />
                    <span>Vertical (9:16) videos get <strong>2x more engagement</strong> on TikTok and Reels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-neutral-400 mt-0.5 shrink-0" />
                    <span>Use <strong>15s duration</strong> for quick hooks, <strong>60s</strong> for detailed reviews</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
