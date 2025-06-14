
import './index.css';
import './styles/periodicTable.css';
import React from 'react';
import { createQueryClient, getInitialLanguage, removeLoadingIndicator } from './lib/appInitialization';
import { renderApp } from './lib/renderApp';

// Performance optimization - defer non-critical operations
const performanceStart = performance.now();

// Create optimized query client
const queryClient = createQueryClient();
const initialLanguage = getInitialLanguage();

// Optimized rendering with minimal blocking
const renderApplication = () => {
  // Restore React Query state efficiently
  const queryState = window.__REACT_QUERY_STATE__;
  
  if (queryState?.queries) {
    // Set optimized defaults
    queryClient.setQueryDefaults(['*'], {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    });
    
    // Batch restore queries
    queryState.queries.forEach((query) => {
      if (query.queryKey && query.state?.data) {
        queryClient.setQueryData(query.queryKey, query.state.data, {
          updatedAt: query.state.dataUpdatedAt || Date.now()
        });
      }
    });
  }

  // Render immediately
  renderApp(queryClient, initialLanguage, performanceStart);
  
  // Defer non-critical cleanup
  requestIdleCallback?.(() => {
    removeLoadingIndicator();
    console.log(`App rendered in ${(performance.now() - performanceStart).toFixed(1)}ms`);
  }) || setTimeout(() => {
    removeLoadingIndicator();
  }, 100);
};

// Optimize initial render timing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApplication);
} else {
  renderApplication();
}
