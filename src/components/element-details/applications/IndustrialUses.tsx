
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../../../context/LanguageContext';
import { Factory } from 'lucide-react';

interface IndustrialUsesProps {
  element: Element;
}

const IndustrialUses = ({ element }: IndustrialUsesProps) => {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      <CardHeader className="bg-gray-50 dark:bg-gray-800/50 pb-2">
        <CardTitle className="text-base flex items-center gap-2 text-gray-700 dark:text-gray-200">
          {t.elementDetails.industrialUses}
          <Factory className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>Manufacturing of {element.series.toLowerCase()} components</li>
          <li>Used in specialized industrial processes</li>
          <li>
            {(element.category === 'transition' || element.category === 'post-transition' || element.category === 'alkali' || element.category === 'alkaline' || element.category === 'metalloid') 
              ? 'Production of alloys and compounds' 
              : 'Chemical synthesis and reactions'}
          </li>
          {(element.category === 'transition' || element.category === 'post-transition' || element.category === 'alkali' || element.category === 'alkaline') && <li>Electrical conductors and wiring</li>}
          {element.electroneg && parseFloat(element.electroneg) > 2.5 && 
            <li>Catalysts for chemical reactions</li>}
          {element.melt && parseInt(element.melt) > 1500 && 
            <li>High-temperature applications and furnace components</li>}
          {element.category === 'nonmetal' && 
            <li>Component in chemical and pharmaceutical industries</li>}
        </ul>
      </CardContent>
    </Card>
  );
};

export default IndustrialUses;
