'use client';

import React from 'react';

import { SettingsSidebar } from './SettingsSidebar';
import { CompanyProfileForm } from './CompanyProfileForm';
import { ContactLegalForm } from './ContactLegalForm';
import { OperationalPreferences } from './OperationalPreferences';
import { SystemDefaults } from './SystemDefaults';
import { DangerZone } from './DangerZone';
import { ChevronRight, Save, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function SettingsClient({ initialSettings }: { initialSettings: any }) {
  const [activeTab, setActiveTab] = React.useState('general');

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return <CompanyProfileForm settings={initialSettings} />;
      case 'legal':
        return <ContactLegalForm />;
      case 'branding': // Placeholder for now
      case 'security':
      case 'billing':
      case 'team':
      case 'integrations':
        return (
          <div className="flex flex-col gap-6 items-center justify-center p-10 text-center">
            <h2 className="text-xl font-bold text-navy dark:text-white capitalize">{activeTab} Settings</h2>
            <p className="text-text-subtle">This section is coming soon.</p>
          </div>
        );
      default:
        return <CompanyProfileForm settings={initialSettings} />;
    }
  };

  return (
    <div className="flex h-full flex-1 overflow-hidden">
      <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-background-dark p-6 md:p-10">
        <div className="mx-auto max-w-5xl flex flex-col gap-8">
          {/* Breadcrumbs & Heading */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm text-text-subtle">
              <a className="hover:text-accent transition-colors" href="/dashboard">Home</a>
              <ChevronRight className="w-4 h-4" />
              <a className="hover:text-accent transition-colors" href="/dashboard/settings">Settings</a>
              <ChevronRight className="w-4 h-4" />
              <span className="font-bold text-navy dark:text-white capitalize">{activeTab}</span>
            </div>
            
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-black tracking-tight text-navy dark:text-white capitalize">{activeTab} Settings</h1>
                <p className="text-base text-text-subtle max-w-2xl">
                  Manage your organization's configuration.
                </p>
              </div>
            </div>
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            {renderContent()}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
