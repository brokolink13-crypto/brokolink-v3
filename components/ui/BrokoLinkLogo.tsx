"use client";

import React from "react";

interface BrokoLinkLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { w: 120, h: 48 },
  md: { w: 180, h: 72 },
  lg: { w: 240, h: 96 },
};

export function BrokoLinkLogo({ size = "md", className }: BrokoLinkLogoProps) {
  const { w, h } = sizeMap[size];

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 240 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BrokoLink logo"
    >
      {/* Broccoli crown - outline */}
      <ellipse cx="48" cy="28" rx="20" ry="18" stroke="#4CAF50" strokeWidth="2.5" fill="none" />
      <circle cx="36" cy="16" r="10" stroke="#4CAF50" strokeWidth="2.5" fill="none" />
      <circle cx="48" cy="12" r="9" stroke="#4CAF50" strokeWidth="2.5" fill="none" />
      <circle cx="60" cy="16" r="10" stroke="#4CAF50" strokeWidth="2.5" fill="none" />

      {/* Play button triangle inside crown */}
      <polygon points="42,22 42,34 56,28" fill="#4CAF50" />

      {/* Stem */}
      <rect x="45" y="44" width="6" height="12" rx="2" fill="#1A4D2E" />

      {/* Chain / link icon below stem */}
      <ellipse cx="42" cy="62" rx="7" ry="5" stroke="#1A4D2E" strokeWidth="2" fill="none" />
      <ellipse cx="54" cy="62" rx="7" ry="5" stroke="#1A4D2E" strokeWidth="2" fill="none" />

      {/* "BrokoLink" text */}
      <text x="48" y="84" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="14" fill="#1A4D2E">
        BrokoLink
      </text>
    </svg>
  );
}
