
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import ElementTimeline from '../visualizations/ElementTimeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DiscoverySectionProps {
  element: Element;
}

const DiscoverySection = ({ element }: DiscoverySectionProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold mb-3">{t.elementDetails.discovery || 'Discovery'}</h2>
      <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
        <CardHeader className="bg-gray-50 dark:bg-gray-800/50 pb-2">
          <CardTitle className="text-base text-gray-700 dark:text-gray-200">
            Discovery Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <ElementTimeline element={element} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DiscoverySection;
