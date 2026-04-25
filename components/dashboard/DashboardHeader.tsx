'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Bell, HelpCircle, Menu, Terminal } from 'lucide-react';
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
      className="h-20 border-b border-[var(--border)] bg-[var(--black)]/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 sticky top-0 z-50"
    >
      <div className="flex items-center gap-6 flex-1">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 text-[var(--text-muted)] hover:text-[var(--gold)] hover:bg-white/5"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Search */}
        <div className="flex-1 max-w-xl hidden sm:block">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--gold-dim)] w-4 h-4 opacity-50 group-focus-within:opacity-100 transition-opacity" />
            <input
              className="w-full bg-[rgba(255,255,255,0.02)] border border-[var(--border)] rounded-none py-2.5 pl-12 pr-4 text-xs font-mono-dm tracking-widest text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:bg-[rgba(212,175,55,0.05)] transition-all uppercase"
              placeholder="QUERY_SYSTEM_DATABASE..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
              <span className="text-[10px] bg-[var(--border)] px-1.5 py-0.5 text-[var(--text-muted)]">CMD</span>
              <span className="text-[10px] bg-[var(--border)] px-1.5 py-0.5 text-[var(--text-muted)]">K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-6 mr-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono-dm text-[var(--gold-dim)] uppercase tracking-tighter">System_Clock</span>
            <span className="text-xs font-mono-dm text-[var(--text)]">{new Date().toLocaleTimeString()}</span>
          </div>
          <div className="w-px h-8 bg-[var(--border)]" />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:flex items-center gap-2 bg-[var(--gold)] text-[var(--black)] px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-white shadow-[0_0_20px_rgba(212,175,55,0.2)]"
        >
          <Plus className="w-4 h-4" />
          <span>New Initiative</span>
        </motion.button>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-2 text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors rounded-none hover:bg-white/5 border border-transparent hover:border-[var(--border)]"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[var(--gold)] rounded-full border-2 border-[var(--black)] animate-pulse"></span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors rounded-none hover:bg-white/5 border border-transparent hover:border-[var(--border)]"
          >
            <Terminal className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
