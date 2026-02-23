"use client";

import { Sparkles, Hexagon } from "lucide-react";
import { motion } from "framer-motion";

export function ProductHeader() {
  return (
    <header className="relative w-full py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:items-center text-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-3xl flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Hexagon className="w-4 h-4 text-blue-400 animate-[spin_10s_linear_infinite]" />
            <span className="text-xs font-black uppercase tracking-widest text-blue-400">
              Product Ecosystem
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
            Practical Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 animate-gradient-x drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
              Real Problems
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            High-performance, beautifully designed software engineered to scale your business operations into the future.
          </p>
        </motion.div>
      </div>
    </header>
  );
}
