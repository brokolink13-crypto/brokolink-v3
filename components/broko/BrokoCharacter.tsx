"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrokoCharacterProps { size?: "sm" | "md" | "lg" | "xl" | "hero"; className?: string; showLabel?: boolean; animate?: boolean; }

const sizes = {
  sm: { container: "w-12 h-12", emoji: "text-2xl" },
  md: { container: "w-20 h-20", emoji: "text-4xl" },
  lg: { container: "w-32 h-32", emoji: "text-6xl" },
  xl: { container: "w-48 h-48", emoji: "text-8xl" },
  hero: { container: "w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80", emoji: "text-[8rem] sm:text-[10rem]" },
};

export function BrokoCharacter({ size = "md", className, showLabel = false, animate = false }: BrokoCharacterProps) {
  const s = sizes[size];
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className={cn("relative flex items-center justify-center rounded-full bg-gradient-to-br from-broko-light via-emerald-50 to-broko-light border-2 border-broko-primary/10", s.container, animate && "animate-pulse-soft")}>
        <div className={cn("select-none", s.emoji)} role="img" aria-label="Broko character">🥦</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-broko-hoodie/10 rounded-b-full" />
      </div>
      {showLabel && <span className="text-caption text-neutral-400 uppercase tracking-wider">Broko</span>}
    </div>
  );
}
