"use client";

import React from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, Button, Badge } from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";
import { MOCK_SEED_BALANCE, MOCK_VIDEOS } from "@/lib/constants";
import { BrokoAvatar, BrokoHeroCharacter } from "@/components/dashboard";
import { CTABannerCard, RecentVideoSection, QuickActionsGrid, BrokoInsightCard } from "@/components/dashboard/DashboardSections";
import { Bell, Calendar, Play, Users, Target } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  const seed = MOCK_SEED_BALANCE;
  const recentVideo = MOCK_VIDEOS[0];

  const userName = user?.name ? user.name.split(" ")[0] : "Creator";

  return (
    <DashboardLayout>
      <div className="bg-[#F8FBF8] min-h-screen pb-4">
        <div className="px-4 pt-5 pb-4 space-y-5 max-w-lg mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-heading text-neutral-900">
              Welcome Back, {userName} {"\uD83D\uDC4B"}
            </h1>
            <div className="flex items-center gap-3">
              <button className="relative w-10 h-10 rounded-full bg-white border border-neutral-100 flex items-center justify-center shadow-soft">
                <Bell className="h-5 w-5 text-neutral-500" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <BrokoAvatar size={40} />
            </div>
          </div>

          {/* Credits Hero Card */}
          <Card variant="default" padding="md" className="bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-broko-light/40 to-transparent rounded-bl-full" />
            <div className="flex items-center gap-4">
              <div className="flex-1 z-10">
                <p className="text-caption text-neutral-400 mb-1">Available Credits</p>
                <p className="text-display-sm text-neutral-900 mb-2">{seed.balance} Credits</p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="success" size="sm">{"\uD83D\uDEE1\uFE0F"} Creator Level {seed.level}</Badge>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-neutral-400">{seed.xp} / {seed.maxXp} XP</span>
                  </div>
                  <div className="h-2 bg-neutral-100 rounded-full overflow-hidden w-40">
                    <div
                      className="h-full bg-broko-primary rounded-full transition-all duration-500"
                      style={{ width: `${(seed.xp / seed.maxXp) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="shrink-0 z-10">
                <BrokoHeroCharacter />
              </div>
            </div>
          </Card>

          {/* Quick Actions Row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: Calendar, label: "Daily\nCheck-in", emoji: "\uD83D\uDCC5", href: "/rewards" },
              { icon: Play, label: "Watch\nAds", emoji: "\u25B6\uFE0F", href: "/rewards" },
              { icon: Users, label: "Referral", emoji: "\uD83D\uDC65", href: "/rewards" },
              { icon: Target, label: "Weekly\nMission", emoji: "\uD83C\uDFAF", href: "/rewards" },
            ].map((action) => (
              <Link key={action.label} href={action.href}>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-100 shadow-soft flex items-center justify-center text-xl">
                    {action.emoji}
                  </div>
                  <span className="text-[10px] text-neutral-600 font-medium text-center leading-tight whitespace-pre-line">
                    {action.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <CTABannerCard />
          {recentVideo && <RecentVideoSection video={recentVideo} />}
          <QuickActionsGrid />
          <BrokoInsightCard />

        </div>
      </div>
    </DashboardLayout>
  );
}
