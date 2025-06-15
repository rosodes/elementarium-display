
import React, { useEffect, useState } from 'react';
import { Element } from '../data/elementTypes';
import { getCategoryColor, getSeriesColor } from '../data/elements';
import { useValidatedTranslation } from '../hooks/useValidatedTranslation';
import { getElement } from '../data/elements';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import ElementDetailVisualSections from "./element-details/visualizations/ElementDetailVisualSections";

// Import refactored components
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

import {
  Atom,
  Info,
  Landmark,
  FlaskConical,
  BookOpen,
  PieChart,
  Beaker,
  Shield,
  ActivitySquare,
  Droplets,
  PackageSearch
} from "lucide-react";

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
  onNavigate: (element: Element) => void;
  isFullPage?: boolean;
}

const ElementDetails = ({ element, onClose, onNavigate, isFullPage = false }: ElementDetailsProps) => {
  const { t } = useValidatedTranslation('ElementDetails');
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
        description: `${t('elementDetails.atomicNumber', 'Atomic Number')}: ${element.atomic}`,
        duration: 3000,
      });
    }
    
    // Reset animation state when element changes
    setAnimateEntry(true);
    const timer = setTimeout(() => setAnimateEntry(false), 500);
    
    return () => clearTimeout(timer);
  }, [element.atomic, toast, element.name, element.symbol, isFullPage, t]);
  
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

  // Обновленный стиль: контейнер без горизонтального скролла, обе строки в одной обертке
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
        {/* Шапка УДАЛЕНА */}
        
        <Tabs defaultValue="overview" value={tabValue} onValueChange={setTabValue} className="w-full">
          {/* Больше не sticky, без скроллинга, обертка для кнопок */}
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <TabsList>
              <TabsTrigger value="overview">
                <Info size={18} className="mr-1 shrink-0" />
                {t('elementDetails.tabs.overview', "Overview")}
              </TabsTrigger>
              <TabsTrigger value="properties">
                <Droplets size={18} className="mr-1 shrink-0" />
                {t('elementDetails.tabs.properties', "Properties")}
              </TabsTrigger>
              <TabsTrigger value="structure">
                <Atom size={18} className="mr-1 shrink-0" />
                {t('elementDetails.tabs.structure', "Atomic Structure")}
              </TabsTrigger>
              <TabsTrigger value="applications">
                <FlaskConical size={18} className="mr-1 shrink-0" />
                {t('elementDetails.tabs.applications', "Applications")}
              </TabsTrigger>
              <TabsTrigger value="history">
                <BookOpen size={18} className="mr-1 shrink-0" />
                {t('elementDetails.tabs.history', "History / Discovery")}
              </TabsTrigger>
              <TabsTrigger value="occurrence">
                <PieChart size={18} className="mr-1 shrink-0" />
                {t('elementDetails.tabs.abundance', "Occurrence / Abundance")}
              </TabsTrigger>
              <TabsTrigger value="compounds">
                <Beaker size={18} className="mr-1 shrink-0" />
                {t('elementDetails.tabs.compounds', "Compounds / Chemistry")}
              </TabsTrigger>
              <TabsTrigger value="bio">
                <ActivitySquare size={18} className="mr-1 shrink-0" />
                {t('elementDetails.tabs.bio', "Biological Role / Toxicity")}
              </TabsTrigger>
              <TabsTrigger value="production">
                <Landmark size={18} className="mr-1 shrink-0" />
                {t('elementDetails.tabs.production', "Production / Synthesis")}
              </TabsTrigger>
              <TabsTrigger value="safety">
                <Shield size={18} className="mr-1 shrink-0" />
                {t('elementDetails.tabs.safety', "Safety / Precautions")}
              </TabsTrigger>
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
