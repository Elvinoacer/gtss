'use client';

import { StatCard, RevenueChart, SystemStatus, ProductsTable, MemberActivity } from '@/components/dashboard';
import { DollarSign, Package, Users, Server, Calendar, ChevronDown } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/lib/actions/products';

interface DashboardClientProps {
  initialProducts: any[];
}

export function DashboardClient({ initialProducts }: DashboardClientProps) {
  const { data: products = initialProducts } = useQuery({
    queryKey: ['dashboard-products'],
    queryFn: async () => {
      const response = await getProducts();
      return response.success ? response.data : initialProducts;
    },
    initialData: initialProducts,
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
            Welcome back, Founder
          </h1>
          <p className="text-gray-500 dark:text-slate-400 mt-1">
            Here is your company overview for October 24, 2023
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400 bg-white dark:bg-[#1e293b] px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
          <Calendar className="w-4 h-4" />
          <span>Last 30 Days</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue (MRR)"
          value="$1.2M"
          change={{ value: '12%', type: 'increase' }}
          icon={DollarSign}
          index={0}
        />
        <StatCard
          title="Active Products"
          value={products.length.toString()}
          change={{ value: '2 New', type: 'increase', label: '+ 2 New' }}
          icon={Package}
          index={1}
        />
        <StatCard
          title="Team Utilization"
          value="42"
          change={{ value: '5%', type: 'increase' }}
          icon={Users}
          index={2}
        />
        <StatCard
          title="Server Uptime"
          value="99.9%"
          change={{ value: 'Stable', type: 'neutral', label: 'Stable' }}
          icon={Server}
          index={3}
        />
      </div>

      {/* Middle Section: Charts & Health */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <SystemStatus />
      </div>

      {/* Bottom Section: Active Products Table & Member Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProductsTable initialProducts={products} />
        </div>
        <MemberActivity />
      </div>
    </div>
  );
}
