import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { SettingsClient } from '@/components/settings';

import { getCompanySettings } from '@/lib/actions/settings';

export const dynamic = 'force-dynamic';

export default async function CompanySettingsPage() {
  const settings = await getCompanySettings();
  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <SettingsClient initialSettings={settings} />
    </DashboardLayout>
  );
}
