'use client';

import { FileText, Download, Image as ImageIcon, File } from 'lucide-react';
import { motion } from 'framer-motion';

interface Attachment {
  name: string;
  size: string;
  type: 'pdf' | 'image' | 'other';
}

interface TicketDescriptionProps {
  description: string;
  stepsToReproduce?: string[];
  attachments: Attachment[];
}

export function TicketDescription({ description, stepsToReproduce, attachments }: TicketDescriptionProps) {
  return (
    <div className="bg-white dark:bg-[#1a2e22] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/50">
        <h3 className="font-bold text-base flex items-center gap-2 text-navy dark:text-white">
          <FileText className="w-5 h-5 text-text-subtle" />
          Issue Description
        </h3>
        <button className="text-accent text-sm font-medium hover:underline">Edit</button>
      </div>
      <div className="p-6">
        <p className="text-base text-navy dark:text-gray-200 leading-relaxed">
          {description}
        </p>
        
        {stepsToReproduce && stepsToReproduce.length > 0 && (
          <div className="mt-6">
            <h4 className="font-bold text-sm text-navy dark:text-white mb-2">Steps to reproduce:</h4>
            <ul className="list-decimal list-inside space-y-1 text-navy dark:text-gray-200">
              {stepsToReproduce.map((step, index) => (
                <li key={index} className="text-base">{step}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Attachments */}
      <div className="px-6 pb-6 pt-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-3">
          Attachments ({attachments.length})
        </h4>
        <div className="flex flex-wrap gap-4">
          {attachments.map((file, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-accent/50 bg-gray-50 dark:bg-gray-800/50 group cursor-pointer transition-all"
            >
              <div className={`size-10 rounded flex items-center justify-center ${
                file.type === 'pdf' ? 'bg-error/10 text-error' : 
                file.type === 'image' ? 'bg-accent/10 text-accent' : 
                'bg-gray-100 text-gray-600'
              }`}>
                {file.type === 'pdf' ? <FileText className="w-6 h-6" /> : 
                 file.type === 'image' ? <ImageIcon className="w-6 h-6" /> : 
                 <File className="w-6 h-6" />}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium group-hover:text-accent transition-colors text-navy dark:text-white">
                  {file.name}
                </span>
                <span className="text-xs text-text-subtle">{file.size}</span>
              </div>
              <button className="ml-2 text-text-subtle hover:text-navy dark:hover:text-white">
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
