'use client';

import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

import { DashboardLayout } from '@/components/dashboard';
import { 
  GeneralPreferences, 
  CommunicationChannels, 
  FrequencyDigests, 
  NotificationSettingsFooter 
} from '@/components/dashboard/settings/notifications';
import { getUserSettings, updateNotificationSettings } from '@/lib/actions/settings';

export default function NotificationSettingsPage() {
  const { data: session } = useSession();
  
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYzgReSzVolgyVIGSXzRNthWrinXbeUQgsaHovlu43QQjiWUcWHcOAxzWTzkEoF5RvkLoWURJcgFNjTZ0AFwz9CUljGpJZl6qJ6vUSrTpwvr6mgnzkH5gMtTma9J6H5QkNCKEIEQxmzzGz0dPEHL-ZHfK_7trFHPorzkOxRDd9pULjGfc7bFZV_c-eOL0k8CSL1VJIUQl1ljcPFU37ohD9tTgZUQakGmL83-ysoDfWJkoDKMDYTnvFh6z0iN6v209YGge6MNwjVuY',
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
    const result = await updateNotificationSettings(userId, {
      marketingEmails: settings.marketingEmails,
      securityAlerts: settings.securityAlerts,
      productUpdates: settings.productUpdates,
      emailNotifications: settings.emailNotifications,
      slackNotifications: settings.slackNotifications,
    });
    setIsSaving(false);
    if (result.success) {
      alert("Notification settings saved!");
    } else {
      alert("Failed to save " + result.error);
    }
  };

  const handleDiscard = () => {
    if (initialSettings) setSettings(initialSettings);
  };

  if (isLoading) {
    return (
      <DashboardLayout user={user}>
        <div className="p-8 text-black dark:text-white">Loading...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout user={user}>
      <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8 lg:p-12">
        <div className="mx-auto max-w-[960px] flex flex-col gap-8 pb-32">
          {/* Page Heading */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Notification Settings
                </h1>
                <p className="text-text-sub dark:text-gray-400 text-base font-normal leading-normal mt-2 max-w-2xl">
                  Manage how and when you receive updates from GTSS products and platforms. Control channel preferences and frequency.
                </p>
              </div>
            </div>
          </div>

          <GeneralPreferences settings={settings} setSettings={setSettings} />
          <CommunicationChannels settings={settings} setSettings={setSettings} />
          <FrequencyDigests settings={settings} setSettings={setSettings} />
        </div>
      </main>
      <NotificationSettingsFooter 
        onSave={handleSave} 
        onDiscard={handleDiscard} 
        isSaving={isSaving} 
      />
    </DashboardLayout>
  );
}
