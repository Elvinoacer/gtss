"use client";

import { Sparkles } from "lucide-react";

export function ProductHeader() {
  return (
    <header className="relative w-full py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <Sparkles className="w-4 h-4 text-[#00C2FF]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C2FF]">
              Product Ecosystem
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Practical Solutions for{' '}
            <span className="gradient-text-static">Real Problems</span>
          </h1>
          
          <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed max-w-xl">
            High-performance software designed to scale your business across Africa.
          </p>
        </div>
      </div>
    </header>
  );
}
