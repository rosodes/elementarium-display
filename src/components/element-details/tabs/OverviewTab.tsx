
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import BasicInfoCard from '../overview/BasicInfoCard';
import PhysicalPropertiesCard from '../overview/PhysicalPropertiesCard';
import ElementApplications from '../overview/ElementApplications';
import AdditionalInfo from '../AdditionalInfo';

interface OverviewTabProps {
  element: Element;
}

const OverviewTab = ({ element }: OverviewTabProps) => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <BasicInfoCard element={element} />
        <PhysicalPropertiesCard element={element} />
      </div>
      
      <div className="mt-4">
        <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
          <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4">
            <CardTitle className="text-lg">{t.elementDetails.additionalInfo}</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <AdditionalInfo element={element} />
          </CardContent>
        </Card>
      </div>
      
      <ElementApplications element={element} />
    </>
  );
};

export default OverviewTab;
