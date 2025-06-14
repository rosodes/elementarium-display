
import { Suspense, lazy, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, Navigate } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";
import LoadingSpinner from "./components/ui/loading-spinner";
import ErrorBoundary from "./components/ErrorBoundary";
import SafeComponent from "./components/SafeComponent";
import { setupGlobalErrorHandler } from "./lib/errorHandling";

// Lazy load pages with preloading for better UX
const Index = lazy(() => 
  import("./pages/Index").then(module => {
    // Preload ElementPage when Index loads
    import("./pages/ElementPage");
    return module;
  })
);
const NotFound = lazy(() => import("./pages/NotFound"));
const ElementPage = lazy(() => import("./pages/ElementPage"));

// Optimized loading component
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-[80vh]">
    <LoadingSpinner />
  </div>
);

const App = () => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Setup global error handling and client mounting
  useEffect(() => {
    setupGlobalErrorHandler();
    setMounted(true);
  }, []);

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return <PageLoader />;
  }

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
};

export default App;
