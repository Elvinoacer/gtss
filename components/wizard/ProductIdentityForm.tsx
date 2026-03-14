import { MarkdownEditor } from '@/components/ui/MarkdownEditor';
import { AlertCircle } from 'lucide-react';
import { TagInput } from './TagInput';
import Image from 'next/image';
import { FileUpload } from './FileUpload';
import { ChevronDown } from 'lucide-react';

interface ProductIdentityFormProps {
  data: any;
  onChange: (data: any) => void;
  errors?: Record<string, string>;
}

export function ProductIdentityForm({ data, onChange, errors }: ProductIdentityFormProps) {
  const updateField = (field: string, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900 dark:text-white">
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all ${
              errors?.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
            }`}
            placeholder="e.g. Hotel Management System"
            value={data.name || ''}
            onChange={(e) => updateField('name', e.target.value)}
          />
          {errors?.name && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900 dark:text-white">
            Category <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all appearance-none ${
                errors?.category ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
              }`}
              value={data.category || ''}
              onChange={(e) => updateField('category', e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="SaaS">SaaS</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Platform">Platform</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
          </div>
          {errors?.category && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.category}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900 dark:text-white">
            Marketing Tagline
          </label>
          <input
            type="text"
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
            placeholder="e.g. Transform your hotel operations with our cutting-edge solution"
            value={data.tagline || ''}
            onChange={(e) => updateField('tagline', e.target.value)}
          />
          <p className="text-xs text-gray-500">A short, compelling phrase that appears on the product page as a quote.</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900 dark:text-white">
            Website URL
          </label>
          <input
            type="url"
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
            placeholder="https://example.com"
            value={data.websiteUrl || ''}
            onChange={(e) => updateField('websiteUrl', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <MarkdownEditor
            label="Short Description"
            value={data.description || ''}
            onChange={(value) => updateField('description', value)}
            placeholder="Briefly describe what this product does..."
            minHeight="min-h-[150px]"
          />
          {errors?.description && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.description}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Search Tags
          </label>
          <TagInput
            tags={data.tags}
            onTagsChange={(tags) => updateField('tags', tags)}
          />
        </div>

        {/* Logo Upload */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Product Logo
          </label>
          <FileUpload 
            onUpload={(result) => updateField('logoUrl', result.url)} 
            showPreview={true}
          />
          {data.logoUrl && (
            <div className="mt-2 relative size-20 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image src={data.logoUrl} alt="Logo Preview" fill className="object-cover" sizes="80px" />
              <button
                onClick={() => updateField('logoUrl', '')}
                className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <AlertCircle className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
