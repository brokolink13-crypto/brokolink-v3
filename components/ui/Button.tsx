"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-broko-primary text-white hover:bg-broko-hoodie focus:ring-broko-primary shadow-soft hover:shadow-medium",
    secondary:
      "bg-broko-light text-broko-primary hover:bg-emerald-100 focus:ring-broko-primary",
    outline:
      "border border-neutral-200 text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-300",
    ghost:
      "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 focus:ring-neutral-300",
    danger:
      "bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-300",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-body-sm gap-1.5",
    md: "px-4 py-2.5 text-body gap-2",
    lg: "px-6 py-3 text-body-lg gap-2.5",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
