'use client';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';


import { DashboardLayout } from '@/components/dashboard';
import { BrandAssets, ColorPalette, TypographySettings, LivePreview } from '@/components/dashboard/settings/brand';
import { ChevronRight, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCompanySettings, updateCompanySettings } from '@/lib/actions/settings';
import { useState, useEffect } from 'react';

export default function BrandSettingsPage() {
  const { data: session } = useSession();
  const user = {
    name: session?.user?.name || 'User',
    email: session?.user?.email || '',
    avatar: session?.user?.image || undefined,
  };

  const { data: initialSettings, isLoading } = useQuery({
    queryKey: ['company-settings'],
    queryFn: async () => {
      return await getCompanySettings();
    }
  });

  const [settings, setSettings] = useState<any>({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (initialSettings) setSettings(initialSettings);
  }, [initialSettings]);

  const handleSave = async () => {
    setIsSaving(true);
    const result = await updateCompanySettings(settings);
    setIsSaving(false);
    if (result.success) {
      alert("Brand settings saved successfully!");
    } else {
      alert("Failed to save " + result.error);
    }
  };

  const handleDiscard = () => {
    if (initialSettings) setSettings(initialSettings);
  };

  if (isLoading) return <DashboardLayout user={user}><div className="p-8">Loading...</div></DashboardLayout>;

  return (
    <DashboardLayout user={user}>
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto space-y-8 pb-20">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between items-end gap-4 p-4 md:p-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#111218] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Branding Settings</h1>
              <p className="text-[#616889] dark:text-[#94a3b8] text-base font-normal leading-normal max-w-2xl">
                Manage the visual identity for the GTSS internal platform, including logos, color palettes, and typography styles.
              </p>
            </div>
            <div className="flex gap-3">
              <button onClick={handleDiscard} className="px-4 h-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#232738] text-[#111218] dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#2a2e42] transition-colors">
                Discard
              </button>
              <button 
                onClick={handleSave} 
                className="px-4 h-10 rounded-lg bg-[#1337ec] text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20 disabled:opacity-50"
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 px-4 md:px-8">
            {/* Left Column: Settings Forms */}
            <div className="xl:col-span-2 space-y-8">
              <BrandAssets settings={settings} setSettings={setSettings} />
              <ColorPalette settings={settings} setSettings={setSettings} />
              <TypographySettings settings={settings} setSettings={setSettings} />
            </div>

            {/* Right Column: Live Preview Panel */}
            <div className="xl:col-span-1">
              <LivePreview settings={settings} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
