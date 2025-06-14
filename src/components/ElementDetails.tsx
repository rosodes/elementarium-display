import React, { useEffect, useState } from 'react';
import { Element } from '../data/elementTypes';
import { getCategoryColor, getSeriesColor } from '../data/elements';
import { useLanguage } from '../context/LanguageContext';
import { getElement } from '../data/elements';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

// Import refactored components
import ElementHeader from './element-details/ElementHeader';
import ElementFooter from './element-details/ElementFooter';
import OverviewTab from './element-details/tabs/OverviewTab';
import PropertiesTab from './element-details/tabs/PropertiesTab';
import StructureTab from './element-details/tabs/StructureTab';
import ApplicationsTab from './element-details/tabs/ApplicationsTab';
import ElementIsotopesSection from './element-details/ElementIsotopesSection';
import { useToast } from "./ui/use-toast";

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
  onNavigate: (element: Element) => void;
  isFullPage?: boolean;
}

const ElementDetails = ({ element, onClose, onNavigate, isFullPage = false }: ElementDetailsProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);
  
  const [tabValue, setTabValue] = useState("overview");
  const [animateEntry, setAnimateEntry] = useState(true);
  
  // Get previous and next elements
  const prevElement = getElement(parseInt(element.atomic) - 1);
  const nextElement = getElement(parseInt(element.atomic) + 1);
  
  // Show toast when element details are loaded only in popup mode
  useEffect(() => {
    if (!isFullPage) {
      toast({
        title: `${element.name} (${element.symbol})`,
        description: `${t.elementDetails.atomicNumber}: ${element.atomic}`,
        duration: 3000,
      });
    }
    
    // Reset animation state when element changes
    setAnimateEntry(true);
    const timer = setTimeout(() => setAnimateEntry(false), 500);
    
    return () => clearTimeout(timer);
  }, [element.atomic, toast, element.name, element.symbol, isFullPage, t.elementDetails.atomicNumber]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevElement) {
        onNavigate(prevElement);
      } else if (e.key === 'ArrowRight' && nextElement) {
        onNavigate(nextElement);
      } else if (e.key === 'Escape' && !isFullPage) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [element.atomic, onClose, onNavigate, prevElement, nextElement, isFullPage]);

  // Different container classes based on whether it's displayed as a popup or full page
  const containerClasses = isFullPage
    ? "w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
    : "fixed inset-0 bg-black/60 dark:bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm";

  const contentClasses = isFullPage
    ? "w-full"
    : "bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-[900px] w-full mx-auto overflow-hidden";

  const tabsContentMaxHeightClass = isFullPage 
    ? "max-h-full" 
    : "max-h-[70vh]";

  return (
    <div className={containerClasses}>
      <div 
        className={`${contentClasses} ${animateEntry && !isFullPage ? 'animate-scale-in' : ''}`}
      >
        {/* Header section with navigation */}
        <ElementHeader 
          element={element}
          categoryColor={categoryColor}
          prevElement={prevElement}
          nextElement={nextElement}
          onClose={onClose}
          onNavigate={onNavigate}
          isFullPage={isFullPage}
        />
        
        <Tabs defaultValue="overview" value={tabValue} onValueChange={setTabValue} className="w-full">
          <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <TabsList className="flex w-full h-auto justify-start p-1 rounded-none overflow-x-auto bg-gray-50 dark:bg-gray-850">
              <TabsTrigger 
                value="overview" 
                className="px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-primary dark:data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm rounded-md">
                {t.elementDetails.overview || "Overview"}
              </TabsTrigger>
              <TabsTrigger 
                value="properties" 
                className="px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-primary dark:data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm rounded-md">
                {t.elementDetails.properties || "Properties"}
              </TabsTrigger>
              <TabsTrigger 
                value="structure" 
                className="px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-primary dark:data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm rounded-md">
                {t.elementDetails.atomicStructure || "Structure"}
              </TabsTrigger>
              <TabsTrigger 
                value="applications" 
                className="px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-primary dark:data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm rounded-md">
                {t.elementDetails.applications || "Applications"}
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className={`p-5 sm:p-6 ${tabsContentMaxHeightClass} overflow-y-auto dark:text-gray-200 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900`}>
            <TabsContent value="overview" className="mt-0 animate-fade-in focus-visible:outline-none focus-visible:ring-0">
              {/* --- ДОБАВЛЕНА СЕКЦИЯ ИЗОТОПОВ --- */}
              <ElementIsotopesSection element={element} />
              {/* --- дальше прежний контент --- */}
              <OverviewTab element={element} />
            </TabsContent>
            
            <TabsContent value="properties" className="mt-0 animate-fade-in focus-visible:outline-none focus-visible:ring-0">
              <PropertiesTab element={element} categoryColor={categoryColor} />
            </TabsContent>
            
            <TabsContent value="structure" className="mt-0 animate-fade-in focus-visible:outline-none focus-visible:ring-0">
              <StructureTab element={element} categoryColor={categoryColor} />
            </TabsContent>
            
            <TabsContent value="applications" className="mt-0 animate-fade-in focus-visible:outline-none focus-visible:ring-0">
              <ApplicationsTab element={element} categoryColor={categoryColor} />
            </TabsContent>
          </div>
        </Tabs>
        
        {/* Footer navigation */}
        <ElementFooter 
          element={element}
          prevElement={prevElement}
          nextElement={nextElement}
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
};

export default ElementDetails;
