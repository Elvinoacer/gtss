import { ChecklistItem } from './ChecklistItem';
import { FileText, XCircle, RefreshCw, History, Terminal, Calendar, AlertCircle, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface DeploymentCardProps {
  company: string;
  environment: 'PROD' | 'STAGING' | 'DEV';
  product: string;
  status: 'deploying' | 'failed' | 'success' | 'queued';
  progress?: number;
  progressLabel?: string;
  error?: string;
  completedTime?: string;
  checklist: Array<{
    label: string;
    status: 'completed' | 'in-progress' | 'pending' | 'failed';
  }>;
  metadata?: {
    duration?: string;
    version?: string;
    team?: { name: string; avatars: string[] };
    scheduledFor?: string;
  };
  index: number;
}

const statusConfig = {
  deploying: {
    borderColor: 'border-orange-200 dark:border-orange-900/30',
    barColor: 'bg-orange-500',
    badge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wide">
        <span className="size-2 rounded-full bg-orange-500 animate-pulse"></span>
        Deploying
      </span>
    ),
  },
  failed: {
    borderColor: 'border-red-200 dark:border-red-900/30',
    barColor: 'bg-red-500',
    badge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wide">
        <AlertCircle className="w-4 h-4" />
        Failed
      </span>
    ),
  },
  success: {
    borderColor: 'border-gray-100 dark:border-gray-800',
    barColor: 'bg-[#13ec6d]',
    badge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wide">
        <Check className="w-4 h-4" />
        Success
      </span>
    ),
  },
  queued: {
    borderColor: 'border-gray-100 dark:border-gray-800',
    barColor: 'bg-gray-300 dark:bg-gray-600',
    badge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-bold uppercase tracking-wide">
        <Calendar className="w-4 h-4" />
        Queued
      </span>
    ),
  },
};

export function DeploymentCard({
  company,
  environment,
  product,
  status,
  progress = 0,
  progressLabel,
  error,
  completedTime,
  checklist,
  metadata,
  index,
}: DeploymentCardProps) {
  const config = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row gap-6 rounded-xl bg-white dark:bg-[#162e21] p-6 shadow-sm border ${config.borderColor} relative overflow-hidden ${status === 'success' ? 'group' : ''} ${status === 'queued' ? 'opacity-80 hover:opacity-100 transition-opacity' : ''}`}
    >
      <div className={`absolute top-0 left-0 w-1 h-full ${config.barColor}`}></div>

      {/* Left: Info & Progress */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{company}</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 tracking-wide">
                {environment}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{product}</p>
          </div>
          {config.badge}
        </div>

        {/* Progress Bar */}
        {(status === 'deploying' || status === 'success') && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium">
              <span className={status === 'deploying' ? 'text-orange-600 dark:text-orange-400' : 'text-gray-600 dark:text-gray-400'}>
                {progressLabel || `Completed ${completedTime}`}
              </span>
              <span className={`font-bold ${status === 'success' ? 'text-[#13ec6d]' : 'text-slate-900 dark:text-white'}`}>
                {progress}%
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${config.barColor} rounded-full transition-all duration-500`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/20">
            <p className="text-xs text-red-700 dark:text-red-300 font-mono flex items-start gap-2">
              <Terminal className="w-4 h-4 shrink-0 mt-0.5" />
              {error}
            </p>
          </div>
        )}

        {/* Scheduled Info */}
        {metadata?.scheduledFor && (
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mt-2">
            <Calendar className="w-4 h-4" />
            Scheduled for {metadata.scheduledFor}
          </div>
        )}

        {/* Action Buttons */}
        {status === 'deploying' && (
          <div className="flex gap-4 mt-2">
            <button className="text-xs font-bold text-slate-900 dark:text-white hover:text-[#13ec6d] flex items-center gap-1">
              <FileText className="w-4 h-4" /> View Logs
            </button>
            <button className="text-xs font-bold text-slate-900 dark:text-white hover:text-red-500 flex items-center gap-1">
              <XCircle className="w-4 h-4" /> Abort
            </button>
          </div>
        )}

        {status === 'failed' && (
          <div className="flex gap-4 mt-auto">
            <button className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold flex items-center gap-2 transition-colors">
              <RefreshCw className="w-4 h-4" /> Retry Deployment
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 text-xs font-bold transition-colors">
              Rollback to v1.1
            </button>
          </div>
        )}

        {status === 'success' && (
          <div className="flex gap-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1">
              <History className="w-4 h-4" /> History
            </button>
            <button className="text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1">
              <FileText className="w-4 h-4" /> Logs
            </button>
          </div>
        )}

        {status === 'queued' && metadata?.scheduledFor && (
          <div className="flex md:hidden">
            <button className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#13ec6d] hover:text-[#13ec6d] transition-all text-xs font-bold flex items-center gap-2">
              Edit Schedule
            </button>
          </div>
        )}
      </div>

      {/* Right: Checklist or Metadata */}
      <div className={`w-full md:w-80 border-l border-gray-100 dark:border-gray-800 pl-0 md:pl-6 pt-4 md:pt-0 ${status === 'failed' ? 'opacity-70' : ''}`}>
        {status === 'queued' ? (
          <div className="hidden md:flex items-center justify-start">
            <button className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#13ec6d] hover:text-[#13ec6d] transition-all text-xs font-bold flex items-center gap-2">
              Edit Schedule
            </button>
          </div>
        ) : status === 'success' && metadata?.team ? (
          <>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {metadata.team.avatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="size-8 rounded-full ring-2 ring-white dark:ring-[#162e21] bg-gray-200 bg-cover bg-center"
                    style={{ backgroundImage: `url(${avatar})` }}
                  ></div>
                ))}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Deployed by <span className="text-slate-900 dark:text-white font-medium">{metadata.team.name}</span>
              </div>
            </div>
            {metadata.duration && metadata.version && (
              <div className="mt-4 p-3 bg-gray-50 dark:bg-[#1a2c22] rounded-lg">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Duration</span>
                  <span className="font-medium text-slate-900 dark:text-white">{metadata.duration}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600 dark:text-gray-400">Version</span>
                  <span className="font-medium text-slate-900 dark:text-white">{metadata.version}</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
              Checklist
            </p>
            <ul className="space-y-3">
              {checklist.map((item, idx) => (
                <ChecklistItem key={idx} {...item} />
              ))}
            </ul>
          </>
        )}
      </div>
    </motion.div>
  );
}
