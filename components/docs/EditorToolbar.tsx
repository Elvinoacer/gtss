'use client';

import { motion } from 'framer-motion';
import { 
  Heading1, 
  Pilcrow, 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough,
  List,
  ListOrdered,
  Link as LinkIcon,
  Image,
  Code,
  Table
} from 'lucide-react';

interface ToolbarButton {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function EditorToolbar() {
  const textButtons: ToolbarButton[] = [
    { icon: <Heading1 className="w-5 h-5" />, label: 'Heading 1' },
    { icon: <Pilcrow className="w-5 h-5" />, label: 'Paragraph' },
  ];

  const formatButtons: ToolbarButton[] = [
    { icon: <Bold className="w-5 h-5" />, label: 'Bold', isActive: true },
    { icon: <Italic className="w-5 h-5" />, label: 'Italic' },
    { icon: <Underline className="w-5 h-5" />, label: 'Underline' },
    { icon: <Strikethrough className="w-5 h-5" />, label: 'Strikethrough' },
  ];

  const listButtons: ToolbarButton[] = [
    { icon: <List className="w-5 h-5" />, label: 'Bullet List' },
    { icon: <ListOrdered className="w-5 h-5" />, label: 'Numbered List' },
  ];

  const insertButtons: ToolbarButton[] = [
    { icon: <LinkIcon className="w-5 h-5" />, label: 'Link' },
    { icon: <Image className="w-5 h-5" />, label: 'Image' },
    { icon: <Code className="w-5 h-5" />, label: 'Code Block' },
    { icon: <Table className="w-5 h-5" />, label: 'Table' },
  ];

  const ToolButton = ({ icon, label, isActive }: ToolbarButton) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`p-1.5 rounded transition-colors ${
        isActive
          ? 'bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-white'
          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-slate-900 dark:hover:text-white'
      }`}
      title={label}
    >
      {icon}
    </motion.button>
  );

  return (
    <div className="flex items-center gap-1 px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e293b] sticky top-0 z-10 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-1 pr-2 border-r border-gray-200 dark:border-gray-700">
        {textButtons.map((btn, i) => (
          <ToolButton key={i} {...btn} />
        ))}
      </div>
      <div className="flex items-center gap-1 px-2 border-r border-gray-200 dark:border-gray-700">
        {formatButtons.map((btn, i) => (
          <ToolButton key={i} {...btn} />
        ))}
      </div>
      <div className="flex items-center gap-1 px-2 border-r border-gray-200 dark:border-gray-700">
        {listButtons.map((btn, i) => (
          <ToolButton key={i} {...btn} />
        ))}
      </div>
      <div className="flex items-center gap-1 pl-2">
        {insertButtons.map((btn, i) => (
          <ToolButton key={i} {...btn} />
        ))}
      </div>
      <div className="flex-1"></div>
      <div className="text-xs text-gray-500 dark:text-gray-400 pr-2">
        Words: 1,240
      </div>
    </div>
  );
}
