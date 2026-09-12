import React from "react";

interface BrokoSVGIconProps {
  size?: number;
  className?: string;
}

export function BrokoSVGIcon({ size = 24, className }: BrokoSVGIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BrokoLink"
    >
      <circle cx="16" cy="12" r="8" fill="#3A9B4B" />
      <circle cx="12" cy="7" r="4.5" fill="#44A855" />
      <circle cx="16" cy="5" r="4" fill="#50B860" />
      <circle cx="20" cy="7" r="4.5" fill="#44A855" />
      <circle cx="13" cy="12" r="1.2" fill="#1A1A1A" />
      <circle cx="19" cy="12" r="1.2" fill="#1A1A1A" />
      <path d="M14 15 Q16 17 18 15" stroke="#1A4D2E" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <path d="M10 18 Q10 16.5 12 16 L20 16 Q22 16.5 22 18 L22.5 28 Q22.5 30 20 30 L12 30 Q9.5 30 9.5 28 Z" fill="#1A4D2E" />
    </svg>
  );
}
