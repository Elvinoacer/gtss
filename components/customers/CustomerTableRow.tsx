'use client';

import { MoreVertical, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CustomerTableRowProps {
  id: string;
  customerId: string;
  name: string;
  avatar?: string;
  avatarFallback?: string;
  avatarColor?: string;
  email: string;
  phone?: string;
  location?: string;
  products: Array<{ name: string; color: string }>;
  status: 'active' | 'onboarding' | 'churned';
  index: number;
}

const statusConfig = {
  active: {
    label: 'Active',
    className: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400',
    dotColor: 'bg-emerald-500',
  },
  onboarding: {
    label: 'Onboarding',
    className: 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/30 dark:text-amber-400',
    dotColor: 'bg-amber-500',
  },
  churned: {
    label: 'Churned',
    className: 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300',
    dotColor: 'bg-slate-500',
  },
};

export function CustomerTableRow({
  id,
  customerId,
  name,
  avatar,
  avatarFallback,
  avatarColor = 'bg-indigo-100 text-[#2563eb]',
  email,
  phone,
  location,
  products = [],
  status,
  index,
}: CustomerTableRowProps) {
  const statusInfo = statusConfig[status];

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className="group hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
            {avatar ? (
              <Image src={avatar} alt={name} fill className="object-cover" sizes="40px" />
            ) : (
              <div className={`w-full h-full flex items-center justify-center ${avatarColor} font-bold text-sm`}>
                {avatarFallback}
              </div>
            )}
          </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">{name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">ID: {customerId}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <Mail className="w-4 h-4 text-gray-400" />
            {email}
          </div>
          {phone && (
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
              <Phone className="w-4 h-4 text-gray-400" />
              {phone}
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
              <MapPin className="w-4 h-4 text-gray-400" />
              {location}
            </div>
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-wrap gap-2">
          {products.map((product, idx) => (
            <span
              key={idx}
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.color}`}
            >
              {product.name}
            </span>
          ))}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusInfo.className}`}>
          <span className={`w-1.5 h-1.5 ${statusInfo.dotColor} rounded-full mr-1.5`}></span>
          {statusInfo.label}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="text-gray-400 hover:text-[#2563eb] transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <MoreVertical className="w-5 h-5" />
        </button>
      </td>
    </motion.tr>
  );
}
