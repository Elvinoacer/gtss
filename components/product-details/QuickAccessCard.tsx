'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface QuickAccessCardProps {
  qrCodeUrl?: string;
  productionUrl: string;
  stagingUrl: string;
}

export function QuickAccessCard({
  qrCodeUrl,
  productionUrl,
  stagingUrl,
}: QuickAccessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
    >
      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
        Quick Access
      </h3>
      <div className="flex flex-col gap-4">
        {qrCodeUrl && (
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded-lg mb-3 shadow-sm">
              <img
                src={qrCodeUrl}
                alt="QR Code"
                className="size-32 object-contain"
              />
            </div>
            <p className="text-xs font-medium text-slate-900 dark:text-white mb-1">
              Mobile Companion App
            </p>
            <p className="text-[10px] text-gray-500">Scan to test on device</p>
          </div>
        )}

        <div className="space-y-3 pt-2 border-t border-gray-200 dark:border-gray-700">
          <div>
            <p className="text-xs text-gray-500 mb-1">Production URL</p>
            <a
              href={productionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm font-medium text-[#2563eb] hover:text-[#1d4ed8] bg-blue-50 dark:bg-blue-900/20 px-3 py-2 rounded-lg transition-colors"
            >
              {productionUrl}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Staging URL</p>
            <a
              href={stagingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg transition-colors"
            >
              {stagingUrl}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
