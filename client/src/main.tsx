import { createRoot } from "react-dom/client";
import React from 'react';
import App from "./App";
import "./index.css";
import "./styles/whatsapp.css";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';

// Simple client-side rendering
const rootElement = document.getElementById("root");

if (rootElement) {
  // Create a standard root for client-side rendering
  createRoot(rootElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
}