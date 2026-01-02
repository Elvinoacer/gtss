'use client';

import { FileVideo, FileImage, FileText, PauseCircle, XCircle, CheckCircle, Trash2, X } from 'lucide-react';
import { motion } from 'framer-motion';

type UploadStatus = 'uploading' | 'completed' | 'waiting';

interface FileUploadItemProps {
  fileName: string;
  fileSize: string;
  status: UploadStatus;
  progress?: number;
  displayTitle?: string;
  timeRemaining?: string;
  onRemove: () => void;
  onPause?: () => void;
  onTitleChange?: (title: string) => void;
}

const getFileIcon = (fileName: string) => {
  const ext = fileName.split('.').pop()?.toLowerCase();
  if (['mp4', 'mov', 'avi'].includes(ext || '')) return FileVideo;
  if (['png', 'jpg', 'jpeg', 'gif'].includes(ext || '')) return FileImage;
  return FileText;
};

const getStatusConfig = (status: UploadStatus) => {
  switch (status) {
    case 'uploading':
      return {
        bgColor: 'bg-gray-50 dark:bg-gray-800/50',
        iconBg: 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600',
        iconColor: 'text-[#2563eb]',
      };
    case 'completed':
      return {
        bgColor: 'bg-white dark:bg-gray-800',
        iconBg: 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800',
        iconColor: 'text-green-600 dark:text-green-400',
      };
    case 'waiting':
      return {
        bgColor: 'bg-white dark:bg-gray-800 opacity-70 hover:opacity-100',
        iconBg: 'bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600',
        iconColor: 'text-gray-500 dark:text-gray-400',
      };
  }
};

export function FileUploadItem({
  fileName,
  fileSize,
  status,
  progress = 0,
  displayTitle,
  timeRemaining,
  onRemove,
  onPause,
  onTitleChange,
}: FileUploadItemProps) {
  const Icon = getFileIcon(fileName);
  const config = getStatusConfig(status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -10 }}
      className={`flex flex-col gap-3 p-4 border border-gray-100 dark:border-gray-700 rounded-lg ${config.bgColor} transition-opacity`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`size-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${config.iconBg} ${config.iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between mb-1">
            <p className="text-slate-900 dark:text-white text-sm font-semibold truncate">
              {fileName}
            </p>
            {status === 'uploading' && (
              <p className="text-[#2563eb] text-xs font-bold">{progress}%</p>
            )}
          </div>

          {/* Progress Bar */}
          {status === 'uploading' && (
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-[#2563eb] rounded-full"
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {/* Status Info */}
          <div className="flex justify-between items-center">
            {status === 'uploading' && (
              <>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {Math.round((progress / 100) * parseFloat(fileSize))} MB of {fileSize} • {timeRemaining}
                </p>
                <div className="flex gap-4">
                  {onPause && (
                    <button
                      onClick={onPause}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                      title="Pause"
                    >
                      <PauseCircle className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={onRemove}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    title="Cancel"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
            {status === 'completed' && (
              <>
                <p className="text-green-600 dark:text-green-400 text-xs flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Upload Complete • {fileSize}
                </p>
                <button
                  onClick={onRemove}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  title="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </>
            )}
            {status === 'waiting' && (
              <>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Waiting to upload • {fileSize}
                </p>
                <button
                  onClick={onRemove}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  title="Remove"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          {/* Metadata Input */}
          {(status === 'uploading' || status === 'completed') && (
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                className="w-full max-w-sm px-3 py-1.5 text-xs bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded text-slate-900 dark:text-white focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] outline-none transition-all"
                placeholder="Add display title (optional)"
                value={displayTitle || ''}
                onChange={(e) => onTitleChange?.(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
