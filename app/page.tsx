import { Hero } from "@/components/landing/Hero";
import { StatsBar } from "@/components/landing/StatsBar";
import { BentoGrid } from "@/components/landing/BentoGrid";
import { SequenceExecution } from "@/components/landing/SequenceExecution";
import { DeferredViewTracker } from "@/components/analytics/DeferredViewTracker";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <DeferredViewTracker />
      
      <main className="relative">
        <Hero />
        <StatsBar />
        <BentoGrid />
        <SequenceExecution />
        
        {/* Contact CTA Section */}
        <section className="cta relative z-10 px-6 lg:px-20 py-24 lg:py-32 bg-[var(--black)] text-center border-t border-[var(--border)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"></div>
          <div className="max-w-3xl mx-auto">
            <div className="section-tag font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6 mx-auto w-fit flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--gold)]"></div>
              INITIALIZE_PARTNERSHIP
            </div>
            <h2 className="font-bebas text-5xl lg:text-8xl text-[var(--text)] mb-6 lg:mb-8 tracking-[0.02em]">
              READY TO <span className="text-[var(--gold)]">DOMINATE?</span>
            </h2>
            <p className="font-cormorant text-lg lg:text-xl font-light text-[var(--text-muted)] mb-10 lg:mb-12 max-w-xl mx-auto">
              Secure your infrastructure with the most robust offline-first software ecosystem in the region.
            </p>
            <button className="btn-primary font-mono-dm text-[11px] lg:text-[12px] tracking-[0.2em] lg:tracking-[0.25em] uppercase text-[var(--black)] bg-[var(--gold)] px-10 lg:px-12 py-4 lg:py-5 border-none cursor-none relative overflow-hidden transition-all hover:bg-[var(--gold-bright)] hover:shadow-[var(--glow-gold)] [clip-path:polygon(12px_0%,100%_0%,calc(100%-12px)_100%,0%_100%)] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-white/20 after:to-transparent after:-translate-x-full after:transition-transform after:duration-[0.7s] hover:after:translate-x-[200%]">
              REQUEST SYSTEM ACCESS
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}
