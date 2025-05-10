import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/common/ScrollToTop";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

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
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      {/* Only render ScrollToTop on client-side */}
      {typeof window !== 'undefined' && <ScrollToTop />}
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;