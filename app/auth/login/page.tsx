"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthForm } from "@/components/auth/AuthForm";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (data: { email: string; password: string }) => {
    await login(data.email, data.password);
    router.push("/dashboard");
  };

  return (
    <AuthCard title="Welcome back" subtitle="Log in to your BrokoLink account"
      footerText="Don't have an account?" footerLinkText="Sign up" footerLinkHref="/auth/register">
      <AuthForm mode="login" onSubmit={handleLogin} />
    </AuthCard>
  );
}
