import { getProducts } from '@/lib/actions/products';
import { PublicProductsClient } from '@/components/products/PublicProductsClient';
import { ProductHeader } from '@/components/products/ProductHeader';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Product Directory",
  description: "Explore our suite of practical software solutions designed for local businesses, from hotel management to e-commerce platforms.",
  openGraph: {
    title: "GTSS Product Directory",
    description: "Explore our suite of practical software solutions designed for local businesses.",
  },
};

export default async function ProductsPage() {
  const response = await getProducts();
  const products = (response.success && response.data) ? response.data : [];

  return (
    <div className="pb-24">
      <ProductHeader />

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-30">
        <PublicProductsClient products={products} />
      </section>

      {/* Custom Solutions CTA */}
      <section className="mt-32 container mx-auto px-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[3rem] p-12 md:p-20 text-center shadow-2xl shadow-slate-900/20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 size-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 size-64 bg-emerald-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Need something custom built?
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-10 font-medium opacity-90">
              Our expert team specializes in building bespoke software solutions tailored to your unique business requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="/contact"
                className="px-8 py-4 bg-[#2563EB] text-white font-bold rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/25"
              >
                Start a Project
              </a>
              <a 
                href="/about"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-sm"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
