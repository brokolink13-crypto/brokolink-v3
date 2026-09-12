"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthForm } from "@/components/auth/AuthForm";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();

  const handleRegister = async (data: { name?: string; email: string; password: string }) => {
    await register(data.name || "", data.email, data.password);
    router.push("/onboarding");
  };

  return (
    <AuthCard
      title="Create your account"
      subtitle="Start generating affiliate videos in minutes"
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerLinkHref="/auth/login"
    >
      <AuthForm mode="register" onSubmit={handleRegister} />
    </AuthCard>
  );
}
