import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { DashboardClient } from '@/components/dashboard';
import { getProducts } from '@/lib/actions/products';
import { getDashboardStats } from '@/lib/actions/analytics';

// Force dynamic rendering - don't try to pre-render at build time
export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const [productsRes, statsRes] = await Promise.all([
    getProducts(),
    getDashboardStats()
  ]);

  const initialProducts = productsRes.success ? productsRes.data : [];
  const dashboardStats = statsRes.success ? statsRes.data : null;

    const session = await auth();
  if (!session?.user) redirect('/login');
  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
  };

  return (
    <DashboardLayout user={user}>
      <DashboardClient 
        initialProducts={initialProducts as any[]} 
        dashboardStats={dashboardStats}
      />
    </DashboardLayout>
  );
}
