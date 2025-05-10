import React, { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/common/ScrollToTop";
import ClientOnly from "@/components/common/ClientOnly";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

interface AppProps {
  serverUrl?: string;
}

function App({ serverUrl }: AppProps) {
  // Hydration detection to avoid layout shifts and mismatches
  useEffect(() => {
    // Mark the app as hydrated after initial render in the browser
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.hydrated = 'true';
      
      // Add a class to indicate SSR hydration is complete
      document.documentElement.classList.add('ssr-hydrated');
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      
      {/* Wrap browser-only components in ClientOnly */}
      <ClientOnly>
        <ScrollToTop />
      </ClientOnly>
      
      <ClientOnly>
        <Toaster />
      </ClientOnly>
      
      {/* Add an invisible element for hydration verification */}
      <ClientOnly>
        <div id="__ssr_hydrated" style={{ display: 'none' }} data-ssr-state="hydrated" />
      </ClientOnly>
    </QueryClientProvider>
  );
}

export default App;