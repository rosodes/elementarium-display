
import { Suspense, lazy, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, Navigate } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";
import LoadingSpinner from "./components/ui/loading-spinner";
import ErrorBoundary from "./components/ErrorBoundary";
import SafeComponent from "./components/SafeComponent";
import { setupGlobalErrorHandler } from "./lib/errorHandling";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ElementPage = lazy(() => import("./pages/ElementPage"));

// Optimized loading component with predefined height
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-[80vh]">
    <LoadingSpinner />
  </div>
);

// Client-only components wrapper with optimization
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Log successful client hydration for debugging
    if (process.env.NODE_ENV !== 'production') {
      console.log('Client component mounted successfully');
    }
  }, []);
  
  return mounted ? children : null;
};

const App = () => {
  const { t } = useLanguage();

  // Setup global error handling on app initialization
  useEffect(() => {
    setupGlobalErrorHandler();
  }, []);

  return (
    <ErrorBoundary>
      <ClientOnly>
        <TooltipProvider>
          <SafeComponent minimal>
            <Toaster />
          </SafeComponent>
        </TooltipProvider>
      </ClientOnly>
      
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Home routes with language support */}
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
            
            {/* Element detail routes with language support */}
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
            
            {/* Redirect legacy or incorrectly formatted URLs to home */}
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            <Route path="/index" element={<Navigate to="/" replace />} />
            
            {/* Fixed 404 page */}
            <Route path="/404" element={
              <SafeComponent>
                <NotFound />
              </SafeComponent>
            } />
            
            {/* Catch all for 404 - must be last */}
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
