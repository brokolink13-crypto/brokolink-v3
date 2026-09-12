import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({ children, variant = "default", size = "sm", className }: BadgeProps) {
  const variants = {
    default: "bg-neutral-100 text-neutral-600",
    success: "bg-emerald-50 text-emerald-700",
    warning: "bg-amber-50 text-amber-700",
    error: "bg-red-50 text-red-700",
    info: "bg-blue-50 text-blue-700",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-caption",
    md: "px-2.5 py-1 text-body-sm",
  };

  return (
    <span className={cn("inline-flex items-center font-medium rounded-md", variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}
