import { CustomersClient } from '@/components/customers';
import { getCustomers } from '@/lib/actions/customers';

export default async function CustomersPage() {
  const response = await getCustomers();
  const initialCustomers = response.success ? response.data : [];

  return <CustomersClient initialCustomers={initialCustomers} />;
}
