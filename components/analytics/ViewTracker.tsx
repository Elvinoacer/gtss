'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackProductView } from '@/lib/actions/analytics';

interface ViewTrackerProps {
  productId?: string;
}

export function ViewTracker({ productId }: ViewTrackerProps) {
  const pathname = usePathname();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Debounce view tracking to avoid rapid-fire writes during fast navigation
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      trackPageView(pathname);

      if (productId) {
        trackProductView(productId);
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname, productId]);

  return null;
}
