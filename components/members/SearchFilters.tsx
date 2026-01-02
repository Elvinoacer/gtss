'use client';

import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface SearchFiltersProps {
  onSearch?: (query: string) => void;
  onRoleFilter?: (role: string) => void;
  onStatusFilter?: (status: string) => void;
}

export function SearchFilters({
  onSearch,
  onRoleFilter,
  onStatusFilter,
}: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleRoleChange = (value: string) => {
    setRoleFilter(value);
    onRoleFilter?.(value);
  };

  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
    onStatusFilter?.(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 p-4 mb-6 shadow-sm"
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2.5 text-base border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-transparent transition-all"
            placeholder="Search members by name, email, or role..."
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          {/* Role Filter */}
          <div className="relative w-full md:w-48">
            <select
              className="block w-full pl-3 pr-10 py-2.5 text-base border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-transparent appearance-none cursor-pointer"
              value={roleFilter}
              onChange={(e) => handleRoleChange(e.target.value)}
            >
              <option value="">All Roles</option>
              <option value="engineer">Engineering</option>
              <option value="product">Product</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>

          {/* Status Filter */}
          <div className="relative w-full md:w-48">
            <select
              className="block w-full pl-3 pr-10 py-2.5 text-base border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-transparent appearance-none cursor-pointer"
              value={statusFilter}
              onChange={(e) => handleStatusChange(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="leave">On Leave</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
