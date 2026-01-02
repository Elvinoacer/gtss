'use client';

import { 
  DemoHero, 
  DemoVideo, 
  DemoFeatures, 
  DemoReviews, 
  DemoCTA
} from '@/components/demo';

export default function DemoPage() {
  return (
    <div className="flex-grow flex flex-col items-center w-full">
      <DemoHero />
      <DemoVideo />
      <DemoFeatures />
      <DemoReviews />
      <DemoCTA />
    </div>
  );
}
