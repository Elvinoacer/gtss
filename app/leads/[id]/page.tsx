import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
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

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <LeadDetailsClient initialLead={initialLead} leadId={id} />
    </DashboardLayout>
  );
}
