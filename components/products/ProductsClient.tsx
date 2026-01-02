'use client';

import { ProductCard, ProductFilters } from '@/components/products';
import { Pagination } from '@/components/members/Pagination';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts, deleteProduct } from '@/lib/actions/products';
import Link from 'next/link';
import { Plus } from 'lucide-react';

interface ProductsClientProps {
  initialProducts: any[];
}

export function ProductsClient({ initialProducts }: ProductsClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  const { data: products = initialProducts, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await getProducts();
      return response.success ? response.data : initialProducts;
    },
    initialData: initialProducts,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      await deleteMutation.mutateAsync(id);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6">
      {/* Page Heading */}
      <div className="flex flex-wrap justify-between items-end gap-4 pb-2">
        <div className="flex flex-col gap-2">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]"
          >
            Products Directory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 text-base font-normal"
          >
            Manage software products, platforms, and development teams.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/dashboard/products/create"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm shadow-blue-500/20 transition-all"
          >
            <Plus className="w-5 h-5" />
            New Product
          </Link>
        </motion.div>
      </div>

      {/* Filters */}
      <ProductFilters />

      {/* Product Grid */}
      {products.length === 0 ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm mt-1">Create your first product to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product: any, index: number) => (
            <ProductCard 
              key={product.id} 
              {...product} 
              index={index}
              onDelete={() => handleDelete(product.id)}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-center pt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={1}
          totalResults={products.length}
          resultsPerPage={products.length}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

