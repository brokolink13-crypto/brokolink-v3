// TODO: Replace SVG placeholder with actual Broko 3D asset
// Broko is a premium stylized 3D broccoli character wearing a dark green hoodie
// with white drawstrings, white premium sneakers with subtle green accents.
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrokoCharacterProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  showLabel?: boolean;
  animate?: boolean;
}

const sizeMap = {
  sm: { w: 48, h: 56, container: "w-12 h-14" },
  md: { w: 80, h: 96, container: "w-20 h-24" },
  lg: { w: 128, h: 152, container: "w-32 h-[152px]" },
  xl: { w: 192, h: 224, container: "w-48 h-56" },
  hero: { w: 256, h: 300, container: "w-64 h-[300px] sm:w-72 sm:h-[340px] lg:w-80 lg:h-[380px]" },
};

function BrokoSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Broko character"
    >
      {/* Crown / broccoli head - bumpy top */}
      <ellipse cx="60" cy="38" rx="28" ry="26" fill="#3A9B4B" />
      <circle cx="44" cy="22" r="14" fill="#3A9B4B" />
      <circle cx="60" cy="16" r="13" fill="#44A855" />
      <circle cx="76" cy="22" r="14" fill="#3A9B4B" />
      <circle cx="50" cy="14" r="10" fill="#44A855" />
      <circle cx="70" cy="14" r="10" fill="#44A855" />
      <circle cx="60" cy="10" r="8" fill="#50B860" />
      {/* Highlight bumps */}
      <circle cx="52" cy="18" r="4" fill="#5CC46A" opacity="0.5" />
      <circle cx="68" cy="16" r="3" fill="#5CC46A" opacity="0.4" />

      {/* Face area - lighter patch */}
      <ellipse cx="60" cy="40" rx="18" ry="14" fill="#45A556" />

      {/* Eyes */}
      <circle cx="52" cy="38" r="3.5" fill="#1A1A1A" />
      <circle cx="68" cy="38" r="3.5" fill="#1A1A1A" />
      {/* Eye shine */}
      <circle cx="53.5" cy="36.5" r="1.2" fill="#FFFFFF" />
      <circle cx="69.5" cy="36.5" r="1.2" fill="#FFFFFF" />

      {/* Smile */}
      <path
        d="M54 46 Q60 51 66 46"
        stroke="#1A4D2E"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Hoodie body */}
      <path
        d="M34 58 Q34 54 40 52 L80 52 Q86 54 86 58 L88 110 Q88 120 78 120 L42 120 Q32 120 32 110 Z"
        fill="#1A4D2E"
      />
      {/* Hoodie collar / neckline */}
      <path
        d="M44 54 Q60 62 76 54"
        stroke="#153D24"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Hoodie pocket */}
      <rect x="46" y="82" width="28" height="14" rx="5" fill="#153D24" />

      {/* Drawstrings */}
      <line x1="56" y1="56" x2="52" y2="72" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="64" y1="56" x2="68" y2="72" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      {/* Drawstring tips */}
      <circle cx="52" cy="72" r="1.5" fill="#FFFFFF" />
      <circle cx="68" cy="72" r="1.5" fill="#FFFFFF" />

      {/* Arms */}
      <path
        d="M34 64 Q24 72 26 84"
        stroke="#1A4D2E"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M86 64 Q96 72 94 84"
        stroke="#1A4D2E"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Hands */}
      <circle cx="26" cy="84" r="5" fill="#3A9B4B" />
      <circle cx="94" cy="84" r="5" fill="#3A9B4B" />

      {/* Sneakers */}
      <rect x="38" y="118" width="16" height="10" rx="5" fill="#FFFFFF" />
      <rect x="66" y="118" width="16" height="10" rx="5" fill="#FFFFFF" />
      {/* Sneaker accent lines */}
      <line x1="40" y1="124" x2="52" y2="124" stroke="#4CAF50" strokeWidth="1" />
      <line x1="68" y1="124" x2="80" y2="124" stroke="#4CAF50" strokeWidth="1" />
    </svg>
  );
}

export function BrokoCharacter({
  size = "md",
  className,
  showLabel = false,
  animate = false,
}: BrokoCharacterProps) {
  const s = sizeMap[size];

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center",
          s.container,
          animate && "animate-pulse-soft"
        )}
      >
        <BrokoSVG w={s.w} h={s.h} />
      </div>
      {showLabel && (
        <span className="text-caption text-neutral-400 uppercase tracking-wider">
          Broko
        </span>
      )}
    </div>
  );
}
