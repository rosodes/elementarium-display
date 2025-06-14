
import React, { ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary';

interface SafeComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  minimal?: boolean;
}

const SafeComponent: React.FC<SafeComponentProps> = ({ 
  children, 
  fallback,
  minimal = false 
}) => {
  const defaultFallback = minimal ? (
    <div className="m-2 p-2 border border-red-300 bg-red-50 text-red-800 rounded text-sm">
      Failed to load component
    </div>
  ) : undefined;

  return (
    <ErrorBoundary fallback={fallback || defaultFallback}>
      {children}
    </ErrorBoundary>
  );
};

export default SafeComponent;
