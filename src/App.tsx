
import { Suspense, lazy, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";
import LoadingSpinner from "./components/ui/loading-spinner";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ElementPage = lazy(() => import("./pages/ElementPage"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-screen">
    <LoadingSpinner />
  </div>
);

// Client-only components wrapper
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  return <>{children}</>;
};

const App = () => {
  const { t } = useLanguage();

  return (
    <>
      <ClientOnly>
        <TooltipProvider>
          <Toaster />
        </TooltipProvider>
      </ClientOnly>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Home routes with language support */}
          <Route path="/" element={<Index />} />
          <Route path="/:lang" element={<Index />} />
          
          {/* Element detail routes with language support */}
          <Route path="/element/:elementId" element={<ElementPage />} />
          <Route path="/:lang/element/:elementId" element={<ElementPage />} />
          
          {/* Catch all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
