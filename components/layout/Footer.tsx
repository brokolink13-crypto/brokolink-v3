import React from "react";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { BrokoSVGIcon } from "@/components/broko/BrokoSVGIcon";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <BrokoSVGIcon size={24} />
              <span className="font-display text-heading-sm font-bold text-broko-primary">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-body-sm text-neutral-500 max-w-xs">
              Generate stunning affiliate videos with AI. Create, share, and earn.
            </p>
          </div>

          <div>
            <h4 className="text-body-sm font-semibold text-neutral-900 mb-3">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Changelog", "API"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-body-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-body-sm font-semibold text-neutral-900 mb-3">Company</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-body-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-body-sm font-semibold text-neutral-900 mb-3">Legal</h4>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-body-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-caption text-neutral-400">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "GitHub", "Discord"].map((social) => (
              <a key={social} href="#" className="text-caption text-neutral-400 hover:text-neutral-600 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
