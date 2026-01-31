'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Layers, Maximize2, Minimize2, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ExpandableFeatureCard } from './ExpandableFeatureCard';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  iconColor?: string;
  priority?: number;
}

interface FeaturesModalProps {
  features: Feature[];
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  markdownContent?: string;
}

export function FeaturesModal({
  features,
  isOpen,
  onClose,
  productName,
  markdownContent,
}: FeaturesModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, isFullscreen]);

  // Reset fullscreen state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsFullscreen(false);
      setSearchQuery('');
    }
  }, [isOpen]);

  // Markdown components for rendering
  const markdownComponents = {
    h1: ({ children }: any) => (
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-5 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }: any) => (
      <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-sm md:text-base text-slate-600 dark:text-slate-300 ml-2">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-sm md:text-base text-slate-600 dark:text-slate-300 ml-2">
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
        <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs md:text-sm font-mono text-slate-800 dark:text-slate-200">
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
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 text-sm md:text-base text-slate-700 dark:text-slate-300 italic bg-blue-50/50 dark:bg-blue-900/20 rounded-r-lg">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-slate-200 dark:border-slate-700" />,
    a: ({ href, children }: any) => (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
        {children}
      </a>
    ),
  };

  // Filter and sort features (only for non-markdown mode)
  const filteredFeatures = features
    .filter((f) =>
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (a.priority || 100) - (b.priority || 100));

  const isMarkdownMode = markdownContent && markdownContent.trim();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            layout
            className={`fixed bg-white dark:bg-slate-900 shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 ${
              isFullscreen 
                ? 'inset-0 rounded-none' 
                : 'inset-2 md:inset-4 lg:inset-8 xl:inset-12 rounded-2xl md:rounded-3xl'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${isMarkdownMode ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'}`}>
                  {isMarkdownMode ? <FileText className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                    {isMarkdownMode ? 'Feature Documentation' : 'All Features'}
                  </h2>
                  {productName && (
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {productName} {!isMarkdownMode && `• ${features.length} features`}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Fullscreen Toggle */}
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                  title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-5 h-5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </button>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Search - Only show for feature cards mode */}
            {!isMarkdownMode && (
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {isMarkdownMode ? (
                // Markdown content display
                <div className="prose prose-slate dark:prose-invert max-w-none prose-sm md:prose-base">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {markdownContent}
                  </ReactMarkdown>
                </div>
              ) : (
                // Feature cards display
                <>
                  {filteredFeatures.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {filteredFeatures.map((feature, index) => (
                        <ExpandableFeatureCard
                          key={feature.id}
                          icon={feature.icon}
                          iconColor={feature.iconColor}
                          title={feature.title}
                          description={feature.description}
                          index={index}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                        <Search className="w-8 h-8 text-slate-400" />
                      </div>
                      <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-1">
                        No features found
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Try adjusting your search query
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {isMarkdownMode 
                  ? `${markdownContent.length.toLocaleString()} characters`
                  : `Showing ${filteredFeatures.length} of ${features.length} features`
                }
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
