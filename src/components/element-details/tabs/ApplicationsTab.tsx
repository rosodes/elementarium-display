
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../../../context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { InfoIcon } from 'lucide-react';

// Import refactored components
import UsageDistributionChart from '../visualizations/UsageDistributionChart';
import HistoricalUsageChart from '../visualizations/HistoricalUsageChart';
import ElementTimeline from '../visualizations/ElementTimeline';
import IndustrialUses from '../applications/IndustrialUses';
import EverydayUses from '../applications/EverydayUses';

interface ApplicationsTabProps {
  element: Element;
  categoryColor: string;
}

const ApplicationsTab = ({ element, categoryColor }: ApplicationsTabProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-xl font-bold">
            {t.elementDetails.keyApplications} {element.symbol}
          </h2>
          <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
            {element.category}
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Industry Applications */}
          <IndustrialUses element={element} />
          
          {/* Usage Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t.ui?.usageDistribution || 'Usage Distribution'}</CardTitle>
            </CardHeader>
            <CardContent>
              <UsageDistributionChart element={element} />
              <div className="mt-2 text-xs text-center text-muted-foreground">
                {t.ui?.simulatedData || 'This is simulated data for demonstration purposes'}
              </div>
            </CardContent>
          </Card>
          
          {/* Everyday Applications */}
          <EverydayUses element={element} />
          
          {/* Historical Usage Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Historical Usage Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <HistoricalUsageChart element={element} categoryColor={categoryColor} />
              <div className="mt-2 text-xs text-center text-muted-foreground">
                {t.ui?.note || 'Note'}: Usage index is relative and represents global consumption trends
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Separator />
      
      {/* Discovery Timeline */}
      <div>
        <h2 className="text-xl font-bold mb-3">{t.elementDetails.discovery || 'Discovery'}</h2>
        <ElementTimeline element={element} />
      </div>
    </div>
  );
};

export default ApplicationsTab;
