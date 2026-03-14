'use client';

import { brandColors } from '@/data/settings';
import { Pipette } from 'lucide-react';

export function ColorPalette({ settings, setSettings }: { settings?: any, setSettings?: any }) {
  const handleColorChange = (key: string, value: string) => {
    setSettings?.({ ...settings, [key]: value });
  };

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-[#111218] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] border-b border-gray-100 dark:border-[#2e3245] pb-2">
        Color Palette
      </h2>
      <div className="bg-white dark:bg-[#1a1d2d] rounded-xl shadow-sm border border-gray-100 dark:border-[#2e3245] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#111218] dark:text-white">Primary Brand Color</label>
            <p className="text-xs text-[#616889] dark:text-[#94a3b8] mb-1">Used for main actions and highlights</p>
            <div className="flex items-center gap-3">
              <div 
                className="size-10 rounded-lg shadow-inner ring-1 ring-black/5 border border-gray-200" 
                style={{ backgroundColor: settings?.primaryColor || '#1337ec' }}
              ></div>
              <div className="relative flex-1">
                <input 
                  className="w-full h-10 pl-3 pr-10 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#232738] text-[#111218] dark:text-white text-sm focus:ring-2 focus:ring-[#1337ec] focus:border-transparent font-mono uppercase outline-none" 
                  type="text" 
                  value={settings?.primaryColor || '#1337ec'}
                  onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#616889]">
                  <Pipette className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#111218] dark:text-white">Secondary Brand Color</label>
            <p className="text-xs text-[#616889] dark:text-[#94a3b8] mb-1">Used for secondary elements</p>
            <div className="flex items-center gap-3">
              <div 
                className="size-10 rounded-lg shadow-inner ring-1 ring-black/5 border border-gray-200" 
                style={{ backgroundColor: settings?.secondaryColor || '#111218' }}
              ></div>
              <div className="relative flex-1">
                <input 
                  className="w-full h-10 pl-3 pr-10 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#232738] text-[#111218] dark:text-white text-sm focus:ring-2 focus:ring-[#1337ec] focus:border-transparent font-mono uppercase outline-none" 
                  type="text" 
                  value={settings?.secondaryColor || '#111218'}
                  onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#616889]">
                  <Pipette className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#111218] dark:text-white">Accent Color</label>
            <p className="text-xs text-[#616889] dark:text-[#94a3b8] mb-1">Used for small highlights</p>
            <div className="flex items-center gap-3">
              <div 
                className="size-10 rounded-lg shadow-inner ring-1 ring-black/5 border border-gray-200" 
                style={{ backgroundColor: settings?.accentColor || '#2563eb' }}
              ></div>
              <div className="relative flex-1">
                <input 
                  className="w-full h-10 pl-3 pr-10 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#232738] text-[#111218] dark:text-white text-sm focus:ring-2 focus:ring-[#1337ec] focus:border-transparent font-mono uppercase outline-none" 
                  type="text" 
                  value={settings?.accentColor || '#2563eb'}
                  onChange={(e) => handleColorChange('accentColor', e.target.value)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#616889]">
                  <Pipette className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
