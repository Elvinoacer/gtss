'use client';

import { SalesKPICard, PerformanceChart, TopPerformers, TransactionsTable } from '@/components/sales';
import { DollarSign, Users, Percent, ShoppingBag, Search, Calendar, ChevronDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { getSalesData } from '@/lib/actions/sales';

interface SalesClientProps {
  initialData: any;
}

export function SalesClient({ initialData }: SalesClientProps) {
  const { data = initialData } = useQuery({
    queryKey: ['sales-data'],
    queryFn: async () => {
      const response = await getSalesData();
      return response.success ? response.data : initialData;
    },
    initialData: initialData,
  });

  return (
    <div className="flex-1 max-w-[1200px] mx-auto w-full flex flex-col gap-6">
      {/* Page Heading & Controls */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-end">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#111814] dark:text-white text-4xl font-black leading-tight tracking-tight">
            Sales Analytics
          </h1>
          <p className="text-[#618972] dark:text-gray-400 text-base font-normal">
            Overview of Q3 Performance
          </p>
        </div>
        <div className="flex flex-wrap items-end gap-3 w-full lg:w-auto">
          {/* Date Range Filter */}
          <div className="flex flex-col min-w-[160px] flex-1 lg:flex-none">
            <span className="text-[#111814] dark:text-gray-300 text-xs font-medium pb-1">Date Range</span>
            <div className="relative">
              <select className="appearance-none flex w-full rounded-lg text-[#111814] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border border-[#dbe6e0] dark:border-gray-700 bg-white dark:bg-[#1a2e22] h-10 px-3 pr-10 text-sm cursor-pointer">
                {data.dateRanges.map((range: any) => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#618972]">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
          </div>
          {/* Sales Rep Filter */}
          <div className="flex flex-col min-w-[180px] flex-1 lg:flex-none">
            <span className="text-[#111814] dark:text-gray-300 text-xs font-medium pb-1">Sales Representative</span>
            <div className="relative">
              <select className="appearance-none flex w-full rounded-lg text-[#111814] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border border-[#dbe6e0] dark:border-gray-700 bg-white dark:bg-[#1a2e22] h-10 px-3 pr-10 text-sm cursor-pointer">
                {data.reps.map((rep: any) => (
                  <option key={rep.value} value={rep.value}>{rep.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#618972]">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>
          {/* Export Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex h-10 items-center justify-center gap-2 rounded-lg bg-accent hover:bg-accent-hover text-white px-5 text-sm font-bold transition-colors shadow-sm shadow-accent/30 min-w-[120px]"
          >
            <Download className="w-5 h-5" />
            <span className="truncate">Export CSV</span>
          </motion.button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.kpis.map((kpi: any, index: number) => (
          <SalesKPICard key={index} {...kpi} index={index} />
        ))}
      </div>
      {/* Main Dashboard Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PerformanceChart />
        <TopPerformers />
      </div>

      {/* Recent Transactions Table */}
      <TransactionsTable initialTransactions={data.transactions} />
    </div>
  );
}
