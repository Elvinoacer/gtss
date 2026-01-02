'use client';

import { ChevronDown, Info, Calendar, Tag, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

interface TicketSidebarProps {
  status: string;
  assignee: {
    name: string;
    role: string;
    avatar: string;
  };
  reporter: {
    name: string;
    email: string;
    avatar: string;
  };
  details: {
    product: string;
    version: string;
    dueDate: string;
    tags: string[];
  };
}

export function TicketSidebar({ status, assignee, reporter, details }: TicketSidebarProps) {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-6 shrink-0 lg:sticky lg:top-24 h-fit">
      {/* Status Card */}
      <div className="bg-white dark:bg-[#1a2e22] rounded-xl border border-gray-100 dark:border-gray-800 p-5 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col w-full">
          <p className="text-navy dark:text-white text-sm font-bold mb-2">Ticket Status</p>
          <div className="relative">
            <select 
              defaultValue={status.toLowerCase().replace(' ', '_')}
              className="appearance-none w-full cursor-pointer rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 py-2.5 pl-4 pr-10 text-sm font-medium text-navy dark:text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-subtle">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-subtle">Assigned to</span>
            <button className="text-xs font-bold text-accent hover:underline">Change</button>
          </div>
          <div className="flex items-center gap-3">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-9 shrink-0 ring-1 ring-gray-100 dark:ring-gray-800"
              style={{ backgroundImage: `url(${assignee.avatar})` }}
            ></div>
            <div>
              <p className="text-sm font-bold text-navy dark:text-white">{assignee.name}</p>
              <p className="text-xs text-text-subtle">{assignee.role}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-subtle">Reporter</span>
          </div>
          <div className="flex items-center gap-3">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-9 shrink-0 ring-1 ring-gray-100 dark:ring-gray-800"
              style={{ backgroundImage: `url(${reporter.avatar})` }}
            ></div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-navy dark:text-white truncate">{reporter.name}</p>
              <p className="text-xs text-text-subtle truncate">{reporter.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details Card */}
      <div className="bg-white dark:bg-[#1a2e22] rounded-xl border border-gray-100 dark:border-gray-800 p-5 shadow-sm flex flex-col gap-4">
        <h3 className="font-bold text-sm text-navy dark:text-white flex items-center gap-2">
          <Info className="w-4 h-4 text-text-subtle" />
          Ticket Details
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-text-subtle uppercase tracking-wider">Product</span>
            <span className="text-sm font-semibold text-navy dark:text-white">{details.product}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-text-subtle uppercase tracking-wider">Version</span>
            <span className="text-sm font-semibold text-navy dark:text-white">{details.version}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-text-subtle uppercase tracking-wider">Due Date</span>
            <span className="text-sm font-semibold text-navy dark:text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              {details.dueDate}
            </span>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <span className="text-[10px] font-bold text-text-subtle uppercase tracking-wider">Tags</span>
            <div className="flex flex-wrap gap-2">
              {details.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 text-[10px] font-bold text-text-subtle hover:text-accent hover:border-accent/30 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Escalation CTA */}
      <div className="bg-accent/5 rounded-xl p-5 border border-accent/10 flex flex-col items-center text-center gap-3">
        <div className="size-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-navy dark:text-white">Need help resolving?</h4>
          <p className="text-xs text-text-subtle mt-1">Escalate this ticket to the L3 Engineering team.</p>
        </div>
        <button className="text-xs font-bold text-accent hover:text-accent-hover hover:underline transition-colors">
          Escalate Ticket
        </button>
      </div>
    </aside>
  );
}
