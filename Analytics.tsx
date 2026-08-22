"use client";

import { useEffect } from "react";

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  useEffect(() => {
    if (!gaId) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);
    const win = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
    win.dataLayer = win.dataLayer || [];
    win.gtag = (...args: unknown[]) => win.dataLayer?.push(args);
    win.gtag("js", new Date());
    win.gtag("config", gaId);
    return () => script.remove();
  }, [gaId]);
  return null;
}
