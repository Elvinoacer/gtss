import { DocsViewClient } from '@/components/docs-viewer';
import { docErrorCodes, docNavigation } from '@/data/docs';
import { getDoc } from '@/lib/actions/docs';

export default async function DocsViewerPage() {
  const response = await getDoc();
  const initialData = response.success ? response.data : null;

  return (
    <DocsViewClient 
      initialData={initialData} 
      errorCodes={docErrorCodes} 
      navigation={docNavigation} 
    />
  );
}
