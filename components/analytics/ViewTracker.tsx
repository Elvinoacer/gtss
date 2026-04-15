"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageView, trackProductView } from "@/lib/actions/analytics";

export interface ViewTrackerProps {
  productId?: string;
  trackPage?: boolean;
}

export function ViewTracker({ productId, trackPage = true }: ViewTrackerProps) {
  const pathname = usePathname();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // De-dupe within the browser session to avoid repeat writes on refresh/navigation.
    const pageKey = `gtss:view:page:${pathname}`;
    const productKey = productId ? `gtss:view:product:${productId}` : null;

    if (trackPage && sessionStorage.getItem(pageKey)) {
      return;
    }

    if (productKey && sessionStorage.getItem(productKey)) {
      return;
    }

    // Debounce tracking and let main content hydrate first.
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (trackPage) {
        sessionStorage.setItem(pageKey, "1");
        void trackPageView(pathname);
      }

      if (productId && productKey) {
        sessionStorage.setItem(productKey, "1");
        void trackProductView(productId);
      }
    }, 1500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname, productId, trackPage]);

  return null;
}
