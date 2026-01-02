'use client';

import { Copy } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  packageManager?: 'npm' | 'yarn' | 'pnpm';
}

export function CodeBlock({
  code,
  language = 'bash',
  title,
  packageManager = 'npm',
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'npm' | 'yarn' | 'pnpm'>(packageManager);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            {title}
          </h4>
          {title === 'Installation & Setup' && (
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              {['npm', 'yarn', 'pnpm'].map((pm) => (
                <button
                  key={pm}
                  onClick={() => setActiveTab(pm as typeof activeTab)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === pm
                      ? 'bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-sm'
                      : 'text-gray-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {pm}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="relative">
        <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-xs rounded border border-white/20 transition-colors"
          >
            <Copy className="w-3 h-3" />
            {copied ? 'Copied!' : 'Copy'}
          </motion.button>
        </div>
        <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto text-sm font-mono text-slate-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
