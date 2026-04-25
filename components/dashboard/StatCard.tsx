'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    type: 'increase' | 'decrease' | 'neutral';
    label?: string;
  };
  icon: LucideIcon;
  index: number;
}

export function StatCard({ title, value, change, icon: Icon, index }: StatCardProps) {
  const changeColor =
    change?.type === 'increase'
      ? 'text-[#0bda62]'
      : change?.type === 'decrease'
      ? 'text-red-500'
      : 'text-[var(--gold-dim)]';

  const changeBg = 
    change?.type === 'increase'
      ? 'bg-[#0bda62]/10'
      : change?.type === 'decrease'
      ? 'bg-red-500/10'
      : 'bg-[var(--border)]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-[rgba(255,255,255,0.02)] p-6 border border-[var(--border)] relative overflow-hidden group hover:border-[var(--gold-dim)] transition-all duration-300"
    >
      {/* Decorative Corner Brackets */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.02] pointer-events-none" />

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="bg-[rgba(212,175,55,0.05)] border border-[var(--border)] p-2 group-hover:border-[var(--gold-dim)] transition-colors">
          <Icon className="w-5 h-5 text-[var(--gold)]" />
        </div>
        <div className="text-[10px] font-mono-dm text-[var(--gold-dim)] uppercase tracking-[0.2em] opacity-50">
          Module_0{index + 1}
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-[var(--gold-dim)] text-[10px] font-mono-dm uppercase tracking-widest mb-1">
          {title.replace(/ /g, '_')}
        </p>
        
        <div className="flex items-baseline gap-3">
          <h3 className="text-3xl font-bebas tracking-wider text-[var(--text)] group-hover:text-[var(--gold)] transition-colors">
            {value}
          </h3>

          {change && (
            <div className={`flex items-center text-[10px] font-bold px-2 py-0.5 tracking-tighter ${changeBg} ${changeColor} border border-current opacity-70`}>
              {change.type === 'increase' && '+'}
              {change.type === 'decrease' && '-'}
              {change.label || change.value}
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar (Decorative) */}
      <div className="mt-4 h-1 bg-[var(--border)] relative overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '70%' }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className="absolute top-0 left-0 h-full bg-[var(--gold)] opacity-30 group-hover:opacity-60 transition-opacity"
        />
      </div>
    </motion.div>
  );
}
