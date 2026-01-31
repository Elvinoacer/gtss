import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { SalesClient } from '@/components/sales';
import { getSalesData } from '@/lib/actions/sales';

export const dynamic = 'force-dynamic';

export default async function SalesAnalyticsPage() {
  const response = await getSalesData();
  const initialData = response.success ? response.data : null;

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <SalesClient initialData={initialData} />
    </DashboardLayout>
  );
}
