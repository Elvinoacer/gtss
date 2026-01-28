'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ExpandableFeatureCard } from './ExpandableFeatureCard';
import { FeaturesModal } from './FeaturesModal';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  iconColor?: string;
  priority?: number;
}

interface FeaturesSectionProps {
  features: Feature[];
  productName?: string;
  initialCount?: number;
}

export function FeaturesSection({
  features,
  productName,
  initialCount = 6,
}: FeaturesSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sort features by priority (lower = higher priority)
  const sortedFeatures = [...features].sort(
    (a, b) => (a.priority || 100) - (b.priority || 100)
  );

  const visibleFeatures = sortedFeatures.slice(0, initialCount);
  const hasMoreFeatures = features.length > initialCount;
  const remainingCount = features.length - initialCount;

  if (features.length === 0) {
    return null;
  }

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4 md:space-y-6"
      >
        {/* Section Header */}
        <div className="flex items-center justify-between px-1 md:px-2">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white">
              Key Features
            </h2>
            <span className="px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full">
              {features.length}
            </span>
          </div>

          {/* View All Button - Desktop */}
          {hasMoreFeatures && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-colors group"
            >
              View All Features
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {visibleFeatures.map((feature, index) => (
            <ExpandableFeatureCard
              key={feature.id}
              icon={feature.icon}
              iconColor={feature.iconColor}
              title={feature.title}
              description={feature.description}
              index={index}
              defaultExpanded={index < 2} // First two expanded by default
            />
          ))}
        </div>

        {/* View All Button - Mobile & Desktop */}
        {hasMoreFeatures && (
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-4 px-6 flex items-center justify-center gap-3 rounded-xl md:rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 bg-white/50 dark:bg-slate-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
          >
            <span className="font-medium">
              View All {features.length} Features
            </span>
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
              +{remainingCount} more
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        )}
      </motion.section>

      {/* Features Modal */}
      <FeaturesModal
        features={sortedFeatures}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName}
      />
    </>
  );
}
