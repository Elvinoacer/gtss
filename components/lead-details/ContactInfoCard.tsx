'use client';

import { Copy, Phone } from 'lucide-react';

interface ContactField {
  label: string;
  value: string;
  action?: 'copy' | 'call';
}

interface ContactInfoCardProps {
  fields: ContactField[];
  leadScore?: number;
}

export function ContactInfoCard({ fields, leadScore = 75 }: ContactInfoCardProps) {
  return (
    <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h3 className="font-semibold text-slate-900 dark:text-white">Details</h3>
        <button className="text-[#2563eb] text-sm font-medium hover:underline">
          Edit
        </button>
      </div>
      <div className="p-5 flex flex-col gap-5">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col gap-1">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              {field.label}
            </span>
            <div className="flex items-center justify-between group">
              <span className="text-slate-900 dark:text-white text-sm break-all">
                {field.value}
              </span>
              {field.action === 'copy' && (
                <button className="text-gray-600 dark:text-gray-400 hover:text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="w-4 h-4" />
                </button>
              )}
              {field.action === 'call' && (
                <button className="text-gray-600 dark:text-gray-400 hover:text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
        
        {leadScore !== undefined && (
          <>
            <div className="h-px bg-gray-200 dark:border-gray-700 my-1"></div>
            <div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider block mb-2">
                Lead Score
              </span>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2563eb] rounded-full transition-all duration-500"
                    style={{ width: `${leadScore}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-[#2563eb]">{leadScore}/100</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
