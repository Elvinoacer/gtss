'use client';

import { TimelineItem, ContactInfoCard, TaskItem } from '@/components/lead-details';
import { Search, Edit, ArrowRight, ChevronDown, Plus, Bold, List, Clock, Phone, Mail, Calendar, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { leadContactFields, leadTimelineItems, leadTasks } from '@/data/leads';
import { useQuery } from '@tanstack/react-query';
import { getLeadById } from '@/lib/actions/leads';

interface LeadDetailsClientProps {
  initialLead: any;
  leadId: string;
}

export function LeadDetailsClient({ initialLead, leadId }: LeadDetailsClientProps) {
  const { data: lead = initialLead } = useQuery({
    queryKey: ['lead', leadId],
    queryFn: async () => {
      const response = await getLeadById(leadId);
      return response.success ? response.data : initialLead;
    },
    initialData: initialLead,
  });

  if (!lead) return <div>Lead not found</div>;

  const fieldsAny: any[] = [
    { label: 'Email', value: lead.email, icon: 'mail' },
    { label: 'Phone', value: lead.phone || 'N/A', icon: 'phone' },
    { label: 'Company', value: lead.company || 'N/A', icon: 'business' },
    { label: 'Product', value: lead.productInterest, icon: 'shopping_bag' },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Custom Header for this page */}
      <div className="mb-6">
        {/* Breadcrumbs */}
        <nav className="flex text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
          <a href="/leads" className="hover:text-[#2563eb] transition-colors">
            Leads
          </a>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">{lead.name}</span>
        </nav>

        {/* Profile Header Card */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 bg-white dark:bg-[#1e293b] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex gap-4">
            <div className="size-16 rounded-full bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] text-xl font-bold flex-shrink-0">
              {lead.name.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {lead.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-base mt-1">
                {lead.role} at <span className="text-[#2563eb] font-medium">{lead.company}</span>
              </p>
              <div className="flex items-center gap-3 mt-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                  <span className="size-1.5 rounded-full bg-green-500"></span>
                  {lead.status}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  Last contact: 2 days ago
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex gap-2">
              <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Edit className="w-5 h-5" />
                Edit
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#2563eb] text-white text-sm font-medium hover:bg-[#1d4ed8] transition-colors shadow-sm shadow-[#2563eb]/30"
              >
                <ArrowRight className="w-5 h-5" />
                Move Stage
              </motion.button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Current Stage:
              </span>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#2563eb]/10 text-[#2563eb] rounded-lg text-sm font-semibold hover:bg-[#2563eb]/20 transition-colors">
                {lead.status}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <ContactInfoCard 
            fields={fieldsAny} 
            leadScore={75} 
          />

          {/* Upcoming Tasks */}
          <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Upcoming Tasks
              </h3>
              <button className="size-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {leadTasks.map((task, index) => (
                <TaskItem key={index} {...task} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 flex flex-wrap gap-3 items-center">
            {[
              { icon: Phone, label: 'Log Call' },
              { icon: Mail, label: 'Email' },
              { icon: Calendar, label: 'Meeting' },
              { icon: FileText, label: 'Note' },
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-slate-900 dark:text-white font-medium text-sm transition-colors group"
                >
                  <Icon className="w-5 h-5 text-[#2563eb] group-hover:scale-110 transition-transform" />
                  {action.label}
                </button>
              );
            })}
          </div>

          {/* Tabs Area */}
          <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex-1 flex flex-col min-h-[500px]">
            {/* Tabs Header */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 px-2">
              <button className="px-6 py-4 text-sm font-semibold text-[#2563eb] border-b-2 border-[#2563eb]">
                Activity
              </button>
              <button className="px-6 py-4 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                Notes
              </button>
              <button className="px-6 py-4 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                Product Interest
              </button>
              <button className="px-6 py-4 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                Files
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6 flex-1 bg-gray-50 dark:bg-transparent">
              {/* Note Input */}
              <div className="mb-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-3 shadow-sm">
                <textarea
                  className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm resize-none h-16 text-slate-900 dark:text-white placeholder-gray-400"
                  placeholder={`Write a note about ${lead.name}...`}
                ></textarea>
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-white p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Bold className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-white p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="px-3 py-1.5 bg-[#2563eb] text-white text-xs font-bold rounded-md hover:bg-[#1d4ed8] transition-colors">
                    Save Note
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-4 border-l-2 border-gray-300 dark:border-gray-700 space-y-8">
                {leadTimelineItems.map((item, index) => (
                  <TimelineItem key={index} {...item} index={index}>
                    {item.note && (
                      <div className="mt-2 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className="size-5 rounded-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.note.avatar})` }}
                          ></div>
                          <span className="text-xs font-medium text-slate-900 dark:text-white">
                            {item.note.author}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                          "{item.note.content}"
                        </p>
                      </div>
                    )}
                    {item.fromStage && item.toStage && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>{item.fromStage}</span>
                        <ArrowRight className="w-4 h-4" />
                        <span className="font-medium text-slate-900 dark:text-white">
                          {item.toStage}
                        </span>
                      </div>
                    )}
                  </TimelineItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
