'use client';

import { Check } from 'lucide-react';

interface TaskItemProps {
  title: string;
  time: string;
  isOverdue?: boolean;
}

export function TaskItem({ title, time, isOverdue = false }: TaskItemProps) {
  return (
    <div className="p-4 flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
      <div className="mt-0.5 relative flex items-center justify-center size-5 rounded border border-gray-300 dark:border-gray-600 group-hover:border-[#2563eb] bg-white dark:bg-transparent">
        <Check className="w-4 h-4 text-transparent group-hover:text-[#2563eb]" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-[#2563eb] transition-colors">
          {title}
        </span>
        <span className={`text-xs ${isOverdue ? 'text-red-500 font-medium' : 'text-gray-600 dark:text-gray-400'}`}>
          {time}
        </span>
      </div>
    </div>
  );
}
