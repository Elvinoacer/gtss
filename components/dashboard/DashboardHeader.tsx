'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Bell, HelpCircle, Menu } from 'lucide-react';
import { useState } from 'react';

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#14171e]/80 backdrop-blur-md flex items-center justify-between px-4 md:px-6 sticky top-0 z-10"
    >
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Search */}
        <div className="flex-1 max-w-lg">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              className="w-full bg-gray-100 dark:bg-[#1e293b] border-none rounded-lg py-2 pl-10 pr-4 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0bda62]/50 transition-all"
              placeholder="Search projects, teams, or metrics..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 md:gap-4 ml-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 bg-[#0f172a] hover:bg-[#0f172a]/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#0f172a]/20"
        >
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </motion.button>

        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1 hidden md:block"></div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-[#1e293b]"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f59e0b] rounded-full border-2 border-white dark:border-[#14171e]"></span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:block p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-[#1e293b]"
        >
          <HelpCircle className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.header>
  );
}
