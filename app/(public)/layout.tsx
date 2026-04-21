import { Navbar, Footer } from "@/components/landing";
import { DeferredViewTracker } from "@/components/analytics/DeferredViewTracker";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="landing-page public-shell relative flex min-h-screen flex-col overflow-x-hidden font-display text-white antialiased">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="public-grid" />
        <div className="public-mesh" />
        <div className="gradient-orb gradient-orb-blue h-[420px] w-[420px] -left-24 top-8 opacity-35 sm:h-[520px] sm:w-[520px]" />
        <div className="gradient-orb gradient-orb-gold h-[340px] w-[340px] right-0 top-28 opacity-30 sm:h-[440px] sm:w-[440px]" />
        <div className="gradient-orb gradient-orb-purple bottom-[-4rem] left-1/4 h-[320px] w-[320px] opacity-15 sm:h-[420px] sm:w-[420px]" />
      </div>

      <div className="relative z-10 flex flex-grow flex-col">
        <Navbar />
        <DeferredViewTracker />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
