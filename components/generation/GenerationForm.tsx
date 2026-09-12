"use client";

import React, { useState } from "react";
import { Button, Input } from "@/components/ui";
import { GenerationParams } from "@/types";
import {
  GENERATION_TONES,
  GENERATION_DURATIONS,
  GENERATION_STYLES,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

interface GenerationFormProps {
  onSubmit: (params: GenerationParams) => void;
  isDisabled?: boolean;
}

const platforms = [
  { value: "tiktok", label: "TikTok", emoji: "🎵" },
  { value: "reels", label: "Instagram Reels", emoji: "📸" },
  { value: "shorts", label: "YouTube Shorts", emoji: "▶️" },
];

export function GenerationForm({ onSubmit, isDisabled }: GenerationFormProps) {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [tone, setTone] = useState<GenerationParams["tone"]>("professional");
  const [duration, setDuration] = useState<GenerationParams["duration"]>("30s");
  const [style, setStyle] = useState<GenerationParams["style"]>("product-showcase");
  const [platform, setPlatform] = useState("tiktok");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ productUrl, productName, tone, duration, style });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Input
          label="Product URL"
          placeholder="https://amazon.com/dp/..."
          value={productUrl}
          onChange={(e) => setProductUrl(e.target.value)}
          required
          hint="Paste your affiliate product link"
        />
        <Input
          label="Product Name"
          placeholder="Product name for the video"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>

      {/* Platform Selector */}
      <div>
        <label className="block text-body-sm font-medium text-neutral-700 mb-2">
          Platform
        </label>
        <div className="flex gap-2">
          {platforms.map((p) => (
            <button
              type="button"
              key={p.value}
              onClick={() => setPlatform(p.value)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-full border text-body-sm font-medium transition-all duration-200",
                platform === p.value
                  ? "border-broko-primary bg-broko-light text-broko-primary"
                  : "border-neutral-200 text-neutral-600 hover:border-neutral-300"
              )}
            >
              <span>{p.emoji}</span>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-body-sm font-medium text-neutral-700 mb-2">
          Video Style
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {GENERATION_STYLES.map((s) => (
            <button
              type="button"
              key={s.value}
              onClick={() => setStyle(s.value as GenerationParams["style"])}
              className={cn(
                "text-left p-3 rounded-lg border transition-all duration-200",
                style === s.value
                  ? "border-broko-primary bg-broko-light"
                  : "border-neutral-200 hover:border-neutral-300"
              )}
            >
              <p className={cn("text-body-sm font-medium", style === s.value ? "text-broko-primary" : "text-neutral-700")}>
                {s.label}
              </p>
              <p className="text-caption text-neutral-400">{s.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-body-sm font-medium text-neutral-700 mb-2">
          Tone
        </label>
        <div className="flex flex-wrap gap-2">
          {GENERATION_TONES.map((t) => (
            <button
              type="button"
              key={t.value}
              onClick={() => setTone(t.value as GenerationParams["tone"])}
              className={cn(
                "px-3.5 py-2 rounded-lg border text-body-sm font-medium transition-all duration-200",
                tone === t.value
                  ? "border-broko-primary bg-broko-light text-broko-primary"
                  : "border-neutral-200 text-neutral-600 hover:border-neutral-300"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-body-sm font-medium text-neutral-700 mb-2">
          Duration
        </label>
        <div className="flex gap-2">
          {GENERATION_DURATIONS.map((d) => (
            <button
              type="button"
              key={d.value}
              onClick={() => setDuration(d.value as GenerationParams["duration"])}
              className={cn(
                "flex-1 py-2.5 rounded-lg border text-body-sm font-medium transition-all duration-200 text-center",
                duration === d.value
                  ? "border-broko-primary bg-broko-light text-broko-primary"
                  : "border-neutral-200 text-neutral-600 hover:border-neutral-300"
              )}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <Button type="submit" fullWidth size="lg" disabled={isDisabled || !productUrl || !productName}>
        Generate Video
      </Button>
    </form>
  );
}
