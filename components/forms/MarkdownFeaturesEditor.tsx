'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FileText, Eye, Edit3, Info, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MarkdownFeaturesEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function MarkdownFeaturesEditor({ value, onChange }: MarkdownFeaturesEditorProps) {
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Markdown components for preview
  const markdownComponents = {
    h1: ({ children }: any) => (
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-6 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-5 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-4 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-3 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }: any) => (
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-slate-600 dark:text-slate-300 ml-2">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-1 mb-4 text-sm text-slate-600 dark:text-slate-300 ml-2">
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li className="pl-1 leading-relaxed">{children}</li>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-slate-900 dark:text-white">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-slate-700 dark:text-slate-300">{children}</em>
    ),
    code: ({ inline, children }: any) =>
      inline ? (
        <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono text-slate-800 dark:text-slate-200">
          {children}
        </code>
      ) : (
        <div className="rounded-lg overflow-hidden bg-slate-900 dark:bg-slate-950 p-4 mb-4">
          <code className="text-sm font-mono text-slate-200 block overflow-x-auto whitespace-pre-wrap">
            {children}
          </code>
        </div>
      ),
    pre: ({ children }: any) => <pre className="not-prose">{children}</pre>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-1 my-4 text-sm text-slate-700 dark:text-slate-300 italic bg-blue-50/50 dark:bg-blue-900/20 rounded-r-lg">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-6 border-slate-200 dark:border-slate-700" />,
    a: ({ href, children }: any) => (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
        {children}
      </a>
    ),
  };

  return (
    <div className="space-y-4">
      {/* Info Banner */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <div className="text-sm text-blue-800 dark:text-blue-200">
          <p className="font-medium mb-1">Paste your markdown content below</p>
          <p className="text-blue-600 dark:text-blue-300 text-xs">
            Supports headers, lists, bold, italic, code blocks, blockquotes, and more. 
            All formatting will be preserved exactly as written.
          </p>
        </div>
      </div>

      {/* Editor Container */}
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
        {/* Tab Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('edit')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'edit'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <Edit3 className="w-4 h-4" />
              Edit
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'preview'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
          </div>

          {value && (
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
          )}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'edit' ? (
            <motion.div
              key="edit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={`# Feature Category

## Sub-Category Name

**Feature Name:** Description of the feature and its benefits.

### Role: User Type

**Features:**
- **Feature Title:** Detailed description of what this feature does
- **Another Feature:** More details here

**Beneficial Analysis:**
- Point 1 about the benefits
- Point 2 about the benefits`}
                className="w-full min-h-[400px] p-4 bg-transparent text-sm font-mono text-slate-800 dark:text-slate-200 placeholder:text-slate-400 resize-y focus:outline-none focus:ring-0 border-0"
                style={{ whiteSpace: 'pre-wrap' }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="min-h-[400px] p-6 overflow-auto"
            >
              {value ? (
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {value}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px] text-center">
                  <FileText className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-3" />
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    No content to preview
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                    Switch to Edit tab and paste your markdown
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Character Count */}
      {value && (
        <div className="text-xs text-slate-400 dark:text-slate-500 text-right">
          {value.length.toLocaleString()} characters
        </div>
      )}
    </div>
  );
}
