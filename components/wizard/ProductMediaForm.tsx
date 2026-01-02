'use client';

import { FileUpload } from './FileUpload';
import { Video, Image as ImageIcon, Link as LinkIcon, X, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface UploadedImage {
  url: string;
  publicId: string;
}

interface ProductMediaFormProps {
  data: any;
  onChange: (data: any) => void;
}

export function ProductMediaForm({ data, onChange }: ProductMediaFormProps) {
  const [isRemoving, setIsRemoving] = useState<number | null>(null);

  const handleImageUpload = (result: UploadedImage) => {
    const currentImages = data.images || [];
    if (currentImages.length >= 5) {
      alert('Maximum 5 images allowed');
      return;
    }
    onChange({ ...data, images: [...currentImages, result.url] });
  };

  const removeImage = (index: number) => {
    setIsRemoving(index);
    const newImages = [...(data.images || [])];
    newImages.splice(index, 1);
    onChange({ ...data, images: newImages });
    setTimeout(() => setIsRemoving(null), 300);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Demo Video Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
          <Video className="w-5 h-5 text-[#2563eb]" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Demo Video</h3>
        </div>
        
        <div className="grid gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900 dark:text-white">
              YouTube Video URL
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
                value={data.demoVideoUrl || ''}
                onChange={(e) => onChange({ ...data, demoVideoUrl: e.target.value })}
              />
            </div>
            <p className="text-xs text-gray-500">
              Paste the full URL of your product demo video from YouTube.
            </p>
          </div>

          {data.demoVideoUrl && (
            <div className="mt-4 rounded-xl overflow-hidden bg-black aspect-video relative">
              <iframe
                width="100%"
                height="100%"
                src={data.demoVideoUrl.replace('watch?v=', 'embed/')}
                title="Product Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          )}
        </div>
      </div>

      {/* Product Images Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-[#2563eb]" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Product Gallery</h3>
          </div>
          <span className="text-sm text-gray-500">
            {(data.images || []).length}/5 images
          </span>
        </div>
        
        <div className="space-y-4">
          {(data.images || []).length < 5 && (
            <FileUpload
              onUpload={handleImageUpload}
              acceptedTypes="image/png,image/jpeg,image/webp"
              maxSize={2}
            />
          )}
          <p className="text-xs text-gray-500">
            Upload high-quality screenshots or marketing images. Max 5 images, 2MB each.
          </p>
          
          {/* Image Preview Grid */}
          {data.images && data.images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
              {data.images.map((img: string, idx: number) => (
                <div 
                  key={idx} 
                  className={`relative aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 group transition-opacity ${
                    isRemoving === idx ? 'opacity-50' : ''
                  }`}
                >
                  <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                  <button
                    onClick={() => removeImage(idx)}
                    disabled={isRemoving !== null}
                    className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  >
                    {isRemoving === idx ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <X className="w-4 h-4" />
                    )}
                  </button>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 text-white text-xs rounded">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

