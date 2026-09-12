import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outline" | "filled";
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({ children, className, variant = "default", padding = "md", ...props }: CardProps) {
  const variants = {
    default: "bg-white border border-neutral-100 shadow-soft",
    elevated: "bg-white shadow-elevated",
    outline: "bg-white border border-neutral-200",
    filled: "bg-neutral-50 border border-neutral-100",
  };
  const paddings = { none: "", sm: "p-4", md: "p-6", lg: "p-8" };
  return <div className={cn("rounded-xl", variants[variant], paddings[padding], className)} {...props}>{children}</div>;
}
