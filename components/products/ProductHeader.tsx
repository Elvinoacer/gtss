import { ArrowRight, Boxes, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

interface ProductHeaderProps {
  categoryCount: number;
  liveCount: number;
  productCount: number;
}

export function ProductHeader({
  categoryCount,
  liveCount,
  productCount,
}: ProductHeaderProps) {
  return (
    <header className="relative pt-12 pb-16 px-6 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div className="flex flex-col text-left">
          <div className="section-tag font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[var(--gold)]"></div>
            SYSTEM_CATALOG_v2.0
          </div>
          
          <h1 className="font-bebas text-[clamp(48px,6vw,84px)] leading-[0.95] tracking-[0.02em] text-[var(--text)] mb-8 uppercase">
            OPERATIONAL <span className="text-[var(--gold)]">ASSETS</span> FOR MODERN ENTERPRISE.
          </h1>
          
          <p className="font-cormorant text-[20px] font-light leading-relaxed text-[var(--text-muted)] max-w-2xl mb-10">
            Explore GTSS products spanning hospitality, internal operations, commerce, and business infrastructure. 
            The portfolio is designed to feel premium on the surface and dependable when the work gets messy.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {[
              "OFFLINE_FIRST_PROTOCOL",
              "DEPLOYMENT_ENGINEERING",
              "REGIONAL_OPTIMIZATION",
            ].map((item) => (
              <div key={item} className="font-mono-dm text-[9px] tracking-[0.2em] border border-[var(--border)] px-4 py-2 bg-[rgba(255,255,255,0.02)] text-[var(--gold-dim)] uppercase">
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="btn-primary font-mono-dm text-[11px] tracking-[0.25em] uppercase text-[var(--black)] bg-[var(--gold)] px-10 py-5 border-none cursor-none relative overflow-hidden transition-all hover:bg-[var(--gold-bright)] hover:shadow-[var(--glow-gold)] [clip-path:polygon(12px_0%,100%_0%,calc(100%-12px)_100%,0%_100%)] flex items-center gap-3 justify-center"
            >
              REQUEST_WALKTHROUGH
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="btn-ghost font-mono-dm text-[11px] tracking-[0.25em] uppercase text-[var(--text-muted)] bg-transparent px-10 py-[19px] border border-[var(--border)] cursor-none transition-all hover:text-[var(--gold)] hover:border-[var(--border-bright)] flex items-center justify-center"
            >
              OPERATIONAL_THESIS
            </Link>
          </div>
        </div>

        <div className="relative border border-[var(--border)] bg-[rgba(3,5,8,0.6)] backdrop-blur-xl p-8 lg:p-10">
          {/* Corner Elements */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--gold)]"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--gold)]"></div>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[
              {
                label: "PRODUCTS",
                value: String(productCount).padStart(2, '0'),
                icon: Boxes,
              },
              {
                label: "LIVE_SYSTEMS",
                value: String(liveCount).padStart(2, '0'),
                icon: ShieldCheck,
              },
              {
                label: "CATEGORIES",
                value: String(categoryCount).padStart(2, '0'),
                icon: Sparkles,
              },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center mb-4">
                  <item.icon className="h-4 w-4 text-[var(--gold-dim)]" />
                </div>
                <p className="font-bebas text-4xl text-[var(--text)] mb-1 leading-none">
                  {item.value}
                </p>
                <p className="font-mono-dm text-[8px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-6 relative overflow-hidden">
            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
            
            <p className="font-mono-dm text-[9px] tracking-[0.2em] text-[var(--gold-dim)] uppercase mb-4 opacity-50">
              PORTFOLIO_MANIFEST
            </p>
            <p className="font-rajdhani text-xl font-semibold text-[var(--text)] leading-tight mb-4">
              Quality-first deployment architecture.
            </p>
            <p className="font-cormorant text-base text-[var(--text-muted)] italic leading-relaxed">
              "Each product is positioned to reduce friction, raise perceived quality, and improve operator confidence."
            </p>
          </div>
          
          {/* HUD Accents */}
          <div className="absolute top-4 left-6 font-mono-dm text-[8px] tracking-[0.2em] text-[var(--gold-dim)] opacity-30">
            METRIC_FEED_v4
          </div>
        </div>
      </div>
    </header>
  );
}
