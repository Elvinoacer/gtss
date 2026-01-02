'use client';

import { AlertTriangle } from 'lucide-react';

export function DangerZone() {
  return (
    <section className="rounded-xl border border-error/20 bg-error/5 dark:bg-error/10 shadow-sm mt-4 mb-10 overflow-hidden">
      <div className="border-b border-error/20 px-6 py-4 bg-error/5">
        <h2 className="text-lg font-bold text-error flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          Danger Zone
        </h2>
      </div>
      <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-navy dark:text-white">Deactivate Organization</span>
          <span className="text-xs text-text-subtle mt-1">This will temporarily disable all accounts and access. This action can be undone by a founder.</span>
        </div>
        <button className="rounded-lg bg-white dark:bg-gray-800 border border-error/30 px-6 py-2.5 text-sm font-bold text-error hover:bg-error hover:text-white transition-all shadow-sm active:scale-95">
          Deactivate
        </button>
      </div>
    </section>
  );
}
