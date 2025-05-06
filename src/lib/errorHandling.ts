
/**
 * Simple error handling utility without React components
 */

// Basic error logger
export const logError = (error: Error, info: string): void => {
  console.error(`Error in ${info}:`, error);
  console.error(`Stack trace:`, error.stack);
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

// Simple error fallback - No React component, just a function returning HTML
export const getErrorFallbackHTML = (): string => {
  return `
    <div style="padding: 1rem; margin: 1rem; border: 1px solid #f56565; border-radius: 0.25rem; background-color: #fff5f5; color: #c53030;">
      <h2>Something went wrong</h2>
      <p>The application failed to load correctly. Please try refreshing the page.</p>
      <button 
        onclick="window.location.reload()" 
        style="margin-top: 0.5rem; padding: 0.5rem 1rem; background-color: #c53030; color: white; border: none; border-radius: 0.25rem; cursor: pointer;">
        Refresh Page
      </button>
    </div>
  `;
};
