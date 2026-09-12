"use client";

import React from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-neutral-50">
      <Sidebar />
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      <MobileNav />
    </div>
  );
}
