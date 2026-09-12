"use client";

import { useState, useCallback } from "react";
import { GenerationParams, GenerationResult, GenerationStatus } from "@/types";
import * as generationService from "@/services/generation.service";

export function useGeneration() {
  const [status, setStatus] = useState<GenerationStatus>("idle");
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [history, setHistory] = useState<GenerationResult[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async (params: GenerationParams) => {
    setStatus("validating"); setError(null); setResult(null);
    try {
      setStatus("generating");
      const res = await generationService.generateVideo(params);
      setResult(res);
      setStatus(res.status === "error" ? "error" : "complete");
      if (res.error) setError(res.error);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Generation failed");
    }
  }, []);

  const loadHistory = useCallback(async () => {
    setIsLoadingHistory(true);
    try { const data = await generationService.getGenerationHistory(); setHistory(data); }
    catch (err) { setError(err instanceof Error ? err.message : "Failed to load history"); }
    finally { setIsLoadingHistory(false); }
  }, []);

  const reset = useCallback(() => { setStatus("idle"); setResult(null); setError(null); }, []);

  return { status, result, history, isLoadingHistory, generate, loadHistory, reset, error };
}
