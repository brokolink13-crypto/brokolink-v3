import { ProfileData } from "@/types";
import { delay } from "@/lib/utils";

export async function getProfile(): Promise<ProfileData> {
  await delay(500);
  return { name: "Demo User", email: "demo@brokolink.com", bio: "Creating awesome affiliate content with AI", website: "https://example.com", affiliateId: "AFF-BRK-001" };
}

export async function updateProfile(data: Partial<ProfileData>): Promise<ProfileData> {
  await delay(800);
  return { name: data.name || "Demo User", email: data.email || "demo@brokolink.com", bio: data.bio || "", website: data.website || "", affiliateId: "AFF-BRK-001" };
}

export async function deleteAccount(): Promise<void> { await delay(1000); }
