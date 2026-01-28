import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "@/providers/FavoritesProvider";
import { AnimationStyles } from "@/components/AnimationStyles";
import { PWAInstallPrompt } from "@/components/pwa/PWAInstallPrompt";
import { PWALifecycle } from "@/components/pwa/PWALifecycle";
import Index from "./pages/Index";
import Install from "./pages/Install";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavoritesProvider>
        <AnimationStyles />
        <Toaster />
        <Sonner />
        <PWAInstallPrompt />
        <PWALifecycle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/install" element={<Install />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
