import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { QRCodesClient } from '@/components/qr-codes';
import { getQRCodes } from '@/lib/actions/qrcodes';
import { getQRGeneratorData } from '@/lib/actions/qr-generator';

export const dynamic = 'force-dynamic';

export default async function QRCodesPage() {
  const [qrCodesResponse, generatorResponse] = await Promise.all([
    getQRCodes(),
    getQRGeneratorData()
  ]);
  
  const initialQRCodes = qrCodesResponse.success ? qrCodesResponse.data : [];
  const initialGeneratorData = generatorResponse.success ? generatorResponse.data : null;

  const session = await auth();
  if (!session?.user) redirect('/login');
  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
  };

  return (
    <DashboardLayout user={user}>
      <QRCodesClient initialQRCodes={initialQRCodes as any[]} initialGeneratorData={initialGeneratorData} />
    </DashboardLayout>
  );
}
