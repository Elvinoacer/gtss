import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative z-10 min-h-[100dvh] grid lg:grid-cols-2 items-center px-6 lg:px-20 py-24 lg:py-32 gap-12 lg:gap-20 overflow-hidden bg-[var(--hero-gradient)]">
      {/* Subtle decorative gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--green)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative">
        {/* Kicker / Identity line */}
        <div className="flex items-center gap-2.5 text-xs tracking-[0.15em] text-[var(--accent)] uppercase font-semibold mb-6 lg:mb-8">
          <div className="w-8 h-[1px] bg-[var(--accent)]" />
          Nairobi-based software for East African businesses
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(32px,6vw,64px)] leading-[1.1] font-bold tracking-tight text-[var(--text)] mb-6 lg:mb-8">
          Software that keeps your business running —{" "}
          <span className="text-[var(--accent)]">even when the network doesn&apos;t.</span>
        </h1>

        {/* Body */}
        <p className="text-base lg:text-lg leading-relaxed text-[var(--text-muted)] max-w-[560px] mb-8 lg:mb-10">
          GTSS builds practical software for hotels, restaurants, shops, and churches
          across East Africa. Our systems work offline, accept M-Pesa and Airtel Money
          out of the box, and come with hands-on staff training — so your team is
          productive on day one, not week three.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)]"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[var(--text)] bg-transparent px-8 py-3.5 rounded-lg border border-[var(--border)] no-underline transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Request a Demo
          </Link>
        </div>

        {/* Proof chips */}
        <div className="flex flex-wrap items-center gap-3 mt-8 lg:mt-10">
          {["Offline-first", "M-Pesa ready", "Deployment included"].map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--green)] bg-[var(--bg-surface-2)] px-3 py-1.5 rounded-full border border-[var(--card-border)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Image Panel */}
      <div className="relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
        <div className="relative w-full max-w-[600px] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-lg">
          <Image
            src="/images/gtss_hero.png"
            alt="GTSS software dashboard showing real-time business operations"
            width={1400}
            height={1050}
            priority
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent h-24 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
