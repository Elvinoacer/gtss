'use client';

import { Smartphone } from 'lucide-react';

export function TwoFactorSection({ settings, setSettings }: { settings?: any, setSettings?: any }) {
  return (
    <div className="bg-white dark:bg-[#1a1d2d] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <div>
          <h2 className="text-[#111218] dark:text-white text-lg font-bold">Two-Step Verification</h2>
          <p className="text-sm text-[#616889] dark:text-slate-400 mt-1">
            Add an extra layer of security to your account.
          </p>
        </div>
        {settings?.twoFactorEnabled ? (
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
            Active
          </span>
        ) : (
          <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
            Inactive
          </span>
        )}
      </div>
      <div className="p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex gap-4 max-w-2xl">
          <div className="size-12 rounded-full bg-[#1337ec]/10 flex items-center justify-center shrink-0 text-[#1337ec]">
            <Smartphone className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#111218] dark:text-white font-semibold text-base">Authenticator App</h3>
            <p className="text-[#616889] dark:text-slate-400 text-sm leading-relaxed">
              Use an authenticator app like Google Authenticator or Authy to generate one-time verification codes when you log in.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <label className="flex items-center cursor-pointer relative" htmlFor="toggle-2fa">
            <input 
              className="sr-only peer" 
              id="toggle-2fa" 
              type="checkbox" 
              checked={!!settings?.twoFactorEnabled}
              onChange={(e) => setSettings?.({ ...settings, twoFactorEnabled: e.target.checked })}
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#1337ec]/50 dark:peer-focus:ring-[#1337ec]/40 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1337ec]"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
