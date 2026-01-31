'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Layers, Maximize2, Minimize2 } from 'lucide-react';
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
}

export function FeaturesModal({
  features,
  isOpen,
  onClose,
  productName,
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
    }
  }, [isOpen]);

  // Filter and sort features
  const filteredFeatures = features
    .filter((f) =>
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (a.priority || 100) - (b.priority || 100));

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
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                    All Features
                  </h2>
                  {productName && (
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {productName} • {features.length} features
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

            {/* Search */}
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

            {/* Features List */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
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
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Showing {filteredFeatures.length} of {features.length} features
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
