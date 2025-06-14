
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLanguage } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import LoadingSpinner from "./components/ui/loading-spinner";
import ErrorBoundary from "./components/ErrorBoundary";
import SafeComponent from "./components/SafeComponent";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ElementPage = lazy(() => import("./pages/ElementPage"));

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

// Loading component
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-[80vh]">
    <LoadingSpinner />
  </div>
);

function AppContent() {
  const { t } = useLanguage();

  return (
    <ErrorBoundary>
      <TooltipProvider>
        <SafeComponent minimal>
          <Toaster />
        </SafeComponent>
      </TooltipProvider>
      
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={
              <SafeComponent>
                <Index />
              </SafeComponent>
            } />
            <Route path="/:lang" element={
              <SafeComponent>
                <Index />
              </SafeComponent>
            } />
            
            <Route path="/element/:elementId" element={
              <SafeComponent>
                <ElementPage />
              </SafeComponent>
            } />
            <Route path="/:lang/element/:elementId" element={
              <SafeComponent>
                <ElementPage />
              </SafeComponent>
            } />
            
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            <Route path="/index" element={<Navigate to="/" replace />} />
            
            <Route path="/404" element={
              <SafeComponent>
                <NotFound />
              </SafeComponent>
            } />
            
            <Route path="*" element={
              <SafeComponent>
                <NotFound />
              </SafeComponent>
            } />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider initialLanguage="en">
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
