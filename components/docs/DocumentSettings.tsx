'use client';

import { motion } from 'framer-motion';
import { Plus, Lock } from 'lucide-react';

export function DocumentSettings() {
  const tags = ['Developers', 'Internal'];

  return (
    <aside className="w-72 bg-white dark:bg-[#1e293b] border-l border-gray-200 dark:border-gray-700 hidden xl:flex flex-col shrink-0 overflow-y-auto">
      <div className="p-5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
          Document Settings
        </h3>
        <div className="space-y-6">
          {/* Status */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
              Status
            </label>
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-400 ring-2 ring-yellow-400/20"></span>
              <span className="text-sm font-medium">Draft</span>
            </div>
          </div>

          {/* Parent Product */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
              Parent Product
            </label>
            <select className="w-full bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-gray-600 rounded-lg text-sm px-3 py-2 focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb] outline-none">
              <option>Platform X</option>
              <option>Payment Gateway</option>
              <option>User Management</option>
            </select>
          </div>

          {/* Author */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
              Author
            </label>
            <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900">
              <div
                className="size-6 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop)',
                }}
              ></div>
              <span className="text-sm">Jane Doe</span>
            </div>
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
              Audience
            </label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
              <button className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 dark:bg-slate-900 border border-dashed border-gray-400 text-gray-600 dark:text-gray-400 hover:text-[#2563eb] hover:border-[#2563eb] transition-colors">
                <Plus className="w-3 h-3 mr-1" />
                Tag
              </button>
            </div>
          </div>

          {/* Visibility */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
              Visibility
            </label>
            <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-gray-500" />
                <span className="text-sm">Private</span>
              </div>
              <button className="text-xs text-[#2563eb] font-medium hover:underline">
                Change
              </button>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
            History
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 relative">
              <div className="absolute left-[5px] top-6 bottom-[-16px] w-px bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563eb] ring-4 ring-white dark:ring-[#1e293b] shrink-0"></div>
              <div>
                <p className="text-sm font-medium">Draft saved</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Just now by You
                </p>
              </div>
            </li>
            <li className="flex gap-3 relative">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-200 dark:bg-gray-700 ring-4 ring-white dark:ring-[#1e293b] shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Published v1.2
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  2 days ago by Sarah M.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
