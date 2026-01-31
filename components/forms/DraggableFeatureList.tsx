'use client';

import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Plus, Layers, List, FileText } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { DraggableFeatureItem } from './DraggableFeatureItem';
import { MarkdownFeaturesEditor } from './MarkdownFeaturesEditor';

interface Feature {
  id: string;
  title: string;
  description: string;
  priority: number;
}

type FeatureMode = 'manual' | 'markdown';

interface DraggableFeatureListProps {
  features: Feature[];
  onChange: (features: Feature[]) => void;
  markdownContent?: string;
  onMarkdownChange?: (content: string) => void;
  mode?: FeatureMode;
  onModeChange?: (mode: FeatureMode) => void;
}

export function DraggableFeatureList({ 
  features, 
  onChange,
  markdownContent = '',
  onMarkdownChange,
  mode = 'manual',
  onModeChange,
}: DraggableFeatureListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = features.findIndex((f) => f.id === active.id);
      const newIndex = features.findIndex((f) => f.id === over.id);

      const reorderedFeatures = arrayMove(features, oldIndex, newIndex);
      
      // Update priorities based on new positions
      const updatedFeatures = reorderedFeatures.map((feature, index) => ({
        ...feature,
        priority: (index + 1) * 10, // 10, 20, 30, etc.
      }));

      onChange(updatedFeatures);
    }
  };

  const updateFeature = (id: string, field: 'title' | 'description', value: string) => {
    onChange(
      features.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  const deleteFeature = (id: string) => {
    const updatedFeatures = features
      .filter((f) => f.id !== id)
      .map((feature, index) => ({
        ...feature,
        priority: (index + 1) * 10,
      }));
    onChange(updatedFeatures);
  };

  const addFeature = () => {
    const newFeature: Feature = {
      id: `temp-${Date.now()}`,
      title: '',
      description: '',
      priority: (features.length + 1) * 10,
    };
    onChange([...features, newFeature]);
  };

  // Sort features by priority before rendering
  const sortedFeatures = [...features].sort((a, b) => a.priority - b.priority);

  return (
    <div className="space-y-4">
      {/* Mode Toggle */}
      {onModeChange && (
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit">
          <button
            type="button"
            onClick={() => onModeChange('manual')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === 'manual'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <List className="w-4 h-4" />
            Manual Entry
          </button>
          <button
            type="button"
            onClick={() => onModeChange('markdown')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === 'markdown'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <FileText className="w-4 h-4" />
            Paste Markdown
          </button>
        </div>
      )}

      {/* Content based on mode */}
      <AnimatePresence mode="wait">
        {mode === 'markdown' && onMarkdownChange ? (
          <motion.div
            key="markdown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <MarkdownFeaturesEditor
              value={markdownContent}
              onChange={onMarkdownChange}
            />
          </motion.div>
        ) : (
          <motion.div
            key="manual"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {/* Features List */}
            {sortedFeatures.length > 0 ? (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={sortedFeatures.map((f) => f.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-3">
                    <AnimatePresence mode="popLayout">
                      {sortedFeatures.map((feature, index) => (
                        <DraggableFeatureItem
                          key={feature.id}
                          feature={feature}
                          index={index}
                          onUpdate={updateFeature}
                          onDelete={deleteFeature}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </SortableContext>
              </DndContext>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 px-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-900/50">
                <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 mb-3">
                  <Layers className="w-6 h-6 text-slate-400" />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-1">
                  No features added yet
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
                  Click the button below to add your first feature
                </p>
              </div>
            )}

            {/* Add Feature Button */}
            <button
              type="button"
              onClick={addFeature}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
            >
              <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Add Feature</span>
            </button>

            {/* Helper Text */}
            {sortedFeatures.length > 1 && (
              <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
                Drag features to reorder. Top features are shown first on the product page.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
