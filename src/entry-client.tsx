
import './index.css';
import './styles/periodicTable.css';
import { setupGlobalErrorHandler, logError } from './lib/errorHandling';
import { createQueryClient, getInitialLanguage, removeLoadingIndicator } from './lib/appInitialization';
import { renderApp } from './lib/renderApp';

// Performance measurement
const startTime = performance.now();
console.log('Client-side hydration started');

// Set up error handling
setupGlobalErrorHandler();

// Initialize the app with error handling
try {
  // Create React Query client
  const queryClient = createQueryClient();
  
  // Get initial language
  const initialLanguage = getInitialLanguage();
  
  // Render the app
  renderApp(queryClient, initialLanguage, startTime);
} catch (error) {
  logError(error as Error, 'App initialization');
  
  // Last resort error display
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; margin: 20px; border: 1px solid #f56565; background: #fff5f5; color: #c53030;">
        <h2>Critical Error</h2>
        <p>The application couldn't start due to a fatal error.</p>
        <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
        <button onclick="window.location.reload()" 
          style="margin-top: 10px; padding: 8px 16px; background: #c53030; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
  }
}

// Clean up UI
removeLoadingIndicator();

// TypeScript declaration for React Query state - simplified to avoid any issues
declare global {
  interface Window {
    __REACT_QUERY_STATE__?: any;
  }
}
