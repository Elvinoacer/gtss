import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { SettingsClient } from '@/components/settings';

import { getCompanySettings } from '@/lib/actions/settings';

export const dynamic = 'force-dynamic';

export default async function CompanySettingsPage() {
  const settings = await getCompanySettings();
    const session = await auth();
  if (!session?.user) redirect('/login');
  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
  };

  return (
    <DashboardLayout user={user}>
      <SettingsClient initialSettings={settings} />
    </DashboardLayout>
  );
}
