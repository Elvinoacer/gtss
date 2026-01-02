'use client';

import { Navbar, Hero, TrustBar, Features, HowItWorks, Testimonials, CTA, Footer } from '@/components/landing';

export default function LandingPage() {
  return (
    <div className="bg-white dark:bg-[#111521] font-display text-[#111317] dark:text-white antialiased overflow-x-hidden">
      <div className="relative flex min-h-screen w-full flex-col">
        <Navbar />
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
