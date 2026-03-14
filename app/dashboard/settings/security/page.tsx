'use client';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

import { DashboardLayout } from '@/components/dashboard';
import { 
  PasswordSection, 
  TwoFactorSection, 
  ActiveSessions, 
  SecurityNotifications 
} from '@/components/dashboard/settings/security';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { getUserSettings, updateSecuritySettings } from '@/lib/actions/settings';

export default function SecuritySettingsPage() {
  const { data: session } = useSession();
  const user = {
    name: session?.user?.name || 'User',
    email: session?.user?.email || '',
    avatar: session?.user?.image || undefined,
  };

  const userId = session?.user?.id;

  const { data: initialSettings, isLoading } = useQuery({
    queryKey: ['user-settings', userId],
    queryFn: async () => {
      if (!userId) return null;
      return await getUserSettings(userId);
    },
    enabled: !!userId,
  });

  const [settings, setSettings] = useState<any>({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (initialSettings) setSettings(initialSettings);
  }, [initialSettings]);

  const handleSave = async () => {
    if (!userId) return;
    setIsSaving(true);
    const result = await updateSecuritySettings(userId, {
      twoFactorEnabled: settings.twoFactorEnabled,
    });
    setIsSaving(false);
    if (result.success) {
      alert("Security settings saved!");
    } else {
      alert("Failed to save " + result.error);
    }
  };

  if (isLoading) return <DashboardLayout user={user}><div className="p-8">Loading...</div></DashboardLayout>;

  return (
    <DashboardLayout user={user}>
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8 lg:p-12">
        <div className="mx-auto max-w-[960px] flex flex-col gap-8 pb-20">
          {/* Breadcrumbs & Heading */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex items-center gap-2">
                <Link className="text-[#616889] dark:text-slate-400 text-sm font-medium leading-normal hover:underline" href="/dashboard/settings">
                  Settings
                </Link>
                <ChevronRight className="w-4 h-4 text-[#616889] dark:text-slate-500" />
                <span className="text-[#111218] dark:text-white text-sm font-medium leading-normal">Security</span>
              </div>
              <button 
                onClick={handleSave} 
                className="px-4 h-10 rounded-lg bg-[#1337ec] text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20 disabled:opacity-50"
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
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
            <TwoFactorSection settings={settings} setSettings={setSettings} />
            <ActiveSessions />
            <SecurityNotifications />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
