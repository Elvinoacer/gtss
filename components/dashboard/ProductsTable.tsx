'use client';

import { motion } from 'framer-motion';
import { Filter, Download, MoreVertical, Database } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/lib/actions/products';

interface ProductsTableProps {
  initialProducts: any[];
}

export function ProductsTable({ initialProducts }: ProductsTableProps) {
  const { data: products = initialProducts } = useQuery({
    queryKey: ['dashboard-products'],
    queryFn: async () => {
      const response = await getProducts();
      return response.success ? response.data : initialProducts;
    },
    initialData: initialProducts,
  });

  const getStageStyles = (status: string) => {
    const styles: Record<string, string> = {
      live: 'text-[#0bda62] border-[#0bda62]/20 bg-[#0bda62]/5',
      beta: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
      deprecated: 'text-amber-500 border-amber-500/20 bg-amber-500/5',
    };
    return styles[status] || styles.live;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-[rgba(255,255,255,0.02)] border border-[var(--border)] relative overflow-hidden"
    >
      <div className="p-6 border-b border-[var(--border)] flex flex-wrap justify-between items-center gap-4 bg-[rgba(212,175,55,0.01)]">
        <div className="flex items-center gap-3">
          <Database className="w-5 h-5 text-[var(--gold)]" />
          <h2 className="text-xl font-bebas tracking-widest text-[var(--text)] uppercase">
            Active_Node_Registry
          </h2>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 text-[10px] font-bold text-[var(--text-muted)] hover:text-[var(--text)] border border-[var(--border)] hover:border-[var(--gold-dim)] transition-all uppercase tracking-widest"
          >
            <Filter className="w-4 h-4" />
            Filter_Logs
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 text-[10px] font-bold text-[var(--black)] bg-[var(--gold-dim)] hover:bg-[var(--gold)] transition-all uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.1)]"
          >
            <Download className="w-4 h-4" />
            Export_Registry
          </motion.button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-[rgba(255,255,255,0.02)] text-[10px] uppercase font-mono-dm tracking-[0.2em] text-[var(--gold-dim)]">
            <tr className="border-b border-[var(--border)]">
              <th scope="col" className="px-6 py-5">
                Node_Identification
              </th>
              <th scope="col" className="px-6 py-5">
                Operational_Stage
              </th>
              <th scope="col" className="px-6 py-5">
                Sector_Category
              </th>
              <th scope="col" className="px-6 py-5 text-right">
                Asset_Value
              </th>
              <th scope="col" className="px-6 py-5 text-center">
                Protocol_Integrity
              </th>
              <th scope="col" className="px-6 py-5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {products.map((product: any, index: number) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="hover:bg-[rgba(212,175,55,0.02)] transition-colors group"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 border border-[var(--border)] bg-[rgba(212,175,55,0.03)] flex items-center justify-center text-[var(--gold)] font-bebas text-lg group-hover:border-[var(--gold-dim)] transition-colors">
                      {product.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-[var(--text)] uppercase tracking-wider text-xs">
                        {product.name}
                      </p>
                      <p className="text-[10px] font-mono-dm text-[var(--gold-dim)] uppercase tracking-tighter opacity-70">
                        UID: {product.productId || 'UNKNOWN_SEC_ID'}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold border uppercase tracking-widest ${getStageStyles(
                      product.status
                    )}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 ${
                        product.status === 'live'
                          ? 'bg-[#0bda62]'
                          : product.status === 'beta'
                          ? 'bg-purple-500'
                          : 'bg-amber-500'
                      } ${product.status === 'live' ? 'animate-pulse' : ''}`}
                    ></span>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-[10px] font-mono-dm uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">
                    {product.category || 'GENERAL_SYSTEM'}
                  </span>
                </td>
                <td className="px-6 py-5 text-right font-mono-dm text-xs text-[var(--gold)]">
                  {product.pricing}
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-24 h-1 bg-[var(--border)] relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `85%` }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                        className="absolute top-0 left-0 h-full bg-[var(--gold)] opacity-50"
                      />
                    </div>
                    <span className="text-[9px] font-mono-dm text-[var(--gold-dim)] uppercase tracking-tighter">85%_SECURE</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors p-1 border border-transparent hover:border-[var(--border)]">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer / Pagination Placeholder */}
      <div className="p-4 border-t border-[var(--border)] bg-[rgba(255,255,255,0.01)] flex justify-between items-center">
        <span className="text-[10px] font-mono-dm text-[var(--gold-dim)] uppercase tracking-[0.2em]">Total_Nodes: {products.length}</span>
        <div className="flex gap-1">
          {[1, 2, 3].map((p) => (
            <button key={p} className={`w-6 h-6 text-[10px] font-mono-dm border transition-colors ${p === 1 ? 'bg-[var(--gold)] text-[var(--black)] border-[var(--gold)]' : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--gold-dim)]'}`}>
              {p}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
