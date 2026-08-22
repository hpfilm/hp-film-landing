export type TrackingEvent =
  | "click_whatsapp_hero"
  | "click_whatsapp_service"
  | "click_whatsapp_quote"
  | "click_whatsapp_floating"
  | "click_phone"
  | "click_maps"
  | "click_instagram";

export function trackEvent(event: TrackingEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const win = window as Window & { gtag?: (...args: unknown[]) => void };
  win.gtag?.("event", event, params);
}
