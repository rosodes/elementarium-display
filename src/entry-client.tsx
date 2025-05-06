
import './index.css';
import './styles/periodicTable.css';
import { createQueryClient, getInitialLanguage, removeLoadingIndicator } from './lib/appInitialization';
import { renderApp } from './lib/renderApp';

// Performance measurement
const startTime = performance.now();
console.log('Client-side hydration started');

// Initialize the app
const queryClient = createQueryClient();
const initialLanguage = getInitialLanguage();

// Render the app with focus on production
renderApp(queryClient, initialLanguage, startTime);

// Clean up UI
removeLoadingIndicator();
