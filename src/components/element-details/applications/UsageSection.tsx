
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import IndustrialUses from './IndustrialUses';
import EverydayUses from './EverydayUses';
import UsageStatistics from './UsageStatistics';

interface UsageSectionProps {
  element: Element;
  categoryColor: string;
}

const UsageSection = ({ element, categoryColor }: UsageSectionProps) => {
  const { t } = useLanguage();
  
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <h2 className="text-xl font-bold">
          {t.elementDetails.keyApplications} {element.symbol}
        </h2>
        <Badge 
          variant="outline" 
          className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
        >
          {element.category}
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <IndustrialUses element={element} />
        <EverydayUses element={element} />
      </div>
      
      <UsageStatistics element={element} categoryColor={categoryColor} />
    </div>
  );
};

export default UsageSection;
