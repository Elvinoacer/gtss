'use client';

import { MoreVertical, Plus } from 'lucide-react';
import { TicketStatusBadge } from './TicketStatusBadge';
import { TicketPriority } from './TicketPriority';

interface TicketRowProps {
  id: string;
  subject: string;
  customer: string;
  product: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed' | 'New';
  priority: 'High' | 'Medium' | 'Low';
  assignee?: {
    name: string;
    avatar: string;
  };
}

export function TicketRow({
  id,
  subject,
  customer,
  product,
  status,
  priority,
  assignee,
}: TicketRowProps) {
  return (
    <tr className="hover:bg-[#f6f8f7] dark:hover:bg-[#1f3326] transition-colors group cursor-pointer">
      <td className="px-6 py-4 text-sm font-medium text-[#618972]">{id}</td>
      <td className="px-6 py-4 text-sm font-medium text-gtss-dark dark:text-white">
        {subject}
      </td>
      <td className="px-6 py-4 text-sm text-gtss-dark dark:text-gray-300">{customer}</td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
          {product}
        </span>
      </td>
      <td className="px-6 py-4">
        <TicketStatusBadge status={status} />
      </td>
      <td className="px-6 py-4">
        <TicketPriority priority={priority} />
      </td>
      <td className="px-6 py-4">
        {assignee ? (
          <div className="flex items-center gap-2">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-8 border border-gray-200"
              style={{ backgroundImage: `url(${assignee.avatar})` }}
            ></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">{assignee.name}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-full size-8 bg-gray-100 text-gray-400 border border-gray-200 border-dashed">
              <Plus className="w-4 h-4" />
            </div>
            <span className="text-sm text-gray-400 italic">Unassigned</span>
          </div>
        )}
      </td>
      <td className="px-6 py-4 text-right">
        {assignee ? (
          <button className="text-gray-400 hover:text-gtss-dark dark:hover:text-white transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        ) : (
          <button className="text-primary hover:text-green-600 font-medium text-sm transition-colors">
            Assign
          </button>
        )}
      </td>
    </tr>
  );
}
