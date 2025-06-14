
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

interface EnhancedTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  disabled?: boolean;
}

const EnhancedTooltip = ({ 
  children, 
  content, 
  side = 'top', 
  delay = 300,
  disabled = false 
}: EnhancedTooltipProps) => {
  if (disabled) {
    return <>{children}</>;
  }
  
  return (
    <TooltipProvider delayDuration={delay}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent 
          side={side} 
          className="max-w-xs p-2 text-sm bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 border-0 shadow-lg"
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default EnhancedTooltip;
