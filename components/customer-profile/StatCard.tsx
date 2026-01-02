'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    text: string;
    icon?: LucideIcon;
  };
  icon: LucideIcon;
  iconColor?: string;
  index: number;
}

export function StatCard({
  label,
  value,
  trend,
  icon: Icon,
  iconColor = 'text-[#2563eb]',
  index,
}: StatCardProps) {
  const trendColors = {
    up: 'text-emerald-600 dark:text-emerald-400',
    down: 'text-red-600 dark:text-red-400',
    neutral: 'text-gray-500 dark:text-gray-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex flex-col gap-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm relative overflow-hidden group"
    >
      <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className={`w-10 h-10 ${iconColor}`} />
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{label}</p>
      <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">{value}</p>
      {trend && (
        <div className={`flex items-center gap-1 text-xs font-medium mt-1 ${trendColors[trend.direction]}`}>
          {trend.icon && <trend.icon className="w-4 h-4" />}
          <span>{trend.text}</span>
        </div>
      )}
    </motion.div>
  );
}
