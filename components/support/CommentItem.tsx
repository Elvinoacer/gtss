'use client';

import { motion } from 'framer-motion';

interface CommentItemProps {
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  isInternal?: boolean;
}

export function CommentItem({ author, content, timestamp, isInternal }: CommentItemProps) {
  return (
    <div className="flex gap-4">
      <div 
        className={`bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 ring-2 ${
          isInternal ? 'ring-warning/30' : 'ring-gray-100 dark:ring-gray-800'
        }`}
        style={{ backgroundImage: `url(${author.avatar})` }}
      ></div>
      <div className="flex-1">
        <div className={`rounded-lg rounded-tl-none p-4 relative border ${
          isInternal 
            ? 'bg-warning/5 border-warning/20 dark:bg-warning/10' 
            : 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800'
        }`}>
          {isInternal && (
            <span className="absolute -top-3 left-0 bg-warning text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              Internal Note
            </span>
          )}
          <div className="flex justify-between items-start mb-2 mt-1">
            <h5 className="font-bold text-sm text-navy dark:text-white">
              {author.name} <span className="font-normal text-text-subtle ml-1">{author.role}</span>
            </h5>
            <span className="text-xs text-text-subtle">{timestamp}</span>
          </div>
          <p className="text-sm text-navy dark:text-gray-200 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
