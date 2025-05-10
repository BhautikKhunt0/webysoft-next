import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { SSR_ENABLED, SSR_MODE } from './lib/ssr-config';

// Import CSS to ensure it's included in the SSR bundle
import './index.css';
import './styles/whatsapp.css';
import './styles/ssr.css';

interface RenderOptions {
  url: string;
}

/**
 * Server-side rendering entry point
 * This function is called by the server to render the app to a string
 * 
 * @param options - Rendering options including the current URL
 * @returns Object containing the rendered HTML and hydration state
 */
export function render({ url }: RenderOptions) {
  // Check if SSR is enabled from config
  if (!SSR_ENABLED) {
    console.log('SSR is disabled in configuration, skipping server rendering');
    return {
      html: '<div id="root"></div>',
      state: JSON.stringify({
        ssrDisabled: true,
        url,
        mode: 'client-only'
      })
    };
  }
  
  // Reset query client for each render to avoid leaked state
  queryClient.clear();

  try {
    // Add metadata for SSR mode
    const ssrMeta = {
      url,
      ssrMode: SSR_MODE,
      ssrTime: new Date().toISOString(),
    };
    
    // Create markup for the server-rendered content
    const html = ReactDOMServer.renderToString(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    );

    // Get the query state for client-side hydration
    const dehydratedState = queryClient.getQueryCache().getAll().map(query => {
      return {
        queryKey: query.queryKey,
        state: query.state
      };
    });

    console.log(`✅ SSR successful for route: ${url}`);
    
    // Combine query state with SSR metadata
    const fullState = {
      queries: dehydratedState,
      ...ssrMeta
    };
    
    return { 
      html,
      // Include dehydrated state data that can be used in client hydration
      state: JSON.stringify(fullState)
    };
  } catch (error) {
    console.error('❌ SSR rendering error:', error);
    
    // In case of error, return an empty div that client-side rendering can replace
    // This prevents the app from crashing completely
    return {
      html: '<div id="root"></div>',
      state: JSON.stringify({ 
        url,
        ssrError: error instanceof Error ? error.message : 'Unknown SSR Error',
        stack: error instanceof Error ? error.stack : undefined,
        mode: 'client-fallback'
      })
    };
  }
}