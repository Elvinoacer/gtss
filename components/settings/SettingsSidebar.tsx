'use client';

import { Settings, Gavel, Palette, Lock, CreditCard, Users, Puzzle, Sliders } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 'general', label: 'General', icon: Settings, href: '/dashboard/settings' },
  { id: 'legal', label: 'Legal & Compliance', icon: Gavel, href: '#' },
  { id: 'branding', label: 'Branding', icon: Palette, href: '#' },
  { id: 'security', label: 'Security', icon: Lock, href: '#' },
  { id: 'billing', label: 'Billing', icon: CreditCard, href: '#' },
  { id: 'team', label: 'Team Management', icon: Users, href: '#' },
  { id: 'integrations', label: 'Integrations', icon: Puzzle, href: '#' },
];

export function SettingsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a2e22] md:flex overflow-y-auto">
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2 px-2">
            <Sliders className="w-4 h-4 text-text-subtle" />
            <h1 className="text-xs font-bold uppercase tracking-wider text-text-subtle">Settings</h1>
          </div>
          <p className="px-2 text-[10px] font-medium text-text-subtle/70">Admin Console</p>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all border-l-4 ${
                  isActive
                    ? 'bg-accent/10 text-accent border-accent font-semibold'
                    : 'text-text-subtle hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-navy dark:hover:text-white border-transparent'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
