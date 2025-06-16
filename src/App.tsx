
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from './components/ui/toaster';
import Index from './pages/Index';
import ElementPage from './pages/ElementPage';
import ErrorBoundary from './components/ErrorBoundary';
import { detectUserLanguage } from './lib/detectUserLanguage';
import './App.css';
import { HelmetProvider } from "react-helmet-async";

function App() {
  const initialLanguage = detectUserLanguage();

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <LanguageProvider initialLanguage={initialLanguage}>
            <Router>
              <div className="min-h-screen">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/:lang" element={<Index />} />
                  <Route path="/element/:atomicNumber" element={<ElementPage />} />
                  <Route path="/:lang/element/:atomicNumber" element={<ElementPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Toaster />
              </div>
            </Router>
          </LanguageProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
