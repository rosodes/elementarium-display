
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ElementPage from "./pages/ElementPage";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

// Ukrainian language is already registered in src/i18n/index.ts
// Update language names in Header.tsx when adding new languages
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Main routes with language support */}
              <Route path="/" element={<Index />} />
              <Route path="/:lang" element={<Index />} />
              
              {/* Element detail routes with language support */}
              <Route path="/:elementId" element={<ElementPage />} />
              <Route path="/:lang/:elementId" element={<ElementPage />} />
              
              {/* Catch all for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
