import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { MediaClient } from '@/components/media';
import { getMediaAssets } from '@/lib/actions/media';
import { mediaStats } from '@/data/media';

export default async function MediaLibraryPage() {
  const response = await getMediaAssets();
  const initialAssets = response.success ? response.data : [];

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <MediaClient initialAssets={initialAssets as any[]} stats={mediaStats} />
    </DashboardLayout>
  );
}
