'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Calendar, ArrowRight, ExternalLink, DollarSign } from 'lucide-react';
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
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const displayPrice = priceUSD ? `$${priceUSD}` : priceKES ? `KES ${priceKES.toLocaleString()}` : null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-2xl"
        >
          <div className="bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-2xl shadow-blue-500/10 flex items-center justify-between gap-2 md:gap-4">
            <div className="hidden sm:block flex-shrink min-w-0">
              <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Interested in</p>
              <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-white truncate max-w-[120px] md:max-w-[150px]">{productName}</p>
            </div>
            
            {/* Price Display */}
            {displayPrice && (
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <DollarSign className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">{displayPrice}</span>
              </div>
            )}
            
            <div className="flex items-center gap-1.5 md:gap-2 flex-1 sm:flex-none justify-end">
              {externalLink && (
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 md:p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg md:rounded-xl transition-colors"
                  title="Visit Website"
                >
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              )}
              <Link
                href="/contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold rounded-lg md:rounded-xl transition-all shadow-lg shadow-blue-500/25"
              >
                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="hidden xs:inline">Request Demo</span>
                <span className="xs:hidden">Demo</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center p-2 md:p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg md:rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
