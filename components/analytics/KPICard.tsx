'use client';

import { LucideIcon, Users, Clock, Repeat, Bug } from 'lucide-react';
import { motion } from 'framer-motion';

interface KPICardProps {
  label: string;
  value: string;
  trend: {
    direction: 'up' | 'down' | 'neutral';
    value: string;
    label: string;
  };
  iconName: string;
  iconBg: string;
  iconColor: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  Users,
  Clock,
  Repeat,
  Bug,
};

export function KPICard({
  label,
  value,
  trend,
  iconName,
  iconBg,
  iconColor,
  index,
}: KPICardProps) {
  const Icon = iconMap[iconName] || Users;

  const trendIcons = {
    up: '↗',
    down: '↘',
    neutral: '→',
  };

  const trendColors = {
    up: 'text-emerald-600 dark:text-emerald-400',
    down: 'text-rose-600 dark:text-rose-400',
    neutral: 'text-gray-500 dark:text-gray-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between h-32"
    >
      <div className="flex justify-between items-start">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{label}</p>
        <div className={`p-1.5 rounded-md ${iconBg} ${iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{value}</h3>
        <div className="flex items-center gap-1 mt-1">
          <span className={`${trend.direction === 'up' ? 'text-emerald-500' : trend.direction === 'down' ? 'text-rose-500' : 'text-gray-400'}`}>
            {trendIcons[trend.direction]}
          </span>
          <span className={`text-xs font-semibold ${trendColors[trend.direction]}`}>
            {trend.value}
          </span>
          <span className="text-gray-400 text-xs">{trend.label}</span>
        </div>
      </div>
    </motion.div>
  );
}
