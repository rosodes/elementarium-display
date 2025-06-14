
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Home, Share, Star } from 'lucide-react';
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';

interface ElementNavigationProps {
  element: Element;
  isBookmarked: boolean;
  onHome: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onToggleBookmark: () => void;
  onShare: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

const ElementNavigation = ({
  element,
  isBookmarked,
  onHome,
  onPrevious,
  onNext,
  onToggleBookmark,
  onShare,
  canGoPrevious,
  canGoNext
}: ElementNavigationProps) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto py-3 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost"
                size="sm"
                onClick={onHome}
                aria-label={t.elementDetails?.backToTable || "Back to Periodic Table"}
              >
                <Home className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">{t.elementDetails?.backToTable || "Back to Table"}</span>
              </Button>
              
              <span className="text-gray-500 dark:text-gray-400 hidden sm:inline">|</span>
              
              <div className="font-medium text-sm">
                {element.name} ({element.symbol})
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onToggleBookmark}
                aria-label={isBookmarked ? "Remove from favorites" : "Add to favorites"}
              >
                <Star className={`h-4 w-4 ${isBookmarked ? 'fill-yellow-400 text-yellow-400' : ''}`} />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={onShare}
                aria-label="Share"
              >
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Element Navigation */}
      <div className="flex items-center mb-4 justify-between">
        <Button 
          variant="outline"
          size="sm"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          aria-label={t.elementDetails?.previousElement || "Previous element"}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.elementDetails?.previous || "Previous"}
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onNext}
          disabled={!canGoNext}
          aria-label={t.elementDetails?.nextElement || "Next element"}
        >
          {t.elementDetails?.next || "Next"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default ElementNavigation;
