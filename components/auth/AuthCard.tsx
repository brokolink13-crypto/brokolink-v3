import React from "react";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { BrokoSVGIcon } from "@/components/broko/BrokoSVGIcon";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
}

export function AuthCard({
  children,
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthCardProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <BrokoSVGIcon size={32} />
            <span className="font-display text-heading font-bold text-broko-primary">
              {APP_NAME}
            </span>
          </Link>
          <h1 className="text-display-sm text-neutral-900 mb-2">{title}</h1>
          <p className="text-body text-neutral-500">{subtitle}</p>
        </div>

        <div className="bg-white border border-neutral-100 rounded-xl p-6 shadow-soft">
          {children}
        </div>

        <p className="text-center text-body-sm text-neutral-500 mt-6">
          {footerText}{" "}
          <Link href={footerLinkHref} className="text-broko-primary hover:text-broko-hoodie font-medium transition-colors">
            {footerLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
}
