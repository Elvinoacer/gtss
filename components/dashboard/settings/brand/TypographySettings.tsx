'use client';

import { typographyFonts } from '@/data/settings';

export function TypographySettings({ settings, setSettings }: { settings?: any, setSettings?: any }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-[#111218] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] border-b border-gray-100 dark:border-[#2e3245] pb-2">
        Typography
      </h2>
      <div className="bg-white dark:bg-[#1a1d2d] rounded-xl shadow-sm border border-gray-100 dark:border-[#2e3245] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#111218] dark:text-white">Heading Font</label>
            <select 
              className="w-full h-10 pl-3 pr-8 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#232738] text-[#111218] dark:text-white text-sm focus:ring-2 focus:ring-[#1337ec] focus:border-transparent outline-none"
              value={settings?.headingFont || 'Inter'}
              onChange={(e) => setSettings?.({ ...settings, headingFont: e.target.value })}
            >
              {typographyFonts.headings.map((font) => (
                <option key={font} value={font}>{font} {font === 'Inter' ? '(Default)' : ''}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#111218] dark:text-white">Body Font</label>
            <select 
              className="w-full h-10 pl-3 pr-8 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#232738] text-[#111218] dark:text-white text-sm focus:ring-2 focus:ring-[#1337ec] focus:border-transparent outline-none"
              value={settings?.bodyFont || 'Inter'}
              onChange={(e) => setSettings?.({ ...settings, bodyFont: e.target.value })}
            >
              {typographyFonts.body.map((font) => (
                <option key={font} value={font}>{font} {font === 'Inter' ? '(Default)' : ''}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <div className="flex justify-between">
              <label className="text-sm font-semibold text-[#111218] dark:text-white">Base Font Size</label>
              <span className="text-sm text-[#616889] dark:text-[#94a3b8]">{settings?.baseFontSize || 16}px</span>
            </div>
            <input 
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#1337ec]" 
              max="20" 
              min="12" 
              type="range" 
              value={settings?.baseFontSize || 16}
              onChange={(e) => setSettings?.({ ...settings, baseFontSize: parseInt(e.target.value) })}
            />
            <div className="flex justify-between text-xs text-[#616889] mt-1">
              <span>Compact (12px)</span>
              <span>Standard (16px)</span>
              <span>Large (20px)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
