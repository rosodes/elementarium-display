
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Info } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import BasicInfo from '../BasicInfo';

interface BasicInfoCardProps {
  element: Element;
}

const BasicInfoCard = ({ element }: BasicInfoCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg flex items-center">
          <Info className="w-5 h-5 mr-2" />
          {t.elementDetails.basicInfo}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <BasicInfo element={element} />
      </CardContent>
    </Card>
  );
};

export default BasicInfoCard;
