'use client'

import { useEffect } from 'react';

/**
 * Hook to handle URL hash navigation - scrolls to element with ID matching the URL hash
 */
export function useHashNavigation() {
  useEffect(() => {
    const handleHashScroll = () => {
      // Get the hash from the URL (remove the '#' symbol)
      const hash = window.location.hash.substring(1);
      
      if (hash) {
        // Wait a brief moment for the page to fully render
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            // Scroll to the element
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500); // Longer timeout to ensure components are fully rendered
      }
    };
    
    // Call the function when the component mounts
    handleHashScroll();
    
    // Also add event listener for hash changes (for SPA navigation)
    window.addEventListener('hashchange', handleHashScroll);
    
    // Clean up event listener
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);
}