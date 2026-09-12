"use client";

import { useState, useCallback, useEffect } from "react";
import { ProfileData } from "@/types";
import * as userService from "@/services/user.service";

interface UseProfileReturn {
  profile: ProfileData | null;
  isLoading: boolean;
  isSaving: boolean;
  error: string | null;
  success: string | null;
  loadProfile: () => Promise<void>;
  updateProfile: (data: Partial<ProfileData>) => Promise<void>;
  deleteAccount: () => Promise<void>;
}

export function useProfile(): UseProfileReturn {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const loadProfile = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await userService.getProfile();
      setProfile(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load profile");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateProfile = useCallback(async (data: Partial<ProfileData>) => {
    setIsSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const updated = await userService.updateProfile(data);
      setProfile(updated);
      setSuccess("Profile updated successfully");
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  }, []);

  const deleteAccount = useCallback(async () => {
    try {
      await userService.deleteAccount();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete account");
    }
  }, []);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  return { profile, isLoading, isSaving, error, success, loadProfile, updateProfile, deleteAccount };
}
