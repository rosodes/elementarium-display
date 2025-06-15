
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

// Новый стиль для обертки всей панели табов
const Tabs = TabsPrimitive.Root

// Список вкладок: скроллится при переполнении, прозрачный фон, разделитель снизу, адаптивные отступы
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      // Новый внешний вид: горизонтальный скролл, плавное выделение
      "flex w-full gap-x-1 px-0 py-0 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-200 dark:scrollbar-thumb-blue-800 bg-transparent border-b border-gray-300 dark:border-gray-700",
      "backdrop-blur z-10 min-h-[48px]",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

// Оформление одной вкладки: иконка+текст, выделенный border для активной, фон при hover/focus, плавный переход
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      `relative flex items-center gap-1 px-3 py-1.5
      min-w-[100px] max-w-xs
      font-semibold text-sm leading-5
      rounded-t-lg
      transition-all duration-200
      data-[state=active]:bg-blue-600/10 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-200 
      data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-400 
      border-b-2 border-transparent
      hover:bg-blue-500/10 hover:text-blue-700 dark:hover:bg-blue-600/20 dark:hover:text-blue-200
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:z-10
      whitespace-nowrap
      select-none
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
