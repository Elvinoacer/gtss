'use client';

interface TicketStatusBadgeProps {
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed' | 'New';
}

export function TicketStatusBadge({ status }: TicketStatusBadgeProps) {
  const statusConfig = {
    Open: 'bg-error/10 text-error border-error/20',
    'In Progress': 'bg-warning/10 text-warning border-warning/20',
    Resolved: 'bg-success/10 text-success border-success/20',
    Closed: 'bg-gray-50 text-gray-700 border-gray-100 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-900/30',
    New: 'bg-accent/10 text-accent border-accent/20',
  };

  const dotConfig = {
    Open: 'bg-error',
    'In Progress': 'bg-warning',
    Resolved: 'bg-success',
    Closed: 'bg-gray-600',
    New: 'bg-accent',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusConfig[status]}`}>
      <span className={`size-1.5 rounded-full ${dotConfig[status]}`}></span>
      {status}
    </span>
  );
}
