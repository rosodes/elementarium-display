
import './index.css';
import './styles/periodicTable.css';
import { createQueryClient, getInitialLanguage, removeLoadingIndicator } from './lib/appInitialization';
import { renderApp } from './lib/renderApp';

// Performance measurement
const startTime = performance.now();
console.log('Client-side hydration started');

// Initialize the app with memoized query client to prevent duplication
const queryClient = createQueryClient();
const initialLanguage = getInitialLanguage();

// Check for React Query state from SSR
const queryState = window.__REACT_QUERY_STATE__;
if (queryState) {
  // Correctly restore query state by looping through dehydrated state
  if (Array.isArray(queryState.queries)) {
    queryState.queries.forEach((query: any) => {
      queryClient.setQueryData(query.queryKey, query.state.data);
    });
  }
}

// Enhanced rendering with additional hydration checks
renderApp(queryClient, initialLanguage, startTime);

// Clean up UI with proper timing
removeLoadingIndicator();
