
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
  portalled?: boolean; // новое, дефолт true
}

/**
 * Tooltip, который всегда показывает контент через портал (не влияет на layout контейнера).
 * Также поддерживает автоматический flip side, чтобы не вылезать за края экрана/контейнера.
 */
const EnhancedTooltip = ({
  children,
  content,
  side = 'top',
  delay = 200,
  disabled = false,
  portalled = true,
}: EnhancedTooltipProps) => {
  if (disabled) {
    return <>{children}</>;
  }

  // Обеспечиваем auto flip и избежание пересечения с краями.
  return (
    <TooltipProvider delayDuration={delay}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={8}
          avoidCollisions={true}
          className="max-w-xs p-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 shadow-xl rounded-lg z-[100]"
          // используем portal для popup — чтобы не был частью таблицы!
          portalled={portalled}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default EnhancedTooltip;
