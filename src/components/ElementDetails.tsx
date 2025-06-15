
import React, { useEffect, useState } from 'react';
import { Element } from '../data/elementTypes';
import { getCategoryColor, getSeriesColor } from '../data/elements';
import { useLanguage } from '../context/LanguageContext';
import { getElement } from '../data/elements';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import ElementDetailVisualSections from "./element-details/visualizations/ElementDetailVisualSections";

// Import refactored components
import ElementHeader from './element-details/ElementHeader';
import ElementFooter from './element-details/ElementFooter';
import OverviewTab from './element-details/tabs/OverviewTab';
import PropertiesTab from './element-details/tabs/PropertiesTab';
import StructureTab from './element-details/tabs/StructureTab';
import ApplicationsTab from './element-details/tabs/ApplicationsTab';
// Новые вкладки
import HistoryTab from './element-details/tabs/HistoryTab';
import OccurrenceTab from './element-details/tabs/OccurrenceTab';
import CompoundsTab from './element-details/tabs/CompoundsTab';
import BioTab from './element-details/tabs/BioTab';
import ProductionTab from './element-details/tabs/ProductionTab';
import SafetyTab from './element-details/tabs/SafetyTab';
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

  // Сделаем контент немного уже
  const contentClasses = isFullPage
    ? "max-w-3xl w-full mx-auto" // ! обновлено: ужимаем ширину максимум до 3xl
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
            <TabsList
              className={`
                flex flex-wrap w-full min-h-0 justify-start gap-x-1 gap-y-1 p-0 rounded-none
                bg-gray-50 dark:bg-gray-850
              `}
              style={{ rowGap: "2px" }}
            >
              <TabsTrigger value="overview" className="px-2 py-1 text-xs font-medium leading-tight min-w-[90px]">Overview</TabsTrigger>
              <TabsTrigger value="properties" className="px-2 py-1 text-xs font-medium leading-tight min-w-[90px]">Properties</TabsTrigger>
              <TabsTrigger value="structure" className="px-2 py-1 text-xs font-medium leading-tight min-w-[90px]">Atomic Structure</TabsTrigger>
              <TabsTrigger value="applications" className="px-2 py-1 text-xs font-medium leading-tight min-w-[90px]">Applications</TabsTrigger>
              <TabsTrigger value="history" className="px-2 py-1 text-xs font-medium leading-tight min-w-[90px]">History / Discovery</TabsTrigger>
              <TabsTrigger value="occurrence" className="px-2 py-1 text-xs font-medium leading-tight min-w-[90px]">Occurrence / Abundance</TabsTrigger>
              <TabsTrigger value="compounds" className="px-2 py-1 text-xs font-medium leading-tight min-w-[90px]">Compounds / Chemistry</TabsTrigger>
              <TabsTrigger value="bio" className="px-2 py-1 text-xs font-medium leading-tight min-w-[90px]">Biological Role / Toxicity</TabsTrigger>
              <TabsTrigger value="production" className="px-2 py-1 text-xs font-medium leading-tight min-w-[90px]">Production / Synthesis</TabsTrigger>
              <TabsTrigger value="safety" className="px-2 py-1 text-xs font-medium leading-tight min-w-[90px]">Safety / Precautions</TabsTrigger>
            </TabsList>
          </div>
          <div className={`p-5 sm:p-6 ${tabsContentMaxHeightClass} overflow-y-auto dark:text-gray-200 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900`}>
            <TabsContent value="overview"><OverviewTab element={element} /></TabsContent>
            <TabsContent value="properties"><PropertiesTab element={element} categoryColor={categoryColor} /></TabsContent>
            <TabsContent value="structure"><StructureTab element={element} categoryColor={categoryColor} /></TabsContent>
            <TabsContent value="applications"><ApplicationsTab element={element} categoryColor={categoryColor} /></TabsContent>
            <TabsContent value="history"><HistoryTab element={element} /></TabsContent>
            <TabsContent value="occurrence"><OccurrenceTab element={element} /></TabsContent>
            <TabsContent value="compounds"><CompoundsTab element={element} /></TabsContent>
            <TabsContent value="bio"><BioTab element={element} /></TabsContent>
            <TabsContent value="production"><ProductionTab element={element} /></TabsContent>
            <TabsContent value="safety"><SafetyTab element={element} /></TabsContent>
          </div>
        </Tabs>
        
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
