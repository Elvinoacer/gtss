'use client';

import { Mail, MapPin, Building2, Hash } from 'lucide-react';

export function ContactLegalForm() {
  return (
    <section className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a2e22] shadow-sm">
      <div className="border-b border-gray-100 dark:border-gray-800 px-6 py-4">
        <h2 className="text-lg font-bold text-navy dark:text-white">Contact & Legal Information</h2>
      </div>
      <div className="p-6 grid gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-navy dark:text-white">Legal Name</label>
            <div className="relative">
              <Building2 className="absolute left-3 top-2.5 w-4.5 h-4.5 text-text-subtle" />
              <input 
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 pl-10 pr-4 py-2.5 text-sm text-navy dark:text-white placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-800/50 transition-all" 
                type="text" 
                defaultValue="Great Thumbs SS, Inc."
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-navy dark:text-white">Tax ID / EIN</label>
            <div className="relative">
              <Hash className="absolute left-3 top-2.5 w-4.5 h-4.5 text-text-subtle" />
              <input 
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 pl-10 pr-4 py-2.5 text-sm text-navy dark:text-white placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-800/50 transition-all" 
                placeholder="XX-XXXXXXX" 
                type="text"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-navy dark:text-white">Support Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 w-4.5 h-4.5 text-text-subtle" />
              <input 
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 pl-10 pr-4 py-2.5 text-sm text-navy dark:text-white placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-800/50 transition-all" 
                type="email" 
                defaultValue="support@gtss.com"
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold text-navy dark:text-white flex items-center gap-2">
            <MapPin className="w-4 h-4 text-text-subtle" />
            Registered Address
          </label>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-6">
              <input 
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2.5 text-sm text-navy dark:text-white placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-800/50 transition-all" 
                placeholder="Street Address" 
                type="text"
              />
            </div>
            <div className="md:col-span-2">
              <input 
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2.5 text-sm text-navy dark:text-white placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-800/50 transition-all" 
                placeholder="City" 
                type="text"
              />
            </div>
            <div className="md:col-span-2">
              <input 
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2.5 text-sm text-navy dark:text-white placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-800/50 transition-all" 
                placeholder="State / Province" 
                type="text"
              />
            </div>
            <div className="md:col-span-2">
              <input 
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2.5 text-sm text-navy dark:text-white placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-800/50 transition-all" 
                placeholder="Postal Code" 
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
