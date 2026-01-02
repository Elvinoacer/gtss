'use client';

import { CloudUpload, Eye, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MediaUploadCardProps {
  title: string;
  currentMedia?: string;
  onUpload: (file: File) => void;
  onDelete?: () => void;
  acceptedFormats?: string;
  maxSize?: string;
}

export function MediaUploadCard({
  title,
  currentMedia,
  onUpload,
  onDelete,
  acceptedFormats = 'PNG or SVG',
  maxSize = '2MB',
}: MediaUploadCardProps) {
  const [preview, setPreview] = useState<string | undefined>(currentMedia);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <span className="text-sm font-medium text-slate-900 dark:text-gray-200 mb-2 block">
        {title}
      </span>

      {preview ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-3 relative group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <img
              src={preview}
              alt={title}
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                type="button"
                className="p-1 bg-white/20 rounded hover:bg-white/40 text-white transition-colors"
              >
                <Eye className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setPreview(undefined);
                  onDelete?.();
                }}
                className="p-1 bg-red-500/80 rounded hover:bg-red-600 text-white transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <CloudUpload className="w-8 h-8 text-gray-400 mb-2" />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {acceptedFormats}, max {maxSize}
            </p>
          </div>
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
          />
        </label>
      )}
    </div>
  );
}
