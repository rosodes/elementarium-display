
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
  delay = 200,
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
          className="max-w-xs p-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 shadow-xl rounded-lg z-50"
          sideOffset={8}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default EnhancedTooltip;
