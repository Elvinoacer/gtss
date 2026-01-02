'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Database } from 'lucide-react';
import Link from 'next/link';

export function MinimalHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 w-full flex items-center justify-between px-8 py-6 z-10 max-w-7xl mx-auto left-0 right-0"
    >
      <Link href="/" className="flex items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <img
            src="/images/GTSS-logo.png"
            alt="GTSS Logo"
            className="h-8 w-auto object-contain"
          />
        </motion.div>
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#2563eb] dark:hover:text-[#2563eb] transition-colors flex items-center gap-1"
      >
        Help
        <HelpCircle className="w-4 h-4" />
      </Link>
    </motion.header>
  );
}
