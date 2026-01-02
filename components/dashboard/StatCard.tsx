'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

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
      ? 'text-[#0bda62] bg-[#0bda62]/10'
      : change?.type === 'decrease'
      ? 'text-red-500 bg-red-500/10'
      : 'text-gray-400 bg-gray-500/10';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm relative overflow-hidden group"
    >
      <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-20 h-20 text-white" />
      </div>

      <p className="text-gray-500 dark:text-slate-400 text-sm font-medium relative z-10">
        {title}
      </p>

      <div className="flex items-baseline gap-2 mt-2 relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </h3>

        {change && (
          <span
            className={`flex items-center text-xs font-medium px-1.5 py-0.5 rounded ${changeColor}`}
          >
            {change.type === 'increase' && '↑'}
            {change.type === 'decrease' && '↓'}
            {change.label || change.value}
          </span>
        )}
      </div>
    </motion.div>
  );
}
