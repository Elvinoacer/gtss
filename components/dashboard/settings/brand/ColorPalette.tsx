'use client';

import { brandColors } from '@/data/settings';
import { Pipette } from 'lucide-react';

export function ColorPalette() {

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-[#111218] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] border-b border-gray-100 dark:border-[#2e3245] pb-2">
        Color Palette
      </h2>
      <div className="bg-white dark:bg-[#1a1d2d] rounded-xl shadow-sm border border-gray-100 dark:border-[#2e3245] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {brandColors.map((color) => (
            <div key={color.label} className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#111218] dark:text-white">{color.label}</label>
              <p className="text-xs text-[#616889] dark:text-[#94a3b8] mb-1">{color.description}</p>
              <div className="flex items-center gap-3">
                <div 
                  className="size-10 rounded-lg shadow-inner ring-1 ring-black/5 border border-gray-200" 
                  style={{ backgroundColor: color.value }}
                ></div>
                <div className="relative flex-1">
                  <input 
                    className="w-full h-10 pl-3 pr-10 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#232738] text-[#111218] dark:text-white text-sm focus:ring-2 focus:ring-[#1337ec] focus:border-transparent font-mono uppercase outline-none" 
                    type="text" 
                    defaultValue={color.value}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#616889]">
                    <Pipette className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
