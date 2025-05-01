
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../../../context/LanguageContext';
import { Badge } from '@/components/ui/badge';

// Import components
import UsageDistributionChart from '../visualizations/UsageDistributionChart';
import HistoricalUsageChart from '../visualizations/HistoricalUsageChart';
import IndustrialUses from './IndustrialUses';
import EverydayUses from './EverydayUses';

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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Industry Applications */}
        <IndustrialUses element={element} />
        
        {/* Usage Distribution */}
        <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader className="bg-gray-50 dark:bg-gray-800/50 pb-2">
            <CardTitle className="text-base text-gray-700 dark:text-gray-200">
              {t.ui?.usageDistribution || 'Usage Distribution'}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <UsageDistributionChart element={element} />
            <div className="mt-2 text-xs text-center text-muted-foreground">
              {t.ui?.simulatedData || 'This is simulated data for demonstration purposes'}
            </div>
          </CardContent>
        </Card>
        
        {/* Everyday Applications */}
        <EverydayUses element={element} />
        
        {/* Historical Usage Trends */}
        <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader className="bg-gray-50 dark:bg-gray-800/50 pb-2">
            <CardTitle className="text-base text-gray-700 dark:text-gray-200">
              Historical Usage Trends
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <HistoricalUsageChart element={element} categoryColor={categoryColor} />
            <div className="mt-2 text-xs text-center text-muted-foreground">
              {t.ui?.note || 'Note'}: Usage index is relative and represents global consumption trends
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UsageSection;
