import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { UploadClient } from '@/components/upload';
import { getUploadData } from '@/lib/actions/upload';

export const dynamic = 'force-dynamic';

export default async function UploadPage() {
  const response = await getUploadData();
  const initialData = response.success ? response.data : null;

    const session = await auth();
  if (!session?.user) redirect('/login');
  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
  };

  return (
    <DashboardLayout user={user}>
      <UploadClient initialData={initialData} />
    </DashboardLayout>
  );
}
