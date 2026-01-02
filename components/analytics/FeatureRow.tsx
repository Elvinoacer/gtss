'use client';

import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface FeatureRowProps {
  name: string;
  category: string;
  users: string;
  avgTime: string;
  trend: {
    direction: 'up' | 'down' | 'stable';
    value: string;
  };
}

export function FeatureRow({ name, category, users, avgTime, trend }: FeatureRowProps) {
  const trendConfig = {
    up: {
      icon: ArrowUp,
      className: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
    },
    down: {
      icon: ArrowDown,
      className: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
    },
    stable: {
      icon: Minus,
      className: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
    },
  };

  const { icon: TrendIcon, className } = trendConfig[trend.direction];

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <td className="py-4 px-6 text-sm font-medium text-slate-900 dark:text-white">{name}</td>
      <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">{category}</td>
      <td className="py-4 px-6 text-sm text-slate-900 dark:text-white text-right font-mono">
        {users}
      </td>
      <td className="py-4 px-6 text-sm text-slate-900 dark:text-white text-right font-mono hidden sm:table-cell">
        {avgTime}
      </td>
      <td className="py-4 px-6 text-sm text-right">
        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${className}`}>
          <TrendIcon className="w-3.5 h-3.5" />
          {trend.value}
        </span>
      </td>
    </tr>
  );
}
