'use client';

import Link from 'next/link';

export default function EnterprisePage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-6">Enterprise Solutions</h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
        Tailored solutions for large-scale organizations requiring dedicated support, custom integrations, and enhanced security.
      </p>
      <Link 
        href="/contact" 
        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2563EB] text-white font-bold hover:bg-blue-700 transition-colors"
      >
        Contact Sales
      </Link>
    </div>
  );
}
