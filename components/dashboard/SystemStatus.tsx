'use client';

import { systemServices, type SystemService } from '@/data/dashboard';
import { motion } from 'framer-motion';

export function SystemStatus() {
  const getStatusColor = (status: SystemService['status']) => {
    switch (status) {
      case 'operational':
        return {
          dot: 'bg-[#0bda62] shadow-[0_0_8px_rgba(11,218,98,0.6)]',
          text: 'text-[#0bda62]',
        };
      case 'warning':
        return {
          dot: 'bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.6)] animate-pulse',
          text: 'text-[#f59e0b]',
        };
      case 'error':
        return {
          dot: 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse',
          text: 'text-red-500',
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white dark:bg-[#1e293b] rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm p-6"
    >
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        System Status
      </h2>

      <div className="flex flex-col gap-4">
        {systemServices.map((service, index) => {
          const colors = getStatusColor(service.status);

          return (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-[#14171e]/50 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${colors.dot}`}></div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {service.name}
                </span>
              </div>
              <span className={`text-xs font-semibold ${colors.text}`}>
                {service.statusLabel}
              </span>
            </motion.div>
          );
        })}

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-2 py-2 text-sm text-[#0bda62] hover:text-[#0bda62]/80 font-medium transition-colors border border-dashed border-[#0bda62]/30 rounded-lg hover:bg-[#0bda62]/5"
        >
          View System Logs
        </motion.button>
      </div>
    </motion.div>
  );
}
