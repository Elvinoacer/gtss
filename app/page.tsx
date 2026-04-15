import dynamic from "next/dynamic";

import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/landing/Footer";
import { DeferredViewTracker } from "@/components/analytics/DeferredViewTracker";

const TrustBar = dynamic(() =>
  import("@/components/landing/TrustBar").then((mod) => mod.TrustBar),
);

const Features = dynamic(() =>
  import("@/components/landing/Features").then((mod) => mod.Features),
);

const HowItWorks = dynamic(() =>
  import("@/components/landing/HowItWorks").then((mod) => mod.HowItWorks),
);

const Testimonials = dynamic(() =>
  import("@/components/landing/Testimonials").then((mod) => mod.Testimonials),
);

const CTA = dynamic(() => import("@/components/landing/CTA").then((mod) => mod.CTA));

export default function LandingPage() {
  return (
    <div className="landing-page bg-[#000000] text-white antialiased overflow-x-hidden relative">
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 transform-gpu">
        <div className="gradient-orb gradient-orb-blue w-[600px] h-[600px] -top-48 -left-48" />
        <div className="gradient-orb gradient-orb-purple w-[500px] h-[500px] top-1/3 -right-32" />
        <div className="gradient-orb gradient-orb-blue w-[400px] h-[400px] bottom-1/4 left-1/4" />
        <div className="gradient-orb gradient-orb-gold w-[300px] h-[300px] bottom-0 right-1/3 opacity-30" />
      </div>

      <div className="relative flex min-h-screen w-full flex-col z-10">
        <Navbar />
        <DeferredViewTracker />
        <main>
          <Hero />
          <TrustBar />
          <Features />
          <HowItWorks />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
