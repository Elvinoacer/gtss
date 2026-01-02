'use client';

import { CustomerTableRow } from '@/components/customers';
import { Search, ChevronDown, Plus, LayoutGrid, TableIcon, LogOut, HelpCircle, LayoutDashboard, Package, Layers, Users, Settings, ArrowUpDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { getCustomers } from '@/lib/actions/customers';
import { useState } from 'react';

interface CustomersClientProps {
  initialCustomers: any[];
}

export function CustomersClient({ initialCustomers }: CustomersClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: customers = initialCustomers } = useQuery({
    queryKey: ['customers'],
    queryFn: async () => {
      const response = await getCustomers();
      return response.success ? response.data : initialCustomers;
    },
    initialData: initialCustomers,
  });

  const safeCustomers = Array.isArray(customers) ? customers : [];

  const filteredCustomers = safeCustomers.filter((customer: any) => 
    customer.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-slate-950">
      {/* Deep Navy Sidebar */}
      <aside className="w-64 bg-slate-900 flex-shrink-0 flex flex-col border-r border-slate-800 transition-all duration-300 hidden md:flex">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="bg-[#2563eb]/20 p-1.5 rounded-lg">
              <LayoutGrid className="text-[#2563eb] w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-base font-bold leading-none tracking-tight">GTSS</h1>
              <p className="text-slate-400 text-xs font-normal mt-1">Admin Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          <a href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors group">
            <LayoutDashboard className="w-5 h-5 group-hover:text-[#2563eb] transition-colors" />
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a href="/dashboard/products" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors group">
            <Package className="w-5 h-5 group-hover:text-[#2563eb] transition-colors" />
            <span className="text-sm font-medium">Products</span>
          </a>
          <a href="/dashboard/platforms" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors group">
            <Layers className="w-5 h-5 group-hover:text-[#2563eb] transition-colors" />
            <span className="text-sm font-medium">Platforms</span>
          </a>
          <a href="/customers" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/20">
            <Users className="w-5 h-5 fill-current" />
            <span className="text-sm font-medium">Customers</span>
          </a>
          <a href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors group">
            <Settings className="w-5 h-5 group-hover:text-[#2563eb] transition-colors" />
            <span className="text-sm font-medium">Settings</span>
          </a>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-800">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors mb-2 group">
            <HelpCircle className="w-5 h-5 group-hover:text-[#2563eb] transition-colors" />
            <span className="text-sm font-medium">Help Center</span>
          </a>
          <div className="flex items-center gap-3 mt-2 px-3 pt-4 border-t border-slate-800">
            <div className="size-9 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop)' }}></div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium text-white truncate">Tom Cook</span>
              <span className="text-xs text-slate-400 truncate">tom@gtss.com</span>
            </div>
            <button className="ml-auto text-slate-400 hover:text-white">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-gray-50 dark:bg-slate-950">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-8 py-5 flex flex-col gap-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <a href="/dashboard" className="hover:text-[#2563eb] transition-colors">Home</a>
            <span className="mx-2 text-gray-300 dark:text-gray-600">/</span>
            <span className="text-slate-900 dark:text-white font-medium">Customers</span>
          </nav>

          {/* Page Title & Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Customers List
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Manage all your client relationships and product associations.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center h-10 px-4 py-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:ring-offset-2"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add New Customer
            </motion.button>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto flex flex-col h-full">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              {/* Search */}
              <div className="relative w-full md:w-96 group">
                <Search className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#2563eb] transition-colors w-10 h-full" />
                <input
                  className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg leading-5 bg-white dark:bg-gray-800 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 sm:text-sm transition-shadow"
                  placeholder="Search customers by name, email..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative">
                  <select className="appearance-none bg-white dark:bg-gray-800 border-none ring-1 ring-gray-200 dark:ring-gray-700 text-gray-700 dark:text-gray-300 py-2.5 pl-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                    <option>Status: All</option>
                    <option>Active</option>
                    <option>Churned</option>
                    <option>Onboarding</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 w-8 h-full" />
                </div>
                <div className="relative">
                  <select className="appearance-none bg-white dark:bg-gray-800 border-none ring-1 ring-gray-200 dark:ring-gray-700 text-gray-700 dark:text-gray-300 py-2.5 pl-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                    <option>Sort by: Newest</option>
                    <option>Name (A-Z)</option>
                    <option>Name (Z-A)</option>
                    <option>Status</option>
                  </select>
                  <ArrowUpDown className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 w-8 h-full" />
                </div>

                {/* View Toggle */}
                <div className="hidden sm:flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 ring-1 ring-gray-200 dark:ring-gray-700">
                  <button className="p-1.5 rounded-md bg-white dark:bg-gray-700 shadow-sm text-slate-900 dark:text-white">
                    <TableIcon className="w-5 h-5" />
                  </button>
                  <button className="p-1.5 rounded-md text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    <LayoutGrid className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/4">
                        Customer Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/4">
                        Contact Info
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/5">
                        Associated Products
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/6">
                        Status
                      </th>
                      <th className="relative px-6 py-4 w-20">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
                    {filteredCustomers.map((customer: any, index: number) => (
                      <CustomerTableRow key={customer.id} {...customer} index={index} />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="bg-white dark:bg-gray-900 px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to{' '}
                  <span className="font-medium text-slate-900 dark:text-white">{filteredCustomers.length}</span> of{' '}
                  <span className="font-medium text-slate-900 dark:text-white">{customers.length}</span> results
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center justify-center px-3 py-1.5 text-sm font-medium text-gray-500 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                    Previous
                  </button>
                  <button className="flex items-center justify-center px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
