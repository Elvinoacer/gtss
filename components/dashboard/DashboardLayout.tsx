'use client';

import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { DashboardHeader } from './DashboardHeader';

interface DashboardLayoutProps {
  children: ReactNode;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

import { useState } from 'react';

export function DashboardLayout({ children, user }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dark-canvas font-rajdhani bg-[var(--black)] text-[var(--text)] h-screen overflow-hidden flex selection:bg-[var(--gold)] selection:text-[var(--black)]">
      <Sidebar user={user} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="flex-1 flex flex-col min-w-0 bg-[var(--black)] relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-20" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--gold)] to-transparent" />
        </div>

        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 relative z-1">
          {children}
        </div>
      </main>
    </div>
  );
}
