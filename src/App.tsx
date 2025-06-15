
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { AppTranslationValidator } from './components/AppTranslationValidator';
import { Toaster } from './components/ui/toaster';
import HomePage from './pages/HomePage';
import ElementPage from './pages/ElementPage';
import ErrorBoundary from './components/ErrorBoundary';
import { detectUserLanguage } from './lib/detectUserLanguage';
import './App.css';
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const initialLanguage = detectUserLanguage();

  // На всякий случай логируем рендер верхнего компонента
  console.log('App: before render HelmetProvider');

  return (
    <ErrorBoundary>
      <HelmetProvider>
        {console.log('App: inside HelmetProvider')}
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <LanguageProvider initialLanguage={initialLanguage}>
              <AppTranslationValidator>
                <Router>
                  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/:lang" element={<HomePage />} />
                      <Route path="/element/:atomicNumber" element={<ElementPage />} />
                      <Route path="/:lang/element/:atomicNumber" element={<ElementPage />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                    <Toaster />
                  </div>
                </Router>
              </AppTranslationValidator>
            </LanguageProvider>
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
