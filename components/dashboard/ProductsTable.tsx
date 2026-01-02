import { motion } from 'framer-motion';
import { Filter, Download, MoreVertical } from 'lucide-react';
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
      live: 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/20',
      beta: 'bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-500/20',
      deprecated: 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
    };
    return styles[status] || styles.live;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white dark:bg-[#1e293b] rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm overflow-hidden"
    >
      <div className="p-6 border-b border-gray-100 dark:border-gray-700/50 flex flex-wrap justify-between items-center gap-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Active Product Portfolio
        </h2>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-slate-300 bg-gray-100 dark:bg-[#14171e] rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filter
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-slate-300 bg-gray-100 dark:bg-[#14171e] rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export
          </motion.button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-slate-400">
          <thead className="bg-gray-50 dark:bg-[#14171e]/50 text-xs uppercase font-semibold text-gray-500 dark:text-slate-400">
            <tr>
              <th scope="col" className="px-6 py-4">
                Product Name
              </th>
              <th scope="col" className="px-6 py-4">
                Stage
              </th>
              <th scope="col" className="px-6 py-4">
                Category
              </th>
              <th scope="col" className="px-6 py-4 text-right">
                Pricing
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                Health
              </th>
              <th scope="col" className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
            {products.map((product: any, index: number) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-9 w-9 rounded bg-gradient-to-br ${product.iconColor || 'from-blue-500 to-blue-600'} flex items-center justify-center text-white font-bold text-xs shadow-md`}
                    >
                      {product.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {product.name}
                      </p>
                      <p className="text-xs">{product.productId}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStageStyles(
                      product.status
                    )}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        product.status === 'live'
                          ? 'bg-blue-500'
                          : product.status === 'beta'
                          ? 'bg-purple-500'
                          : 'bg-amber-500'
                      }`}
                    ></span>
                    {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm">{product.category}</span>
                </td>
                <td className="px-6 py-4 text-right font-medium text-gray-900 dark:text-white">
                  {product.pricing}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-block w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: `85%` }} // Dummy health for now
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className="block h-full bg-[#0bda62]"
                    />
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-gray-700 rounded">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
