import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { isBrowser } from '@/lib/is-browser';

export default function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Only execute in browser environment
    if (isBrowser) {
      // Scroll to top when location changes
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  // This component doesn't render anything
  return null;
}