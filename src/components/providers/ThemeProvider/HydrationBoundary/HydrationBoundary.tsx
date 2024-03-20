"use client";

import {
  HydrationBoundary as RQHydrationBoundary,
  HydrationBoundaryProps,
} from "@tanstack/react-query";

export const HydrationBoundary = (props: HydrationBoundaryProps) => {
  return <RQHydrationBoundary {...props} />;
};
