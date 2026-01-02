'use client';

import { motion } from 'framer-motion';
import { topPerformers } from '@/data/sales';

export function TopPerformers() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="lg:col-span-1 bg-white dark:bg-[#1a2e22] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col h-[400px]"
    >
      <h3 className="text-lg font-bold text-[#111814] dark:text-white mb-6">Top Performers</h3>
      <div className="flex-1 flex flex-col gap-5 overflow-y-auto no-scrollbar pr-2">
        {topPerformers.map((rep, index) => (
          <div key={rep.name} className="flex items-center gap-3">
            <div
              className="size-10 rounded-full bg-cover bg-center border-2 border-accent/20"
              style={{ backgroundImage: `url(${rep.avatar})` }}
            ></div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-[#111814] dark:text-white">{rep.name}</span>
                <span className={`text-sm font-bold ${rep.isTop ? 'text-accent' : 'text-[#111814] dark:text-gray-300'}`}>
                  {rep.amount}
                </span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${rep.progress}%` }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  className={`h-2 rounded-full ${rep.isTop ? 'bg-accent' : 'bg-accent/70'}`}
                ></motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4 mt-auto border-t border-gray-100 dark:border-gray-800 text-center">
        <a className="text-sm font-medium text-accent hover:text-accent-hover transition-colors" href="#">
          View Full Leaderboard
        </a>
      </div>
    </motion.div>
  );
}
