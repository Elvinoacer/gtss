'use client';

import { motion } from 'framer-motion';
import { Share, Edit } from 'lucide-react';
import { getIcon } from '@/lib/icons';

interface ProductHeaderProps {
  icon: string;
  name: string;
  version: string;
  status: string;
  description: string;
  iconGradient?: string;
}

export function ProductHeader({
  icon,
  name,
  version,
  status,
  description,
  iconGradient = 'from-blue-600 to-indigo-700',
}: ProductHeaderProps) {
  const Icon = getIcon(icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap items-start justify-between gap-4"
    >
      <div className="flex gap-4">
        <div
          className={`size-16 rounded-xl bg-gradient-to-br ${iconGradient} flex items-center justify-center text-white shadow-lg shadow-blue-500/20`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {name}
            </h1>
            <span className="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 ring-1 ring-inset ring-emerald-600/20">
              {version} • {status}
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
            {description}
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-sm transition-colors"
        >
          <Share className="w-4 h-4" />
          Share
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium text-sm transition-colors shadow-sm shadow-blue-500/30"
        >
          <Edit className="w-4 h-4" />
          Edit Product
        </motion.button>
      </div>
    </motion.div>
  );
}

