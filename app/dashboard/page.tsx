"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, Button, Badge, Skeleton } from "@/components/ui";
import { BrokoCharacter } from "@/components/broko/BrokoCharacter";
import { useAuth } from "@/hooks/useAuth";
import { useGeneration } from "@/hooks/useGeneration";
import { Sparkles, ArrowRight, Clock, TrendingUp, Video, CheckCircle, AlertCircle, DollarSign, Lightbulb } from "lucide-react";
import { formatDate } from "@/lib/utils";

const gradientThumbnails = [
  "from-purple-400 to-pink-400",
  "from-blue-400 to-cyan-400",
  "from-orange-400 to-red-400",
  "from-emerald-400 to-teal-400",
  "from-violet-400 to-indigo-400",
];

export default function DashboardPage() {
  const { user, isLoading: authLoading } = useAuth();
  const { history, isLoadingHistory, loadHistory } = useGeneration();

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  return (
    <DashboardLayout>
      <div className="container-page py-8">
        {/* Header */}
        <div className="mb-8">
          {authLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-5 w-64" />
            </div>
          ) : (
            <>
              <h1 className="text-display-sm text-neutral-900 mb-1">
                Welcome back{user?.name ? `, ${user.name.split(" ")[0]}` : ""} 👋
              </h1>
              <p className="text-body-lg text-neutral-500">
                Here&apos;s what&apos;s happening with your content.
              </p>
            </>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Videos Generated", value: "12", icon: Video, trend: "+3 this week" },
            { label: "Total Views", value: "2.4K", icon: TrendingUp, trend: "+18% vs last week" },
            { label: "Watch Time", value: "6.2h", icon: Clock, trend: "Avg 31s per video" },
            { label: "Est. Earnings", value: "$48", icon: DollarSign, trend: "+$12 this week" },
          ].map((stat) => (
            <Card key={stat.label} variant="default" padding="md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-caption text-neutral-400 mb-1">{stat.label}</p>
                  <p className="text-display-sm text-neutral-900">{stat.value}</p>
                  <p className="text-caption text-neutral-400 mt-1">{stat.trend}</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-broko-light flex items-center justify-center shrink-0">
                  <stat.icon className="h-[18px] w-[18px] text-broko-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {!isLoadingHistory && history.length === 0 && (
          <Card variant="outline" padding="lg" className="mb-8 border-amber-100 bg-amber-50/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                <Lightbulb className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-heading-sm text-neutral-900 mb-2">Getting Started</h3>
                <ul className="space-y-2 text-body-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-broko-primary font-bold mt-0.5">1.</span>
                    Go to the <strong>Generate</strong> tab and paste any product affiliate link
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-broko-primary font-bold mt-0.5">2.</span>
                    Choose your video style, tone, and duration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-broko-primary font-bold mt-0.5">3.</span>
                    Click Generate — your video will be ready in seconds!
                  </li>
                </ul>
                <Link href="/generate" className="inline-block mt-3">
                  <Button size="sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    Create your first video
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        )}

        <Card variant="default" padding="lg" className="mb-8 bg-broko-light border-broko-primary/10">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <BrokoCharacter size="md" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-heading text-neutral-900 mb-1">Generate a new video</h3>
              <p className="text-body text-neutral-500">
                Paste a product link and let AI create your next affiliate video.
              </p>
            </div>
            <Link href="/generate">
              <Button size="lg">
                <Sparkles className="h-4 w-4" />
                Generate
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Card>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-heading text-neutral-900">Recent generations</h2>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </div>

          {isLoadingHistory ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} variant="outline" padding="md">
                  <div className="flex items-center gap-4">
                    <Skeleton variant="rectangular" className="w-20 h-14 rounded-md" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-48" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : history.length === 0 ? (
            <Card variant="outline" padding="lg" className="text-center">
              <p className="text-body text-neutral-400 mb-3">
                No generations yet. Create your first video!
              </p>
              <Link href="/generate">
                <Button size="sm">Generate your first video</Button>
              </Link>
            </Card>
          ) : (
            <div className="space-y-3">
              {history.map((item, idx) => (
                <Card key={item.id} variant="outline" padding="md" className="hover:shadow-soft transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className={`w-20 h-14 rounded-md bg-gradient-to-br ${gradientThumbnails[idx % gradientThumbnails.length]} flex items-center justify-center shrink-0`}>
                      <Video className="h-6 w-6 text-white/80" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-body-sm font-medium text-neutral-900 truncate">
                          Video {item.id}
                        </p>
                        {item.status === "complete" ? (
                          <Badge variant="success">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Complete
                          </Badge>
                        ) : (
                          <Badge variant="error">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Failed
                          </Badge>
                        )}
                      </div>
                      <p className="text-caption text-neutral-400">
                        {item.duration && `${item.duration} • `}
                        {formatDate(item.createdAt)}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
