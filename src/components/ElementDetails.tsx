
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

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
  onNavigate: (element: Element) => void;
}

const ElementDetails = ({ element, onClose, onNavigate }: ElementDetailsProps) => {
  const { t } = useLanguage();
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);
  
  const [tabValue, setTabValue] = useState("overview");
  
  // Get previous and next elements
  const prevElement = getElement(parseInt(element.atomic) - 1);
  const nextElement = getElement(parseInt(element.atomic) + 1);
  
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
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-auto overflow-hidden animate-fade-in">
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
          <div className="border-b border-gray-200 dark:border-gray-700">
            <TabsList className="flex w-full overflow-x-auto bg-transparent justify-start px-4 pt-2 h-auto">
              <TabsTrigger value="overview" className="px-4 py-2 text-sm">
                {t.elementDetails.overview || "Overview"}
              </TabsTrigger>
              <TabsTrigger value="properties" className="px-4 py-2 text-sm">
                {t.elementDetails.properties || "Properties"}
              </TabsTrigger>
              <TabsTrigger value="structure" className="px-4 py-2 text-sm">
                {t.elementDetails.atomicStructure || "Structure"}
              </TabsTrigger>
              <TabsTrigger value="applications" className="px-4 py-2 text-sm">
                {t.elementDetails.applications || "Applications"}
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto dark:text-gray-200 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-850">
            <TabsContent value="overview" className="mt-0">
              <OverviewTab element={element} />
            </TabsContent>
            
            <TabsContent value="properties" className="mt-0">
              <PropertiesTab element={element} categoryColor={categoryColor} />
            </TabsContent>
            
            <TabsContent value="structure" className="mt-0">
              <StructureTab element={element} categoryColor={categoryColor} />
            </TabsContent>
            
            <TabsContent value="applications" className="mt-0">
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
