'use client';



import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Package,
  Users,
  DollarSign,
  BarChart3,
  Settings,
  X,
  Target,
  Users2,
  Image as ImageIcon,
  FileText,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navGroups = [
  {
    title: 'Overview',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
      { icon: Package, label: 'Products', href: '/dashboard/products' },
      { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
    ],
  },
  {
    title: 'Management',
    items: [
      { icon: Users, label: 'Teams', href: '/dashboard/teams' },
      { icon: ShieldCheck, label: 'Roles', href: '/dashboard/roles' },
    ],
  },
  {
    title: 'Sales & Leads',
    items: [
      { icon: DollarSign, label: 'Sales', href: '/dashboard/sales' },
      { icon: Target, label: 'Leads', href: '/leads' },
      { icon: Users2, label: 'Customers', href: '/customers' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { icon: ImageIcon, label: 'Media', href: '/dashboard/media' },
      { icon: FileText, label: 'Docs', href: '/docs' },
      { icon: Rocket, label: 'Deployments', href: '/deployments' },
    ],
  },
];

const settingsItem = {
  icon: Settings,
  label: 'Settings',
  href: '/dashboard/settings',
};

interface SidebarProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ user, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#0f172a] flex flex-col h-full border-r border-white/5 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#0bda62] to-blue-600 rounded-lg w-8 h-8 flex items-center justify-center">
              <span className="text-white font-bold text-xs">G</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-base font-bold tracking-tight">GTSS</h1>
              <p className="text-slate-400 text-xs font-normal">Admin Portal</p>
            </div>
          </div>
          <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-5">
          {navGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="flex flex-col gap-1">
              <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {group.title}
              </h3>
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => onClose()}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                      active
                        ? 'bg-white/10 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${active ? 'text-[#0bda62]' : 'group-hover:text-white'}`}
                      strokeWidth={2}
                    />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}

          <div className="my-1 border-t border-white/5 mx-3"></div>

          <Link
            href={settingsItem.href}
            onClick={() => onClose()}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
              isActive(settingsItem.href)
                ? 'bg-white/10 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <settingsItem.icon
              className={`w-5 h-5 ${
                isActive(settingsItem.href) ? 'text-[#0bda62]' : 'group-hover:text-white'
              }`}
              strokeWidth={2}
            />
            <span className="text-sm font-medium">{settingsItem.label}</span>
          </Link>
        </nav>

        {/* User Profile (Sidebar Footer) */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0bda62] to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                {user?.name?.charAt(0) || 'U'}
              </div>
            )}
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm font-medium text-white truncate">
                {user?.name || 'Alex Founder'}
              </p>
              <p className="text-xs text-slate-400 truncate">
                {user?.email || 'alex@gtss.com'}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
