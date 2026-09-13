import React from "react";

export function BrokoWandCharacter() {
  return (
    <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="32" rx="22" ry="20" fill="#3A9B4B" />
      <circle cx="38" cy="18" r="11" fill="#44A855" />
      <circle cx="50" cy="14" r="10" fill="#50B860" />
      <circle cx="62" cy="18" r="11" fill="#44A855" />
      <ellipse cx="50" cy="34" rx="14" ry="11" fill="#45A556" />
      <circle cx="44" cy="32" r="2.5" fill="#1A1A1A" />
      <circle cx="56" cy="32" r="2.5" fill="#1A1A1A" />
      <circle cx="45" cy="30.5" r="1" fill="#FFFFFF" />
      <circle cx="57" cy="30.5" r="1" fill="#FFFFFF" />
      <path d="M46 38 Q50 42 54 38" stroke="#1A4D2E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M30 48 Q30 44 35 43 L65 43 Q70 44 70 48 L72 95 Q72 103 63 103 L37 103 Q28 103 28 95 Z" fill="#1A4D2E" />
      {/* Wand in right hand */}
      <line x1="82" y1="50" x2="95" y2="20" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
      <circle cx="95" cy="18" r="4" fill="#FFD700" opacity="0.6" />
      {/* Sparkles */}
      <circle cx="90" cy="12" r="1.5" fill="#FFD700" />
      <circle cx="98" cy="22" r="1" fill="#FFD700" />
      <circle cx="88" cy="6" r="1" fill="#FFD700" />
      {/* Right arm with wand */}
      <path d="M70 54 Q80 58 82 50" stroke="#1A4D2E" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="82" cy="50" r="4" fill="#3A9B4B" />
      {/* Left arm */}
      <path d="M30 54 Q20 62 22 72" stroke="#1A4D2E" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="72" r="4" fill="#3A9B4B" />
      <rect x="33" y="101" width="13" height="8" rx="4" fill="#FFFFFF" />
      <rect x="54" y="101" width="13" height="8" rx="4" fill="#FFFFFF" />
    </svg>
  );
}
