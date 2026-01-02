import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { TeamsClient } from '@/components/members';
import { getTeamMembers } from '@/lib/actions/teams';

export default async function MembersPage() {
  const response = await getTeamMembers();
  const initialMembers = response.success ? response.data : [];

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <TeamsClient initialMembers={initialMembers as any[]} />
    </DashboardLayout>
  );
}
