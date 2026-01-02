'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { Eye, Edit2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  minHeight?: string;
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder = 'Write something...',
  label,
  className,
  minHeight = 'min-h-[200px]',
}: MarkdownEditorProps) {
  const [isPreview, setIsPreview] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (!isPreview) {
      adjustHeight();
    }
  }, [value, isPreview]);

  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-slate-900 dark:text-white">
            {label}
          </label>
          <button
            type="button"
            onClick={() => setIsPreview(!isPreview)}
            className="flex items-center gap-1.5 text-xs font-medium text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
          >
            {isPreview ? (
              <>
                <Edit2 className="w-3.5 h-3.5" />
                Edit
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                Preview
              </>
            )}
          </button>
        </div>
      )}

      <div className={cn(
        'w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 overflow-hidden focus-within:ring-2 focus-within:ring-[#2563eb]/20 focus-within:border-[#2563eb] transition-all',
        minHeight
      )}>
        {isPreview ? (
          <div className="prose dark:prose-invert max-w-none p-4 overflow-y-auto max-h-[600px]">
            {value ? (
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {value}
              </ReactMarkdown>
            ) : (
              <p className="text-gray-400 italic">Nothing to preview</p>
            )}
          </div>
        ) : (
          <textarea
            ref={textareaRef}
            className="w-full p-4 bg-transparent border-none focus:ring-0 resize-none outline-none text-slate-900 dark:text-gray-100 placeholder:text-gray-400 max-h-[600px] overflow-y-auto"
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              adjustHeight();
            }}
            style={{ minHeight: 'inherit' }}
          />
        )}
      </div>
      <p className="text-xs text-gray-500">
        Supports Markdown: **bold**, *italic*, - lists, [links](url), etc.
      </p>
    </div>
  );
}
