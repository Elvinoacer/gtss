'use client';

import { ChevronRight, Home, Share, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface TicketDetailsHeaderProps {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  openedDate: string;
}

export function TicketDetailsHeader({ id, title, priority, openedDate }: TicketDetailsHeaderProps) {
  const priorityStyles = {
    High: 'bg-error/10 text-error border-error/20',
    Medium: 'bg-warning/10 text-warning border-warning/20',
    Low: 'bg-accent/10 text-accent border-accent/20',
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Breadcrumbs */}
      <div className="flex items-center flex-wrap gap-2 text-sm">
        <Link 
          href="/dashboard" 
          className="text-text-subtle hover:text-accent transition-colors flex items-center gap-1"
        >
          <Home className="w-4 h-4" />
          Home
        </Link>
        <ChevronRight className="w-4 h-4 text-text-subtle" />
        <Link 
          href="/dashboard/tickets" 
          className="text-text-subtle hover:text-accent transition-colors"
        >
          Support Tickets
        </Link>
        <ChevronRight className="w-4 h-4 text-text-subtle" />
        <span className="text-navy font-medium dark:text-white">{id}</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${priorityStyles[priority]}`}>
              {priority} Priority
            </span>
            <span className="text-text-subtle text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Opened {openedDate}
            </span>
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight text-navy dark:text-white">
            {id}: {title}
          </h1>
        </div>
        <div className="flex gap-3 shrink-0">
          <button className="flex items-center justify-center h-10 w-10 rounded-lg border border-gray-100 dark:border-gray-800 text-text-subtle hover:text-navy dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Share className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center h-10 px-4 rounded-lg bg-navy dark:bg-white text-white dark:text-navy font-bold text-sm hover:opacity-90 transition-opacity gap-2">
            <CheckCircle className="w-5 h-5" />
            Resolve Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
