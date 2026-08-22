"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type TrackingEvent } from "../lib/tracking";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: TrackingEvent;
  eventLabel?: string;
  children: ReactNode;
};

export function TrackedLink({ eventName, eventLabel, children, onClick, href, ...props }: Props) {
  return (
    <a href={href} {...props} onClick={(event) => {
      trackEvent(eventName, eventLabel ? { label: eventLabel } : {});
      onClick?.(event);
    }}>
      {children}
    </a>
  );
}
