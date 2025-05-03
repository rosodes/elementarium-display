
import React from "react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingSpinner = ({ 
  size = "md", 
  className 
}: LoadingSpinnerProps) => {
  // Size mappings
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-10 h-10 border-3",
  };

  return (
    <div 
      className={cn(
        "border-t-transparent border-primary rounded-full animate-spin", 
        sizeClasses[size],
        className
      )} 
      role="status" 
      aria-label="loading"
    />
  );
};

export default LoadingSpinner;
