import React from "react";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

interface AuthCardProps { children: React.ReactNode; title: string; subtitle: string; footerText: string; footerLinkText: string; footerLinkHref: string; }

export function AuthCard({ children, title, subtitle, footerText, footerLinkText, footerLinkHref }: AuthCardProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <span className="text-2xl">🥦</span>
            <span className="font-display text-heading font-semibold text-neutral-900">{APP_NAME}</span>
          </Link>
          <h1 className="text-display-sm text-neutral-900 mb-2">{title}</h1>
          <p className="text-body text-neutral-500">{subtitle}</p>
        </div>
        {children}
        <p className="text-center text-body-sm text-neutral-500 mt-6">
          {footerText} <Link href={footerLinkHref} className="text-broko-primary hover:text-broko-hoodie font-medium">{footerLinkText}</Link>
        </p>
      </div>
    </div>
  );
}
