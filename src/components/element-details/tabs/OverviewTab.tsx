
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Info, Thermometer, Box, Award, Atom } from 'lucide-react';
import BasicInfo from '../BasicInfo';
import PhysicalProperties from '../PhysicalProperties';
import AdditionalInfo from '../AdditionalInfo';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';

interface OverviewTabProps {
  element: Element;
}

const OverviewTab = ({ element }: OverviewTabProps) => {
  const { t } = useLanguage();
  
  // Enhanced interactive overview for element applications
  const renderApplications = () => {
    const applications = [
      {
        icon: <Box className="h-5 w-5 mb-1" />,
        title: t.elementDetails.industry || 'Industry',
        description: element.name === "Hydrogen" ? "Fuel cells, rocket fuel, fertilizer production" : 
                     element.name === "Helium" ? "Cooling superconducting magnets, party balloons, diving mixtures" :
                     "Various industrial applications"
      },
      {
        icon: <Award className="h-5 w-5 mb-1" />,
        title: t.elementDetails.discovery || 'Discovery',
        description: element.discover === "Ancient" ? 
                    t.elementDetails.knownSinceAncient || "Known since ancient times" : 
                    `${t.elementDetails.discoveredIn || 'Discovered in'} ${element.discover}`
      },
      {
        icon: <Atom className="h-5 w-5 mb-1" />,
        title: t.elementDetails.structure || 'Structure',
        description: `${element.electrons.length} ${t.elementDetails.shells || 'shells'}, ${t.elementDetails.atomicRadius || 'Atomic radius'}: ${element.radius?.calculated || element.radius?.empirical || '?'} pm`
      }
    ];
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {applications.map((app, index) => (
          <Card key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center justify-center">
                {app.icon}
              </div>
              <CardTitle className="text-sm font-medium text-center">{app.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-center text-gray-600 dark:text-gray-300">
                {app.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
      
      {renderApplications()}
    </>
  );
};

export default OverviewTab;
