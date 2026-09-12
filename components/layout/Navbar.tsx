"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, APP_NAME } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <nav className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-xl">🥦</span>
          <span className="font-display text-heading-sm font-semibold text-neutral-900">{APP_NAME}</span>
        </Link>
        {isLanding && <div className="hidden md:flex items-center gap-8">{NAV_LINKS.map(link => (<a key={link.href} href={link.href} className="text-body-sm text-neutral-500 hover:text-neutral-900">{link.label}</a>))}</div>}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/auth/login"><Button variant="ghost" size="sm">Log in</Button></Link>
          <Link href="/auth/register"><Button size="sm">Get started</Button></Link>
        </div>
        <button className="md:hidden p-2 text-neutral-600" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white">
          <div className="container-page py-4 flex flex-col gap-3">
            {isLanding && NAV_LINKS.map(link => (<a key={link.href} href={link.href} className="py-2 text-body text-neutral-600" onClick={() => setMobileOpen(false)}>{link.label}</a>))}
            <div className="flex flex-col gap-2 pt-2 border-t border-neutral-100">
              <Link href="/auth/login" onClick={() => setMobileOpen(false)}><Button variant="outline" fullWidth>Log in</Button></Link>
              <Link href="/auth/register" onClick={() => setMobileOpen(false)}><Button fullWidth>Get started</Button></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
