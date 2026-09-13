"use client";

import React from "react";
import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { MobileNav } from "./MobileNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <DashboardHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0 pb-20 lg:pb-0">{children}</main>
      </div>
      <MobileNav />
    </div>
  );
}
