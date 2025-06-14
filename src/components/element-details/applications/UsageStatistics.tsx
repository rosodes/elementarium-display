
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../../../context/LanguageContext';
import UsageDistributionChart from '../visualizations/UsageDistributionChart';
import HistoricalUsageChart from '../visualizations/HistoricalUsageChart';

interface UsageStatisticsProps {
  element: Element;
  categoryColor: string;
}

const UsageStatistics = ({ element, categoryColor }: UsageStatisticsProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
  );
};

export default UsageStatistics;
