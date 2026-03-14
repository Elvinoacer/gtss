'use client';
import { useSession } from 'next-auth/react';


import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatCard, ProductRow, TicketItem } from '@/components/customer-profile';
import { MoreHorizontal, Edit, Globe, MapPin, Contact, DollarSign, TrendingUp, Ticket, AlertTriangle, Clock, Cloud, BarChart3, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CustomerProfilePage() {
    const { data: session } = useSession();
  const user = {
    name: session?.user?.name || 'User',
    email: session?.user?.email || '',
    avatar: session?.user?.image || undefined,
  };

  const stats = [
    {
      label: 'Annual Recurring Revenue',
      value: '$120,000',
      trend: { direction: 'up' as const, text: '+12% vs last year', icon: TrendingUp },
      icon: DollarSign,
      iconColor: 'text-[#2563eb]',
    },
    {
      label: 'Open Tickets',
      value: '3',
      trend: { direction: 'neutral' as const, text: '1 Critical Priority', icon: AlertTriangle },
      icon: Ticket,
      iconColor: 'text-amber-500',
    },
    {
      label: 'Last Contact',
      value: '14 days ago',
      trend: { direction: 'neutral' as const, text: 'via Email Support' },
      icon: Clock,
      iconColor: 'text-purple-500',
    },
  ];

  const products = [
    {
      name: 'GTSS Cloud Platform',
      icon: <Cloud className="w-4 h-4" />,
      iconBg: 'bg-blue-100 dark:bg-blue-900/30 text-[#2563eb]',
      version: 'v4.2.1',
      status: 'deployed' as const,
      renewalDate: 'Nov 24, 2024',
    },
    {
      name: 'GTSS Analytics Module',
      icon: <BarChart3 className="w-4 h-4" />,
      iconBg: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600',
      version: 'v2.0.0',
      status: 'pending' as const,
      renewalDate: 'Dec 10, 2024',
    },
  ];

  const tickets = [
    {
      id: '1',
      title: 'API Latency Issues in Region US-East',
      ticketId: '#T-4092',
      author: 'Jane Doe',
      timeAgo: '2 hours ago',
      priority: 'critical' as const,
      status: 'in-progress' as const,
    },
    {
      id: '2',
      title: 'Feature Request: Export Custom Reports',
      ticketId: '#T-3991',
      author: 'Mike Ross',
      timeAgo: '3 days ago',
      priority: 'normal' as const,
      status: 'open' as const,
    },
    {
      id: '3',
      title: 'User Invitation Not Sent',
      ticketId: '#T-3802',
      author: 'Jane Doe',
      timeAgo: '1 week ago',
      priority: 'low' as const,
      status: 'resolved' as const,
    },
  ];

  return (
    <DashboardLayout user={user}>
      <div className="flex-1">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-4">
          <a href="#" className="text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-[#2563eb]">
            Home
          </a>
          <span className="text-gray-400 dark:text-gray-600 text-sm font-medium">/</span>
          <a href="/customers" className="text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-[#2563eb]">
            Customers
          </a>
          <span className="text-gray-400 dark:text-gray-600 text-sm font-medium">/</span>
          <span className="text-slate-900 dark:text-white text-sm font-medium">Acme Corp</span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
                Acme Corp
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide border border-emerald-200 dark:border-emerald-800">
                Active
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Enterprise Tier • ID: #GTSS-8821 • Member since Jan 2021
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors gap-2">
              <MoreHorizontal className="w-4 h-4" />
              <span>Actions</span>
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center rounded-lg h-10 px-4 bg-[#2563eb] text-white text-sm font-bold hover:bg-[#1d4ed8] transition-colors shadow-sm gap-2"
            >
              <Edit className="w-4 h-4" />
              <span>Edit Profile</span>
            </motion.button>
          </div>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Identity Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col items-center text-center shadow-sm">
              <div className="size-24 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center mb-4">
                <span className="text-[#2563eb] text-3xl font-black">A</span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-lg font-bold">
                Acme Corporation
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                Global Logistics Solutions
              </p>
              <div className="w-full h-px bg-gray-100 dark:bg-gray-800 my-2"></div>
              <div className="w-full flex flex-col gap-4 mt-2">
                <div className="flex items-start gap-3 text-left">
                  <Globe className="mt-0.5 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">
                      Website
                    </span>
                    <a href="#" className="text-[#2563eb] hover:underline text-sm font-medium">
                      www.acmecorp.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <MapPin className="mt-0.5 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">
                      HQ Location
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      San Francisco, CA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <h4 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                <Contact className="w-5 h-5 text-[#2563eb]" />
                Primary Contact
              </h4>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop)' }}
                ></div>
                <div>
                  <p className="text-slate-900 dark:text-white text-sm font-bold">Jane Doe</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    Chief Technology Officer
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#2563eb]" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 truncate">
                    jane.doe@acmecorp.com
                  </span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-[#2563eb]" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    +1 (555) 012-3456
                  </span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                <h4 className="text-xs font-bold uppercase text-gray-400 mb-3">
                  Account Manager
                </h4>
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                    GT
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    George Thomas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-9 flex flex-col gap-6">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} index={index} />
              ))}
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-800">
              <div className="flex gap-8 overflow-x-auto">
                <a href="#" className="flex items-center justify-center border-b-[3px] border-[#2563eb] text-[#2563eb] pb-3 px-1 min-w-fit">
                  <p className="text-sm font-bold">Overview</p>
                </a>
                <a href="#" className="flex items-center justify-center border-b-[3px] border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 pb-3 px-1 min-w-fit transition-colors">
                  <p className="text-sm font-bold">Products & Deployments</p>
                </a>
                <a href="#" className="flex items-center justify-center border-b-[3px] border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 pb-3 px-1 min-w-fit transition-colors">
                  <p className="text-sm font-bold">Support History</p>
                </a>
                <a href="#" className="flex items-center justify-center border-b-[3px] border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 pb-3 px-1 min-w-fit transition-colors">
                  <p className="text-sm font-bold">Invoices</p>
                </a>
              </div>
            </div>

            {/* Products Table */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-slate-900 dark:text-white text-base font-bold">
                  Active Products
                </h3>
                <button className="text-[#2563eb] text-sm font-bold hover:underline">
                  Manage Licenses
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                  <thead className="bg-gray-50 dark:bg-gray-800 text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">
                    <tr>
                      <th className="px-5 py-3">Product Name</th>
                      <th className="px-5 py-3">Version</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Renewal Date</th>
                      <th className="px-5 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {products.map((product, index) => (
                      <ProductRow key={index} {...product} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Support Tickets */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-slate-900 dark:text-white text-base font-bold">
                  Recent Support Tickets
                </h3>
                <button className="text-[#2563eb] text-sm font-bold hover:underline">
                  View All History
                </button>
              </div>
              <div className="flex flex-col">
                {tickets.map((ticket) => (
                  <TicketItem key={ticket.id} {...ticket} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
