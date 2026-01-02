import { GripVertical, Trash2, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
  id: string;
  title: string;
  description: string;
}

interface EditableFeatureListProps {
  features: Feature[];
  onChange: (features: Feature[]) => void;
}

export function EditableFeatureList({ features, onChange }: EditableFeatureListProps) {
  const updateFeature = (id: string, field: 'title' | 'description', value: string) => {
    onChange(
      features.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  const deleteFeature = (id: string) => {
    onChange(features.filter((f) => f.id !== id));
  };

  const addFeature = () => {
    const newFeature: Feature = {
      id: Date.now().toString(),
      title: '',
      description: '',
    };
    onChange([...features, newFeature]);
  };

  return (
    <>
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        <AnimatePresence>
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 flex gap-4 items-start group"
            >
              <div className="mt-2 text-gray-400 cursor-move">
                <GripVertical className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <input
                  className="w-full rounded-md border-gray-200 dark:border-gray-600 bg-transparent text-sm font-medium mb-1 focus:ring-[#2563eb] focus:border-[#2563eb]"
                  type="text"
                  placeholder="Feature title"
                  value={feature.title}
                  onChange={(e) => updateFeature(feature.id, 'title', e.target.value)}
                />
                <input
                  className="w-full rounded-md border-transparent bg-transparent text-xs text-gray-500 dark:text-gray-400 focus:bg-gray-50 dark:focus:bg-gray-800 focus:ring-0"
                  type="text"
                  placeholder="Feature description"
                  value={feature.description}
                  onChange={(e) =>
                    updateFeature(feature.id, 'description', e.target.value)
                  }
                />
              </div>
              <button
                onClick={() => deleteFeature(feature.id)}
                className="p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                type="button"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={addFeature}
          type="button"
          className="text-[#2563eb] text-sm font-bold hover:underline flex items-center gap-1"
        >
          <Plus className="w-4 h-4" /> Add Feature
        </button>
      </div>
    </>
  );
}

