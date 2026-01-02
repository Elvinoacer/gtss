'use client';

import { CloudUpload, Loader2, X, CheckCircle } from 'lucide-react';
import { useState, ChangeEvent, DragEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UploadedImage {
  url: string;
  publicId: string;
}

interface FileUploadProps {
  onFileChange?: (file: File | null) => void;
  onUpload?: (result: UploadedImage) => void;
  acceptedTypes?: string;
  maxSize?: number; // in MB
  uploadEndpoint?: string;
  showPreview?: boolean;
}

export function FileUpload({
  onFileChange,
  onUpload,
  acceptedTypes = 'image/png,image/jpeg,image/webp',
  maxSize = 2,
  uploadEndpoint = '/api/upload',
  showPreview = true,
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFile = async (file: File) => {
    setUploadError(null);
    setUploadSuccess(false);

    if (file.size > maxSize * 1024 * 1024) {
      setUploadError(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Create preview for images
    if (file.type.startsWith('image/') && showPreview) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }

    // If onUpload is provided, upload to the endpoint
    if (onUpload) {
      setIsUploading(true);
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(uploadEndpoint, {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Upload failed');
        }

        setUploadSuccess(true);
        onUpload({ url: result.url, publicId: result.publicId });
        
        // Auto-clear preview after 1.5 seconds to allow adding more images
        setTimeout(() => {
          setPreview(null);
          setUploadSuccess(false);
        }, 1500);
      } catch (error: any) {
        setUploadError(error.message || 'Failed to upload image');
        setPreview(null);
      } finally {
        setIsUploading(false);
      }
    } else if (onFileChange) {
      onFileChange(file);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const clearPreview = () => {
    setPreview(null);
    setUploadSuccess(false);
    setUploadError(null);
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`mt-1 flex justify-center rounded-lg border-2 border-dashed px-6 py-10 transition-colors cursor-pointer group relative ${
        isDragging
          ? 'border-[#2563eb] bg-blue-50 dark:bg-blue-900/20'
          : uploadError
          ? 'border-red-300 bg-red-50 dark:bg-red-900/10'
          : uploadSuccess
          ? 'border-green-300 bg-green-50 dark:bg-green-900/10'
          : 'border-gray-300 dark:border-gray-600 hover:border-[#2563eb]/50 dark:hover:border-[#2563eb]/50 hover:bg-gray-50 dark:hover:bg-gray-800/50'
      }`}
    >
      {isUploading && (
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center rounded-lg z-10">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-8 h-8 text-[#2563eb] animate-spin" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Uploading...</p>
          </div>
        </div>
      )}

      <div className="text-center">
        <AnimatePresence mode="wait">
          {preview ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mb-4 relative inline-block"
            >
              <img
                src={preview}
                alt="Preview"
                className="mx-auto h-24 w-24 object-cover rounded-lg"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  clearPreview();
                }}
                className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
              {uploadSuccess && (
                <div className="absolute -bottom-1 -right-1 p-1 bg-green-500 text-white rounded-full">
                  <CheckCircle className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mx-auto h-12 w-12 text-gray-300 group-hover:text-[#2563eb] transition-colors"
            >
              <CloudUpload className="w-12 h-12" />
            </motion.div>
          )}
        </AnimatePresence>

        {uploadError && (
          <p className="text-sm text-red-500 mb-2">{uploadError}</p>
        )}

        <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400 justify-center">
          <label className="relative cursor-pointer rounded-md font-semibold text-[#2563eb] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#2563eb] focus-within:ring-offset-2 hover:text-[#1d4ed8]">
            <span>{preview ? 'Change file' : 'Upload a file'}</span>
            <input
              className="sr-only"
              type="file"
              accept={acceptedTypes}
              onChange={handleChange}
              disabled={isUploading}
            />
          </label>
          {!preview && <p className="pl-1">or drag and drop</p>}
        </div>
        <p className="text-xs leading-5 text-gray-500 dark:text-gray-500">
          PNG, JPG, WebP up to {maxSize}MB
        </p>
      </div>
    </div>
  );
}

