'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle } from 'lucide-react';
import { getIcon } from '@/lib/icons';

interface ExpandableFeatureCardProps {
  icon?: string;
  iconColor?: string;
  title: string;
  description: string;
  index: number;
  defaultExpanded?: boolean;
}

export function ExpandableFeatureCard({
  icon,
  iconColor,
  title,
  description,
  index,
  defaultExpanded = false,
}: ExpandableFeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const Icon = icon ? getIcon(icon) : CheckCircle;

  // Truncate description to show preview
  const maxLength = 80;
  const isLongDescription = description.length > maxLength;
  const previewText = isLongDescription
    ? description.substring(0, maxLength) + '...'
    : description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl md:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all overflow-hidden group"
    >
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 md:p-6 flex items-start gap-3 md:gap-4 text-left"
      >
        {/* Icon */}
        <div
          className={`shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
            iconColor || 'bg-blue-50 dark:bg-blue-900/20'
          }`}
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1 md:mb-2">
            {title}
          </h3>
          
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.p
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                {previewText}
              </motion.p>
            ) : (
              <motion.p
                key="full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Expand Icon - only show if description is long */}
        {isLongDescription && (
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-400"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        )}
      </button>
    </motion.div>
  );
}
