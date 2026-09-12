"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

interface ToastProps { message: string; type?: "success" | "error" | "info"; isVisible: boolean; onClose: () => void; duration?: number; }

export function Toast({ message, type = "info", isVisible, onClose, duration = 4000 }: ToastProps) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => { setShow(false); setTimeout(onClose, 300); }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);
  if (!isVisible && !show) return null;
  const icons = { success: <CheckCircle className="h-5 w-5 text-emerald-500" />, error: <AlertCircle className="h-5 w-5 text-red-500" />, info: <Info className="h-5 w-5 text-blue-500" /> };
  const backgrounds = { success: "bg-emerald-50 border-emerald-200", error: "bg-red-50 border-red-200", info: "bg-blue-50 border-blue-200" };
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={cn("flex items-center gap-3 px-4 py-3 rounded-lg border shadow-medium transition-all duration-300", backgrounds[type], show ? "opacity-100" : "opacity-0")}>
        {icons[type]}
        <p className="text-body-sm text-neutral-800">{message}</p>
        <button onClick={onClose} className="ml-2 text-neutral-400 hover:text-neutral-600"><X className="h-4 w-4" /></button>
      </div>
    </div>
  );
}
