import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProductsClient } from '@/components/products';
import { getProducts } from '@/lib/actions/products';

export default async function ProductsPage() {
  const response = await getProducts();
  const initialProducts = response.success ? response.data : [];

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <ProductsClient initialProducts={initialProducts} />
    </DashboardLayout>
  );
}
