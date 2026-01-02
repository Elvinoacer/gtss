'use client';

import { AlertCircle, AlertTriangle, ArrowDown } from 'lucide-react';

interface TicketPriorityProps {
  priority: 'High' | 'Medium' | 'Low';
}

export function TicketPriority({ priority }: TicketPriorityProps) {
  const priorityConfig = {
    High: {
      icon: AlertCircle,
      className: 'text-error font-semibold',
    },
    Medium: {
      icon: AlertTriangle,
      className: 'text-warning font-medium',
    },
    Low: {
      icon: ArrowDown,
      className: 'text-text-subtle',
    },
  };

  const { icon: Icon, className } = priorityConfig[priority];

  return (
    <span className={`flex items-center gap-1 text-sm ${className}`}>
      <Icon className="w-4.5 h-4.5" />
      {priority}
    </span>
  );
}
