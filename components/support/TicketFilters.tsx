'use client';

import { Search, ChevronDown, FileText, User, UserMinus, CheckCircle } from 'lucide-react';

export function TicketFilters() {
  return (
    <div className="flex flex-col gap-6 mb-6">
      {/* Top Row: Search + Main Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-xl">
          <div className="flex w-full items-center rounded-lg shadow-sm border border-[#dbe6e0] dark:border-[#2a3e32] bg-white dark:bg-[#1a2e22] overflow-hidden focus-within:ring-1 focus-within:ring-primary focus-within:border-primary">
            <div className="pl-3 flex items-center justify-center text-[#618972]">
              <Search className="w-5 h-5" />
            </div>
            <input
              className="w-full bg-transparent border-none focus:ring-0 py-3 px-3 text-base text-gtss-dark dark:text-white placeholder:text-[#618972]"
              placeholder="Search by Ticket ID, Subject, or Customer..."
            />
          </div>
        </div>
        {/* Dropdowns */}
        <div className="flex gap-3 overflow-x-auto pb-1 lg:pb-0">
          <div className="relative min-w-[160px]">
            <select className="w-full appearance-none bg-white dark:bg-[#1a2e22] border border-[#dbe6e0] dark:border-[#2a3e32] text-gtss-dark dark:text-white py-3 pl-4 pr-10 rounded-lg text-sm font-medium focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer">
              <option>All Products</option>
              <option>Platform</option>
              <option>Analytics</option>
              <option>Billing</option>
              <option>Mobile App</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#618972] w-5 h-5 pointer-events-none" />
          </div>
          <div className="relative min-w-[160px]">
            <select className="w-full appearance-none bg-white dark:bg-[#1a2e22] border border-[#dbe6e0] dark:border-[#2a3e32] text-gtss-dark dark:text-white py-3 pl-4 pr-10 rounded-lg text-sm font-medium focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer">
              <option>All Statuses</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
              <option>Closed</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#618972] w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>
      {/* Bottom Row: Quick Chips */}
      <div className="flex flex-wrap gap-3">
        <button className="group flex h-8 items-center justify-center gap-x-2 rounded-lg bg-gtss-dark text-white pl-3 pr-4 transition-all">
          <FileText className="w-4.5 h-4.5" />
          <span className="text-sm font-medium">All Tickets</span>
        </button>
        <button className="group flex h-8 items-center justify-center gap-x-2 rounded-lg bg-[#e1e9e5] hover:bg-[#d1ddd7] dark:bg-[#23352a] dark:hover:bg-[#2f4236] pl-3 pr-4 transition-all">
          <User className="w-4.5 h-4.5 text-gtss-dark dark:text-gray-300" />
          <span className="text-gtss-dark dark:text-gray-300 text-sm font-medium">My Tickets</span>
        </button>
        <button className="group flex h-8 items-center justify-center gap-x-2 rounded-lg bg-[#e1e9e5] hover:bg-[#d1ddd7] dark:bg-[#23352a] dark:hover:bg-[#2f4236] pl-3 pr-4 transition-all">
          <UserMinus className="w-4.5 h-4.5 text-gtss-dark dark:text-gray-300" />
          <span className="text-gtss-dark dark:text-gray-300 text-sm font-medium">Unassigned</span>
          <span className="ml-1 bg-red-100 text-red-700 text-xs px-1.5 py-0.5 rounded-full font-bold">
            3
          </span>
        </button>
        <button className="group flex h-8 items-center justify-center gap-x-2 rounded-lg bg-[#e1e9e5] hover:bg-[#d1ddd7] dark:bg-[#23352a] dark:hover:bg-[#2f4236] pl-3 pr-4 transition-all">
          <CheckCircle className="w-4.5 h-4.5 text-gtss-dark dark:text-gray-300" />
          <span className="text-gtss-dark dark:text-gray-300 text-sm font-medium">Resolved</span>
        </button>
      </div>
    </div>
  );
}
