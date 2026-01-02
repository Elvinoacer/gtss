'use client';

import { motion } from 'framer-motion';
import { performanceData } from '@/data/sales';

export function PerformanceChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="lg:col-span-2 bg-white dark:bg-[#1a2e22] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col h-[400px]"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-[#111814] dark:text-white">Revenue vs. Target</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Actual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Target</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-end justify-between gap-2 sm:gap-4 pb-4 border-b border-gray-100 dark:border-gray-800">
        {performanceData.map((item, index) => (
          <div key={item.month} className="flex flex-col items-center gap-2 w-full group cursor-pointer">
            <div className="relative w-full max-w-[40px] h-[240px] bg-gray-100 dark:bg-gray-800 rounded-t-sm overflow-hidden flex items-end">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${item.actual}%` }}
                transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                className={`w-full bg-accent/80 group-hover:bg-accent transition-all ${
                  item.highlight ? 'shadow-[0_0_15px_rgba(37,99,235,0.3)]' : ''
                }`}
              ></motion.div>
            </div>
            <span className={`text-xs font-medium ${item.highlight ? 'text-gray-900 dark:text-white font-bold' : 'text-gray-500'}`}>
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
