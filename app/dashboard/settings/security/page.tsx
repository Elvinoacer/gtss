'use client';

import { DashboardLayout } from '@/components/dashboard';
import { 
  PasswordSection, 
  TwoFactorSection, 
  ActiveSessions, 
  SecurityNotifications 
} from '@/components/dashboard/settings/security';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function SecuritySettingsPage() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy3vrIRms-ZVjjQUe32DevOM6Iyh3aoqQb0mY_WYqsK4rXMtPCJAdmfp0TT0iWLqiOejuILt0AUXBMzLfmJq49NndMbNcFlDJPR0Q_WO7hgYuwx6RLsvdn0DZzJ9Vd_C1labGtM3nYr7025mqc2wCICLupUzlIozIVoPMy00NxKotxxz3phziGcPzhCEuAQQAe1JnbX3P046KwKo9TpQbNLnHMB0UACGsVKzgpczVC68bImB4AQ3J0zZIOtUi2NexeGxGQBNC8pgI',
  };

  return (
    <DashboardLayout user={user}>
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8 lg:p-12">
        <div className="mx-auto max-w-[960px] flex flex-col gap-8 pb-20">
          {/* Breadcrumbs & Heading */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2 items-center">
              <Link className="text-[#616889] dark:text-slate-400 text-sm font-medium leading-normal hover:underline" href="/dashboard/settings">
                Settings
              </Link>
              <ChevronRight className="w-4 h-4 text-[#616889] dark:text-slate-500" />
              <span className="text-[#111218] dark:text-white text-sm font-medium leading-normal">Security</span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#111218] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                Security Settings
              </h1>
              <p className="text-[#616889] dark:text-slate-400 text-base font-normal leading-normal max-w-2xl">
                Manage your password, enable two-factor authentication, and monitor your active sessions to keep your GTSS account secure.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8">
            <PasswordSection />
            <TwoFactorSection />
            <ActiveSessions />
            <SecurityNotifications />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
