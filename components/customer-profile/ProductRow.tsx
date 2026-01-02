'use client';

import { Settings } from 'lucide-react';

interface ProductRowProps {
  name: string;
  icon: React.ReactNode;
  iconBg: string;
  version: string;
  status: 'deployed' | 'pending' | 'inactive';
  renewalDate: string;
}

const statusConfig = {
  deployed: {
    label: 'Deployed',
    className: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
    dotColor: 'bg-emerald-500',
  },
  pending: {
    label: 'Update Pending',
    className: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
    dotColor: 'bg-amber-500',
  },
  inactive: {
    label: 'Inactive',
    className: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    dotColor: 'bg-gray-500',
  },
};

export function ProductRow({
  name,
  icon,
  iconBg,
  version,
  status,
  renewalDate,
}: ProductRowProps) {
  const statusInfo = statusConfig[status];

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <td className="px-5 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-3">
        <div className={`size-8 rounded ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
        {name}
      </td>
      <td className="px-5 py-4">{version}</td>
      <td className="px-5 py-4">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusInfo.className}`}>
          <span className={`size-1.5 rounded-full ${statusInfo.dotColor}`}></span>
          {statusInfo.label}
        </span>
      </td>
      <td className="px-5 py-4">{renewalDate}</td>
      <td className="px-5 py-4 text-right">
        <button className="text-gray-400 hover:text-[#2563eb] transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
}
