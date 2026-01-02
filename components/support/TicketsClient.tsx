'use client';

import { TicketFilters, TicketRow } from '@/components/support';
import { ChevronRight, Download, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { getTickets } from '@/lib/actions/support';
import { useState } from 'react';

interface TicketsClientProps {
  initialTickets: any[];
}

export function TicketsClient({ initialTickets }: TicketsClientProps) {
  const { data: tickets = initialTickets } = useQuery({
    queryKey: ['tickets'],
    queryFn: async () => {
      const response = await getTickets();
      return response.success ? response.data : initialTickets;
    },
    initialData: initialTickets,
  });

  return (
    <div className="flex-1 w-full max-w-[1280px] mx-auto flex flex-col gap-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[#618972] px-1">
        <span>GTSS Internal</span>
        <ChevronRight className="w-4 h-4" />
        <span className="font-medium text-gtss-dark dark:text-gray-200">Support Tickets</span>
      </div>

      {/* Page Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-1">
        <div className="flex flex-col gap-1">
          <h1 className="text-gtss-dark dark:text-white text-3xl font-black leading-tight tracking-tight">
            Support Tickets
          </h1>
          <p className="text-[#618972] text-base font-normal">
            Manage and track all customer support inquiries efficiently.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#1a2e22] border border-[#dbe6e0] dark:border-[#2a3e32] rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#23352a] transition-colors shadow-sm text-gtss-dark dark:text-gray-200">
            <Download className="w-5 h-5" />
            Export CSV
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-accent hover:bg-accent-hover transition-colors text-white text-sm font-bold shadow-sm">
            <Plus className="w-5 h-5" />
            <span>Create Ticket</span>
          </button>
        </div>
      </div>

      {/* Filters & Toolbar */}
      <TicketFilters />

      {/* Data Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-xl border border-[#dbe6e0] dark:border-[#2a3e32] bg-white dark:bg-[#1a2e22] shadow-sm"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="bg-[#f9fafb] dark:bg-[#15261d] border-b border-[#dbe6e0] dark:border-[#2a3e32]">
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#618972] uppercase tracking-wider">
                  Ticket ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#618972] uppercase tracking-wider w-[30%]">
                  Subject
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#618972] uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#618972] uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#618972] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#618972] uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#618972] uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-[#618972] uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dbe6e0] dark:divide-[#2a3e32]">
              {tickets.map((ticket: any, index: number) => (
                <TicketRow key={index} {...ticket} />
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#dbe6e0] dark:border-[#2a3e32] bg-white dark:bg-[#1a2e22]">
          <div className="text-sm text-[#618972]">
            Showing <span className="font-medium text-gtss-dark dark:text-white">1</span> to{' '}
            <span className="font-medium text-gtss-dark dark:text-white">{tickets.length}</span> of{' '}
            <span className="font-medium text-gtss-dark dark:text-white">{tickets.length}</span> results
          </div>
          <div className="flex items-center gap-2">
            <button
              className="flex items-center justify-center px-3 py-1.5 rounded-lg border border-[#dbe6e0] dark:border-[#2a3e32] bg-white dark:bg-[#23352a] text-sm text-gray-400 cursor-not-allowed"
              disabled
            >
              Previous
            </button>
            <button className="flex items-center justify-center px-3 py-1.5 rounded-lg border border-[#dbe6e0] dark:border-[#2a3e32] bg-white dark:bg-[#23352a] text-sm text-gtss-dark dark:text-white hover:bg-gray-50 dark:hover:bg-[#2f4236] transition-colors">
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
