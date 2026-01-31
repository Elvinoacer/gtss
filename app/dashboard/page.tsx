import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
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

  const user = {
    name: 'Alex Founder',
    email: 'alex@gtss.com',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
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
