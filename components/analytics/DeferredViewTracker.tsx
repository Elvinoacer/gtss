"use client";

import { useEffect, useState } from "react";
import { ViewTracker, type ViewTrackerProps } from "./ViewTracker";

export function DeferredViewTracker(props: ViewTrackerProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;
  return <ViewTracker {...props} />;
}
