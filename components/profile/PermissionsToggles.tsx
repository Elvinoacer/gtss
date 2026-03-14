'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useState } from 'react';

interface Permission {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  requiresTwoFactor?: boolean;
}

const initialPermissions: Permission[] = [
  {
    id: 'deploy',
    title: 'Deploy to Production',
    description:
      'Allows the user to trigger deployment pipelines to the live environment.',
    enabled: true,
    requiresTwoFactor: true,
  },
  {
    id: 'user-mgmt',
    title: 'User Management',
    description:
      'Ability to invite new members and edit role assignments within their assigned team.',
    enabled: false,
  },
  {
    id: 'db-access',
    title: 'Database Access (Read-Only)',
    description:
      'Grants read access to production databases for debugging purposes.',
    enabled: true,
  },
];

export function PermissionsToggles() {
  const [permissions, setPermissions] = useState(initialPermissions);

  const togglePermission = (id: string) => {
    setPermissions(
      permissions.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p))
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Platform Permissions
        </h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Last updated by Admin on Nov 12
        </span>
      </div>
      <div className="space-y-4">
        {permissions.map((permission, index) => (
          <motion.div
            key={permission.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-start p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {permission.title}
                </p>
                {permission.requiresTwoFactor && (
                  <span title="Requires 2FA">
                    <ShieldCheck className="w-4 h-4 text-gray-500" />
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {permission.description}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={permission.enabled}
                onChange={() => togglePermission(permission.id)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#2563eb]"></div>
            </label>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
