import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { DeploymentsClient } from '@/components/deployment';
import { getDeployments } from '@/lib/actions/deployments';
import { deploymentStatsList } from '@/data/deployments';

export default async function DeploymentStatusPage() {
  const response = await getDeployments();
  const initialDeployments = response.success ? response.data : [];

    const session = await auth();
  if (!session?.user) redirect('/login');
  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
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
