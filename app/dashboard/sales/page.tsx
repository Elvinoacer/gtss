import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { SalesClient } from '@/components/sales';
import { getSalesData } from '@/lib/actions/sales';

export const dynamic = 'force-dynamic';

export default async function SalesAnalyticsPage() {
  const response = await getSalesData();
  const initialData = response.success ? response.data : null;

    const session = await auth();
  if (!session?.user) redirect('/login');
  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
  };

  return (
    <DashboardLayout user={user}>
      <SalesClient initialData={initialData} />
    </DashboardLayout>
  );
}
