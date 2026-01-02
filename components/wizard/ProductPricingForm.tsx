'use client';

import { DollarSign, Check, AlertCircle } from 'lucide-react';

interface ProductPricingFormProps {
  data: any;
  onChange: (data: any) => void;
  errors?: Record<string, string>;
}

export function ProductPricingForm({ data, onChange, errors }: ProductPricingFormProps) {
  const pricingModels = [
    {
      id: 'one-time',
      title: 'One-Time Payment',
      description: 'Customers pay a single fee for lifetime access.',
      icon: '💎'
    },
    {
      id: 'subscription',
      title: 'Subscription',
      description: 'Recurring billing (monthly/yearly) for continued access.',
      icon: '🔄'
    },
    {
      id: 'free',
      title: 'Free / Open Source',
      description: 'No cost to the user, potentially ad-supported or donation-based.',
      icon: '🎁'
    }
  ];
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
          <DollarSign className="w-5 h-5 text-[#2563eb]" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Pricing Model</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingModels.map((model) => (
            <div
              key={model.id}
              onClick={() => onChange({ ...data, pricingModel: model.id })}
              className={`cursor-pointer relative p-6 rounded-xl border-2 transition-all ${
                data.pricingModel === model.id
                  ? 'border-[#2563eb] bg-blue-50/50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
              }`}
            >
              {data.pricingModel === model.id && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-[#2563eb] text-white rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" />
                </div>
              )}
              <div className="text-3xl mb-3">{model.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{model.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {model.description}
              </p>
            </div>
          ))}
        </div>
        {errors?.pricingModel && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.pricingModel}
          </p>
        )}
      </div>

      {/* Additional Pricing Details based on selection */}
      {data.pricingModel && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <h4 className="font-medium text-slate-900 dark:text-white">
            {data.pricingModel === 'one-time' ? 'Price Details' : 
             data.pricingModel === 'subscription' ? 'Subscription Plans' : 'Additional Info'}
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Price (USD)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  className={`w-full pl-8 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all ${
                    errors?.priceUSD ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                  }`}
                  value={data.priceUSD || ''}
                  onChange={(e) => onChange({ ...data, priceUSD: e.target.value })}
                />
              </div>
              {errors?.priceUSD && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.priceUSD}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Price (KES)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">Ksh</span>
                <input
                  type="number"
                  placeholder="0.00"
                  className={`w-full pl-12 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all ${
                    errors?.priceKES ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                  }`}
                  value={data.priceKES || ''}
                  onChange={(e) => onChange({ ...data, priceKES: e.target.value })}
                />
              </div>
              {errors?.priceKES && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.priceKES}
                </p>
              )}
            </div>
            
            {data.pricingModel === 'subscription' && (
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Billing Cycle
                </label>
                <select
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                  value={data.billingCycle || 'monthly'}
                  onChange={(e) => onChange({ ...data, billingCycle: e.target.value })}
                >
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
