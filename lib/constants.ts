export const APP_NAME = "BrokoLink";
export const APP_DESCRIPTION = "AI Affiliate Video Generator";
export const APP_TAGLINE = "Generate stunning affiliate videos with AI";

export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
] as const;

export const DASHBOARD_NAV = [
  { label: "Home", href: "/dashboard", icon: "Home" },
  { label: "Videos", href: "/videos", icon: "Play" },
  { label: "Rewards", href: "/rewards", icon: "Gift" },
  { label: "Profile", href: "/profile", icon: "User" },
] as const;

export const GENERATION_TONES = [
  { value: "professional", label: "Professional", description: "Clean and corporate" },
  { value: "casual", label: "Casual", description: "Friendly and approachable" },
  { value: "energetic", label: "Energetic", description: "Bold and exciting" },
  { value: "minimal", label: "Minimal", description: "Simple and refined" },
] as const;

export const GENERATION_DURATIONS = [
  { value: "15s", label: "15 seconds" },
  { value: "30s", label: "30 seconds" },
  { value: "60s", label: "60 seconds" },
] as const;

export const GENERATION_STYLES = [
  { value: "product-showcase", label: "Product Showcase", description: "Highlight your product features" },
  { value: "testimonial", label: "Testimonial", description: "Social proof and reviews" },
  { value: "explainer", label: "Explainer", description: "How it works walkthrough" },
  { value: "comparison", label: "Comparison", description: "Compare with alternatives" },
] as const;

export const ONBOARDING_STEPS = [
  {
    id: 1,
    title: "Welcome to BrokoLink!",
    description: "Your AI affiliate video assistant. Create scroll-stopping content in seconds.",
  },
  {
    id: 2,
    title: "How it works",
    description: "Three simple steps to start earning with affiliate videos.",
  },
  {
    id: 3,
    title: "Let's get started",
    description: "Paste your first affiliate link to create your first video.",
  },
] as const;

// Mock Broko Seed data
export const MOCK_SEED_BALANCE = {
  balance: 250,
  xp: 120,
  maxXp: 300,
  level: 1,
};

export const MOCK_SEED_ACTIVITIES = [
  { id: "1", type: "watch_ads" as const, label: "Watch Ad (30s)", reward: 10, description: "Watch a short ad to earn seeds", completedToday: false },
  { id: "2", type: "daily_checkin" as const, label: "Daily Check-in", reward: 5, description: "Check in daily", completedToday: true },
  { id: "3", type: "referral" as const, label: "Referral", reward: 50, description: "Invite a friend", completedToday: false },
  { id: "4", type: "weekly_mission" as const, label: "Weekly Mission", reward: 30, description: "Complete weekly mission", completedToday: false },
];

export const MOCK_SEED_HISTORY = [
  { id: "h1", type: "daily_checkin" as const, amount: 5, description: "Daily Check-in", date: "2025-05-20T10:00:00" },
  { id: "h2", type: "watch_ads" as const, amount: 10, description: "Watched Ad", date: "2025-05-19T14:30:00" },
  { id: "h3", type: "referral" as const, amount: 50, description: "Referred @john_doe", date: "2025-05-18T09:15:00" },
  { id: "h4", type: "watch_ads" as const, amount: 10, description: "Watched Ad", date: "2025-05-17T16:45:00" },
  { id: "h5", type: "weekly_mission" as const, amount: 30, description: "Weekly Mission Complete", date: "2025-05-16T11:00:00" },
];

export const MOCK_VIDEOS = [
  {
    id: "v1",
    productName: "Skincare Serum Premium",
    status: "ready" as const,
    resolution: "1080P",
    duration: "00:28",
    price: "Rp 245.000",
    createdAt: "2025-05-20T10:30:00",
  },
  {
    id: "v2",
    productName: "Wireless Earbuds Pro X",
    status: "ready" as const,
    resolution: "1080P",
    duration: "00:45",
    price: "Rp 189.000",
    createdAt: "2025-05-19T14:20:00",
  },
  {
    id: "v3",
    productName: "Organic Green Tea Set",
    status: "processing" as const,
    resolution: "720P",
    duration: "00:15",
    price: "Rp 75.000",
    createdAt: "2025-05-18T08:45:00",
  },
];
