"use client";

import React from "react";
import { Card, Button, Badge } from "@/components/ui";
import { GenerationResult as GenResult } from "@/types";
import { Download, Share2, ExternalLink, CheckCircle } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface GenerationResultProps { result: GenResult; onReset: () => void; }

export function GenerationResultView({ result, onReset }: GenerationResultProps) {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-emerald-500" />
        </div>
        <h3 className="text-heading text-neutral-900 mb-1">Video generated!</h3>
        <p className="text-body text-neutral-500">Your affiliate video is ready</p>
      </div>
      <Card variant="outline" padding="none" className="overflow-hidden mb-6">
        <div className="aspect-video bg-neutral-100 flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl mb-2">🎬</p>
            <p className="text-body-sm text-neutral-400">Video Preview</p>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between border-t border-neutral-100">
          <div><Badge variant="success">Complete</Badge><p className="text-caption text-neutral-400 mt-1">{formatDate(result.createdAt)}</p></div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm"><Share2 className="h-4 w-4" /></Button>
            <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
            <Button variant="ghost" size="sm"><ExternalLink className="h-4 w-4" /></Button>
          </div>
        </div>
      </Card>
      <div className="flex gap-3">
        <Button variant="outline" onClick={onReset} className="flex-1">Generate another</Button>
        <Button className="flex-1">View in dashboard</Button>
      </div>
    </div>
  );
}
