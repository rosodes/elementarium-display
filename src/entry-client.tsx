
import './index.css';
import './styles/periodicTable.css';
import React from 'react';
import { createQueryClient, getInitialLanguage, removeLoadingIndicator } from './lib/appInitialization';
import { renderApp } from './lib/renderApp';

// Performance marker for initial load
performance.mark('client-entry-start');

// Create query client with optimized settings
const queryClient = createQueryClient();
const initialLanguage = getInitialLanguage();

// Prioritize critical path rendering
const renderApplication = () => {
  // Get React Query state from server if available
  const queryState = window.__REACT_QUERY_STATE__;
  
  // Optimize query client hydration
  if (queryState && Array.isArray(queryState.queries)) {
    queryClient.setQueryDefaults(['*'], {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    });
    
    // Restore cached queries without additional network requests
    queryState.queries.forEach((query) => {
      if (query.queryKey && query.state?.data) {
        queryClient.setQueryData(query.queryKey, query.state.data, {
          updatedAt: query.state.dataUpdatedAt || Date.now()
        });
      }
    });
  }

  // Use requestIdleCallback for non-critical work if supported
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 50));
  
  // Render immediately for better performance
  renderApp(queryClient, initialLanguage);
  
  // Remove loading indicator after a small delay to prevent flash
  idleCallback(() => {
    removeLoadingIndicator();
    performance.mark('client-entry-end');
    performance.measure('client-hydration', 'client-entry-start', 'client-entry-end');
  });
};

// Use modern browser features for performance
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApplication);
} else {
  renderApplication();
}
