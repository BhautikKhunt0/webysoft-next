/**
 * Utility to check if code is running in a browser environment
 * Use this instead of directly checking for window or document to make components SSR-compatible
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * Helper to execute code only in browser environments
 * @param callback Function to execute in browser environment
 */
export function runInBrowser(callback: () => void): void {
  if (isBrowser) {
    callback();
  }
}