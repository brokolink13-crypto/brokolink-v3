"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, Button, Badge, Skeleton } from "@/components/ui";
import { BrokoCharacter } from "@/components/broko/BrokoCharacter";
import { useAuth } from "@/hooks/useAuth";
import { useGeneration } from "@/hooks/useGeneration";
import { Sparkles, ArrowRight, Clock, TrendingUp, Video, CheckCircle, AlertCircle } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function DashboardPage() {
  const { user, isLoading: authLoading } = useAuth();
  const { history, isLoadingHistory, loadHistory } = useGeneration();

  useEffect(() => { loadHistory(); }, [loadHistory]);

  return (
    <DashboardLayout>
      <div className="container-page py-8">
        <div className="mb-8">
          {authLoading ? (
            <div className="space-y-2"><Skeleton className="h-8 w-48" /><Skeleton className="h-5 w-64" /></div>
          ) : (
            <><h1 className="text-display-sm text-neutral-900 mb-1">Welcome back{user?.name ? `, ${user.name.split(" ")[0]}` : ""} 👋</h1>
            <p className="text-body-lg text-neutral-500">Here's what's happening with your content.</p></>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Videos Generated", value: "12", icon: Video, trend: "+3 this week" },
            { label: "Total Views", value: "2.4K", icon: TrendingUp, trend: "+18% vs last week" },
            { label: "Watch Time", value: "6.2h", icon: Clock, trend: "Avg 31s per video" },
          ].map((stat) => (
            <Card key={stat.label} variant="default" padding="md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-caption text-neutral-400 mb-1">{stat.label}</p>
                  <p className="text-display-sm text-neutral-900">{stat.value}</p>
                  <p className="text-caption text-neutral-400 mt-1">{stat.trend}</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-broko-light flex items-center justify-center">
                  <stat.icon className="h-[18px] w-[18px] text-broko-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Card variant="default" padding="lg" className="mb-8 bg-broko-light">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <BrokoCharacter size="md" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-heading text-neutral-900 mb-1">Generate a new video</h3>
              <p className="text-body text-neutral-500">Paste a product link and let AI create your next affiliate video.</p>
            </div>
            <Link href="/generate"><Button size="lg"><Sparkles className="h-4 w-4" />Generate<ArrowRight className="h-4 w-4" /></Button></Link>
          </div>
        </Card>
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-heading text-neutral-900">Recent generations</h2>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          {isLoadingHistory ? (
            <div className="space-y-3">{[1, 2, 3].map((i) => (<Card key={i} variant="outline" padding="md"><Skeleton className="h-14 w-full" /></Card>))}</div>
          ) : history.length === 0 ? (
            <Card variant="outline" padding="lg" className="text-center">
              <p className="text-body text-neutral-400 mb-3">No generations yet.</p>
              <Link href="/generate"><Button size="sm">Generate your first video</Button></Link>
            </Card>
          ) : (
            <div className="space-y-3">
              {history.map((item) => (
                <Card key={item.id} variant="outline" padding="md">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-14 rounded-md bg-neutral-100 flex items-center justify-center"><span className="text-2xl">🎬</span></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-body-sm font-medium text-neutral-900 truncate">Video {item.id}</p>
                        <Badge variant={item.status === "complete" ? "success" : "error"}>{item.status}</Badge>
                      </div>
                      <p className="text-caption text-neutral-400">{formatDate(item.createdAt)}</p>
                    </div>
                    <Button variant="ghost" size="sm"><ArrowRight className="h-4 w-4" /></Button>
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
