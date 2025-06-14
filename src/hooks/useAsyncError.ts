
import { useState, useCallback } from 'react';
import { useErrorHandler } from './useErrorHandler';

export interface UseAsyncErrorState {
  isLoading: boolean;
  error: Error | null;
}

export const useAsyncError = () => {
  const [state, setState] = useState<UseAsyncErrorState>({
    isLoading: false,
    error: null
  });
  
  const { handleError } = useErrorHandler();

  const execute = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    context?: string
  ): Promise<T | null> => {
    setState({ isLoading: true, error: null });
    
    try {
      const result = await asyncFn();
      setState({ isLoading: false, error: null });
      return result;
    } catch (error) {
      const errorObj = handleError(error, context);
      setState({ isLoading: false, error: errorObj });
      return null;
    }
  }, [handleError]);

  const reset = useCallback(() => {
    setState({ isLoading: false, error: null });
  }, []);

  return {
    ...state,
    execute,
    reset
  };
};
