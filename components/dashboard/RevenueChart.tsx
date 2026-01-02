'use client';

import { revenueChartData } from '@/data/dashboard';
import { motion } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="lg:col-span-2 bg-white dark:bg-[#1e293b] rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm p-6 flex flex-col"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Revenue Growth
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-400">
            Monthly Recurring Revenue (MRR) over last 6 months
          </p>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-gray-700 rounded">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 min-h-[250px] w-full relative">
        {/* SVG Chart */}
        <svg
          className="w-full h-full"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0bda62" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0bda62" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <line
            x1="0"
            y1="250"
            x2="800"
            y2="250"
            stroke="#374151"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="0"
            y1="150"
            x2="800"
            y2="150"
            stroke="#374151"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="0"
            y1="50"
            x2="800"
            y2="50"
            stroke="#374151"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {/* Chart Area */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            d="M0,200 Q100,180 200,140 T400,160 T600,100 T800,50 L800,300 L0,300 Z"
            fill="url(#gradient)"
          />

          {/* Chart Line */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            d="M0,200 Q100,180 200,140 T400,160 T600,100 T800,50"
            fill="none"
            stroke="#0bda62"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points */}
          {revenueChartData.points.map((point, i) => (
            <motion.circle
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              cx={point.cx}
              cy={point.cy}
              r="4"
              fill="#0bda62"
              className="dark:stroke-[#1e293b] stroke-white"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>

      <div className="flex justify-between mt-4 px-2 text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
        {revenueChartData.labels.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </motion.div>
  );
}
