import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProductsClient } from '@/components/products';
import { getProducts } from '@/lib/actions/products';

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const session = await auth();
  if (!session?.user) redirect('/login');

  const response = await getProducts();
  const initialProducts = (response.success && response.data) ? response.data : [];

  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
  };

  return (
    <DashboardLayout user={user}>
      <ProductsClient initialProducts={initialProducts} />
    </DashboardLayout>
  );
}
