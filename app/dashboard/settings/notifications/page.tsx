'use client';

import { DashboardLayout } from '@/components/dashboard';
import { 
  GeneralPreferences, 
  CommunicationChannels, 
  FrequencyDigests, 
  NotificationSettingsFooter 
} from '@/components/dashboard/settings/notifications';

export default function NotificationSettingsPage() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYzgReSzVolgyVIGSXzRNthWrinXbeUQgsaHovlu43QQjiWUcWHcOAxzWTzkEoF5RvkLoWURJcgFNjTZ0AFwz9CUljGpJZl6qJ6vUSrTpwvr6mgnzkH5gMtTma9J6H5QkNCKEIEQxmzzGz0dPEHL-ZHfK_7trFHPorzkOxRDd9pULjGfc7bFZV_c-eOL0k8CSL1VJIUQl1ljcPFU37ohD9tTgZUQakGmL83-ysoDfWJkoDKMDYTnvFh6z0iN6v209YGge6MNwjVuY',
  };

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

          <GeneralPreferences />
          <CommunicationChannels />
          <FrequencyDigests />
        </div>
      </main>
      <NotificationSettingsFooter />
    </DashboardLayout>
  );
}
