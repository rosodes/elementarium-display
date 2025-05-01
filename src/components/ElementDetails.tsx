
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
import { useToast } from "./ui/use-toast";

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
  onNavigate: (element: Element) => void;
}

const ElementDetails = ({ element, onClose, onNavigate }: ElementDetailsProps) => {
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
  
  // Show toast when element details are loaded
  useEffect(() => {
    toast({
      title: `${element.name} (${element.symbol})`,
      description: `Atomic number: ${element.atomic}`,
      duration: 3000,
    });
    
    // Reset animation state when element changes
    setAnimateEntry(true);
    const timer = setTimeout(() => setAnimateEntry(false), 500);
    
    return () => clearTimeout(timer);
  }, [element.atomic, toast, element.name, element.symbol]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevElement) {
        onNavigate(prevElement);
      } else if (e.key === 'ArrowRight' && nextElement) {
        onNavigate(nextElement);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [element.atomic, onClose, onNavigate, prevElement, nextElement]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm">
      <div 
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-5xl w-full mx-auto overflow-hidden ${
          animateEntry ? 'animate-scale-in' : ''
        }`}
      >
        {/* Header section with navigation */}
        <ElementHeader 
          element={element}
          categoryColor={categoryColor}
          prevElement={prevElement}
          nextElement={nextElement}
          onClose={onClose}
          onNavigate={onNavigate}
        />
        
        <Tabs defaultValue="overview" value={tabValue} onValueChange={setTabValue} className="w-full">
          <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <TabsList className="flex w-full h-auto justify-start px-4 py-2 bg-gray-50 dark:bg-gray-850 rounded-none overflow-x-auto">
              <TabsTrigger 
                value="overview" 
                className="rounded-md px-4 py-2 text-sm font-medium transition-colors data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-primary dark:data-[state=active]:text-primary-foreground">
                {t.elementDetails.overview || "Overview"}
              </TabsTrigger>
              <TabsTrigger 
                value="properties" 
                className="rounded-md px-4 py-2 text-sm font-medium transition-colors data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-primary dark:data-[state=active]:text-primary-foreground">
                {t.elementDetails.properties || "Properties"}
              </TabsTrigger>
              <TabsTrigger 
                value="structure" 
                className="rounded-md px-4 py-2 text-sm font-medium transition-colors data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-primary dark:data-[state=active]:text-primary-foreground">
                {t.elementDetails.atomicStructure || "Structure"}
              </TabsTrigger>
              <TabsTrigger 
                value="applications" 
                className="rounded-md px-4 py-2 text-sm font-medium transition-colors data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-primary dark:data-[state=active]:text-primary-foreground">
                {t.elementDetails.applications || "Applications"}
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto dark:text-gray-200 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <TabsContent value="overview" className="mt-0 animate-fade-in">
              <OverviewTab element={element} />
            </TabsContent>
            
            <TabsContent value="properties" className="mt-0 animate-fade-in">
              <PropertiesTab element={element} categoryColor={categoryColor} />
            </TabsContent>
            
            <TabsContent value="structure" className="mt-0 animate-fade-in">
              <StructureTab element={element} categoryColor={categoryColor} />
            </TabsContent>
            
            <TabsContent value="applications" className="mt-0 animate-fade-in">
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
