import { GenerationParams, GenerationResult } from "@/types";
import { delay } from "@/lib/utils";

export async function generateVideo(params: GenerationParams): Promise<GenerationResult> {
  await delay(2000);
  if (!params.productUrl) throw new Error("Product URL is required");
  if (Math.random() < 0.1) {
    return { id: "gen_" + Date.now(), status: "error", createdAt: new Date().toISOString(), error: "Generation failed." };
  }
  return {
    id: "gen_" + Date.now(), status: "complete",
    videoUrl: "https://example.com/mock-video.mp4",
    thumbnailUrl: "https://example.com/mock-thumb.jpg",
    duration: params.duration, createdAt: new Date().toISOString(),
  };
}

export async function getGenerationHistory(): Promise<GenerationResult[]> {
  await delay(600);
  return [
    { id: "gen_001", status: "complete", videoUrl: "https://example.com/video-1.mp4", duration: "30s", createdAt: new Date(Date.now() - 86400000).toISOString() },
    { id: "gen_002", status: "complete", videoUrl: "https://example.com/video-2.mp4", duration: "15s", createdAt: new Date(Date.now() - 172800000).toISOString() },
    { id: "gen_003", status: "error", createdAt: new Date(Date.now() - 259200000).toISOString(), error: "Source URL was unreachable" },
  ];
}
