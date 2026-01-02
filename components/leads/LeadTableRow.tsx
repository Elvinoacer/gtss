'use client';

import { Edit, Trash2, UserPlus, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface LeadTableRowProps {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  productInterest: string;
  productIcon: React.ReactNode;
  productIconBg: string;
  assignedRep?: { initials: string; name: string; color?: string };
  status: 'new' | 'contacted' | 'qualified' | 'lost';
  avatar?: string;
  avatarFallback?: string;
  index: number;
}

const statusConfig = {
  new: {
    label: 'New Lead',
    className: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
  },
  contacted: {
    label: 'Contacted',
    className: 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
  },
  qualified: {
    label: 'Qualified',
    className: 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800',
  },
  lost: {
    label: 'Lost',
    className: 'bg-red-50 text-red-700 border-red-100 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
  },
};

export function LeadTableRow({
  id,
  name,
  role,
  email,
  phone,
  productInterest,
  productIcon,
  productIconBg,
  assignedRep,
  status,
  avatar,
  avatarFallback,
  index,
}: LeadTableRowProps) {
  const statusInfo = statusConfig[status];

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors group"
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="checkbox"
          className="rounded border-gray-300 text-[#13ec5b] focus:ring-[#13ec5b] h-4 w-4 bg-white dark:bg-gray-800 dark:border-gray-600"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="h-10 w-10 rounded-full object-cover border border-gray-200 dark:border-gray-600"
              />
            ) : (
              <div className="h-10 w-10 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 font-bold dark:bg-indigo-900/30 dark:text-indigo-300">
                {avatarFallback}
              </div>
            )}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-slate-900 dark:text-white">{name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{role}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-slate-900 dark:text-gray-200">{email}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{phone}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center justify-center h-8 w-8 rounded ${productIconBg}`}>
            {productIcon}
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">{productInterest}</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {assignedRep ? (
          <div className="flex items-center gap-2">
            <div className={`h-6 w-6 rounded-full ${assignedRep.color || 'bg-green-100 dark:bg-green-900/40'} flex items-center justify-center text-xs font-bold ${assignedRep.color ? 'text-gray-800 dark:text-gray-200' : 'text-green-800 dark:text-green-400'}`}>
              {assignedRep.initials}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">{assignedRep.name}</span>
          </div>
        ) : (
          <span className="text-sm text-gray-400 italic">Unassigned</span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${statusInfo.className}`}>
          {statusInfo.label}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {!assignedRep && status === 'new' && (
            <button className="text-gray-400 hover:text-[#13ec5b] transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700" title="Assign">
              <UserPlus className="w-5 h-5" />
            </button>
          )}
          {status === 'lost' && (
            <button className="text-gray-400 hover:text-[#13ec5b] transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700" title="Retry">
              <RefreshCw className="w-5 h-5" />
            </button>
          )}
          <button className="text-gray-400 hover:text-[#13ec5b] transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700" title="Edit">
            <Edit className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700" title="Delete">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </td>
    </motion.tr>
  );
}
