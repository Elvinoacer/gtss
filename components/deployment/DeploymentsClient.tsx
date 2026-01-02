'use client';

import { DeploymentCard } from '@/components/deployment';
import { Server, RefreshCw, AlertTriangle, CheckCircle, TrendingUp, Rocket, Filter, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { getDeployments } from '@/lib/actions/deployments';
import { useState } from 'react';

interface DeploymentsClientProps {
  initialDeployments: any[];
  initialStats: any[];
}

export function DeploymentsClient({ initialDeployments, initialStats }: DeploymentsClientProps) {
  const { data: deployments = initialDeployments } = useQuery({
    queryKey: ['deployments'],
    queryFn: async () => {
      const response = await getDeployments();
      return response.success ? response.data : initialDeployments;
    },
    initialData: initialDeployments,
  });

  const stats = initialStats.map(stat => ({
    ...stat,
    icon: stat.type === 'active' ? Server : stat.type === 'progress' ? RefreshCw : stat.type === 'failed' ? AlertTriangle : CheckCircle,
    iconBg: stat.type === 'active' ? 'bg-blue-50 dark:bg-blue-900/20' : stat.type === 'progress' ? 'bg-orange-50 dark:bg-orange-900/20' : stat.type === 'failed' ? 'bg-red-50 dark:bg-red-900/20' : 'bg-green-50 dark:bg-green-900/20',
    iconColor: stat.type === 'active' ? 'text-blue-600 dark:text-blue-400' : stat.type === 'progress' ? 'text-orange-600 dark:text-orange-400' : stat.type === 'failed' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400',
    trendIcon: stat.type === 'active' || stat.type === 'completed' ? TrendingUp : undefined
  }));

  return (
    <div className="flex-1">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
            Deployment Status
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
            Real-time oversight of product installations, updates, and health checks across all customer environments.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-[#13ec6d] hover:bg-[#0eb553] transition-colors text-[#003818] text-sm font-bold shadow-lg shadow-[#13ec6d]/20"
        >
          <Rocket className="w-5 h-5" />
          <span>New Deployment</span>
        </motion.button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex flex-col gap-1 rounded-xl p-5 bg-white dark:bg-[#162e21] border ${stat.isWarning ? 'border-red-100 dark:border-red-900/30' : 'border-gray-100 dark:border-gray-800'} shadow-sm relative overflow-hidden`}
          >
            {stat.isWarning && (
              <div className="absolute right-0 top-0 w-16 h-16 bg-red-500/5 rounded-bl-full -mr-4 -mt-4"></div>
            )}
            <div className="flex items-center gap-2 mb-2">
              <div className={`p-1.5 rounded-md ${stat.iconBg} ${stat.iconColor}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
            <p className="text-slate-900 dark:text-white text-3xl font-bold">{stat.value}</p>
            <div className={`flex items-center gap-1 text-xs font-medium ${stat.isWarning ? 'text-red-600 dark:text-red-400' : 'text-[#13ec6d]'}`}>
              {stat.trendIcon && <stat.trendIcon className="w-4 h-4" />}
              <span>{stat.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center justify-center size-10 rounded-lg bg-white dark:bg-[#162e21] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400">
          <Filter className="w-5 h-5" />
        </div>
        <button className="group flex h-10 items-center gap-2 rounded-lg bg-white dark:bg-[#162e21] border border-gray-200 dark:border-gray-800 hover:border-[#13ec6d] px-4 transition-all">
          <span className="text-sm font-medium">Customer: All</span>
          <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-[#13ec6d]" />
        </button>
        <button className="group flex h-10 items-center gap-2 rounded-lg bg-white dark:bg-[#162e21] border border-gray-200 dark:border-gray-800 hover:border-[#13ec6d] px-4 transition-all">
          <span className="text-sm font-medium">Product: All</span>
          <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-[#13ec6d]" />
        </button>
        <button className="group flex h-10 items-center gap-2 rounded-lg bg-white dark:bg-[#162e21] border border-gray-200 dark:border-gray-800 hover:border-[#13ec6d] px-4 transition-all">
          <span className="text-sm font-medium">Environment: Production</span>
          <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-[#13ec6d]" />
        </button>
        <button className="ml-auto text-sm font-medium text-[#13ec6d] hover:text-[#0eb553]">
          Clear filters
        </button>
      </div>

      {/* Deployments List */}
      <div className="flex flex-col gap-4">
        {deployments.map((deployment: any, index: number) => (
          <DeploymentCard key={index} {...deployment} index={index} />
        ))}
      </div>
    </div>
  );
}
