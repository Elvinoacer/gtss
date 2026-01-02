'use client';

import { ChevronDown, DollarSign, Clock, Languages } from 'lucide-react';

export function OperationalPreferences() {
  return (
    <section className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a2e22] shadow-sm h-full">
      <div className="border-b border-gray-100 dark:border-gray-800 px-6 py-4">
        <h2 className="text-lg font-bold text-navy dark:text-white">Operational Preferences</h2>
      </div>
      <div className="p-6 grid gap-6">
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-navy dark:text-white">Default Currency</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-2.5 w-4.5 h-4.5 text-text-subtle" />
            <select className="w-full appearance-none rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 pl-10 pr-10 py-2.5 text-sm text-navy dark:text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all cursor-pointer">
              <option>USD - US Dollar</option>
              <option>EUR - Euro</option>
              <option>GBP - British Pound</option>
              <option>KES - Kenyan Shilling</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-text-subtle pointer-events-none" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-bold text-navy dark:text-white">Time Zone</label>
          <div className="relative">
            <Clock className="absolute left-3 top-2.5 w-4.5 h-4.5 text-text-subtle" />
            <select className="w-full appearance-none rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 pl-10 pr-10 py-2.5 text-sm text-navy dark:text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all cursor-pointer">
              <option>(GMT+03:00) Nairobi, Kenya</option>
              <option>(GMT-08:00) Pacific Time (US & Canada)</option>
              <option>(GMT-05:00) Eastern Time (US & Canada)</option>
              <option>(GMT+00:00) London</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-text-subtle pointer-events-none" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-bold text-navy dark:text-white">Language</label>
          <div className="relative">
            <Languages className="absolute left-3 top-2.5 w-4.5 h-4.5 text-text-subtle" />
            <select className="w-full appearance-none rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 pl-10 pr-10 py-2.5 text-sm text-navy dark:text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all cursor-pointer">
              <option>English (US)</option>
              <option>French</option>
              <option>Spanish</option>
              <option>German</option>
              <option>Swahili</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-text-subtle pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
