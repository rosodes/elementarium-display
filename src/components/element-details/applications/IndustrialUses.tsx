
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../../../context/LanguageContext';
import { InfoIcon } from 'lucide-react';

interface IndustrialUsesProps {
  element: Element;
}

const IndustrialUses = ({ element }: IndustrialUsesProps) => {
  const { t } = useLanguage();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          {t.elementDetails.industrialUses}
          <InfoIcon className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Manufacturing of {element.series.toLowerCase()} components</li>
          <li>Used in specialized industrial processes</li>
          <li>
            {element.category === 'metal' || element.category === 'metalloid' 
              ? 'Production of alloys and compounds' 
              : 'Chemical synthesis and reactions'}
          </li>
          {element.category === 'metal' && <li>Electrical conductors and wiring</li>}
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
