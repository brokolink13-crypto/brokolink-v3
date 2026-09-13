"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, Button, Badge } from "@/components/ui";
import { MOCK_SEED_BALANCE, MOCK_SEED_ACTIVITIES, MOCK_SEED_HISTORY } from "@/lib/constants";
import { Sprout, Eye, Calendar, Users, Target } from "lucide-react";

function formatHistoryDate(dateString: string): string {
  const d = new Date(dateString);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const activityIconMap: Record<string, React.ReactNode> = {
  watch_ads: <Eye className="h-4 w-4 text-blue-600" />,
  daily_checkin: <Calendar className="h-4 w-4 text-amber-600" />,
  referral: <Users className="h-4 w-4 text-purple-600" />,
  weekly_mission: <Target className="h-4 w-4 text-emerald-600" />,
};

const activityBgMap: Record<string, string> = {
  watch_ads: "bg-blue-50",
  daily_checkin: "bg-amber-50",
  referral: "bg-purple-50",
  weekly_mission: "bg-emerald-50",
};

const activityButtonLabel: Record<string, string> = {
  watch_ads: "Watch",
  daily_checkin: "Check In",
  referral: "Invite",
  weekly_mission: "View",
};

export default function RewardsPage() {
  const seed = MOCK_SEED_BALANCE;
  const activities = MOCK_SEED_ACTIVITIES;
  const history = MOCK_SEED_HISTORY;
  const [checkedIn, setCheckedIn] = useState(true);

  const videosEquivalent = Math.floor(seed.balance / 50);

  return (
    <DashboardLayout>
      <div className="bg-[#F8FBF8] min-h-screen pb-4">
        <div className="px-4 pt-5 pb-4 space-y-5 max-w-lg mx-auto">

          {/* Header with Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="BrokoLink" width={32} height={32} className="rounded-lg" />
            <h1 className="text-heading text-neutral-900">Rewards</h1>
          </div>

          {/* Broko Seed Balance Card */}
          <Card variant="default" padding="lg" className="bg-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-broko-primary to-emerald-400" />
            <div className="text-3xl mb-2">🌱</div>
            <p className="text-body-sm text-neutral-500 mb-1">Your Broko Seeds</p>
            <p className="text-display text-neutral-900 font-bold mb-1">{seed.balance}</p>
            <p className="text-caption text-neutral-400">= {videosEquivalent} videos</p>

            <div className="mt-4 pt-4 border-t border-neutral-100">
              <div className="flex items-center justify-between mb-1">
                <span className="text-caption text-neutral-400">Level {seed.level}</span>
                <span className="text-caption text-neutral-400">{seed.xp} / {seed.maxXp} XP</span>
              </div>
              <div className="h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-broko-primary to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${(seed.xp / seed.maxXp) * 100}%` }}
                />
              </div>
            </div>
          </Card>

          {/* Ways to Earn */}
          <div>
            <h2 className="text-heading-sm text-neutral-900 mb-3">Ways to Earn</h2>
            <div className="space-y-2">
              {activities.map((activity) => {
                const isDone = activity.type === "daily_checkin" && checkedIn;
                return (
                  <Card key={activity.id} variant="default" padding="sm" className="bg-white">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${activityBgMap[activity.type]} flex items-center justify-center shrink-0`}>
                        {activityIconMap[activity.type]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-body-sm font-medium text-neutral-900">{activity.label}</p>
                        <p className="text-caption text-broko-primary font-semibold">+{activity.reward} seeds</p>
                      </div>
                      <Button
                        size="sm"
                        variant={isDone ? "ghost" : "primary"}
                        disabled={isDone}
                        className={isDone ? "opacity-50" : ""}
                      >
                        {isDone ? "Done \u2713" : activityButtonLabel[activity.type]}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Seed History */}
          <div>
            <h2 className="text-heading-sm text-neutral-900 mb-3">Seed History</h2>
            <Card variant="default" padding="none" className="bg-white overflow-hidden">
              {history.map((entry, idx) => (
                <div
                  key={entry.id}
                  className={`flex items-center gap-3 px-4 py-3 ${idx !== history.length - 1 ? "border-b border-neutral-50" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-lg ${activityBgMap[entry.type]} flex items-center justify-center shrink-0`}>
                    {activityIconMap[entry.type]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body-sm text-neutral-900">{entry.description}</p>
                    <p className="text-[10px] text-neutral-400">{formatHistoryDate(entry.date)}</p>
                  </div>
                  <span className="text-body-sm font-semibold text-broko-primary">
                    +{entry.amount}
                  </span>
                </div>
              ))}
            </Card>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
