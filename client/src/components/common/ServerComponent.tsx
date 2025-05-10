import React, { useEffect, useState } from 'react';
import { isBrowser } from '@/lib/is-browser';

interface ServerComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  loadingComponent?: React.ReactNode;
  whenBrowser?: boolean;
  id?: string;
}

/**
 * A component that safely renders its children during server-side rendering
 * and handles proper hydration on the client
 * 
 * @param children The component to render
 * @param fallback Optional fallback content to render on server
 * @param loadingComponent Optional loading component to show during hydration
 * @param whenBrowser If true, only renders on client side, not during SSR
 * @param id Optional unique ID for the component
 */
export default function ServerComponent({ 
  children, 
  fallback = null, 
  loadingComponent = null,
  whenBrowser = false,
  id = ""
}: ServerComponentProps) {
  // Early return during SSR if this is a browser-only component
  if (whenBrowser && !isBrowser) {
    return <>{fallback}</>;
  }
  
  // In the browser, manage hydration state
  const [isHydrated, setIsHydrated] = useState(false);
  
  useEffect(() => {
    // Mark as hydrated after component mounts
    setIsHydrated(true);
  }, []);
  
  // During client initialization before hydration, show loading component
  if (isBrowser && !isHydrated) {
    return <>{loadingComponent || fallback || children}</>;
  }
  
  // On server with server rendering or after client hydration
  return (
    <div data-ssr-component={id || undefined} data-hydrated={isHydrated || undefined}>
      {children}
    </div>
  );
}