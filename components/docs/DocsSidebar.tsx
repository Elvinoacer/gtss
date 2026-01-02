'use client';

import { motion } from 'framer-motion';
import { FileText, Folder, Plus } from 'lucide-react';

interface DocItem {
  id: string;
  title: string;
  type: 'doc' | 'folder';
  isActive?: boolean;
}

const docs: DocItem[] = [
  { id: '1', title: 'API Integration Guide', type: 'doc', isActive: true },
  { id: '2', title: 'Authentication Flows', type: 'doc' },
  { id: '3', title: 'Webhooks', type: 'folder' },
  { id: '4', title: 'SDK References', type: 'folder' },
];

const outline = [
  { id: '1', title: 'Introduction', isActive: true },
  { id: '2', title: 'Prerequisites', isActive: false },
  { id: '3', title: 'Installation', isActive: false },
  { id: '4', title: 'Configuration', isActive: false },
];

export function DocsSidebar() {
  return (
    <aside className="w-64 bg-gray-50 dark:bg-slate-950 border-r border-gray-200 dark:border-gray-700 flex flex-col hidden lg:flex shrink-0">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Project Alpha
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-500 dark:text-gray-400 hover:text-[#2563eb] transition-colors"
          >
            <Plus className="w-4 h-4" />
          </motion.button>
        </div>
        <nav className="space-y-1">
          {docs.map((doc) => (
            <motion.div
              key={doc.id}
              whileHover={{ x: 2 }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                doc.isActive
                  ? 'bg-[#2563eb]/10 text-[#2563eb]'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {doc.type === 'doc' ? (
                <FileText className="w-4 h-4" />
              ) : (
                <Folder className="w-4 h-4" />
              )}
              {doc.title}
            </motion.div>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Outline
          </span>
        </div>
        <div className="pl-2 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
          {outline.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-sm transition-colors ${
                item.isActive
                  ? 'text-[#2563eb] font-medium border-l-2 border-[#2563eb] -ml-[10px] pl-3'
                  : 'text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white pl-1'
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
