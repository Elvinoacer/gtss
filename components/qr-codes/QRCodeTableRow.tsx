'use client';

import { Copy, Download, MoreVertical, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface QRCodeTableRowProps {
  id: string;
  name: string;
  url: string;
  product: string;
  type: string;
  typeColor: 'blue' | 'purple' | 'green' | 'orange';
  created: string;
  qrThumbnail: string;
  index: number;
}

const typeColorMap = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
};

export function QRCodeTableRow({
  id,
  name,
  url,
  product,
  type,
  typeColor,
  created,
  qrThumbnail,
  index,
}: QRCodeTableRowProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    // Could add toast notification here
  };

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
    >
      <td className="p-4 text-center">
        <div className="h-10 w-10 bg-white p-0.5 rounded border border-gray-200 mx-auto cursor-zoom-in hover:scale-110 transition-transform">
          <img
            src={qrThumbnail}
            alt="QR Code"
            className="w-full h-full object-contain"
          />
        </div>
      </td>
      <td className="p-4">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-slate-900 dark:text-white text-sm">
            {name}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <LinkIcon className="w-3.5 h-3.5" />
            <span className="truncate max-w-[200px] font-mono">{url}</span>
          </div>
        </div>
      </td>
      <td className="p-4">
        <span className="text-sm text-gray-700 dark:text-gray-300">{product}</span>
      </td>
      <td className="p-4">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColorMap[typeColor]}`}
        >
          {type}
        </span>
      </td>
      <td className="p-4">
        <span className="text-sm text-gray-500">{created}</span>
      </td>
      <td className="p-4 text-right">
        <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCopy}
            className="p-1.5 text-gray-400 hover:text-[#2563eb] hover:bg-[#2563eb]/10 rounded-md transition-colors"
            title="Copy Link"
          >
            <Copy className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1.5 text-gray-400 hover:text-[#2563eb] hover:bg-[#2563eb]/10 rounded-md transition-colors"
            title="Download QR"
          >
            <Download className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
            title="More Options"
          >
            <MoreVertical className="w-5 h-5" />
          </motion.button>
        </div>
      </td>
    </motion.tr>
  );
}
