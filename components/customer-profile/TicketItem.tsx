'use client';

interface TicketItemProps {
  id: string;
  title: string;
  ticketId: string;
  author: string;
  timeAgo: string;
  priority: 'critical' | 'normal' | 'low';
  status: 'in-progress' | 'open' | 'resolved';
}

const priorityColors = {
  critical: 'bg-rose-500',
  normal: 'bg-blue-500',
  low: 'bg-gray-300 dark:bg-gray-600',
};

const statusConfig = {
  'in-progress': {
    label: 'In Progress',
    className: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300',
  },
  open: {
    label: 'Open',
    className: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300',
  },
  resolved: {
    label: 'Resolved',
    className: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
  },
};

export function TicketItem({
  id,
  title,
  ticketId,
  author,
  timeAgo,
  priority,
  status,
}: TicketItemProps) {
  const statusInfo = statusConfig[status];
  const isResolved = status === 'resolved';

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors gap-4">
      <div className="flex items-start gap-4">
        <div
          className={`mt-1 size-2 rounded-full ${priorityColors[priority]} shrink-0`}
          title={`${priority} Priority`}
        ></div>
        <div className="flex flex-col gap-1">
          <p className={`text-sm font-bold text-slate-900 dark:text-white ${isResolved ? 'line-through opacity-60' : ''}`}>
            {title}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {ticketId} • Opened by {author} • {timeAgo}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 ml-6 md:ml-0">
        <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${statusInfo.className}`}>
          {statusInfo.label}
        </span>
        <button className="text-[#2563eb] text-sm font-bold hover:underline">View</button>
      </div>
    </div>
  );
}
