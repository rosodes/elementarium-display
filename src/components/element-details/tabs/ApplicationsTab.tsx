
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '../../../context/LanguageContext';
import { Badge } from '@/components/ui/badge';

// Import refactored components
import UsageDistributionChart from '../visualizations/UsageDistributionChart';
import HistoricalUsageChart from '../visualizations/HistoricalUsageChart';
import ElementTimeline from '../visualizations/ElementTimeline';
import IndustrialUses from '../applications/IndustrialUses';
import EverydayUses from '../applications/EverydayUses';
import UsageSection from '../applications/UsageSection';
import DiscoverySection from '../applications/DiscoverySection';

interface ApplicationsTabProps {
  element: Element;
  categoryColor: string;
}

const ApplicationsTab = ({ element, categoryColor }: ApplicationsTabProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6 max-w-full">
      {/* Key Applications Section */}
      <UsageSection element={element} categoryColor={categoryColor} />
      
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      
      {/* Discovery Timeline Section */}
      <DiscoverySection element={element} />
    </div>
  );
};

export default ApplicationsTab;
