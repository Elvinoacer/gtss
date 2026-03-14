'use client';

import { UploadDropzone, FileUploadItem } from '@/components/upload';
import { Save, FolderOpen, Info, ArrowRight, Trash2, Film, Image as ImageIcon, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUploadData } from '@/lib/actions/upload';

interface UploadClientProps {
  initialData: any;
}

interface UploadFileItem {
  id: string;
  file?: File;
  fileName: string;
  fileSize: string;
  status: 'uploading' | 'completed' | 'waiting';
  progress: number;
  displayTitle?: string;
  timeRemaining?: string;
}

export function UploadClient({ initialData }: UploadClientProps) {
  const { data = initialData } = useQuery({
    queryKey: ['upload-data'],
    queryFn: async () => {
      const response = await getUploadData();
      return response.success ? response.data : initialData;
    },
    initialData: initialData,
  });

  const [selectedTab, setSelectedTab] = useState<'video' | 'screenshots' | 'data'>('video');
  
  const [queue, setQueue] = useState<UploadFileItem[]>(
    data?.queue?.map((q: any) => ({ ...q, progress: q.progress || 0 })) || []
  );

  const handleFileSelect = (files: FileList) => {
    const newFiles: UploadFileItem[] = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substring(7),
      file,
      fileName: file.name,
      fileSize: (file.size / (1024 * 1024)).toFixed(2),
      status: 'waiting',
      progress: 0,
      timeRemaining: 'Calculating...',
    }));
    setQueue((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (id: string) => {
    setQueue((prev) => prev.filter((f) => f.id !== id));
  };

  const updateFile = (id: string, updates: Partial<UploadFileItem>) => {
    setQueue((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...updates } : f))
    );
  };

  const clearAll = () => {
    setQueue([]);
  };

  const startUploads = () => {
    queue.forEach((item) => {
      if (item.status === 'waiting' && item.file) {
        uploadFile(item);
      }
    });
  };

  const uploadFile = (item: UploadFileItem) => {
    updateFile(item.id, { status: 'uploading', progress: 0 });

    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', item.file!);

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        updateFile(item.id, { progress: percent });
      }
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        updateFile(item.id, { status: 'completed', progress: 100 });
      } else {
        updateFile(item.id, { status: 'waiting', progress: 0 });
        alert(`Failed to upload ${item.fileName}`);
      }
    });

    xhr.addEventListener('error', () => {
      updateFile(item.id, { status: 'waiting', progress: 0 });
      alert(`Error uploading ${item.fileName}`);
    });

    xhr.open('POST', '/api/upload');
    xhr.send(formData);
  };

  const waitingCount = queue.filter(q => q.status === 'waiting' && q.file).length;

  return (
    <div className="w-full max-w-[960px] mx-auto flex flex-col gap-8">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-tight">
            Upload Demo Assets
          </h1>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <FolderOpen className="w-5 h-5" />
            <p className="text-base font-normal">
              Adding assets to:{' '}
              <span className="font-semibold text-slate-900 dark:text-gray-200">
                Project Orion
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex h-10 px-4 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Cancel
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 px-4 items-center justify-center rounded-lg bg-[#2563eb] text-white font-bold text-sm shadow-sm hover:bg-[#1d4ed8] transition-colors gap-2"
          >
            <Save className="w-5 h-5" />
            Save & Exit
          </motion.button>
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Tabs */}
        <div className="p-6 pb-0">
          <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-md">
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="asset-type"
                value="video"
                checked={selectedTab === 'video'}
                onChange={() => setSelectedTab('video')}
                className="peer sr-only"
              />
              <div className="flex items-center justify-center h-9 px-4 rounded-md text-sm font-medium text-gray-500 dark:text-gray-400 peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:text-[#2563eb] peer-checked:shadow-sm transition-all gap-2">
                <Film className="w-4 h-4" />
                Video
              </div>
            </label>
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="asset-type"
                value="screenshots"
                checked={selectedTab === 'screenshots'}
                onChange={() => setSelectedTab('screenshots')}
                className="peer sr-only"
              />
              <div className="flex items-center justify-center h-9 px-4 rounded-md text-sm font-medium text-gray-500 dark:text-gray-400 peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:text-[#2563eb] peer-checked:shadow-sm transition-all gap-2">
                <ImageIcon className="w-4 h-4" />
                Screenshots
              </div>
            </label>
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="asset-type"
                value="data"
                checked={selectedTab === 'data'}
                onChange={() => setSelectedTab('data')}
                className="peer sr-only"
              />
              <div className="flex items-center justify-center h-9 px-4 rounded-md text-sm font-medium text-gray-500 dark:text-gray-400 peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:text-[#2563eb] peer-checked:shadow-sm transition-all gap-2">
                <Database className="w-4 h-4" />
                Data
              </div>
            </label>
          </div>
        </div>

        {/* Drag & Drop Area */}
        <div className="p-6">
          <UploadDropzone onFileSelect={handleFileSelect} />
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-100 dark:bg-gray-700"></div>

        {/* File Queue List */}
        <div className="p-6 pt-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-slate-900 dark:text-white font-bold text-base">
              Upload Queue{' '}
              <span className="text-gray-400 font-normal ml-1">({queue.length} files)</span>
            </h3>
            <button
              onClick={clearAll}
              className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" />
              Clear all
            </button>
          </div>

          {queue.map((file) => (
            <FileUploadItem
              key={file.id}
              {...file}
              onRemove={() => removeFile(file.id)}
              onPause={file.status === 'uploading' ? () => console.log('Pause', file.id) : undefined}
              onTitleChange={(title: string) => updateFile(file.id, { displayTitle: title })}
            />
          ))}
        </div>

        {/* Action Footer */}
        <div className="p-6 bg-gray-50 dark:bg-[#1a2230] border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3">
          <p className="mr-auto text-xs text-gray-500 dark:text-gray-400 self-center flex items-center gap-1">
            <Info className="w-4 h-4" />
            All files are scanned for viruses automatically.
          </p>
          <motion.button
            onClick={startUploads}
            disabled={waitingCount === 0}
            whileHover={{ scale: waitingCount > 0 ? 1.05 : 1 }}
            whileTap={{ scale: waitingCount > 0 ? 0.95 : 1 }}
            className="flex items-center justify-center h-10 px-6 rounded-lg bg-[#2563eb] text-white text-sm font-bold shadow hover:bg-[#1d4ed8] transition-colors gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Upload ({waitingCount})
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Bottom Helper */}
      <div className="flex justify-center text-sm text-gray-400 dark:text-gray-500">
        <a href="#" className="hover:text-[#2563eb] transition-colors">
          Need help? Contact IT Support
        </a>
      </div>
    </div>
  );
}
