'use client';

import { CheckCircle, Circle, XCircle, Loader2 } from 'lucide-react';

interface ChecklistItemProps {
  label: string;
  status: 'completed' | 'in-progress' | 'pending' | 'failed';
}

export function ChecklistItem({ label, status }: ChecklistItemProps) {
  const config = {
    completed: {
      icon: CheckCircle,
      iconColor: 'text-[#13ec6d]',
      textClass: 'line-through decoration-gray-300 dark:decoration-gray-600 text-gray-500',
    },
    'in-progress': {
      icon: Loader2,
      iconColor: 'border-orange-500',
      textClass: 'font-medium text-slate-900 dark:text-white',
      custom: (
        <div className="size-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      ),
    },
    pending: {
      icon: Circle,
      iconColor: 'text-gray-400',
      textClass: 'text-gray-400',
    },
    failed: {
      icon: XCircle,
      iconColor: 'text-red-500',
      textClass: 'font-medium text-red-500',
    },
  };

  const { icon: Icon, iconColor, textClass, custom } = config[status];

  return (
    <li className={`flex items-center gap-3 text-sm ${textClass}`}>
      {custom || <Icon className={`w-4 h-4 ${iconColor}`} />}
      <span>{label}</span>
    </li>
  );
}
