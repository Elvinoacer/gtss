'use client';

import { QRCodeTableRow, QRGeneratorClient } from '@/components/qr-codes';
import { Search, ChevronDown, Download, Plus, Home, ChevronRight, List } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { getQRCodes } from '@/lib/actions/qrcodes';
import { useState } from 'react';

interface QRCodesClientProps {
  initialQRCodes: any[];
  initialGeneratorData?: any;
}

export function QRCodesClient({ initialQRCodes, initialGeneratorData }: QRCodesClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'list' | 'generator'>('list');

  const { data: qrCodes = initialQRCodes } = useQuery({
    queryKey: ['qr-codes'],
    queryFn: async () => {
      const response = await getQRCodes();
      return response.success ? response.data : initialQRCodes;
    },
    initialData: initialQRCodes,
  });

  const filteredQRCodes = qrCodes.filter((qr: any) => 
    qr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    qr.targetUrl.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 items-center mb-4">
        <a
          href="/dashboard"
          className="text-gray-500 hover:text-[#2563eb] text-sm font-medium transition-colors flex items-center gap-1"
        >
          <Home className="w-4 h-4" />
          GTSS
        </a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <a
          href="#"
          className="text-gray-500 hover:text-[#2563eb] text-sm font-medium transition-colors"
        >
          Marketing
        </a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-slate-900 dark:text-white text-sm font-medium">
          QR Codes
        </span>
      </div>

      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
            QR Codes & Links
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
            Manage and track all generated referral links and QR assets for GTSS
            products.
          </p>
        </div>
        {activeTab === 'list' ? (
          <motion.button
            onClick={() => setActiveTab('generator')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all shadow-sm shadow-blue-500/20 whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            Create New Code
          </motion.button>
        ) : (
          <motion.button
            onClick={() => setActiveTab('list')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-slate-800 dark:text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all whitespace-nowrap border border-gray-300 dark:border-gray-600"
          >
            <List className="w-5 h-5" />
            Back to List
          </motion.button>
        )}
      </div>

      {activeTab === 'list' && (
        <>
          {/* Filters Bar */}
          <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full md:w-auto md:max-w-md">
              <label className="relative flex w-full items-center">
                <Search className="absolute left-3 text-gray-400 w-5 h-5" />
                <input
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb] dark:text-white placeholder:text-gray-400 transition-all"
                  placeholder="Search by name, tag, or target URL..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </label>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <div className="relative min-w-[140px] flex-1 md:flex-none">
                <select className="w-full appearance-none bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 py-2.5 pl-3 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 cursor-pointer">
                  <option>All Products</option>
                  <option>ThumbStack Analytics</option>
                  <option>GTSS Cloud</option>
                  <option>DevOps Suite</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
              <div className="relative min-w-[140px] flex-1 md:flex-none">
                <select className="w-full appearance-none bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 py-2.5 pl-3 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 cursor-pointer">
                  <option>All Types</option>
                  <option>Demo Request</option>
                  <option>Contact Form</option>
                  <option>Product Page</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
              <button
                className="p-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-950 transition-colors md:flex-none flex-1 flex justify-center items-center"
                title="Export CSV"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-16 text-center">
                      Preview
                    </th>
                    <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Name & URL
                    </th>
                    <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {filteredQRCodes.map((qr: any, index: number) => (
                    <QRCodeTableRow key={qr.id} {...qr} index={index} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="bg-white dark:bg-[#1e293b] p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Showing 1 to {filteredQRCodes.length} of {filteredQRCodes.length} results
              </span>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-950 disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <button className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-950">
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'generator' && (
        <QRGeneratorClient initialData={initialGeneratorData} />
      )}
    </div>
  );
}
