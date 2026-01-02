"use client";

import { motion } from "framer-motion";
import { Badge, Edit, MoreHorizontal } from "lucide-react";
import Link from "next/link";

interface ProfileHeaderProps {
  id: string;
  name: string;
  employeeId: string;
  role: string;
  department: string;
  avatar?: string;
  isActive?: boolean;
}

export function ProfileHeader({
  id,
  name,
  employeeId,
  role,
  department,
  avatar,
  isActive = true,
}: ProfileHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8"
    >
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="relative">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="size-20 md:size-24 rounded-xl object-cover border-4 border-white dark:border-slate-900 shadow-sm"
            />
          ) : (
            <div className="size-20 md:size-24 rounded-xl bg-gradient-to-br from-[#2563eb] to-blue-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold border-4 border-white dark:border-slate-900 shadow-sm">
              {name.substring(0, 2)}
            </div>
          )}
          {isActive && (
            <div
              className="absolute -bottom-2 -right-2 bg-green-500 size-5 rounded-full border-4 border-white dark:border-slate-900"
              title="Active Status"
            ></div>
          )}
        </div>
        <div className="pt-1">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1">
            {name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <Badge className="w-4 h-4" />
              {employeeId}
            </span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
            <span className="font-medium text-[#2563eb]">{role}</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
            <span>{department}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-lg text-slate-900 dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <MoreHorizontal className="w-5 h-5" />
        </motion.button>
        <Link href={`/dashboard/teams/${id}/edit`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg text-sm font-semibold shadow-sm transition-colors"
          >
            <Edit className="w-5 h-5" />
            Edit Profile
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
