import { Filter, CheckCircle, Clock, Send, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';


interface TransactionsTableProps {
  initialTransactions?: any[];
}

const iconMap: Record<string, LucideIcon> = {
  CheckCircle,
  Clock,
  Send,
};

export function TransactionsTable({ initialTransactions }: TransactionsTableProps) {
  const transactions = initialTransactions || [];

  const getStatusInfo = (status: string) => {
    switch (status.toLowerCase()) {
      case 'closed won':
      case 'completed':
        return { color: 'bg-success/10 text-success', icon: CheckCircle };
      case 'negotiation':
      case 'pending':
        return { color: 'bg-warning/10 text-warning', icon: Clock };
      case 'proposal sent':
      case 'processing':
        return { color: 'bg-accent/10 text-accent', icon: Send };
      default:
        return { color: 'bg-gray-100 text-gray-600', icon: Clock };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white dark:bg-[#1a2e22] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden mb-10"
    >
      <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
        <h3 className="text-lg font-bold text-[#111814] dark:text-white">Recent Transactions</h3>
        <button className="text-sm text-gray-500 hover:text-accent font-medium flex items-center gap-1 transition-colors">
          <span>Filter</span>
          <Filter className="w-4 h-4" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
          <thead className="bg-gray-50 dark:bg-[#13221b] text-xs uppercase font-semibold">
            <tr>
              <th className="px-6 py-4 text-[#111814] dark:text-white">Deal Name</th>
              <th className="px-6 py-4 text-[#111814] dark:text-white">Client</th>
              <th className="px-6 py-4 text-[#111814] dark:text-white">Sales Rep</th>
              <th className="px-6 py-4 text-[#111814] dark:text-white text-right">Amount</th>
              <th className="px-6 py-4 text-[#111814] dark:text-white text-center">Status</th>
              <th className="px-6 py-4 text-[#111814] dark:text-white text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {transactions.map((tx, index) => {
              let statusInfo;
              if (tx.statusIconName) {
                 statusInfo = { 
                   color: tx.statusColor, 
                   icon: iconMap[tx.statusIconName] || Clock 
                 };
              } else {
                 statusInfo = getStatusInfo(tx.status);
              }
              
              const StatusIcon = statusInfo.icon;
              
              return (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-[#111814] dark:text-white">{tx.deal || tx.id}</td>
                  <td className="px-6 py-4">{tx.client || tx.customer?.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="size-6 rounded-full bg-gray-200 bg-cover bg-center"
                        style={{ backgroundImage: `url(${tx.repAvatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'})` }}
                      ></div>
                      <span>{tx.rep || 'System'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-[#111814] dark:text-white">
                    {typeof tx.amount === 'number' ? `$${tx.amount.toLocaleString()}` : tx.amount}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${statusInfo.color}`}>
                      <StatusIcon className="w-3.5 h-3.5" />
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {tx.date instanceof Date ? tx.date.toLocaleDateString() : tx.date}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex justify-center">
        <button className="text-sm text-gray-500 hover:text-accent font-medium transition-colors">
          Show All Transactions
        </button>
      </div>
    </motion.div>
  );
}
