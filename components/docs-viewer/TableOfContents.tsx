'use client';

import { motion } from 'framer-motion';
import { List, Edit } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  href: string;
  isActive?: boolean;
}

const tocItems: TocItem[] = [
  { id: '1', title: 'Overview', href: '#overview', isActive: false },
  { id: '2', title: 'Obtaining a Token', href: '#token', isActive: true },
  { id: '3', title: 'Error Codes', href: '#errors', isActive: false },
];

export function TableOfContents() {
  return (
    <aside className="hidden xl:block w-72 shrink-0 py-10 pr-8 pl-4 sticky top-[64px] h-[calc(100vh-64px)] overflow-y-auto">
      <div className="space-y-8">
        {/* Version Selector */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
            Documentation Version
          </label>
          <div className="relative">
            <select className="block w-full pl-3 pr-10 py-2 text-sm border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb]">
              <option>v2.1 (Current)</option>
              <option>v2.0</option>
              <option>v1.5 (Legacy)</option>
            </select>
          </div>
        </div>

        {/* On This Page */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <List className="w-4 h-4 text-[#2563eb]" />
            On this page
          </h4>
          <ul className="space-y-3 border-l border-gray-200 dark:border-gray-800 ml-1">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`block pl-4 text-sm transition-all ${
                    item.isActive
                      ? 'text-[#2563eb] font-medium border-l-2 border-[#2563eb]'
                      : 'text-gray-600 dark:text-gray-400 hover:text-[#2563eb] dark:hover:text-[#2563eb] border-l-2 border-transparent hover:border-[#2563eb]'
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contributors */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Contributors
          </h4>
          <div className="flex -space-x-2 overflow-hidden mb-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="size-8 rounded-full ring-2 ring-white dark:ring-[#1e293b] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            Last updated:{' '}
            <span className="text-gray-600 dark:text-gray-300">2 days ago</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-3 w-full flex items-center justify-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300 py-1.5 px-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 transition-colors"
          >
            <Edit className="w-3 h-3" />
            Edit this page
          </motion.button>
        </div>
      </div>
    </aside>
  );
}
