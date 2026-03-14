'use client';

import { LeadTableRow } from '@/components/leads';
import { Search, ChevronDown, Filter, Plus, ChevronLeft, ChevronRight, PieChart, Users, Code, Briefcase, BarChart3, Settings, Package, Tag, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getLeads } from '@/lib/actions/leads';
import { useState } from 'react';
import * as Icons from 'lucide-react';

interface LeadsClientProps {
  initialLeads: any[];
}

export function LeadsClient({ initialLeads }: LeadsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: leads = initialLeads } = useQuery({
    queryKey: ['leads'],
    queryFn: async () => {
      const response = await getLeads();
      return response.success ? response.data : initialLeads;
    },
    initialData: initialLeads,
  });

  const filteredLeads = leads.filter((lead: any) => 
    lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (lead.company && lead.company.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-slate-950">
      {/* Sidebar - Keeping the same for now, but could be modularized */}
      <aside className="w-64 flex-shrink-0 bg-slate-900 text-white flex flex-col border-r border-slate-800 hidden md:flex">
        <div className="p-6 flex flex-col gap-1">
          <h1 className="text-white text-xl font-bold tracking-tight">GTSS</h1>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
            Internal Platform
          </p>
        </div>
        <nav className="flex-1 px-4 flex flex-col gap-2 overflow-y-auto">
          <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors group" href="/dashboard">
            <PieChart className="w-5 h-5 text-slate-400 group-hover:text-[#13ec5b]" />
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-3 rounded-lg bg-[#13ec5b]/20 text-[#13ec5b] transition-colors" href="/leads">
            <Users className="w-5 h-5 fill-current" />
            <span className="text-sm font-medium">Leads</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors group" href="/dashboard/products">
            <Code className="w-5 h-5 text-slate-400 group-hover:text-[#13ec5b]" />
            <span className="text-sm font-medium">Software Products</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors group" href="/dashboard/teams">
            <Briefcase className="w-5 h-5 text-slate-400 group-hover:text-[#13ec5b]" />
            <span className="text-sm font-medium">Teams</span>
          </a>
          <div className="my-2 border-t border-slate-700 mx-2"></div>
          <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors group" href="/analytics">
            <BarChart3 className="w-5 h-5 text-slate-400 group-hover:text-[#13ec5b]" />
            <span className="text-sm font-medium">Analytics</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors group" href="/dashboard/settings">
            <Settings className="w-5 h-5 text-slate-400 group-hover:text-[#13ec5b]" />
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" fill className="object-cover" sizes="40px" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">Alex Morgan</span>
              <span className="text-xs text-slate-400">Sales Manager</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-gray-50 dark:bg-slate-950">
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <a href="/dashboard" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Home
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-slate-900 dark:text-white font-semibold">
                Leads Management
              </span>
            </nav>

            {/* Page Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Leads List
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Manage your sales pipeline and track potential clients.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-[#13ec5b] hover:bg-[#0fd650] text-slate-900 font-bold py-2.5 px-5 rounded-lg transition-all shadow-sm shadow-[#13ec5b]/20"
              >
                <Plus className="w-5 h-5" />
                <span>Add New Lead</span>
              </motion.button>
            </div>

            {/* Toolbar */}
            <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col xl:flex-row gap-4 justify-between items-start xl:items-center">
              <div className="relative w-full xl:w-96 group">
                <Search className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 w-10 h-full" />
                <input
                  className="block w-full pl-10 pr-3 py-2.5 border-none bg-gray-100 dark:bg-slate-900 rounded-lg text-slate-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#13ec5b] focus:bg-white dark:focus:bg-slate-900 transition-all text-sm"
                  placeholder="Search by name, email or company..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto">
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors">
                  <Package className="w-4 h-4 text-gray-400" />
                  Product: All
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors">
                  <Tag className="w-4 h-4 text-gray-400" />
                  Status: All
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors">
                  <User className="w-4 h-4 text-gray-400" />
                  Assigned To: Me
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1 hidden sm:block"></div>
                <button className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                  <Filter className="w-5 h-5" />
                  <span className="text-sm font-medium">More Filters</span>
                </button>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700/50">
                    <tr>
                      <th className="px-6 py-4 text-left">
                        <input type="checkbox" className="rounded border-gray-300 text-[#13ec5b] focus:ring-[#13ec5b] h-4 w-4" />
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Lead Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Contact Info
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Product Interest
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Assigned Rep
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredLeads.map((lead: any, index: number) => {
                      // Handle icon mapping if needed
                      const IconComponent = lead.productIcon ? (Icons as any)[lead.productIcon] : null;
                      
                      return (
                        <LeadTableRow 
                          key={lead.id} 
                          {...lead} 
                          productIcon={IconComponent ? <IconComponent className="w-4 h-4" /> : null}
                          index={index} 
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="bg-white dark:bg-gray-800 px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between sm:px-6">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Showing <span className="font-medium">1</span> to{' '}
                      <span className="font-medium">{filteredLeads.length}</span> of{' '}
                      <span className="font-medium">{leads.length}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                      <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button className="z-10 bg-[#13ec5b]/10 border-[#13ec5b] text-[#13ec5b] relative inline-flex items-center px-4 py-2 border text-sm font-bold">
                        1
                      </button>
                      <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
