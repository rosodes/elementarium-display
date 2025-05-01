
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../../../context/LanguageContext';

interface EverydayUsesProps {
  element: Element;
}

const EverydayUses = ({ element }: EverydayUsesProps) => {
  const { t } = useLanguage();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{t.elementDetails.everydayUses}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1 text-sm">
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
