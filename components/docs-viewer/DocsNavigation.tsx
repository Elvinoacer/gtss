'use client';

import { motion } from 'framer-motion';
import { Home, Rocket, Building2, Lock, Database, Code, FileText } from 'lucide-react';

interface NavSection {
  title: string;
  items: NavItem[];
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
  subItems?: { label: string; href: string; isActive?: boolean }[];
}

const sections: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { icon: <Home className="w-4 h-4" />, label: 'Introduction', href: '#' },
      { icon: <Rocket className="w-4 h-4" />, label: 'Quick Start', href: '#' },
    ],
  },
  {
    title: 'Core Platform',
    items: [
      { icon: <Building2 className="w-4 h-4" />, label: 'Architecture', href: '#' },
      {
        icon: <Lock className="w-4 h-4" />,
        label: 'Authentication',
        href: '#',
        isActive: true,
        subItems: [
          { label: 'Overview', href: '#overview', isActive: true },
          { label: 'OAuth2 Flows', href: '#oauth' },
          { label: 'API Keys', href: '#keys' },
        ],
      },
      { icon: <Database className="w-4 h-4" />, label: 'Database Schema', href: '#' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { icon: <Code className="w-4 h-4" />, label: 'API Reference', href: '#' },
      { icon: <FileText className="w-4 h-4" />, label: 'Changelog', href: '#' },
    ],
  },
];

export function DocsNavigation() {
  return (
    <aside className="hidden lg:block w-64 xl:w-72 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1e293b] sticky top-[64px] h-[calc(100vh-64px)] overflow-y-auto py-8 pl-6 pr-4">
      <nav className="flex flex-col gap-8">
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="space-y-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      item.isActive
                        ? 'text-[#2563eb] bg-[#2563eb]/10'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#2563eb]'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                  {item.subItems && (
                    <div className="pl-9 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700 ml-4 mb-2">
                      {item.subItems.map((subItem, subIdx) => (
                        <a
                          key={subIdx}
                          href={subItem.href}
                          className={`block px-3 py-1.5 text-sm transition-colors ${
                            subItem.isActive
                              ? 'text-[#2563eb] font-medium border-l-2 border-[#2563eb] -ml-[1px]'
                              : 'text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-200'
                          }`}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
