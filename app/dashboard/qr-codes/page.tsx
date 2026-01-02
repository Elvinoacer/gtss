import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { QRCodesClient } from '@/components/qr-codes';
import { getQRCodes } from '@/lib/actions/qrcodes';

export default async function QRCodesPage() {
  const response = await getQRCodes();
  const initialQRCodes = response.success ? response.data : [];

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <QRCodesClient initialQRCodes={initialQRCodes as any[]} />
    </DashboardLayout>
  );
}
