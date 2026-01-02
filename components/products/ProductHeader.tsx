"use client";

import { Sparkles } from "lucide-react";

export function ProductHeader() {
  return (
    <header className="relative w-full py-4 md:py-6 px-4 md:px-6 border-b border-slate-200/60 dark:border-slate-800/50 bg-white dark:bg-[#020617]">
      {/* Subtly animated background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/60">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
              Product Ecosystem
            </span>
          </div>
          
          <h1 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Practical Solutions for <span className="text-blue-600">Real Problems</span>
          </h1>
          
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            High-performance software designed to scale your business.
          </p>
        </div>
      </div>
    </header>
  );
}

