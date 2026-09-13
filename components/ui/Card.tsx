import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

const variants = {
  default: "bg-white border border-neutral-100 shadow-soft",
  outline: "bg-white border border-neutral-200",
  elevated: "bg-white border border-neutral-100 shadow-elevated",
};

const paddings = {
  none: "",
  sm: "p-3",
  md: "p-4 sm:p-5",
  lg: "p-6 sm:p-8",
};

export function Card({ children, variant = "default", padding = "md", className }: CardProps) {
  return (
    <div className={cn("rounded-xl", variants[variant], paddings[padding], className)}>
      {children}
    </div>
  );
}
