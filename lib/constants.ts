export const APP_NAME = "BrokoLink";
export const APP_DESCRIPTION = "AI Affiliate Video Generator";
export const APP_TAGLINE = "Generate stunning affiliate videos with AI";

export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
] as const;

export const DASHBOARD_NAV = [
  { label: "Dashboard", href: "/dashboard", icon: "Home" },
  { label: "Generate", href: "/generate", icon: "Sparkles" },
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
  { id: 1, title: "Welcome to BrokoLink", description: "Let's get you set up to create amazing affiliate videos with AI." },
  { id: 2, title: "Tell us about yourself", description: "This helps us personalize your experience." },
  { id: 3, title: "Choose your niche", description: "Select the categories you'll be creating content for." },
  { id: 4, title: "You're all set!", description: "Start generating your first affiliate video." },
] as const;
