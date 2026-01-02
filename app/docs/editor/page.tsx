import { DocsEditorClient } from '@/components/docs';
import { getDoc } from '@/lib/actions/docs';

export default async function DocsEditorPage() {
  const response = await getDoc();
  const initialData = response.success ? response.data : null;

  return <DocsEditorClient initialData={initialData} />;
}
