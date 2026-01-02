'use client';

import { CloudUpload, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface UploadDropzoneProps {
  onFileSelect: (files: FileList) => void;
  accept?: string;
  maxSize?: number;
  description?: string;
}

export function UploadDropzone({
  onFileSelect,
  accept = '*',
  maxSize = 500,
  description = 'MP4, MOV up to 500MB. Screenshots up to 5MB (PNG/JPG).',
}: UploadDropzoneProps) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      onFileSelect(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="group relative flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-dashed border-[#2563eb]/30 dark:border-[#2563eb]/40 bg-[#2563eb]/5 dark:bg-[#2563eb]/10 px-6 py-14 transition-colors hover:bg-[#2563eb]/10 dark:hover:bg-[#2563eb]/20 hover:border-[#2563eb]/60 cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="size-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm text-[#2563eb]"
      >
        <CloudUpload className="w-8 h-8" />
      </motion.div>
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
          Drag and drop your demo videos here
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
          {description}
        </p>
      </div>
      <label className="flex items-center justify-center rounded-lg h-10 px-6 bg-[#2563eb] text-white text-sm font-bold shadow-sm hover:bg-[#1d4ed8] transition-colors gap-2 cursor-pointer">
        <FolderOpen className="w-5 h-5" />
        Browse Files
        <input
          type="file"
          className="hidden"
          accept={accept}
          multiple
          onChange={(e) => e.target.files && onFileSelect(e.target.files)}
        />
      </label>
    </div>
  );
}
