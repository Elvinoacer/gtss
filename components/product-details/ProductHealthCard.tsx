'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HealthMetric {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

interface ProductHealthCardProps {
  metrics: HealthMetric[];
}

export function ProductHealthCard({ metrics }: ProductHealthCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
    >
      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
        Product Health
      </h3>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={metric.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500">{metric.label}</span>
              <span className={`font-medium ${metric.color}`}>
                {metric.value}
              </span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metric.percentage}%` }}
                transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                className={`h-1.5 rounded-full ${metric.color.replace('text-', 'bg-')}`}
                style={{ width: `${metric.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
        <motion.button
          whileHover={{ x: 4 }}
          className="w-full py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#2563eb] transition-colors flex items-center justify-center gap-2"
        >
          View Full Report
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
