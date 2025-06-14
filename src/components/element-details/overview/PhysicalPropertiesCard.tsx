
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Thermometer } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import PhysicalProperties from '../PhysicalProperties';

interface PhysicalPropertiesCardProps {
  element: Element;
}

const PhysicalPropertiesCard = ({ element }: PhysicalPropertiesCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg flex items-center">
          <Thermometer className="w-5 h-5 mr-2" />
          {t.elementDetails.physicalProperties}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <PhysicalProperties element={element} />
      </CardContent>
    </Card>
  );
};

export default PhysicalPropertiesCard;
