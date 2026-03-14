import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { TeamsClient } from '@/components/members';
import { getTeamMembers } from '@/lib/actions/teams';

export const dynamic = 'force-dynamic';

export default async function MembersPage() {
  const response = await getTeamMembers();
  const initialMembers = response.success ? response.data : [];

    const session = await auth();
  if (!session?.user) redirect('/login');
  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
  };

  return (
    <DashboardLayout user={user}>
      <TeamsClient initialMembers={initialMembers as any[]} />
    </DashboardLayout>
  );
}
