import { z } from 'zod';

export const productIdentitySchema = z.object({
  name: z.string().min(3, 'Product name must be at least 3 characters'),
  category: z.string().min(1, 'Please select a category'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  tags: z.array(z.string()).optional(),
  icon: z.any().optional(), // File validation is handled separately or can be refined
  version: z.string().optional(),
});

export const productMediaSchema = z.object({
  // Media validation is often looser as it depends on upload state, 
  // but we can enforce at least one image if needed.
  // For now, we'll keep it optional or validate in the component.
});

export const productPricingSchema = z.object({
  pricingModel: z.enum(['free', 'one-time', 'subscription']),
  priceUSD: z.string().optional().refine((val) => {
    if (!val) return true;
    return !isNaN(parseFloat(val)) && parseFloat(val) >= 0;
  }, 'Price must be a valid positive number'),
  priceKES: z.string().optional().refine((val) => {
    if (!val) return true;
    return !isNaN(parseFloat(val)) && parseFloat(val) >= 0;
  }, 'Price must be a valid positive number'),
  billingCycle: z.enum(['monthly', 'yearly', 'quarterly']).optional(),
}).refine((data) => {
  if (data.pricingModel !== 'free') {
    // Require at least one price if not free
    return (data.priceUSD && parseFloat(data.priceUSD) > 0) || (data.priceKES && parseFloat(data.priceKES) > 0);
  }
  return true;
}, {
  message: 'Please enter a price in USD or KES',
  path: ['priceUSD'], // Attach error to priceUSD for visibility
});

export const productDetailsSchema = z.object({
  instructions: z.string().min(20, 'Instructions must be at least 20 characters'),
  features: z.array(z.object({
    title: z.string().min(1, 'Feature title is required'),
    description: z.string().optional(),
    icon: z.string().optional(),
  })).optional(),
});
