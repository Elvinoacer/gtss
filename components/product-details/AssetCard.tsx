'use client';

import { motion } from 'framer-motion';
import { FileText, Video, FileImage } from 'lucide-react';

interface AssetCardProps {
  type: 'pdf' | 'slides' | 'video' | 'image';
  title: string;
  subtitle: string;
  href: string;
  index: number;
}

export function AssetCard({ type, title, subtitle, href, index }: AssetCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-10 h-10 text-red-500" />;
      case 'slides':
        return <FileImage className="w-10 h-10 text-orange-500" />;
      case 'video':
        return <Video className="w-10 h-10 text-blue-500" />;
      default:
        return <FileText className="w-10 h-10 text-gray-500" />;
    }
  };

  const getActionLabel = () => {
    switch (type) {
      case 'pdf':
        return 'Download PDF';
      case 'slides':
        return 'View Slides';
      case 'video':
        return 'Watch Video';
      default:
        return 'View';
    }
  };

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      href={href}
      className="group flex flex-col gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
    >
      <div className="aspect-video w-full rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
          <span className="text-white text-xs font-medium">{getActionLabel()}</span>
        </div>
        {getIcon()}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
          {title}
        </p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </motion.a>
  );
}
