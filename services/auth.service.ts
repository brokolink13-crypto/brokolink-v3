import { User } from "@/types";
import { delay } from "@/lib/utils";

// TODO: Replace with real API calls
const MOCK_USER: User = {
  id: "usr_001",
  email: "demo@brokolink.com",
  name: "Demo User",
  plan: "free",
  createdAt: new Date().toISOString(),
};

const STORAGE_KEY = "brokolink_auth";

export async function login(email: string, password: string): Promise<{ user: User; token: string }> {
  await delay(800);
  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  const result = { user: { ...MOCK_USER, email }, token: "mock_token_" + Date.now() };
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
    localStorage.setItem("brokolink_token", result.token);
  }
  return result;
}

export async function register(
  name: string,
  email: string,
  password: string
): Promise<{ user: User; token: string }> {
  await delay(1000);
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }
  const result = {
    user: { ...MOCK_USER, name, email },
    token: "mock_token_" + Date.now(),
  };
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
    localStorage.setItem("brokolink_token", result.token);
  }
  return result;
}

export async function logout(): Promise<void> {
  await delay(300);
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("brokolink_token");
  }
}

export function getStoredAuth(): { user: User; token: string } | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}
