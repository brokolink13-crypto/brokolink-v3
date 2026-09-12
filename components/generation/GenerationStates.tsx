"use client";

import React from "react";
import { BrokoCharacter } from "@/components/broko/BrokoCharacter";
import { Button } from "@/components/ui";
import { Loader2, AlertCircle } from "lucide-react";
import { GenerationStatus } from "@/types";

interface GenerationStatesProps { status: GenerationStatus; error?: string | null; onReset: () => void; }

export function GenerationStates({ status, error, onReset }: GenerationStatesProps) {
  if (status === "idle") return null;
  return (
    <div className="flex flex-col items-center py-12 animate-fade-in">
      {(status === "validating" || status === "generating") && (
        <>
          <BrokoCharacter size="lg" animate className="mb-6" />
          <Loader2 className="h-6 w-6 text-broko-primary animate-spin mb-4" />
          <h3 className="text-heading text-neutral-900 mb-2">{status === "validating" ? "Validating your product..." : "Generating your video..."}</h3>
          <p className="text-body text-neutral-500 max-w-md text-center">{status === "validating" ? "Checking the product URL." : "Our AI is crafting your affiliate video."}</p>
          <div className="w-full max-w-xs mt-6"><div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden"><div className="h-full bg-broko-primary rounded-full animate-pulse" style={{ width: status === "validating" ? "30%" : "70%" }} /></div></div>
        </>
      )}
      {status === "error" && (
        <>
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4"><AlertCircle className="h-8 w-8 text-red-500" /></div>
          <h3 className="text-heading text-neutral-900 mb-2">Generation failed</h3>
          <p className="text-body text-neutral-500 max-w-md text-center mb-6">{error || "Something went wrong."}</p>
          <Button onClick={onReset}>Try again</Button>
        </>
      )}
    </div>
  );
}
