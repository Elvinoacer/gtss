'use client';

import { motion } from 'framer-motion';
import { SearchFilters } from '@/components/members/SearchFilters';
import { MembersTable } from '@/components/members/MembersTable';
import { Pagination } from '@/components/members/Pagination';
import { UserPlus } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface TeamsClientProps {
  initialMembers: any[];
}

import { MemberFormModal } from './MemberFormModal';

export function TeamsClient({ initialMembers }: TeamsClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<any>(null);

  const handleEdit = (member: any) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingMember(null);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col h-full">
      <MemberFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        member={editingMember} 
      />
      {/* Breadcrumbs */}
      <nav className="mb-4">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/dashboard"
              className="text-gray-500 dark:text-gray-400 hover:text-[#2563eb] dark:hover:text-blue-400 font-medium transition-colors"
            >
              Dashboard
            </Link>
          </li>
          <li className="text-gray-300 dark:text-gray-600">/</li>
          <li>
            <span className="text-slate-900 dark:text-white font-medium">
              Members
            </span>
          </li>
        </ol>
      </nav>

      {/* Page Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8"
      >
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
            Team Members
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            Manage your team members and their account permissions here. You
            can assign roles and track activity.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg px-5 py-2.5 h-fit shadow-lg shadow-blue-900/10 transition-all font-medium whitespace-nowrap"
        >
          <UserPlus className="w-5 h-5" />
          <span>Add Member</span>
        </motion.button>
      </motion.header>

      {/* Search & Filters */}
      <SearchFilters />

      {/* Table Container with Pagination */}
      <div className="flex-1 flex flex-col">
        <MembersTable initialMembers={initialMembers} onEdit={handleEdit} />
        <Pagination
          currentPage={currentPage}
          totalPages={1}
          totalResults={initialMembers.length}
          resultsPerPage={initialMembers.length}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Footer */}
      <div className="mt-8 mb-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-500">
          © 2024 Great Thumbs Software Solutions. All rights reserved.
        </p>
      </div>
    </div>
  );
}
