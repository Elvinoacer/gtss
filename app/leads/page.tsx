import { LeadsClient } from '@/components/leads';
import { getLeads } from '@/lib/actions/leads';

export default async function LeadsPage() {
  const response = await getLeads();
  const initialLeads = response.success ? response.data : [];

  return <LeadsClient initialLeads={initialLeads as any[]} />;
}
