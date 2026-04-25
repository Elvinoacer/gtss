import { Activity, Calendar, ExternalLink, Network, Zap } from "lucide-react";
import Link from "next/link";

interface StickyCTAProps {
  productName: string;
  externalLink?: string | null;
  priceUSD?: number | null;
  priceKES?: number | null;
}

export function StickyCTA({
  productName,
  externalLink,
  priceUSD,
  priceKES,
}: StickyCTAProps) {
  const displayPrice = priceUSD
    ? `$${priceUSD}`
    : priceKES
      ? `KES ${priceKES.toLocaleString()}`
      : null;

  return (
    <div className="sticky bottom-0 z-[90] w-full">
      {/* HUD Background with scanline effect */}
      <div className="relative border-t border-[var(--border)] bg-[rgba(3,5,8,0.95)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-row items-center justify-between gap-6">
          {/* Product Identity */}
          <div className="flex items-center gap-6 min-w-0">
            <div className="relative hidden sm:flex items-center justify-center w-12 h-12 border border-[var(--border)] bg-[rgba(255,255,255,0.05)]">
              <Zap className="w-5 h-5 text-[var(--gold)]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--gold)] animate-pulse"></div>
            </div>
            <div className="min-w-0">
              <p className="font-mono-dm text-[8px] tracking-[0.3em] text-[var(--gold-dim)] uppercase opacity-50 mb-1">
                ACTIVE_MODULE
              </p>
              <h4 className="font-bebas text-xl sm:text-2xl text-[var(--text)] truncate max-w-[150px] sm:max-w-[300px] tracking-wide uppercase">
                {productName}
              </h4>
            </div>
          </div>

          {/* Metrics/Price Center */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-8 border-x border-[var(--border)] px-12 h-12">
              <div className="flex flex-col items-center">
                <span className="font-mono-dm text-[7px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-40">VALUATION</span>
                <span className="font-rajdhani text-lg font-bold text-[var(--gold)]">
                  {displayPrice || "FREE_ACCESS"}
                </span>
              </div>
              <div className="flex flex-col items-center opacity-40">
                <span className="font-mono-dm text-[7px] tracking-[0.2em] text-[var(--text-muted)] uppercase">STATUS</span>
                <span className="font-rajdhani text-lg font-bold text-[var(--text)]">OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Action Cluster */}
          <div className="flex items-center gap-3">
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 border border-[var(--border)] bg-[rgba(255,255,255,0.02)] text-[var(--text-muted)] hover:text-[var(--gold)] hover:border-[var(--gold-dim)] transition-all cursor-none"
                title="EXTERNAL_LINK"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <Link
              href="/contact"
              className="relative h-12 px-8 bg-[var(--gold)] text-[var(--black)] font-bebas text-xl flex items-center gap-3 transition-all hover:bg-white active:scale-[0.98] group cursor-none overflow-hidden"
            >
              <span className="relative z-10 tracking-widest uppercase">
                Initialize_Deployment
              </span>
              <Activity className="relative z-10 w-4 h-4" />
              
              {/* Scanline overlay on button hover */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
            </Link>
          </div>
        </div>

        {/* HUD Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--gold)] opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--gold)] opacity-40 pointer-events-none"></div>
      </div>
    </div>
  );
}
