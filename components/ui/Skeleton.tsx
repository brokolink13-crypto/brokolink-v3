import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps { className?: string; variant?: "text" | "circular" | "rectangular"; }

export function Skeleton({ className, variant = "text" }: SkeletonProps) {
  const variants = { text: "rounded-md h-4", circular: "rounded-full", rectangular: "rounded-lg" };
  return <div className={cn("animate-pulse bg-neutral-100", variants[variant], className)} />;
}
