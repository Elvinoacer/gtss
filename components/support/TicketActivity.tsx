'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paperclip, Image as ImageIcon, Smile, Send } from 'lucide-react';
import { CommentItem } from './CommentItem';

interface Activity {
  id: string;
  type: 'comment' | 'note';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
}

interface TicketActivityProps {
  activities: Activity[];
}

export function TicketActivity({ activities }: TicketActivityProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'notes' | 'replies'>('all');
  const [comment, setComment] = useState('');
  const [isInternal, setIsInternal] = useState(false);

  const filteredActivities = activities.filter(activity => {
    if (activeTab === 'notes') return activity.type === 'note';
    if (activeTab === 'replies') return activity.type === 'comment';
    return true;
  });

  return (
    <div className="bg-white dark:bg-[#1a2e22] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col">
      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-gray-100 dark:border-gray-800 px-4 pt-4">
        {[
          { id: 'all', label: 'All Activity' },
          { id: 'notes', label: 'Internal Notes' },
          { id: 'replies', label: 'Customer Replies' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${
              activeTab === tab.id
                ? 'text-navy dark:text-white border-accent'
                : 'text-text-subtle border-transparent hover:text-navy dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          {filteredActivities.map((activity) => (
            <CommentItem
              key={activity.id}
              author={activity.author}
              content={activity.content}
              timestamp={activity.timestamp}
              isInternal={activity.type === 'note'}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 dark:bg-gray-800 w-full my-2"></div>

        {/* Reply Input */}
        <div className="flex gap-4">
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 ring-2 ring-gray-100 dark:ring-gray-800"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop)` }}
          ></div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="relative w-full">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={`w-full rounded-lg border p-4 text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none min-h-[120px] resize-y transition-all ${
                  isInternal 
                    ? 'bg-warning/5 border-warning/20 dark:bg-warning/10' 
                    : 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800'
                } text-navy dark:text-white placeholder:text-text-subtle`}
                placeholder={isInternal ? "Add an internal note..." : "Type your reply here..."}
              ></textarea>
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button className="p-1.5 text-text-subtle hover:text-accent transition-colors rounded-md hover:bg-white dark:hover:bg-gray-800">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="p-1.5 text-text-subtle hover:text-accent transition-colors rounded-md hover:bg-white dark:hover:bg-gray-800">
                  <ImageIcon className="w-5 h-5" />
                </button>
                <button className="p-1.5 text-text-subtle hover:text-accent transition-colors rounded-md hover:bg-white dark:hover:bg-gray-800">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={isInternal}
                    onChange={(e) => setIsInternal(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-10 h-5 rounded-full transition-colors ${isInternal ? 'bg-warning' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                  <div className={`absolute left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${isInternal ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
                <span className="text-sm text-text-subtle group-hover:text-navy dark:group-hover:text-white transition-colors">
                  Internal note only
                </span>
              </label>
              <button className="bg-navy hover:bg-navy/90 dark:bg-white dark:text-navy dark:hover:bg-gray-100 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-sm transition-all flex items-center gap-2">
                <Send className="w-4 h-4" />
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
