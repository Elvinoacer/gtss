import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { UploadClient } from '@/components/upload';
import { getUploadData } from '@/lib/actions/upload';

export default async function UploadPage() {
  const response = await getUploadData();
  const initialData = response.success ? response.data : null;

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <UploadClient initialData={initialData} />
    </DashboardLayout>
  );
}
