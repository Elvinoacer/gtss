'use client';

import { DashboardLayout } from '@/components/dashboard';
import { BrandAssets, ColorPalette, TypographySettings, LivePreview } from '@/components/dashboard/settings/brand';
import { ChevronRight, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BrandSettingsPage() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    avatar: 'JD',
  };

  return (
    <DashboardLayout user={user}>
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto space-y-8 pb-20">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#111218] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Branding Settings</h1>
              <p className="text-[#616889] dark:text-[#94a3b8] text-base font-normal leading-normal max-w-2xl">
                Manage the visual identity for the GTSS internal platform, including logos, color palettes, and typography styles.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 h-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#232738] text-[#111218] dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#2a2e42] transition-colors">
                Discard
              </button>
              <button className="px-4 h-10 rounded-lg bg-[#1337ec] text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20">
                Save Changes
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column: Settings Forms */}
            <div className="xl:col-span-2 space-y-8">
              <BrandAssets />
              <ColorPalette />
              <TypographySettings />
            </div>

            {/* Right Column: Live Preview Panel */}
            <div className="xl:col-span-1">
              <LivePreview />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
