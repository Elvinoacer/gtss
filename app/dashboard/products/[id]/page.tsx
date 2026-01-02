import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProductDetailsClient } from '@/components/product-details';
import { getProductById } from '@/lib/actions/products';

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { id } = await params;
  const response = await getProductById(id);
  const initialProduct = response.success ? response.data : null;

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <ProductDetailsClient initialProduct={initialProduct} productId={id} />
    </DashboardLayout>
  );
}

