import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { QRGeneratorClient } from '@/components/qr-codes';
import { getQRGeneratorData } from '@/lib/actions/qr-generator';

export const dynamic = 'force-dynamic';

export default async function QRGeneratorPage() {
  const response = await getQRGeneratorData();
  const initialData = response.success ? response.data : null;

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <QRGeneratorClient initialData={initialData} />
    </DashboardLayout>
  );
}
