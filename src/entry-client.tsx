
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

// Enhanced rendering with additional hydration checks
renderApp(queryClient, initialLanguage, startTime);

// Clean up UI with proper timing
removeLoadingIndicator();
