import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DeploymentsClient } from '@/components/deployment';
import { getDeployments } from '@/lib/actions/deployments';
import { deploymentStatsList } from '@/data/deployments';

export default async function DeploymentStatusPage() {
  const response = await getDeployments();
  const initialDeployments = response.success ? response.data : [];

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <DeploymentsClient 
        initialDeployments={initialDeployments as any[]} 
        initialStats={deploymentStatsList} 
      />
    </DashboardLayout>
  );
}
