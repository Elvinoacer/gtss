'use client';

import { useQuery } from '@tanstack/react-query';
import { getDoc } from '@/lib/actions/docs';
import { docErrorCodes, docNavigation } from '@/data/docs';

interface DocsViewClientProps {
  initialData: any;
  errorCodes: any;
  navigation: any;
}

export function DocsViewClient({ initialData, errorCodes, navigation }: DocsViewClientProps) {
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
    <div className="flex flex-col gap-8 max-w-4xl mx-auto py-8 px-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <a href="#" className="hover:text-[#2563eb] transition-colors">Platform</a>
        <span>/</span>
        <a href="#" className="hover:text-[#2563eb] transition-colors">API</a>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-medium">Authentication</span>
      </nav>

      {/* Title & Meta */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          {doc.title}
        </h1>
        <div className="flex items-center gap-4">
          <span className="px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold border border-green-200 dark:border-green-800">
            {doc.version}
          </span>
          <span className="text-sm text-gray-500">Last updated: 2 days ago</span>
        </div>
      </div>

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {doc.content}
        </p>
        
        {/* Example Code Block */}
        <div className="my-8 rounded-xl overflow-hidden bg-[#1e293b] border border-gray-700 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-gray-700">
            <span className="text-xs font-mono text-gray-400">POST /auth/token</span>
            <button className="text-xs text-gray-400 hover:text-white transition-colors">Copy</button>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="text-sm font-mono text-blue-300">
{`curl -X POST https://api.gtss.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "your_client_id",
    "client_secret": "your_client_secret"
  }'`}
            </pre>
          </div>
        </div>

        <h3>Error Codes</h3>
        <div className="not-prose grid gap-4 my-6">
          {doc.errorCodes?.map((error: any) => (
            <div key={error.code} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex items-center gap-3 mb-2">
                <code className="text-sm font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">
                  {error.code}
                </code>
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  {error.description}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 pl-1">
                Resolution: {error.resolution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700 mt-8">
        <a href={navigation.previous.href} className="flex flex-col gap-1 group">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Previous</span>
          <span className="text-base font-bold text-[#2563eb] group-hover:underline">
            ← {navigation.previous.label}
          </span>
        </a>
        <a href={navigation.next.href} className="flex flex-col gap-1 items-end group">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Next</span>
          <span className="text-base font-bold text-[#2563eb] group-hover:underline">
            {navigation.next.label} →
          </span>
        </a>
      </div>
    </div>
  );
}
