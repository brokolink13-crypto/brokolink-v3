import React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps { name?: string; src?: string; size?: "sm" | "md" | "lg"; className?: string; }

export function Avatar({ name = "", src, size = "md", className }: AvatarProps) {
  const sizes = { sm: { container: "h-8 w-8", text: "text-caption" }, md: { container: "h-10 w-10", text: "text-body-sm" }, lg: { container: "h-14 w-14", text: "text-body-lg" } };
  const s = sizes[size];
  const initials = name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  if (src) return <img src={src} alt={name} className={cn("rounded-full object-cover", s.container, className)} />;
  return <div className={cn("rounded-full bg-broko-light text-broko-primary font-semibold flex items-center justify-center", s.container, s.text, className)}>{initials || "?"}</div>;
}
