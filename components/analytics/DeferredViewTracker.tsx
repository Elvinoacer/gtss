"use client";

import dynamic from "next/dynamic";

import type { ViewTrackerProps } from "./ViewTracker";

const ViewTracker = dynamic(
  () => import("./ViewTracker").then((mod) => mod.ViewTracker),
  {
    ssr: false,
  },
);

export function DeferredViewTracker(props: ViewTrackerProps) {
  return <ViewTracker {...props} />;
}
