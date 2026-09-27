/**
 * Client-side rate limiting and spam throttling utility
 */

const STORAGE_PREFIX = 'abule_ratelimit_';

export function checkRateLimit(
  actionKey: string,
  cooldownSeconds = 30
): { allowed: boolean; remainingSeconds: number } {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + actionKey);
    if (!raw) return { allowed: true, remainingSeconds: 0 };

    const lastTimestamp = parseInt(raw, 10);
    if (isNaN(lastTimestamp)) return { allowed: true, remainingSeconds: 0 };

    const elapsedSeconds = Math.floor((Date.now() - lastTimestamp) / 1000);
    if (elapsedSeconds < cooldownSeconds) {
      return {
        allowed: false,
        remainingSeconds: cooldownSeconds - elapsedSeconds,
      };
    }
  } catch {
    // localStorage might be unavailable in restricted environments
  }

  return { allowed: true, remainingSeconds: 0 };
}

export function recordActionTimestamp(actionKey: string): void {
  try {
    localStorage.setItem(STORAGE_PREFIX + actionKey, Date.now().toString());
  } catch {
    // localStorage might be unavailable
  }
}
