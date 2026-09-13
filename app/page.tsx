import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout";
import { Button, Card, Badge } from "@/components/ui";
import { BrokoCharacter } from "@/components/broko/BrokoCharacter";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";
import { Sparkles, Zap, TrendingUp, PlayCircle, ArrowRight, Check, Link2, Wand2, Download, Star, Users, Video } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Script Writing",
    description: "Our AI writes scroll-stopping scripts optimized for affiliate conversions. No copywriting skills needed.",
  },
  {
    icon: Zap,
    title: "Auto Video Generation",
    description: "Generate videos in under 60 seconds. Optimized for TikTok, Reels, and Shorts.",
  },
  {
    icon: TrendingUp,
    title: "Affiliate Optimized",
    description: "Every video is crafted with proven conversion frameworks. Maximize your affiliate earnings.",
  },
  {
    icon: PlayCircle,
    title: "Multiple Styles",
    description: "Product showcases, testimonials, explainers, and comparisons. Pick the format that works.",
  },
];

const steps = [
  { step: "01", icon: Link2, title: "Paste product link", description: "Drop any product URL from your affiliate program — Amazon, Tokopedia, Shopee, and more." },
  { step: "02", icon: Wand2, title: "Broko AI creates script", description: "Our AI analyzes the product, writes a conversion-optimized script, and generates your video." },
  { step: "03", icon: Download, title: "Download & share", description: "Get your video in seconds and share across TikTok, Reels, Shorts — start earning commissions." },
];

const stats = [
  { icon: Video, value: "10,000+", label: "videos generated" },
  { icon: Users, value: "50K+", label: "creators" },
  { icon: Star, value: "4.9★", label: "rating" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="section-spacing overflow-hidden">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="success" size="md" className="mb-6 inline-flex">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                AI-powered affiliate videos
              </Badge>
              <h1 className="text-display-lg text-neutral-900 mb-6 text-balance">
                Create Affiliate Videos{" "}
                <span className="text-broko-primary">with AI</span>
              </h1>
              <p className="text-body-lg text-neutral-500 mb-8 max-w-lg mx-auto lg:mx-0">
                {APP_TAGLINE}. {APP_NAME} uses AI to create scroll-stopping affiliate content in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/auth/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    See Demo
                  </Button>
                </Link>
              </div>
              <p className="text-caption text-neutral-400 mt-4">No credit card required • Free tier available</p>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                <BrokoCharacter size="hero" showLabel animate />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6">
                  <Card variant="elevated" padding="sm" className="shadow-elevated">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                        <Check className="h-4 w-4 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-caption font-medium text-neutral-900">Video ready!</p>
                        <p className="text-[10px] text-neutral-400">Generated in 28s</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-neutral-100 bg-neutral-50">
        <div className="container-page py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-broko-light flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-broko-primary" />
                </div>
                <div>
                  <p className="text-heading-sm text-neutral-900">{stat.value}</p>
                  <p className="text-caption text-neutral-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section-spacing">
        <div className="container-page">
          <div className="text-center mb-14">
            <Badge variant="info" size="md" className="mb-4 inline-flex">
              How it works
            </Badge>
            <h2 className="text-display text-neutral-900 mb-4">
              Three steps. That&apos;s it.
            </h2>
            <p className="text-body-lg text-neutral-500 max-w-2xl mx-auto">
              From product link to published video in under a minute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-broko-light mb-4">
                  <step.icon className="h-6 w-6 text-broko-primary" />
                </div>
                <div className="text-caption text-broko-primary font-bold mb-2">STEP {step.step}</div>
                <h3 className="text-heading-sm text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-body text-neutral-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-spacing bg-neutral-50">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="text-display text-neutral-900 mb-4">
              Everything you need to earn
            </h2>
            <p className="text-body-lg text-neutral-500 max-w-2xl mx-auto">
              Professional affiliate videos without the professional skills. Just paste, generate, and share.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} variant="default" padding="lg" className="hover:shadow-medium transition-shadow duration-300">
                <div className="w-10 h-10 rounded-lg bg-broko-light flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-broko-primary" />
                </div>
                <h3 className="text-heading-sm text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-body text-neutral-500">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-narrow">
          <Card variant="default" padding="lg" className="text-center bg-broko-light border-broko-primary/10">
            <BrokoCharacter size="md" className="mb-6 mx-auto" />
            <h2 className="text-display-sm text-neutral-900 mb-3">
              Ready to start creating?
            </h2>
            <p className="text-body-lg text-neutral-500 mb-6 max-w-md mx-auto">
              Join creators already using {APP_NAME} to generate affiliate content that converts.
            </p>
            <Link href="/auth/register">
              <Button size="lg">
                Get started free
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
