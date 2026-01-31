'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
  markdownContent?: string;
}

export function FeaturesSection({
  features,
  productName,
  initialCount = 6,
  markdownContent,
}: FeaturesSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Markdown components for rendering
  const markdownComponents = {
    h1: ({ children }: any) => (
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-6 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-5 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-4 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-3 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }: any) => (
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-slate-600 dark:text-slate-300 ml-2">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-1 mb-4 text-sm text-slate-600 dark:text-slate-300 ml-2">
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li className="pl-1 leading-relaxed">{children}</li>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-slate-900 dark:text-white">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-slate-700 dark:text-slate-300">{children}</em>
    ),
    code: ({ inline, children }: any) =>
      inline ? (
        <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono text-slate-800 dark:text-slate-200">
          {children}
        </code>
      ) : (
        <div className="rounded-lg overflow-hidden bg-slate-900 dark:bg-slate-950 p-4 mb-4">
          <code className="text-sm font-mono text-slate-200 block overflow-x-auto whitespace-pre-wrap">
            {children}
          </code>
        </div>
      ),
    pre: ({ children }: any) => <pre className="not-prose">{children}</pre>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-1 my-4 text-sm text-slate-700 dark:text-slate-300 italic bg-blue-50/50 dark:bg-blue-900/20 rounded-r-lg">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-6 border-slate-200 dark:border-slate-700" />,
    a: ({ href, children }: any) => (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
        {children}
      </a>
    ),
  };

  // If markdown content is provided, render it
  if (markdownContent && markdownContent.trim()) {
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
              <span className="px-2 py-0.5 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center gap-1">
                <FileText className="w-3 h-3" />
                Detailed
              </span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-colors group"
            >
              View Full Documentation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Preview Card - Show truncated markdown */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
            <div className="prose prose-slate dark:prose-invert max-w-none prose-sm md:prose-base line-clamp-[20] overflow-hidden">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {markdownContent.substring(0, 2000) + (markdownContent.length > 2000 ? '\n\n...' : '')}
              </ReactMarkdown>
            </div>
            
            {markdownContent.length > 2000 && (
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Continue Reading
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </motion.section>

        {/* Full Markdown Modal */}
        <FeaturesModal
          features={[]}
          markdownContent={markdownContent}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productName={productName}
        />
      </>
    );
  }

  // Original card-based feature display
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
