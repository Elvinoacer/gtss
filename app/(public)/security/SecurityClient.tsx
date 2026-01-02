'use client';

import { Shield, Lock, Server } from 'lucide-react';

export function SecurityClient() {
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-6">Security & Compliance</h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-3xl mb-12">
        At GTSS, security is our top priority. We employ industry-leading practices to ensure your data remains safe, private, and compliant.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-white/10 shadow-lg">
          <Shield className="w-10 h-10 text-[#2563EB] mb-4" />
          <h3 className="text-xl font-bold mb-3">Data Protection</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            End-to-end encryption for all data in transit and at rest, ensuring your information is never exposed.
          </p>
        </div>
        
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-white/10 shadow-lg">
          <Lock className="w-10 h-10 text-[#10B981] mb-4" />
          <h3 className="text-xl font-bold mb-3">Access Control</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Granular permission controls and role-based access management (RBAC) to keep your team organized and secure.
          </p>
        </div>
        
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-white/10 shadow-lg">
          <Server className="w-10 h-10 text-[#F59E0B] mb-4" />
          <h3 className="text-xl font-bold mb-3">Infrastructure</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Hosted on secure, redundant cloud infrastructure with 99.9% uptime guarantees and automated backups.
          </p>
        </div>
      </div>
    </div>
  );
}
