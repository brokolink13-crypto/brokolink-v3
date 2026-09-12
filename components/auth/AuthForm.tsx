"use client";

import React, { useState } from "react";
import { Button, Input } from "@/components/ui";
import { Toast } from "@/components/ui/Toast";

interface AuthFormProps { mode: "login" | "register"; onSubmit: (data: { name?: string; email: string; password: string }) => Promise<void>; }

export function AuthForm({ mode, onSubmit }: AuthFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError(null); setIsLoading(true);
    try { await onSubmit({ name: mode === "register" ? name : undefined, email, password }); }
    catch (err) { setError(err instanceof Error ? err.message : "Something went wrong"); }
    finally { setIsLoading(false); }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "register" && <Input label="Full name" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required autoComplete="name" />}
        <Input label="Email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" />
        <Input label="Password" type="password" placeholder={mode === "register" ? "Min. 6 characters" : "Enter your password"} value={password} onChange={e => setPassword(e.target.value)} required minLength={6} autoComplete={mode === "register" ? "new-password" : "current-password"} />
        {error && <div className="p-3 rounded-lg bg-red-50 border border-red-100"><p className="text-body-sm text-red-600">{error}</p></div>}
        <Button type="submit" fullWidth isLoading={isLoading} size="lg">{mode === "login" ? "Log in" : "Create account"}</Button>
      </form>
      <Toast message={error || ""} type="error" isVisible={!!error} onClose={() => setError(null)} />
    </>
  );
}
