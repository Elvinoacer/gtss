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
    title: 'OPERATIONAL_OVERVIEW',
    items: [
      { icon: LayoutDashboard, label: 'Control Center', href: '/dashboard' },
      { icon: Package, label: 'Product Registry', href: '/dashboard/products' },
      { icon: BarChart3, label: 'Strategic Analytics', href: '/dashboard/analytics' },
    ],
  },
  {
    title: 'MANAGEMENT_PROTOCOLS',
    items: [
      { icon: Users, label: 'Personnel', href: '/dashboard/teams' },
      { icon: ShieldCheck, label: 'Auth Protocols', href: '/dashboard/roles' },
    ],
  },
  {
    title: 'COMMERCIAL_OPERATIONS',
    items: [
      { icon: DollarSign, label: 'Revenue Streams', href: '/dashboard/sales' },
      { icon: Target, label: 'Market Leads', href: '/leads' },
      { icon: Users2, label: 'Client Database', href: '/customers' },
    ],
  },
  {
    title: 'ASSET_REPOSITORY',
    items: [
      { icon: ImageIcon, label: 'Media Assets', href: '/dashboard/media' },
      { icon: FileText, label: 'Knowledge Base', href: '/docs' },
      { icon: Rocket, label: 'Active Deployments', href: '/deployments' },
    ],
  },
];

const settingsItem = {
  icon: Settings,
  label: 'System Configuration',
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-[70] w-64 bg-[var(--black)] flex flex-col h-full border-r border-[var(--border)] transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Logo Area */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-[var(--border)] shrink-0 bg-[rgba(212,175,55,0.02)]">
          <div className="flex items-center gap-3">
            <div className="border border-[var(--gold)] w-10 h-10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[var(--gold)] opacity-10 group-hover:opacity-20 transition-opacity" />
              <span className="text-[var(--gold)] font-bebas text-xl relative z-10">GT</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[var(--text)] text-lg font-bebas tracking-widest leading-none">GTSS</h1>
              <p className="text-[var(--gold-dim)] text-[10px] font-mono-dm uppercase tracking-tighter">Command_Interface</p>
            </div>
          </div>
          <button onClick={onClose} className="md:hidden text-[var(--text-muted)] hover:text-[var(--gold)]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-8 px-4 flex flex-col gap-8 scrollbar-hide">
          {navGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="flex flex-col gap-1.5">
              <h3 className="px-3 text-[10px] font-mono-dm text-[var(--gold-dim)] uppercase tracking-[0.2em] mb-2 opacity-70">
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
                    className={`flex items-center gap-3 px-3 py-2 border transition-all duration-200 group relative ${
                      active
                        ? 'bg-[rgba(212,175,55,0.08)] border-[var(--gold-dim)] text-[var(--gold)] shadow-[0_0_15px_rgba(212,175,55,0.05)]'
                        : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border)] hover:bg-white/5'
                    }`}
                  >
                    {active && (
                      <motion.div 
                        layoutId="active-nav-indicator"
                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--gold)]"
                      />
                    )}
                    <Icon
                      className={`w-4 h-4 transition-colors ${active ? 'text-[var(--gold)]' : 'group-hover:text-[var(--gold-dim)]'}`}
                      strokeWidth={1.5}
                    />
                    <span className="text-xs uppercase tracking-widest font-rajdhani font-semibold">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}

          <div className="mt-auto pt-6 border-t border-[var(--border)]">
            <Link
              href={settingsItem.href}
              onClick={() => onClose()}
              className={`flex items-center gap-3 px-3 py-2 border transition-all duration-200 group relative ${
                isActive(settingsItem.href)
                  ? 'bg-[rgba(212,175,55,0.08)] border-[var(--gold-dim)] text-[var(--gold)]'
                  : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border)] hover:bg-white/5'
              }`}
            >
              <settingsItem.icon
                className={`w-4 h-4 transition-colors ${
                  isActive(settingsItem.href) ? 'text-[var(--gold)]' : 'group-hover:text-[var(--gold-dim)]'
                }`}
                strokeWidth={1.5}
              />
              <span className="text-xs uppercase tracking-widest font-rajdhani font-semibold">{settingsItem.label}</span>
            </Link>
          </div>
        </nav>

        {/* User Profile (Sidebar Footer) */}
        <div className="p-4 border-t border-[var(--border)] bg-[rgba(212,175,55,0.01)]">
          <div className="flex items-center gap-3 p-2 border border-transparent hover:border-[var(--border)] hover:bg-white/5 transition-all">
            <div className="relative">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-9 h-9 border border-[var(--border)] object-cover"
                />
              ) : (
                <div className="w-9 h-9 border border-[var(--gold-dim)] bg-[var(--black)] flex items-center justify-center text-[var(--gold)] text-sm font-bebas">
                  {user?.name?.charAt(0) || 'U'}
                </div>
              )}
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-[var(--black)] rounded-full" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <p className="text-xs font-bold text-[var(--text)] truncate tracking-wider uppercase">
                {user?.name || 'Administrator'}
              </p>
              <p className="text-[10px] text-[var(--gold-dim)] truncate font-mono-dm uppercase">
                Level_01_Access
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
