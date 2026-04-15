import { ChevronDown } from 'lucide-react';

import { pricingFaqs } from '@/data/pricing';

export function PricingFAQ() {
  return (
    <section className="px-4 py-20 bg-slate-50 dark:bg-[#101322]">
      <div className="max-w-[720px] mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[#111218] dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-[#616889] dark:text-gray-400">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="space-y-4">
          {pricingFaqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group bg-white dark:bg-[#1a1d2d] rounded-xl border border-[#dbdde6] dark:border-gray-800 overflow-hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-1.5 p-6 text-[#111218] dark:text-white text-left">
                <h2 className="text-lg font-bold">{faq.question}</h2>
                <ChevronDown className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#616889] dark:text-gray-400">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
