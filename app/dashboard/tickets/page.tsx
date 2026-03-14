import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { TicketsClient } from '@/components/support';
import { getTickets } from '@/lib/actions/support';

export const dynamic = 'force-dynamic';

export default async function SupportTicketsPage() {
  const response = await getTickets();
  const initialTickets = response.success ? response.data : [];

    const session = await auth();
  if (!session?.user) redirect('/login');
  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
  };

  return (
    <DashboardLayout user={user}>
      <TicketsClient initialTickets={initialTickets as any[]} />
    </DashboardLayout>
  );
}
