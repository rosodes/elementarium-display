
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
  avoidCollisions?: boolean;
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
  avoidCollisions = false,
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
          className={`
            max-w-[310px] sm:max-w-[370px] w-auto min-w-[170px] 
            p-2.5 sm:p-3
            max-h-[75vh] overflow-auto
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 shadow-xl rounded-lg z-[100]
          `}
          style={{
            wordBreak: 'break-word',
            // На всякий случай — ограничим ширину на уровне инлайново, для Radix портала
            maxWidth: '95vw',
            minWidth: '150px',
          }}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default EnhancedTooltip;

