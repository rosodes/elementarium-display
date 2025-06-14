
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
  portalled?: boolean;
  avoidCollisions?: boolean; // новое!
}

/**
 * Tooltip, который всегда показывает контент через портал (не влияет на layout контейнера).
 * Поддерживает фиксированные стороны.
 */
const EnhancedTooltip = ({
  children,
  content,
  side = 'top',
  delay = 200,
  disabled = false,
  portalled = true,
  avoidCollisions = false, // новое, только если явно передан
}: EnhancedTooltipProps) => {
  if (disabled) {
    return <>{children}</>;
  }

  // Для дебага — временно логируем props
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('[EnhancedTooltip]', { side, avoidCollisions });
  }

  return (
    <TooltipProvider delayDuration={delay}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={8}
          avoidCollisions={avoidCollisions}
          className="max-w-xs p-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 shadow-xl rounded-lg z-[100]"
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default EnhancedTooltip;

