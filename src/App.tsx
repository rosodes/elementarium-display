import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ElementPage from "./pages/ElementPage";

// Ukrainian language is already registered in src/i18n/index.ts
// Update language names in Header.tsx when adding new languages
const App = () => (
  <>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
    </TooltipProvider>
  </>
);

export default App;
