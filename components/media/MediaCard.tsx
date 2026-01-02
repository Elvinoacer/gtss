'use client';

import { motion } from 'framer-motion';
import { MoreVertical, FileText, FileArchive, FileSpreadsheet, Palette, Play } from 'lucide-react';

interface MediaCardProps {
  id: string;
  title: string;
  type: 'image' | 'video' | 'pdf' | 'zip' | 'csv' | 'figma';
  size: string;
  uploadedAt: string;
  thumbnail?: string;
  index: number;
}

const typeConfig = {
  image: { badge: 'PNG', color: 'bg-black/60' },
  video: { badge: 'MP4', color: 'bg-black/60' },
  pdf: { badge: 'PDF', color: 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300', bgColor: 'bg-red-50 dark:bg-red-900/10', icon: FileText },
  zip: { badge: 'ZIP', color: 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300', bgColor: 'bg-amber-50 dark:bg-amber-900/10', icon: FileArchive },
  csv: { badge: 'CSV', color: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300', bgColor: 'bg-green-50 dark:bg-green-900/10', icon: FileSpreadsheet },
  figma: { badge: 'FIG', color: 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300', bgColor: 'bg-pink-50 dark:bg-pink-900/10', icon: Palette },
};

export function MediaCard({ id, title, type, size, uploadedAt, thumbnail, index }: MediaCardProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="absolute top-3 left-3 z-10">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-gray-300 text-[#2563eb] focus:ring-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>

      <div className={`aspect-[4/3] w-full relative ${type === 'image' || type === 'video' ? 'overflow-hidden' : 'flex items-center justify-center'} ${config.bgColor || 'bg-gray-100 dark:bg-gray-900'}`}>
        {thumbnail ? (
          <>
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${thumbnail})`, opacity: type === 'video' ? 0.6 : 1 }}
            />
            {type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                </div>
              </div>
            )}
          </>
        ) : Icon ? (
          <Icon className={`w-16 h-16 ${config.color.includes('text-') ? config.color.split(' ').find(c => c.startsWith('text-')) : 'text-gray-500'}/50 group-hover:scale-110 transition-transform duration-300`} />
        ) : null}
        <div className={`absolute bottom-2 right-2 px-2 py-1 backdrop-blur-sm rounded text-[10px] font-bold uppercase ${config.color}`}>
          {config.badge}
        </div>
      </div>

      <div className="p-4 flex items-start justify-between gap-2">
        <div className="flex flex-col min-w-0">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-[#2563eb] transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray-500 dark:text-gray-400">{size}</span>
            <span className="size-1 bg-gray-300 rounded-full"></span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{uploadedAt}</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
