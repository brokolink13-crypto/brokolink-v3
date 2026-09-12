"use client";

import React from "react";
import Link from "next/link";
import { BrokoSVGIcon } from "@/components/broko/BrokoSVGIcon";
import { APP_NAME } from "@/lib/constants";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b border-neutral-100">
      <div className="container-page flex items-center h-14 lg:hidden">
        <Link href="/dashboard" className="flex items-center gap-2">
          <BrokoSVGIcon size={24} />
          <span className="font-display text-heading-sm font-bold text-broko-primary">
            {APP_NAME}
          </span>
        </Link>
      </div>
    </header>
  );
}
