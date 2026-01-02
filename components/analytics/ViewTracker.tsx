'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackProductView } from '@/actions/analytics';

interface ViewTrackerProps {
  productId?: string;
}

export function ViewTracker({ productId }: ViewTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view
    trackPageView(pathname);

    // Track product view if productId is provided
    if (productId) {
      trackProductView(productId);
    }
  }, [pathname, productId]);

  return null;
}
