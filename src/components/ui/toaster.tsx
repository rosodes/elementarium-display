
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useTheme } from "@/context/ThemeContext";

export function Toaster() {
  const { toasts } = useToast();
  const { theme } = useTheme();
  
  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            key={id}
            {...props}
            className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${
              theme === 'dark' ? 'shadow-lg shadow-black/20' : 'shadow-lg shadow-gray-300/70'
            } backdrop-blur-sm rounded-lg`}
          >
            <div className="grid gap-1">
              {title && <ToastTitle className="text-gray-900 dark:text-gray-100 font-medium">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-gray-600 dark:text-gray-300">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 opacity-70 hover:opacity-100 transition-opacity" />
          </Toast>
        );
      })}
      <ToastViewport className="p-4 md:p-6 lg:p-8" />
    </ToastProvider>
  );
}
