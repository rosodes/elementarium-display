
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

interface AtomicStructureCardProps {
  element: Element;
}

const AtomicStructureCard = ({ element }: AtomicStructureCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card>
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="font-medium">{t.elementDetails.electronConfig}:</div>
          <div>{element.electronstring}</div>
          
          <div className="font-medium">{t.elementDetails.shells}:</div>
          <div>
            {element.electrons.map((count, i) => (
              <span key={i} className="mr-2">
                {i+1}: {count}e⁻
              </span>
            ))}
          </div>
          
          {/* Add quantum number information */}
          {element.quantum && (
            <>
              <div className="font-medium">{t.elementDetails.quantumNumbers}:</div>
              <div className="grid grid-cols-1 gap-1">
                <div>{t.elementDetails.principal}: n = {element.quantum.n}</div>
                <div>{t.elementDetails.azimuthal}: l = {element.quantum.l}</div>
                <div>{t.elementDetails.magnetic}: m = {element.quantum.m}</div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AtomicStructureCard;
