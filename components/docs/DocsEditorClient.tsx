'use client';


import { useQuery } from '@tanstack/react-query';
import { getDoc } from '@/lib/actions/docs';

interface DocsEditorClientProps {
  initialData: any;
}

export function DocsEditorClient({ initialData }: DocsEditorClientProps) {
  const { data: doc = initialData } = useQuery({
    queryKey: ['doc'],
    queryFn: async () => {
      const response = await getDoc();
      return response.success ? response.data : initialData;
    },
    initialData: initialData,
  });

  if (!doc) return <div>Loading...</div>;

  return (
    <div className="flex flex-col h-full">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e293b]">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">{doc.title}</h1>
          <p className="text-sm text-gray-500">{doc.version}</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            Preview
          </button>
          <button className="px-4 py-2 text-sm font-bold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-lg transition-colors shadow-sm">
            Save Changes
          </button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 p-6 bg-gray-50 dark:bg-[#0f172a] overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 min-h-[600px] p-8">
          <textarea
            className="w-full h-full min-h-[500px] bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white resize-none font-mono text-sm leading-relaxed"
            defaultValue={doc.content}
          />
        </div>
      </div>
    </div>
  );
}
