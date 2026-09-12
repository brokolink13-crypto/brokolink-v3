import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
  width?: string;
  height?: string;
}

export function Skeleton({ className, variant = "text", width, height }: SkeletonProps) {
  const base = "animate-pulse bg-neutral-100";
  const variants = {
    text: "rounded-md h-4",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  };

  return (
    <div
      className={cn(base, variants[variant], className)}
      style={{ width, height }}
    />
  );
}
