import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';

interface RenderOptions {
  url: string;
}

export function render({ url }: RenderOptions) {
  // Create markup for the server-rendered content
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App serverUrl={url} />
      </QueryClientProvider>
    </React.StrictMode>
  );

  return { html };
}