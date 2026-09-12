import React from "react";
import { Card, Avatar, Badge } from "@/components/ui";
import { ProfileData } from "@/types";

interface ProfileCardProps { profile: ProfileData; plan?: string; }

export function ProfileCard({ profile, plan = "free" }: ProfileCardProps) {
  return (
    <Card variant="default" padding="lg">
      <div className="flex items-start gap-4">
        <Avatar name={profile.name} size="lg" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-heading-sm text-neutral-900 truncate">{profile.name}</h3>
            <Badge variant={plan === "pro" ? "success" : "default"}>{plan.charAt(0).toUpperCase() + plan.slice(1)}</Badge>
          </div>
          <p className="text-body-sm text-neutral-500 truncate">{profile.email}</p>
          {profile.bio && <p className="text-body-sm text-neutral-600 mt-2">{profile.bio}</p>}
          {profile.affiliateId && <p className="text-caption text-neutral-400 mt-2">Affiliate ID: <span className="font-mono text-neutral-600">{profile.affiliateId}</span></p>}
        </div>
      </div>
    </Card>
  );
}
