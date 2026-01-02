'use client';

import { 
  SettingsSidebar, 
  CompanyProfileForm, 
  ContactLegalForm, 
  OperationalPreferences, 
  SystemDefaults, 
  DangerZone 
} from '@/components/settings';
import { ChevronRight, Save, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function SettingsClient() {
  return (
    <div className="flex h-full flex-1 overflow-hidden">
      <SettingsSidebar />
      
      <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-background-dark p-6 md:p-10">
        <div className="mx-auto max-w-5xl flex flex-col gap-8">
          {/* Breadcrumbs & Heading */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm text-text-subtle">
              <a className="hover:text-accent transition-colors" href="/dashboard">Home</a>
              <ChevronRight className="w-4 h-4" />
              <a className="hover:text-accent transition-colors" href="/dashboard/settings">Settings</a>
              <ChevronRight className="w-4 h-4" />
              <span className="font-bold text-navy dark:text-white">Company</span>
            </div>
            
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-black tracking-tight text-navy dark:text-white">Company Settings</h1>
                <p className="text-base text-text-subtle max-w-2xl">
                  Manage your organization's profile, legal details, and global configurations.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 py-2.5 text-sm font-bold text-navy dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-2">
                  <X className="w-4 h-4" />
                  Cancel
                </button>
                <button className="rounded-lg bg-accent px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-accent-hover transition-all flex items-center gap-2 shadow-accent/20">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <CompanyProfileForm />
            <ContactLegalForm />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <OperationalPreferences />
              <SystemDefaults />
            </div>
            
            <DangerZone />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
