
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
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

// Ukrainian language is already registered in src/i18n/index.ts
// Update language names in Header.tsx when adding new languages
const App = () => {
  const { t } = useLanguage();

  return (
    <>
      <TooltipProvider>
        <Toaster />
        <Sonner />
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
      </TooltipProvider>
    </>
  );
};

export default App;
