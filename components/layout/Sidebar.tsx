"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Sparkles, User, LogOut } from "lucide-react";
import { DASHBOARD_NAV, APP_NAME } from "@/lib/constants";
import { useAuth } from "@/hooks/useAuth";

const iconMap: Record<string, React.ElementType> = { Home, Sparkles, User };

export function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 border-r border-neutral-100 bg-white">
      <div className="flex items-center gap-2.5 px-6 h-16 border-b border-neutral-100">
        <span className="text-xl">🥦</span>
        <span className="font-display text-heading-sm font-semibold text-neutral-900">{APP_NAME}</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {DASHBOARD_NAV.map(item => {
          const Icon = iconMap[item.icon] || Home;
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={cn("flex items-center gap-3 px-3 py-2.5 rounded-lg text-body-sm font-medium transition-all", isActive ? "bg-broko-light text-broko-primary" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50")}>
              <Icon className="h-[18px] w-[18px]" />{item.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-3 py-4 border-t border-neutral-100">
        <button onClick={() => logout()} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-body-sm font-medium text-neutral-500 hover:text-red-600 hover:bg-red-50 w-full">
          <LogOut className="h-[18px] w-[18px]" />Log out
        </button>
      </div>
    </aside>
  );
}
