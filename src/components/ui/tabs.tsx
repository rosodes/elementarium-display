import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

// Новый стиль: табы как кнопки, адаптивная сетка, без горизонтального скролла, wrap на 2+ строки
const Tabs = TabsPrimitive.Root;

// Список вкладок: скроллится при переполнении, прозрачный фон, разделитель снизу, адаптивные отступы
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      // Grid, адаптивно минимум две строки, без overflow, gaps для приятного wrap
      "flex flex-wrap justify-center items-center gap-3 md:gap-4 py-3 px-1 bg-transparent border-b-0",
      "w-full",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

// Кнопка-таба: крупная, нормальное расстояние, плавные активные/hover стили
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      `inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5
      rounded-lg border-2 border-transparent
      font-semibold text-base md:text-sm transition-all duration-200
      bg-white dark:bg-gray-800 shadow-sm
      hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-700 dark:hover:text-blue-300
      focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:z-20
      data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/70
      data-[state=active]:text-blue-800 dark:data-[state=active]:text-blue-200
      data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-400
      data-[state=active]:shadow-md
      whitespace-nowrap select-none transition-colors select-text
      `,
      className
    )}
    tabIndex={0}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

// Контент — ничего не меняем
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
