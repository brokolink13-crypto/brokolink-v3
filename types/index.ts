export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface GenerationParams {
  productUrl: string;
  productName: string;
  tone: 'professional' | 'casual' | 'energetic' | 'minimal';
  duration: '15s' | '30s' | '60s';
  style: 'product-showcase' | 'testimonial' | 'explainer' | 'comparison';
}

export type GenerationStatus = 'idle' | 'validating' | 'generating' | 'complete' | 'error';

export interface GenerationResult {
  id: string;
  status: GenerationStatus;
  videoUrl?: string;
  thumbnailUrl?: string;
  duration?: string;
  createdAt: string;
  error?: string;
}

export interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;
}

export interface ProfileData {
  name: string;
  email: string;
  bio?: string;
  website?: string;
  affiliateId?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}
