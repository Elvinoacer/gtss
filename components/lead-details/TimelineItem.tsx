'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  title: string;
  time: string;
  description?: string;
  children?: React.ReactNode;
  index: number;
}

export function TimelineItem({
  icon: Icon,
  iconBgColor,
  iconColor,
  title,
  time,
  description,
  children,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`absolute -left-[25px] top-0 size-10 rounded-full border-4 border-gray-50 dark:border-[#1e293b] ${iconBgColor} ${iconColor} flex items-center justify-center`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <span className="text-sm font-semibold text-slate-900 dark:text-white">
            {title}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400">{time}</span>
        </div>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        )}
        {children}
      </div>
    </motion.div>
  );
}
