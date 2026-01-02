'use client';

import { UploadCloud, Globe, AlignLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export function CompanyProfileForm() {
  return (
    <section className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a2e22] shadow-sm">
      <div className="border-b border-gray-100 dark:border-gray-800 px-6 py-4">
        <h2 className="text-lg font-bold text-navy dark:text-white">Company Profile</h2>
      </div>
      <div className="p-6">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Logo Upload */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <label className="text-sm font-bold text-navy dark:text-white">Company Logo</label>
            <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30 p-8 text-center hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer group">
              <div className="size-16 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-8 h-8 text-text-subtle group-hover:text-accent transition-colors" />
              </div>
              <p className="text-xs font-bold text-navy dark:text-white">Click to upload</p>
              <p className="text-[10px] text-text-subtle mt-1">SVG, PNG, JPG (max. 2MB)</p>
            </div>
          </div>
          
          {/* Basic Info */}
          <div className="md:col-span-8 grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-navy dark:text-white">Company Name</label>
                <input 
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2.5 text-sm text-navy dark:text-white placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-800/50 transition-all" 
                  type="text" 
                  defaultValue="Great Thumbs Software Solutions"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-navy dark:text-white">Website</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-2.5 w-4.5 h-4.5 text-text-subtle" />
                  <input 
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700 pl-10 pr-4 py-2.5 text-sm text-navy dark:text-white placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-800/50 transition-all" 
                    type="url" 
                    defaultValue="https://gtss.com"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-navy dark:text-white">Description</label>
                <span className="text-[10px] font-medium text-text-subtle">0/240 characters</span>
              </div>
              <div className="relative">
                <AlignLeft className="absolute left-3 top-3 w-4.5 h-4.5 text-text-subtle" />
                <textarea 
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-700 pl-10 pr-4 py-2.5 text-sm text-navy dark:text-white placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-800/50 transition-all resize-none" 
                  rows={3}
                  placeholder="Tell us about your company..."
                  defaultValue="Innovative software solutions for modern enterprises."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
