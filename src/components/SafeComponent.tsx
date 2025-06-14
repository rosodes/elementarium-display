
import React, { ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Alert, AlertDescription } from './ui/alert';
import { AlertTriangle } from 'lucide-react';

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
    <Alert variant="destructive" className="m-2">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>Failed to load component</AlertDescription>
    </Alert>
  ) : undefined;

  return (
    <ErrorBoundary fallback={fallback || defaultFallback}>
      {children}
    </ErrorBoundary>
  );
};

export default SafeComponent;
