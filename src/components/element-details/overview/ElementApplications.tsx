
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Box, Award, Atom } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';

interface ElementApplicationsProps {
  element: Element;
}

const ElementApplications = ({ element }: ElementApplicationsProps) => {
  const { t } = useLanguage();
  
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

export default ElementApplications;
