'use client';

import { motion } from 'framer-motion';
import { getIcon } from '@/lib/icons';

interface FeatureCardProps {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({
  icon,
  iconColor,
  title,
  description,
  index,
}: FeatureCardProps) {
  const Icon = getIcon(icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-[#1e293b] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-[#2563eb]/50 transition-all group"
    >
      <div
        className={`size-10 rounded-lg ${iconColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
        {title}
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}

