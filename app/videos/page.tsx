"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, Button, Badge } from "@/components/ui";
import { MOCK_VIDEOS } from "@/lib/constants";
import { Play, Download, Share2, Video } from "lucide-react";

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

export default function VideosPage() {
  const videos = MOCK_VIDEOS;

  return (
    <DashboardLayout>
      <div className="bg-[#F8FBF8] min-h-screen pb-4">
        <div className="px-4 pt-5 pb-4 space-y-5 max-w-lg mx-auto">

          {/* Header with Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="BrokoLink" width={32} height={32} className="rounded-lg" />
            <h1 className="text-heading text-neutral-900">My Videos</h1>
          </div>

          {videos.length === 0 ? (
            <Card variant="default" padding="lg" className="text-center bg-white">
              <div className="flex flex-col items-center gap-3 py-8">
                <div className="w-16 h-16 rounded-full bg-broko-light flex items-center justify-center">
                  <Video className="h-8 w-8 text-broko-primary" />
                </div>
                <h3 className="text-heading-sm text-neutral-900">No videos yet</h3>
                <p className="text-body-sm text-neutral-500 max-w-xs">
                  Create your first affiliate video by pasting a product link.
                </p>
                <Link href="/generate">
                  <Button size="sm">Create Video</Button>
                </Link>
              </div>
            </Card>
          ) : (
            <div className="space-y-3">
              {videos.map((video) => (
                <Card key={video.id} variant="default" padding="sm" className="bg-white">
                  <div className="flex gap-3">
                    {/* Thumbnail */}
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
                        {video.status === "ready" ? (
                          <Badge variant="success" size="sm">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />
                            Ready
                          </Badge>
                        ) : video.status === "processing" ? (
                          <Badge variant="warning" size="sm">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mr-1 animate-pulse" />
                            Processing
                          </Badge>
                        ) : (
                          <Badge variant="error" size="sm">Failed</Badge>
                        )}
                        <span className="text-[10px] text-neutral-400">{video.resolution}</span>
                      </div>
                      <p className="text-[10px] text-neutral-400">
                        {formatVideoDate(video.createdAt)}
                      </p>
                    </div>
                  </div>
                  {video.status === "ready" && (
                    <div className="mt-2 pt-2 border-t border-neutral-50 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 gap-1.5 text-caption">
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 gap-1.5 text-caption">
                        <Share2 className="h-3.5 w-3.5" />
                        Share
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
