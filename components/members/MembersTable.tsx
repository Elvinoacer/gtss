'use client';

import { motion } from 'framer-motion';
import { MoreVertical, Edit2, User, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { membersList, TeamMember } from '@/data/teams';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTeamMembers, deleteTeamMember } from '@/lib/actions/teams';

interface MembersTableProps {
  initialMembers: any[];
  onEdit?: (member: any) => void;
}

export function MembersTable({ initialMembers, onEdit }: MembersTableProps) {
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const queryClient = useQueryClient();

  const { data: members = initialMembers } = useQuery({
    queryKey: ['team-members'],
    queryFn: async () => {
      const response = await getTeamMembers();
      return response.success ? response.data : initialMembers;
    },
    initialData: initialMembers,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTeamMember,
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ['team-members'] });
      } else {
        alert(result.error || 'Failed to delete member');
      }
    },
    onError: (error) => {
      console.error('Delete mutation error:', error);
      alert('An unexpected error occurred while deleting.');
    },
  });

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      deleteMutation.mutate(id);
    }
  };


  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(members.map((m: any) => m.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectMember = (id: string) => {
    if (selectedMembers.includes(id)) {
      setSelectedMembers(selectedMembers.filter((m) => m !== id));
    } else {
      setSelectedMembers([...selectedMembers, id]);
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'active':
        return {
          bg: 'bg-emerald-100 dark:bg-emerald-900/30',
          text: 'text-emerald-800 dark:text-emerald-400',
          dot: 'bg-emerald-500',
        };
      case 'leave':
        return {
          bg: 'bg-amber-100 dark:bg-amber-900/30',
          text: 'text-amber-800 dark:text-amber-400',
          dot: 'bg-amber-500',
        };
      case 'inactive':
        return {
          bg: 'bg-red-100 dark:bg-red-900/30',
          text: 'text-red-800 dark:text-red-400',
          dot: 'bg-red-500',
        };
      default:
        return {
          bg: 'bg-gray-100 dark:bg-gray-900/30',
          text: 'text-gray-800 dark:text-gray-400',
          dot: 'bg-gray-500',
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex-1 flex flex-col bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-slate-800/50 border-b border-gray-200 dark:border-gray-700">
              <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 w-16">
                <input
                  className="rounded border-gray-300 dark:border-gray-600 text-[#2563eb] focus:ring-[#2563eb] h-4 w-4"
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Name
              </th>
              <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Role
              </th>
              <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 hidden md:table-cell">
                Team
              </th>
              <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                Join Date
              </th>
              <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Status
              </th>
              <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {members.map((member: any, index: number) => {
              const statusStyles = getStatusStyles(member.status);

              return (
                <motion.tr
                  key={member.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors group"
                >
                  <td className="py-4 px-6">
                    <input
                      className="rounded border-gray-300 dark:border-gray-600 text-[#2563eb] focus:ring-[#2563eb] h-4 w-4"
                      type="checkbox"
                      checked={selectedMembers.includes(member.id)}
                      onChange={() => handleSelectMember(member.id)}
                    />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="rounded-full size-10 shadow-sm ring-2 ring-white dark:ring-gray-700 object-cover"
                        />
                      ) : (
                        <div className="rounded-full size-10 bg-gradient-to-br from-[#2563eb] to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                          {member.name.substring(0, 2)}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {member.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {member.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-900 dark:text-gray-200">
                    {member.role}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">
                    {member.team}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                    {member.joinDate ? new Date(member.joinDate).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles.bg} ${statusStyles.text}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 mr-1.5 rounded-full ${statusStyles.dot}`}
                      ></span>
                      {member.status === 'active'
                        ? 'Active'
                        : member.status === 'leave'
                        ? 'On Leave'
                        : 'Inactive'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/dashboard/teams/${member.id}/edit`}
                        className="p-1.5 text-gray-500 hover:text-[#2563eb] dark:text-gray-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        title="Edit Member"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/dashboard/teams/${member.id}`}
                        className="p-1.5 text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors"
                        title="View Profile"
                      >
                        <User className="w-4 h-4" />
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDelete(member.id, member.name)}
                        disabled={deleteMutation.isPending}
                        className="p-1.5 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
                        title="Delete Member"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
