import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '../../../context/LanguageContext';
import { Badge } from '@/components/ui/badge';

// Импортируем дополнительные секции
import UsageDistributionChart from '../visualizations/UsageDistributionChart';
import ElementTimeline from '../visualizations/ElementTimeline';
import IndustrialUses from '../applications/IndustrialUses';
import EverydayUses from '../applications/EverydayUses';
import UsageSection from '../applications/UsageSection';
import DiscoverySection from '../applications/DiscoverySection';

// Импорт секций применения для водорода:
import HydrogenCommercialUsesSection from "../new-sections/HydrogenCommercialUsesSection";
import HydrogenExtractionSection from "../new-sections/HydrogenExtractionSection";

interface ApplicationsTabProps {
  element: Element;
  categoryColor: string;
}

const ApplicationsTab = ({ element, categoryColor }: ApplicationsTabProps) => {
  const { t } = useLanguage();

  // Можно дополнительно раскрыть области применения, добавить инфографику, факты
  return (
    <div className="space-y-6 max-w-full">
      <UsageSection element={element} categoryColor={categoryColor} />
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      <IndustrialUses element={element} />
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      <EverydayUses element={element} />
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      <UsageDistributionChart element={element} />
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      <ElementTimeline element={element} />
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      <DiscoverySection element={element} />

      {/* --- ДОПОЛНЕНИЕ ДЛЯ HYDROGEN --- */}
      {element.atomic === "1" && (
        <>
          <HydrogenExtractionSection />
          <HydrogenCommercialUsesSection />
        </>
      )}
    </div>
  );
};

export default ApplicationsTab;
