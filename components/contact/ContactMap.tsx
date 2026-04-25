'use client';

import { Building2, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactMap() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full h-[300px] border border-[var(--border)] overflow-hidden group cursor-none"
    >
      <div
        className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-1000 group-hover:scale-110 opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&auto=format&fit=crop')" }}
      ></div>
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20"></div>

      {/* Map Target Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
        <div className="relative">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--gold)] opacity-40 animate-ping"></span>
          <div className="relative bg-[var(--gold)] text-[var(--black)] p-3 rounded-none shadow-[var(--glow-gold)] border border-[var(--black)]">
            <Target className="w-5 h-5" />
          </div>
        </div>
        <div className="bg-[var(--black)] border border-[var(--gold-dim)] px-4 py-1 font-mono-dm text-[9px] font-bold text-[var(--gold)] tracking-[0.2em] uppercase whitespace-nowrap">
          COORD: ELD_KEN_001
        </div>
      </div>

      {/* Technical Metadata */}
      <div className="absolute top-4 left-6 font-mono-dm text-[8px] text-[var(--gold-dim)] tracking-[0.2em] opacity-50 uppercase">
        GEO_SPATIAL_LOCK
      </div>
      <div className="absolute bottom-4 right-6 font-mono-dm text-[8px] text-[var(--gold-dim)] tracking-[0.2em] opacity-50 uppercase">
        GRID_REF: 0.5143° N, 35.2697° E
      </div>
    </motion.div>
  );
}
