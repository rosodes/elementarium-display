/**
 * Enhanced error handling utility with better logging and reporting
 */

export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  route?: string;
  userAgent?: string;
  timestamp?: string;
}

// Enhanced error logger with context
export const logError = (
  error: Error, 
  info: string, 
  context?: ErrorContext
): void => {
  const timestamp = new Date().toISOString();
  const errorData = {
    message: error.message,
    stack: error.stack,
    info,
    context: {
      ...context,
      timestamp,
      route: window.location.pathname,
      userAgent: navigator.userAgent,
    }
  };

  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.group(`🚨 Error: ${info}`);
    console.error('Error:', error);
    console.error('Stack:', error.stack);
    console.error('Context:', errorData.context);
    console.groupEnd();
  } else {
    // Production logging (could be sent to external service)
    console.error('Error:', JSON.stringify(errorData));
  }

  // Store in localStorage for debugging (with size limit)
  try {
    const storedErrors = getStoredErrors();
    storedErrors.push(errorData);
    
    // Keep only last 10 errors
    if (storedErrors.length > 10) {
      storedErrors.splice(0, storedErrors.length - 10);
    }
    
    localStorage.setItem('app_errors', JSON.stringify(storedErrors));
  } catch (e) {
    // If localStorage is full, clear old errors
    localStorage.removeItem('app_errors');
  }
};

// Get stored errors for debugging
export const getStoredErrors = (): any[] => {
  try {
    const stored = localStorage.getItem('app_errors');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Clear stored errors
export const clearStoredErrors = (): void => {
  localStorage.removeItem('app_errors');
};

// Enhanced global error handler
export const setupGlobalErrorHandler = (): void => {
  if (typeof window !== 'undefined') {
    // Handle JavaScript errors
    window.onerror = (message, source, lineno, colno, error) => {
      logError(
        error || new Error(String(message)), 
        `Global error at ${source}:${lineno}:${colno}`
      );
      return false;
    };

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      logError(
        new Error(event.reason), 
        'Unhandled promise rejection'
      );
    });

    // Handle network errors
    window.addEventListener('error', (event) => {
      if (event.target && event.target !== window) {
        logError(
          new Error(`Resource failed to load: ${event.target}`),
          'Resource loading error'
        );
      }
    });
  }
};

// Network error handler
export const handleNetworkError = (error: unknown, endpoint: string): Error => {
  const networkError = error instanceof Error ? error : new Error(String(error));
  
  let message = 'Network request failed';
  if (networkError.message.includes('fetch')) {
    message = 'Unable to connect to server';
  } else if (networkError.message.includes('timeout')) {
    message = 'Request timed out';
  }
  
  const enhancedError = new Error(message);
  // Store original error info in a custom property instead of using 'cause'
  (enhancedError as any).originalError = networkError;
  
  logError(enhancedError, `Network error for endpoint: ${endpoint}`);
  return enhancedError;
};

// API error handler
export const handleApiError = (response: Response, endpoint: string): Error => {
  let message = 'API request failed';
  
  switch (response.status) {
    case 400:
      message = 'Invalid request data';
      break;
    case 401:
      message = 'Authentication required';
      break;
    case 403:
      message = 'Access denied';
      break;
    case 404:
      message = 'Resource not found';
      break;
    case 500:
      message = 'Server error';
      break;
    case 503:
      message = 'Service temporarily unavailable';
      break;
  }
  
  const apiError = new Error(`${message} (${response.status})`);
  logError(apiError, `API error for endpoint: ${endpoint}`);
  return apiError;
};

// Validation error handler
export const createValidationError = (field: string, value: any): Error => {
  const error = new Error(`Invalid value for ${field}: ${value}`);
  logError(error, 'Validation error');
  return error;
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
