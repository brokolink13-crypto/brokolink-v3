"use client";

import React, { useState, useEffect } from "react";
import { Button, Input, Card } from "@/components/ui";
import { ProfileData } from "@/types";

interface ProfileFormProps {
  profile: ProfileData;
  onSave: (data: Partial<ProfileData>) => Promise<void>;
  isSaving: boolean;
}

export function ProfileForm({ profile, onSave, isSaving }: ProfileFormProps) {
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio || "");
  const [website, setWebsite] = useState(profile.website || "");
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setName(profile.name);
    setBio(profile.bio || "");
    setWebsite(profile.website || "");
  }, [profile]);

  useEffect(() => {
    const dirty = name !== profile.name || bio !== (profile.bio || "") || website !== (profile.website || "");
    setIsDirty(dirty);
  }, [name, bio, website, profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave({ name, bio, website });
  };

  return (
    <Card variant="outline" padding="lg">
      <h3 className="text-heading-sm text-neutral-900 mb-6">Edit Profile</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div>
          <label className="block text-body-sm font-medium text-neutral-700 mb-1.5">
            Bio
          </label>
          <textarea
            className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-body text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-broko-primary/20 focus:border-broko-primary resize-none"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself..."
          />
        </div>
        <Input
          label="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="https://yoursite.com"
        />
        <Input
          label="Email"
          value={profile.email}
          disabled
          hint="Contact support to change your email"
        />
        <div className="pt-2">
          <Button type="submit" isLoading={isSaving} disabled={!isDirty}>
            Save changes
          </Button>
        </div>
      </form>
    </Card>
  );
}
