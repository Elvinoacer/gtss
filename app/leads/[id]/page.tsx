import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { LeadDetailsClient } from '@/components/lead-details';
import { getLeadById } from '@/lib/actions/leads';

interface LeadDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function LeadDetailsPage({ params }: LeadDetailsPageProps) {
  const { id } = params;
  const response = await getLeadById(id);
  const initialLead = response.success ? response.data : null;

    const session = await auth();
  if (!session?.user) redirect('/login');
  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
  };

  return (
    <DashboardLayout user={user}>
      <LeadDetailsClient initialLead={initialLead} leadId={id} />
    </DashboardLayout>
  );
}
