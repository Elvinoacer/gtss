import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { ProductEditClient } from '@/components/forms';
import { getProductById } from '@/lib/actions/products';

export const dynamic = 'force-dynamic';

interface ProductEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductEditPage({ params }: ProductEditPageProps) {
  const { id } = await params;
  const response = await getProductById(id);
  const initialProduct = response.success ? response.data : null;

    const session = await auth();
  if (!session?.user) redirect('/login');
  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
  };

  return (
    <DashboardLayout user={user}>
      <ProductEditClient initialProduct={initialProduct} productId={id} />
    </DashboardLayout>
  );
}

