'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Activity, Shield, Terminal, Zap, Cpu } from 'lucide-react';

const READOUTS = [
  {
    id: "INFRA_01",
    title: 'Sovereign Infrastructure',
    description: 'Centralized command for technical assets and organizational deployments.',
    stats: { nodes: "24_ACTIVE", security: "AES-256", latency: "0.002MS" }
  },
  {
    id: "PROD_02",
    title: 'Product Orchestration',
    description: 'Unified management of lifecycle, documentation, and operational scaling.',
    stats: { version: "v4.0.2", registry: "GTSS_CENTRAL", health: "100%" }
  },
  {
    id: "TEAM_03",
    title: 'Node Authorization',
    description: 'Granular access control and permission governance for enterprise nodes.',
    stats: { rbac: "ENABLED", mfa: "MANDATORY", logs: "ENCRYPTED" }
  },
];

export function VisualPanel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % READOUTS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex flex-1 relative bg-[var(--black)] items-center justify-center overflow-hidden border-l border-[var(--border)]">
      {/* Background HUD Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>
      
      {/* Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 z-20"></div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--gold)] opacity-[0.05] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 opacity-[0.03] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      {/* Content HUD */}
      <div className="relative z-10 w-full max-w-xl px-12">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="px-3 py-1 border border-[var(--gold-dim)] bg-[rgba(212,175,55,0.05)] text-[var(--gold)] font-mono-dm text-[10px] tracking-[0.3em] uppercase">
              SYSTEM_READOUT: {READOUTS[currentIndex].id}
            </div>
            <div className="h-[1px] flex-1 bg-[var(--border)] opacity-30"></div>
          </div>
          
          <motion.h3
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bebas text-6xl text-[var(--text)] mb-4 tracking-wide uppercase leading-none"
          >
            {READOUTS[currentIndex].title}
          </motion.h3>
          
          <motion.p
            key={`desc-${currentIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-2xl text-[var(--text-muted)] italic leading-relaxed"
          >
            {READOUTS[currentIndex].description}
          </motion.p>
        </header>

        {/* Technical Data Grid */}
        <motion.div 
          key={`stats-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          {Object.entries(READOUTS[currentIndex].stats).map(([label, value]) => (
            <div key={label} className="border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-4 flex flex-col gap-1">
              <span className="font-mono-dm text-[8px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-40">{label}</span>
              <span className="font-rajdhani text-lg font-bold text-[var(--text)]">{value}</span>
            </div>
          ))}
        </motion.div>

        {/* HUD Elements */}
        <div className="flex items-center justify-between font-mono-dm text-[9px] tracking-[0.2em] text-[var(--gold-dim)] uppercase">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
              TELEMETRY_CONNECTED
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-3 h-3 text-[var(--gold-dim)]" />
              ROOT_AUTHORIZED
            </div>
          </div>
          
          {/* Pagination */}
          <div className="flex gap-4">
            {READOUTS.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={`w-6 h-[2px] transition-all ${i === currentIndex ? 'bg-[var(--gold)]' : 'bg-[var(--border)]'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Frame HUD Decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[var(--gold-dim)] opacity-20"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-[var(--gold-dim)] opacity-20"></div>
    </div>
  );
}
