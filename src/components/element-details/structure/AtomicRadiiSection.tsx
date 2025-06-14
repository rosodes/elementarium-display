
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

interface AtomicRadiiSectionProps {
  element: Element;
}

const AtomicRadiiSection = ({ element }: AtomicRadiiSectionProps) => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">{t.elementDetails.atomicRadii}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {element.radius?.calculated && (
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold">{element.radius.calculated}</div>
                <div className="text-sm text-gray-500">pm</div>
                <div className="mt-2 text-sm font-medium">{t.elementDetails.calculated}</div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {element.radius?.empirical && (
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold">{element.radius.empirical}</div>
                <div className="text-sm text-gray-500">pm</div>
                <div className="mt-2 text-sm font-medium">{t.elementDetails.empirical}</div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {element.radius?.covalent && (
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold">{element.radius.covalent}</div>
                <div className="text-sm text-gray-500">pm</div>
                <div className="mt-2 text-sm font-medium">{t.elementDetails.covalent}</div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {element.radius?.vanderwaals && (
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold">{element.radius.vanderwaals}</div>
                <div className="text-sm text-gray-500">pm</div>
                <div className="mt-2 text-sm font-medium">{t.elementDetails.vanDerWaals}</div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AtomicRadiiSection;
