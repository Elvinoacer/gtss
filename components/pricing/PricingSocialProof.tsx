import { Building2, Church, Hotel, School, Store } from 'lucide-react';

const industries = [
  { name: 'Hotels', icon: Hotel },
  { name: 'Churches', icon: Church },
  { name: 'Retailers', icon: Store },
  { name: 'Schools', icon: School },
  { name: 'Enterprises', icon: Building2 },
];

export function PricingSocialProof() {
  return (
    <section className="border-y border-[#dbdde6] dark:border-gray-800 bg-white dark:bg-[#161927] py-16">
      <div className="max-w-[960px] mx-auto px-4 flex flex-col items-center gap-8">
        <h4 className="text-[#616889] dark:text-gray-400 text-sm font-bold uppercase tracking-widest text-center">
          Built for local businesses
        </h4>
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.name} className="flex justify-center items-center">
                <span className="text-xl font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2">
                  <Icon className="w-5 h-5" /> {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
