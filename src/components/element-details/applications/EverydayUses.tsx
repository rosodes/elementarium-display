
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../../../context/LanguageContext';
import { Lightbulb } from 'lucide-react';

interface EverydayUsesProps {
  element: Element;
}

const EverydayUses = ({ element }: EverydayUsesProps) => {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      <CardHeader className="bg-gray-50 dark:bg-gray-800/50 pb-2">
        <CardTitle className="text-base flex items-center gap-2 text-gray-700 dark:text-gray-200">
          {t.elementDetails.everydayUses}
          <Lightbulb className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {element.category === 'metal' && (
            <>
              <li>Consumer electronics and devices</li>
              <li>Construction materials and tools</li>
              {parseInt(element.atomic) < 30 && <li>Coins and jewelry</li>}
            </>
          )}
          {element.category === 'nonmetal' && (
            <>
              <li>Chemical compounds in household products</li>
              <li>Food additives and preservatives</li>
              {element.symbol === 'O' && <li>Essential for human respiration</li>}
              {element.symbol === 'C' && <li>Basis for organic chemistry and life</li>}
            </>
          )}
          {element.category === 'noble gas' && (
            <>
              <li>Lighting applications</li>
              <li>Protective atmospheres</li>
              {element.symbol === 'He' && <li>Balloons and airships</li>}
              {element.symbol === 'Ar' && <li>Welding environments</li>}
            </>
          )}
          {element.category === 'transition' && (
            <li>
              Used in {element.melt && parseInt(element.melt) > 1500 ? 'high-temperature' : 'specialized'} manufacturing
            </li>
          )}
          <li>Commercial and consumer applications</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default EverydayUses;
