import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { MediaClient } from '@/components/media';
import { getMediaAssets } from '@/lib/actions/media';
import { mediaStats } from '@/data/media';

export const dynamic = 'force-dynamic';

export default async function MediaLibraryPage() {
  const response = await getMediaAssets();
  const initialAssets = response.success ? response.data : [];

    const session = await auth();
  if (!session?.user) redirect('/login');
  const user = {
    name: session.user.name || 'User',
    email: session.user.email || '',
    avatar: session.user.image || undefined,
  };

  return (
    <DashboardLayout user={user}>
      <MediaClient initialAssets={initialAssets as any[]} stats={mediaStats} />
    </DashboardLayout>
  );
}
