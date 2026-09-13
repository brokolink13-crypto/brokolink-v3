"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AuthCard, AuthForm } from "@/components/auth";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();

  const handleRegister = async (data: { name?: string; email: string; password: string }) => {
    if (!data.name) throw new Error("Name is required");
    await register(data.name, data.email, data.password);
    router.push("/onboarding");
  };

  return (
    <AuthCard
      title="Create your account"
      subtitle="Start creating affiliate videos with AI"
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerLinkHref="/auth/login"
    >
      <AuthForm mode="register" onSubmit={handleRegister} />
    </AuthCard>
  );
}
