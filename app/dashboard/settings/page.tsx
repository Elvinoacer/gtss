import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { SettingsClient } from '@/components/settings';

export default async function CompanySettingsPage() {
  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <SettingsClient />
    </DashboardLayout>
  );
}
