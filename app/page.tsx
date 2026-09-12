import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout";
import { Button, Card, Badge } from "@/components/ui";
import { BrokoCharacter } from "@/components/broko/BrokoCharacter";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";
import { Sparkles, Zap, TrendingUp, PlayCircle, ArrowRight, Check } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI-Powered Generation", description: "Drop a product link and get a polished affiliate video in seconds." },
  { icon: Zap, title: "Lightning Fast", description: "Generate videos in under 60 seconds. Optimized for TikTok, Reels, and Shorts." },
  { icon: TrendingUp, title: "Built to Convert", description: "Every video is crafted with proven conversion frameworks." },
  { icon: PlayCircle, title: "Multiple Styles", description: "Product showcases, testimonials, explainers, and comparisons." },
];

const steps = [
  { step: "01", title: "Paste your link", description: "Drop any product URL from your affiliate program." },
  { step: "02", title: "Choose your style", description: "Select tone, duration, and video format." },
  { step: "03", title: "Generate & share", description: "Get your video and start earning commissions." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="section-spacing overflow-hidden">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="success" size="md" className="mb-6 inline-flex">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                AI-powered affiliate videos
              </Badge>
              <h1 className="text-display-lg text-neutral-900 mb-6">
                Turn any product link into a <span className="text-broko-primary">viral video</span>
              </h1>
              <p className="text-body-lg text-neutral-500 mb-8 max-w-lg mx-auto lg:mx-0">
                {APP_TAGLINE}. {APP_NAME} uses AI to create scroll-stopping affiliate content in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/auth/register"><Button size="lg">Start for free <ArrowRight className="h-4 w-4 ml-1" /></Button></Link>
                <Link href="#how-it-works"><Button variant="outline" size="lg">See how it works</Button></Link>
              </div>
              <p className="text-caption text-neutral-400 mt-4">No credit card required</p>
            </div>
            <div className="flex-1 flex justify-center">
              <BrokoCharacter size="hero" showLabel animate />
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="section-spacing bg-neutral-50">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="text-display text-neutral-900 mb-4">Everything you need to earn</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} variant="default" padding="lg">
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
      <section id="how-it-works" className="section-spacing">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="text-display text-neutral-900 mb-4">Three steps. That's it.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-broko-light text-broko-primary font-bold mb-4">{step.step}</div>
                <h3 className="text-heading-sm text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-body text-neutral-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-spacing">
        <div className="container-narrow">
          <Card variant="default" padding="lg" className="text-center bg-broko-light">
            <BrokoCharacter size="md" className="mb-6 mx-auto" />
            <h2 className="text-display-sm text-neutral-900 mb-3">Ready to start creating?</h2>
            <Link href="/auth/register"><Button size="lg">Get started free <ArrowRight className="h-4 w-4 ml-1" /></Button></Link>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
