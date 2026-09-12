"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, Button, Badge, Modal } from "@/components/ui";
import { Toast } from "@/components/ui/Toast";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { Skeleton } from "@/components/ui/Skeleton";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/hooks/useAuth";
import { AlertTriangle, CreditCard, Shield, Bell, Zap, ArrowUpRight } from "lucide-react";

export default function ProfilePage() {
  const { profile, isLoading, isSaving, error, success, updateProfile, deleteAccount } = useProfile();
  const { user, logout } = useAuth();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = async () => {
    await deleteAccount();
    await logout();
  };

  const plan = user?.plan || "free";
  const videosUsed = 3;
  const videosLimit = plan === "pro" ? 100 : 10;

  return (
    <DashboardLayout>
      <div className="container-page py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-display-sm text-neutral-900 mb-2">Profile</h1>
            <p className="text-body-lg text-neutral-500">
              Manage your account settings and preferences.
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-6">
              <Card variant="default" padding="lg">
                <div className="flex items-start gap-4">
                  <Skeleton variant="circular" className="h-14 w-14" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-5 w-36" />
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-4 w-64" />
                  </div>
                </div>
              </Card>
              <Card variant="outline" padding="lg">
                <div className="space-y-4">
                  <Skeleton className="h-6 w-24" />
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-1.5">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ) : profile ? (
            <div className="space-y-6">
              <ProfileCard profile={profile} plan={user?.plan} />

              <Card variant="default" padding="lg" className="border-broko-primary/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-heading-sm text-neutral-900">Plan & Usage</h3>
                  <Badge variant={plan === "pro" ? "success" : "default"} size="md">
                    {plan === "pro" ? "\u26a1 Pro" : "Free Plan"}
                  </Badge>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-body-sm text-neutral-600">Videos this month</p>
                    <p className="text-body-sm font-semibold text-neutral-900">
                      {videosUsed}/{videosLimit}
                    </p>
                  </div>
                  <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-broko-primary rounded-full transition-all duration-500"
                      style={{ width: `${(videosUsed / videosLimit) * 100}%` }}
                    />
                  </div>
                  <p className="text-caption text-neutral-400 mt-1">
                    {videosLimit - videosUsed} videos remaining
                  </p>
                </div>
                {plan !== "pro" && (
                  <Button variant="primary" size="sm" className="w-full sm:w-auto">
                    <Zap className="h-3.5 w-3.5" />
                    Upgrade to Pro
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Button>
                )}
              </Card>

              <ProfileForm profile={profile} onSave={updateProfile} isSaving={isSaving} />

              <Card variant="outline" padding="lg">
                <h3 className="text-heading-sm text-neutral-900 mb-4">Account</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors text-left">
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center">
                      <CreditCard className="h-[18px] w-[18px] text-neutral-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-body-sm font-medium text-neutral-900">Billing & Plan</p>
                      <p className="text-caption text-neutral-400">Manage your subscription</p>
                    </div>
                    <Badge>{user?.plan || "free"}</Badge>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors text-left">
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center">
                      <Bell className="h-[18px] w-[18px] text-neutral-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-body-sm font-medium text-neutral-900">Notifications</p>
                      <p className="text-caption text-neutral-400">Email and push preferences</p>
                    </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors text-left">
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center">
                      <Shield className="h-[18px] w-[18px] text-neutral-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-body-sm font-medium text-neutral-900">Security</p>
                      <p className="text-caption text-neutral-400">Password and two-factor</p>
                    </div>
                  </button>
                </div>
              </Card>

              <Card variant="outline" padding="lg" className="border-red-200">
                <h3 className="text-heading-sm text-red-600 mb-2">Danger zone</h3>
                <p className="text-body-sm text-neutral-500 mb-4">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDeleteModal(true)}
                  className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400"
                >
                  <AlertTriangle className="h-4 w-4" />
                  Delete account
                </Button>
              </Card>
            </div>
          ) : (
            <Card variant="outline" padding="lg" className="text-center">
              <p className="text-body text-neutral-400">
                {error || "Unable to load profile. Please try again."}
              </p>
            </Card>
          )}
        </div>
      </div>

      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} title="Delete Account" size="sm">
        <p className="text-body text-neutral-600 mb-6">
          Are you sure you want to delete your account? This action cannot be undone and will permanently remove all your data.
        </p>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setShowDeleteModal(false)} className="flex-1">
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete} className="flex-1">
            Delete permanently
          </Button>
        </div>
      </Modal>

      <Toast
        message={success || error || ""}
        type={success ? "success" : "error"}
        isVisible={!!(success || error)}
        onClose={() => {}}
      />
    </DashboardLayout>
  );
}
