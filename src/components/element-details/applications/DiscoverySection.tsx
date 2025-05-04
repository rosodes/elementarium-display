
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import ElementTimeline from '../visualizations/ElementTimeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, BookOpen } from 'lucide-react';

interface DiscoverySectionProps {
  element: Element;
}

const DiscoverySection = ({ element }: DiscoverySectionProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold flex items-center gap-2 mb-3">
        {t.elementDetails.discovery || 'Discovery'}
        <Clock className="h-5 w-5 text-muted-foreground" />
      </h2>
      <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="bg-gray-50 dark:bg-gray-800/50 pb-2 flex flex-row items-center justify-between">
          <CardTitle className="text-base text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
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
