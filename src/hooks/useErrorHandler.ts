
import { useCallback } from 'react';
import { useToast } from './use-toast';
import { logError } from '../lib/errorHandling';

export interface UseErrorHandlerOptions {
  showToast?: boolean;
  logError?: boolean;
  fallbackMessage?: string;
}

export const useErrorHandler = (options: UseErrorHandlerOptions = {}) => {
  const { toast } = useToast();
  
  const {
    showToast = true,
    logError: shouldLog = true,
    fallbackMessage = 'An unexpected error occurred'
  } = options;

  const handleError = useCallback((
    error: Error | unknown,
    context?: string,
    customMessage?: string
  ) => {
    const errorObj = error instanceof Error ? error : new Error(String(error));
    const message = customMessage || errorObj.message || fallbackMessage;
    
    // Log the error
    if (shouldLog) {
      logError(errorObj, context || 'useErrorHandler');
    }
    
    // Show toast notification
    if (showToast) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: message,
      });
    }
    
    return errorObj;
  }, [toast, showToast, shouldLog, fallbackMessage]);

  const handleAsyncError = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    context?: string,
    customMessage?: string
  ): Promise<T | null> => {
    try {
      return await asyncFn();
    } catch (error) {
      handleError(error, context, customMessage);
      return null;
    }
  }, [handleError]);

  return {
    handleError,
    handleAsyncError
  };
};
