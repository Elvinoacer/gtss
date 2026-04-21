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

const CTA = dynamic(() =>
  import("@/components/landing/CTA").then((mod) => mod.CTA),
);

export default function LandingPage() {
  return (
    <div className="landing-page public-shell overflow-x-hidden text-white antialiased">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="public-grid" />
        <div className="public-mesh" />
        <div className="gradient-orb gradient-orb-blue h-[420px] w-[420px] -left-24 top-8 opacity-40 sm:h-[540px] sm:w-[540px]" />
        <div className="gradient-orb gradient-orb-gold h-[360px] w-[360px] -right-10 top-24 opacity-35 sm:h-[460px] sm:w-[460px]" />
        <div className="gradient-orb gradient-orb-purple bottom-0 left-1/3 h-[320px] w-[320px] opacity-20 sm:h-[420px] sm:w-[420px]" />
      </div>

      <div className="relative z-10 flex min-h-screen w-full flex-col">
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
