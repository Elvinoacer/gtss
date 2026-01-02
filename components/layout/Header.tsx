'use client';

import { motion } from 'framer-motion';
import { Menu, HelpCircle, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-6 py-4 lg:px-10 bg-white dark:bg-[#0f172a]"
    >
      <Link href="/" className="flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <img
            src="/images/GTSS-logo.png"
            alt="GTSS Logo"
            className="h-10 w-auto object-contain"
          />
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-9">
        <Link
          href="#"
          className="group text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-[#2563eb] dark:hover:text-white flex items-center gap-2"
        >
          <HelpCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
          Help
        </Link>
        <Link
          href="#"
          className="group text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-[#2563eb] dark:hover:text-white flex items-center gap-2"
        >
          <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
          Contact IT
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-slate-500 dark:text-white p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 right-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-4 md:hidden z-50"
        >
          <Link
            href="#"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-[#2563eb] py-2"
          >
            <HelpCircle className="w-4 h-4" />
            Help
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-[#2563eb] py-2"
          >
            <Mail className="w-4 h-4" />
            Contact IT
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
