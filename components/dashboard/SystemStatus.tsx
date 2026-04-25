'use client';

import { systemServices } from '@/data/dashboard';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap } from 'lucide-react';

interface SystemService {
  name: string;
  status: 'operational' | 'warning' | 'error';
  statusLabel: string;
}

interface SystemStatusProps {
  data?: SystemService[];
}

export function SystemStatus({ data }: SystemStatusProps) {
  // Use data if available and not empty, otherwise fallback to systemServices
  const services = (data && data.length > 0 ? data : systemServices) as SystemService[];

  const getStatusColor = (status: SystemService['status']) => {
    switch (status) {
      case 'operational':
        return {
          dot: 'bg-[#0bda62]',
          glow: 'shadow-[0_0_10px_rgba(11,218,98,0.4)]',
          text: 'text-[#0bda62]',
        };
      case 'warning':
        return {
          dot: 'bg-[#f59e0b]',
          glow: 'shadow-[0_0_10px_rgba(245,158,11,0.4)]',
          text: 'text-[#f59e0b]',
        };
      case 'error':
        return {
          dot: 'bg-red-500',
          glow: 'shadow-[0_0_10px_rgba(239,68,68,0.4)]',
          text: 'text-red-500',
        };
      default:
        return {
          dot: 'bg-[var(--gold-dim)]',
          glow: '',
          text: 'text-[var(--gold-dim)]',
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-[rgba(255,255,255,0.02)] border border-[var(--border)] p-8 relative overflow-hidden h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[var(--gold)]" />
          <h2 className="text-xl font-bebas tracking-widest text-[var(--text)] uppercase">
            System_Health
          </h2>
        </div>
        <div className="flex items-center gap-2 px-2 py-0.5 border border-[#0bda62]/30 bg-[#0bda62]/5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0bda62] animate-pulse" />
          <span className="text-[10px] font-mono-dm text-[#0bda62] uppercase tracking-tighter">Secure</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {services.map((service, index) => {
          const colors = getStatusColor(service.status as any);

          return (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="flex items-center justify-between p-4 border border-[var(--border)] bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(212,175,55,0.02)] transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${colors.dot} ${colors.glow}`}></div>
                <span className="text-xs font-mono-dm uppercase tracking-[0.2em] text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">
                  {service.name.replace(/ /g, '_')}
                </span>
              </div>
              <span className={`text-[10px] font-bold font-mono-dm uppercase tracking-widest ${colors.text}`}>
                {service.statusLabel}
              </span>
            </motion.div>
          );
        })}

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-auto py-3 text-[10px] text-[var(--gold)] hover:text-[var(--text)] font-bold uppercase tracking-[0.3em] transition-all border border-[var(--gold)]/20 hover:border-[var(--gold)] bg-[var(--gold)]/5 hover:bg-[var(--gold)]/10"
        >
          Access_Diagnostic_Logs
        </motion.button>
      </div>

      {/* Decorative Scanline */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(212,175,55,0.5)_50%)] bg-[length:100%_4px] animate-scanline" />
      </div>
    </motion.div>
  );
}
