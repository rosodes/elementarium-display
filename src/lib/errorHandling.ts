
/**
 * Error handling utility for client-side errors
 */
import React from 'react';

// Global error logger
export const logError = (error: Error, info: string): void => {
  console.error(`🔴 Error in ${info}:`, error);
  console.error(`📑 Stack trace:`, error.stack);
  
  // Send to console in a visible format
  console.log('%c APP ERROR DETECTED ', 'background: #FF0000; color: white; font-size: 16px; font-weight: bold;');
  console.log(`Error message: ${error.message}`);
  console.log(`Location: ${info}`);
};

// Set up global error handler
export const setupGlobalErrorHandler = (): void => {
  if (typeof window !== 'undefined') {
    window.onerror = (message, source, lineno, colno, error) => {
      logError(error || new Error(String(message)), `Window error at ${source}:${lineno}:${colno}`);
      return false;
    };
  }
};

// Error fallback component
export const ErrorFallback: React.FC = () => {
  return (
    <div className="p-4 m-4 border border-red-500 rounded bg-red-50 text-red-800">
      <h2>Something went wrong</h2>
      <p>The application failed to load correctly. Please try refreshing the page.</p>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Refresh Page
      </button>
    </div>
  );
};
