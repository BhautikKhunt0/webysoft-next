import { hydrateRoot, createRoot } from "react-dom/client";
import React from 'react';
import App from "./App";
import "./index.css";
import "./styles/whatsapp.css";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';

const rootElement = document.getElementById("root");

if (rootElement) {
  // Check if the app was server-side rendered
  if (rootElement.hasChildNodes()) {
    // Hydrate the app if it was server-side rendered
    hydrateRoot(
      rootElement,
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App serverUrl={window.location.pathname} />
        </QueryClientProvider>
      </React.StrictMode>
    );
  } else {
    // Create a new root if the app wasn't server-side rendered
    createRoot(rootElement).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    );
  }
}