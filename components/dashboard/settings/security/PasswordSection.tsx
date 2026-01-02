'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export function PasswordSection() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="bg-white dark:bg-[#1a1d2d] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800">
        <h2 className="text-[#111218] dark:text-white text-lg font-bold">Sign-in Method</h2>
        <p className="text-sm text-[#616889] dark:text-slate-400 mt-1">
          Update your password associated with your account.
        </p>
      </div>
      <div className="p-6 md:p-8">
        <form className="flex flex-col gap-6 max-w-xl" onSubmit={(e) => e.preventDefault()}>
          {/* Current Password */}
          <label className="flex flex-col gap-2">
            <p className="text-[#111218] dark:text-white text-sm font-medium">Current Password</p>
            <div className="relative flex w-full items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus-within:border-[#1337ec] focus-within:ring-1 focus-within:ring-[#1337ec] transition-all">
              <input
                className="w-full bg-transparent border-none py-3 pl-4 pr-10 text-base text-[#111218] dark:text-white placeholder:text-slate-400 focus:ring-0 rounded-lg outline-none"
                placeholder="Enter current password"
                type={showCurrent ? 'text' : 'password'}
              />
              <button
                className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
              >
                {showCurrent ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </label>
          {/* New Password */}
          <div className="flex flex-col md:flex-row gap-6">
            <label className="flex flex-col gap-2 flex-1">
              <p className="text-[#111218] dark:text-white text-sm font-medium">New Password</p>
              <div className="relative flex w-full items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus-within:border-[#1337ec] focus-within:ring-1 focus-within:ring-[#1337ec] transition-all">
                <input
                  className="w-full bg-transparent border-none py-3 pl-4 pr-10 text-base text-[#111218] dark:text-white placeholder:text-slate-400 focus:ring-0 rounded-lg outline-none"
                  placeholder="Min 12 chars"
                  type={showNew ? 'text' : 'password'}
                />
                <button
                  className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                >
                  {showNew ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </label>
            <label className="flex flex-col gap-2 flex-1">
              <p className="text-[#111218] dark:text-white text-sm font-medium">Confirm Password</p>
              <div className="relative flex w-full items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus-within:border-[#1337ec] focus-within:ring-1 focus-within:ring-[#1337ec] transition-all">
                <input
                  className="w-full bg-transparent border-none py-3 pl-4 pr-10 text-base text-[#111218] dark:text-white placeholder:text-slate-400 focus:ring-0 rounded-lg outline-none"
                  placeholder="Re-enter password"
                  type={showConfirm ? 'text' : 'password'}
                />
                <button
                  className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </label>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-1 flex-1 rounded-full bg-green-500"></div>
            <div className="h-1 flex-1 rounded-full bg-green-500"></div>
            <div className="h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <div className="h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <span className="ml-2 text-xs text-[#616889] dark:text-slate-400">Medium strength</span>
          </div>
          <div className="pt-2 flex justify-end">
            <button className="bg-[#1337ec] hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm text-sm">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
