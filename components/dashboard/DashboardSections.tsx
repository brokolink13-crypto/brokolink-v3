"use client";

import React from "react";
import Link from "next/link";
import { Card, Button, Badge } from "@/components/ui";
import { BrokoWandCharacter } from "./BrokoWandCharacter";
import { BrokoInsightThumb } from "./BrokoInsightThumb";
import { Play, Link2, ChevronRight } from "lucide-react";
import { VideoItem } from "@/types";

function formatVideoDate(dateString: string): string {
  const d = new Date(dateString);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }) + " \u2022 " + d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function CTABannerCard() {
  return (
    <Card variant="default" padding="md" className="bg-white relative overflow-hidden">
      <div className="flex items-center gap-3">
        <div className="flex-1 z-10">
          <h3 className="text-heading-sm text-neutral-900 mb-1">
            Create Affiliate Videos in Seconds
          </h3>
          <p className="text-caption text-neutral-500 mb-3">
            Paste a product link and let Broko AI handle everything.
          </p>
          <Link href="/generate">
            <Button size="sm" className="gap-1.5">
              <Link2 className="h-3.5 w-3.5" />
              Paste Product Link
            </Button>
          </Link>
        </div>
        <div className="shrink-0 z-10 relative">
          <BrokoWandCharacter />
          <span className="absolute -top-2 -left-2 text-yellow-400 text-lg">{"\u2728"}</span>
          <span className="absolute top-4 -right-1 text-yellow-400 text-sm">{"\u2728"}</span>
          <span className="absolute -bottom-1 left-0 text-yellow-400 text-xs">{"\u2728"}</span>
        </div>
      </div>
    </Card>
  );
}

export function RecentVideoSection({ video }: { video: VideoItem }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-heading-sm text-neutral-900">Recent Video</h2>
        <Link href="/videos" className="text-caption text-broko-primary font-medium">
          View All
        </Link>
      </div>
      <Card variant="default" padding="sm" className="bg-white">
        <div className="flex gap-3">
          <div className="w-28 h-20 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 relative overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Play className="h-4 w-4 text-white fill-white" />
            </div>
            <span className="absolute bottom-1 right-1 text-[9px] bg-black/60 text-white px-1.5 py-0.5 rounded">
              {video.duration}
            </span>
          </div>
          <div className="flex-1 min-w-0 py-0.5">
            <p className="text-body-sm font-medium text-neutral-900 truncate mb-0.5">
              {video.productName}
            </p>
            {video.price && (
              <p className="text-caption font-semibold text-broko-primary mb-1">
                {video.price}
              </p>
            )}
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="success" size="sm">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />
                Ready
              </Badge>
              <span className="text-[10px] text-neutral-400">{video.resolution}</span>
              <span className="text-[10px] text-neutral-400">{video.duration}</span>
            </div>
            <p className="text-[10px] text-neutral-400">
              {formatVideoDate(video.createdAt)}
            </p>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-neutral-50">
          <Link href="/videos">
            <Button variant="outline" size="sm" fullWidth className="text-caption">
              Continue &rsaquo;
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export function QuickActionsGrid() {
  const items = [
    { icon: "\uD83C\uDF81", title: "Rewards", desc: "Claim rewards and bonuses", href: "/rewards" },
    { icon: "\uD83D\uDC65", title: "Referral", desc: "Invite friends and earn more", href: "/rewards" },
    { icon: "\uD83D\uDD50", title: "History", desc: "View your video history", href: "/videos" },
    { icon: "\uD83D\uDCCB", title: "Templates", desc: "Use smart templates to create faster", href: "/generate" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <Link key={item.title} href={item.href}>
          <Card variant="default" padding="sm" className="bg-white h-full hover:shadow-medium transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xl mb-1.5 block">{item.icon}</span>
                <h4 className="text-body-sm font-semibold text-neutral-900 mb-0.5">{item.title}</h4>
                <p className="text-[10px] text-neutral-400 leading-tight">{item.desc}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-neutral-300 shrink-0 mt-1" />
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export function BrokoInsightCard() {
  return (
    <Card variant="default" padding="md" className="bg-white">
      <div className="flex items-start gap-3">
        <div className="relative shrink-0">
          <BrokoInsightThumb />
          <span className="absolute -top-1 -right-1 text-yellow-400 text-xs">{"\u2728"}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-body-sm font-bold text-neutral-900 mb-1">
            Broko AI Insight
          </h3>
          <p className="text-caption text-neutral-500 leading-relaxed">
            Products priced below Rp100k convert 38% better. Try creating your next affiliate video with lower-priced products.
          </p>
        </div>
      </div>
    </Card>
  );
}
