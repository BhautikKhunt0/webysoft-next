import { hydrateRoot, createRoot } from "react-dom/client";
import React from 'react';
import App from "./App";
import "./index.css";
import "./styles/whatsapp.css";
import "./styles/ssr.css"; // Import SSR-specific styles
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';

const rootElement = document.getElementById("root");

// Try to find and parse the SSR state
const ssrStateElement = document.getElementById("__SSR_STATE__");
if (ssrStateElement) {
  try {
    const ssrState = JSON.parse(ssrStateElement.textContent || '[]');
    
    // Restore the state from SSR to the query client
    ssrState.forEach((queryData: any) => {
      if (queryData.queryKey && queryData.state) {
        queryClient.setQueryData(queryData.queryKey, queryData.state.data);
      }
    });
    
    console.log('Hydrated with SSR state:', ssrState.length, 'queries');
  } catch (error) {
    console.error('Failed to hydrate SSR state:', error);
  }
}

if (rootElement) {
  // Check if the app was server-side rendered
  if (rootElement.hasChildNodes()) {
    // Mark the document as hydrated for CSS transitions
    document.documentElement.classList.add('ssr-hydrated');
    
    try {
      // Hydrate the app if it was server-side rendered
      hydrateRoot(
        rootElement,
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <App serverUrl={window.location.pathname} />
          </QueryClientProvider>
        </React.StrictMode>
      );
      console.log('✅ Hydration successful');
    } catch (error) {
      console.error('❌ Hydration failed:', error);
      
      // Fallback to client-side rendering if hydration fails
      // This prevents the app from being stuck in a broken state
      const rootNode = rootElement.cloneNode(false) as HTMLElement;
      rootElement.parentNode?.replaceChild(rootNode, rootElement);
      
      createRoot(rootNode).render(
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </React.StrictMode>
      );
      console.log('⚠️ Fallback to client-side rendering');
    }
  } else {
    // Create a new root if the app wasn't server-side rendered
    createRoot(rootElement).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    );
    console.log('🔄 Client-side rendering (no SSR detected)');
  }
}