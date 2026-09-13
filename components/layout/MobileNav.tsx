"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Play, Gift, User } from "lucide-react";
import { DASHBOARD_NAV } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Play,
  Gift,
  User,
};

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-100 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {DASHBOARD_NAV.map((item) => {
          const Icon = iconMap[item.icon] || Home;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors min-w-0",
                isActive ? "text-broko-primary" : "text-neutral-400 hover:text-neutral-600"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
