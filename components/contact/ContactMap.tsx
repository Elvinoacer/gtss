'use client';

import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactMap() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full h-[300px] rounded-2xl overflow-hidden shadow-sm relative group cursor-pointer border border-gray-100 dark:border-gray-800"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&auto=format&fit=crop')" }}
      ></div>
      {/* Map Pin Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
        <div className="relative">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#1337ec] opacity-75 animate-ping"></span>
          <div className="relative bg-[#1337ec] text-white p-2 rounded-full shadow-lg border-2 border-white">
            <Building2 className="w-5 h-5" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 px-3 py-1 rounded-full shadow-lg text-xs font-bold text-gray-800 dark:text-white whitespace-nowrap">
          Eldoret, Kenya
        </div>
      </div>
    </motion.div>
  );
}
