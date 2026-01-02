'use client';

import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export function DemoVideo() {
  return (
    <section className="w-full max-w-[960px] px-4 md:px-0 pb-12 flex flex-col items-center mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full relative group cursor-pointer"
      >
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-[#111218]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-60 transition-opacity duration-300"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex shrink-0 items-center justify-center rounded-full size-20 bg-[#1337ec]/90 text-white shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
              <Play className="w-10 h-10 fill-current" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 text-white text-left">
            <p className="font-bold text-lg">Product Walkthrough</p>
            <p className="text-sm opacity-80">2:45 • Key Features Overview</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
