import { landingHowItWorks } from '@/data/landing';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0d111a]" id="how-it-works">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col gap-24">
        {landingHowItWorks.map((row, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${row.reverse ? 'md:flex-row-reverse' : ''}`}>
            <motion.div 
              initial={{ opacity: 0, x: row.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full"
            >
              <div className="aspect-video w-full rounded-xl bg-gray-200 dark:bg-gray-800 shadow-lg overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url("${row.image}")` }}
                ></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: row.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex flex-col gap-4"
            >
              <div className="w-12 h-1 bg-[#3f65e4] mb-2"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#111317] dark:text-white">{row.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {row.description}
              </p>
              {row.items && row.items.length > 0 && (
                <ul className="flex flex-col gap-2 mt-2">
                  {row.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-medium text-[#111317] dark:text-gray-200">
                      <Check className="w-5 h-5 text-[#3f65e4]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {row.cta && (
                <Link href={(row as any).ctaHref || '#'} className="w-fit mt-4 text-[#3f65e4] font-bold hover:text-blue-700 transition-colors flex items-center gap-1">
                  {row.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
