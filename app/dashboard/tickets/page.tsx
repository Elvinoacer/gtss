import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { TicketsClient } from '@/components/support';
import { getTickets } from '@/lib/actions/support';

export const dynamic = 'force-dynamic';

export default async function SupportTicketsPage() {
  const response = await getTickets();
  const initialTickets = response.success ? response.data : [];

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <TicketsClient initialTickets={initialTickets as any[]} />
    </DashboardLayout>
  );
}
