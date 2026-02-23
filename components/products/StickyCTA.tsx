'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, Activity, Network } from 'lucide-react';
import Link from 'next/link';

interface StickyCTAProps {
  productName: string;
  externalLink?: string | null;
  priceUSD?: number | null;
  priceKES?: number | null;
}

export function StickyCTA({ productName, externalLink, priceUSD, priceKES }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger later down the page for better UX
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const displayPrice = priceUSD ? `$${priceUSD}` : priceKES ? `KES ${priceKES.toLocaleString()}` : null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 150, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-4xl"
        >
          {/* Futuristic HUD Container */}
          <div className="relative group p-1.5 rounded-[2rem] bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Animated edge light */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            
            <div className="bg-[#020617]/80 rounded-[1.6rem] px-5 py-3 md:px-6 md:py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Target Data */}
              <div className="hidden md:flex items-center gap-4 flex-shrink min-w-0">
                <div className="relative flex items-center justify-center size-10 rounded-full bg-blue-500/10 border border-blue-500/30">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <div className="absolute inset-0 rounded-full border border-blue-400/50 animate-[ping_3s_ease-out_infinite]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.3em] mb-1">Target System</p>
                  <p className="text-sm font-black text-white truncate max-w-[200px]">{productName}</p>
                </div>
              </div>

              {/* Connection Status / Price  */}
              <div className="flex-1 flex justify-center sm:justify-start md:justify-center">
                 {displayPrice ? (
                   <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                     <Network className="w-4 h-4 text-emerald-400" />
                     <div className="w-px h-4 bg-emerald-500/30" />
                     <span className="text-sm font-black tracking-wider text-emerald-400">{displayPrice}</span>
                   </div>
                 ) : (
                    <div className="flex items-center gap-3 px-4 py-2 bg-purple-500/10 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                       <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                       <span className="text-xs font-black tracking-widest text-purple-400 uppercase">System Open</span>
                    </div>
                 )}
              </div>
              
              {/* Command Actions */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {externalLink && (
                  <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center size-12 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 backdrop-blur-xl rounded-xl transition-all hover:scale-105"
                    title="Access External Protocol"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                <Link
                  href="/contact"
                  className="flex-1 sm:flex-none relative overflow-hidden flex items-center justify-center gap-2 h-12 px-6 lg:px-8 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative z-10 uppercase tracking-wider text-sm">Initiate Demo</span>
                  <Calendar className="relative z-10 w-4 h-4 text-blue-200" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
