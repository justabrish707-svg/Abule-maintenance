/**
 * Privacy-friendly client telemetry and event tracking utility
 */

type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, eventParams?: AnalyticsParams) => void;
    plausible?: (eventName: string, options?: { props?: AnalyticsParams }) => void;
  }
}

export function trackEvent(eventName: string, params?: AnalyticsParams): void {
  // If Google Analytics (GA4) is loaded
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // If Plausible Analytics is loaded
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(eventName, { props: params });
  }

  // Development logger
  if (import.meta.env.DEV) {
    console.log(`[Telemetry Event] ${eventName}:`, params ?? {});
  }
}
