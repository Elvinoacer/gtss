'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  role: string;
  lastActive: string;
  status: 'active' | 'archived';
  color: string;
  initial: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Payment Gateway API',
    role: 'Lead Maintainer',
    lastActive: '2 hours ago',
    status: 'active',
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    initial: 'P',
  },
  {
    id: '2',
    name: 'Internal Dashboard',
    role: 'Contributor',
    lastActive: 'Yesterday',
    status: 'active',
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    initial: 'I',
  },
  {
    id: '3',
    name: 'Legacy Auth System',
    role: 'Reviewer',
    lastActive: 'Oct 24, 2023',
    status: 'archived',
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    initial: 'L',
  },
];

export function ProductAssignmentsTable() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Current Product Assignments
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1"
        >
          <Plus className="w-4 h-4" />
          Assign Product
        </motion.button>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full text-left text-sm min-w-[600px]">
          <thead className="bg-slate-50 dark:bg-slate-900/50 text-gray-500 dark:text-gray-400 font-semibold">
            <tr>
              <th className="px-4 py-3">Product Name</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Last Active</th>
              <th className="px-4 py-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-[#1e293b]">
            {products.map((product, index) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
              >
                <td className="px-4 py-3 font-medium text-slate-900 dark:text-white flex items-center gap-3">
                  <div
                    className={`size-8 rounded flex items-center justify-center font-bold ${product.color}`}
                  >
                    {product.initial}
                  </div>
                  {product.name}
                </td>
                <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  {product.role}
                </td>
                <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  {product.lastActive}
                </td>
                <td className="px-4 py-3 text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.status === 'active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-400'
                    }`}
                  >
                    {product.status === 'active' ? 'Active' : 'Archived'}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
