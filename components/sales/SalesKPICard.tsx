'use client';

import { LucideIcon, TrendingUp, TrendingDown, Minus, DollarSign, Users, Percent, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

interface SalesKPICardProps {
  label: string;
  value: string;
  trend: {
    direction: 'up' | 'down' | 'stable';
    value: string;
  };
  iconName: string;
  iconBg: string;
  iconColor: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Users,
  Percent,
  ShoppingBag,
};

export function SalesKPICard({
  label,
  value,
  trend,
  iconName,
  iconBg,
  iconColor,
  index,
}: SalesKPICardProps) {
  const Icon = iconMap[iconName] || DollarSign;

  const trendConfig = {
    up: {
      icon: TrendingUp,
      className: 'bg-success/10 text-success',
    },
    down: {
      icon: TrendingDown,
      className: 'bg-error/10 text-error',
    },
    stable: {
      icon: Minus,
      className: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
    },
    neutral: {
      icon: Minus,
      className: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
    },
  };

  const currentTrend = trendConfig[trend.direction as keyof typeof trendConfig] || trendConfig.stable;
  const { icon: TrendIcon, className: trendClassName } = currentTrend;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-[#1a2e22] p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:shadow-md transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`${iconBg} p-2 rounded-lg ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${trendClassName}`}>
          <TrendIcon className="w-3.5 h-3.5" />
          <span>{trend.value}</span>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{label}</p>
      <h3 className="text-2xl font-bold text-[#111814] dark:text-white mt-1">{value}</h3>
    </motion.div>
  );
}
