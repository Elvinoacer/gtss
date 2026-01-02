'use client';

import { motion } from 'framer-motion';

interface StatsCardsProps {
  activeProjects: number;
  tenure: string;
  teamSize: number;
}

export function StatsCards({ activeProjects, tenure, teamSize }: StatsCardsProps) {
  const stats = [
    { label: 'Active Projects', value: activeProjects.toString() },
    { label: 'Tenure', value: tenure },
    { label: 'Team Size', value: teamSize.toString() },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          className="bg-white dark:bg-[#1e293b] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase mb-1">
            {stat.label}
          </p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white">
            {stat.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
