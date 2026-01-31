'use client';

import { Navbar, Footer } from '@/components/landing';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="landing-page bg-[#000000] min-h-screen font-display text-white antialiased overflow-x-hidden flex flex-col relative">
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="gradient-orb gradient-orb-blue w-[600px] h-[600px] -top-48 -left-48" />
        <div className="gradient-orb gradient-orb-purple w-[500px] h-[500px] top-1/3 -right-32" />
        <div className="gradient-orb gradient-orb-blue w-[400px] h-[400px] bottom-1/4 left-1/4" />
        <div className="gradient-orb gradient-orb-gold w-[300px] h-[300px] bottom-0 right-1/3 opacity-30" />
      </div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
