"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ModalProps { isOpen: boolean; onClose: () => void; title?: string; children: React.ReactNode; size?: "sm" | "md" | "lg"; }

export function Modal({ isOpen, onClose, title, children, size = "md" }: ModalProps) {
  useEffect(() => { document.body.style.overflow = isOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [isOpen]);
  if (!isOpen) return null;
  const sizes = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl" };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={onClose} />
      <div className={cn("relative bg-white rounded-xl shadow-elevated p-6 w-full mx-4 animate-fade-in", sizes[size])}>
        {title && <div className="flex items-center justify-between mb-4"><h2 className="text-heading font-semibold text-neutral-900">{title}</h2><button onClick={onClose} className="text-neutral-400 hover:text-neutral-600 p-1"><X className="h-5 w-5" /></button></div>}
        {children}
      </div>
    </div>
  );
}
