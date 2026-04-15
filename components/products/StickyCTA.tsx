import { Activity, Calendar, ExternalLink, Network } from "lucide-react";
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
    <div className="sticky bottom-0 md:bottom-6 z-[90] w-full md:px-4">
      <div className="relative group md:p-1.5 rounded-t-[1.5rem] md:rounded-[2rem] bg-[#0F172A]/95 md:bg-gradient-to-b md:from-white/10 md:to-white/5 backdrop-blur-3xl border-t border-white/10 md:border shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

        <div className="bg-transparent md:bg-[#020617]/80 rounded-t-[1.5rem] md:rounded-[1.6rem] px-4 py-4 pb-6 md:pb-4 md:px-6 md:py-4 flex flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 flex-shrink min-w-0">
            <div className="relative flex items-center justify-center size-8 sm:size-10 rounded-full bg-blue-500/10 border border-blue-500/30">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <div className="absolute inset-0 rounded-full border border-blue-400/50 animate-[ping_3s_ease-out_infinite]" />
            </div>
            <div className="min-w-0">
              <p className="text-[8px] sm:text-[9px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-0.5 sm:mb-1">
                Product
              </p>
              <p className="text-xs sm:text-sm font-bold text-white truncate max-w-[130px] sm:max-w-[200px]">
                {productName}
              </p>
            </div>
          </div>

          <div className="hidden sm:flex flex-1 justify-center overflow-hidden">
            {displayPrice ? (
              <div className="flex items-center justify-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                <Network className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="hidden sm:block w-px h-4 bg-emerald-500/30" />
                <span className="text-xs sm:text-sm font-black tracking-wider text-emerald-400 truncate">
                  {displayPrice}
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-purple-500/10 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500 animate-pulse shrink-0" />
                <span className="text-[10px] md:text-xs font-bold tracking-wider text-purple-400 uppercase truncate">
                  Free
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 w-auto">
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 backdrop-blur-xl rounded-xl transition-all hover:scale-105"
                title="Access External Protocol"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            )}
            <Link
              href="/contact"
              className="flex-none relative overflow-hidden flex items-center justify-center gap-2 h-10 sm:h-12 px-4 sm:px-6 lg:px-8 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10 uppercase tracking-wider text-xs sm:text-sm">
                Request Demo
              </span>
              <Calendar className="relative z-10 w-3 h-3 sm:w-4 sm:h-4 text-blue-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
