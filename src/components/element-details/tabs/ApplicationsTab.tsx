
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../ui/card';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';

interface ApplicationsTabProps {
  element: Element;
  categoryColor: string;
}

const ApplicationsTab = ({ element, categoryColor }: ApplicationsTabProps) => {
  const { t } = useLanguage();
  
  // Generate usage data for radar chart
  const getUsageData = () => {
    const industrialScore = Math.random() * 100;
    const consumerScore = Math.random() * 100;
    const medicalScore = Math.random() * 80;
    const researchScore = Math.random() * 90;
    
    // Assign higher scores based on common element uses
    const adjustedScores = {
      industrial: industrialScore,
      consumer: consumerScore,
      medical: medicalScore,
      research: researchScore
    };
    
    // Adjust specific elements based on their typical uses
    if (element.name === "Hydrogen") {
      adjustedScores.industrial = 95;
      adjustedScores.research = 90;
    } else if (element.name === "Helium") {
      adjustedScores.industrial = 80;
      adjustedScores.medical = 85;
    } else if (element.name === "Gold" || element.name === "Silver") {
      adjustedScores.consumer = 95;
      adjustedScores.industrial = 85;
    } else if (element.series === "Transition metal") {
      adjustedScores.industrial = Math.max(80, adjustedScores.industrial);
    } else if (element.series === "Noble gas") {
      adjustedScores.research = Math.max(80, adjustedScores.research);
    }
    
    return [
      {
        subject: t.elementDetails.industrialUses || 'Industrial',
        value: adjustedScores.industrial,
        fullMark: 100
      },
      {
        subject: t.elementDetails.everydayUses || 'Consumer',
        value: adjustedScores.consumer,
        fullMark: 100
      },
      {
        subject: 'Medical',
        value: adjustedScores.medical,
        fullMark: 100
      },
      {
        subject: 'Research',
        value: adjustedScores.research,
        fullMark: 100
      }
    ];
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.elementDetails.applications || "Applications & Uses"}</CardTitle>
        <CardDescription>
          {t.elementDetails.keyApplications || "Key applications and uses of"} {element.name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-72 w-full mb-8">
          <h3 className="text-lg font-medium mb-2">Usage Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={90} data={getUsageData()}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name={element.name}
                dataKey="value"
                stroke={categoryColor.split(' ')[0]}
                fill={categoryColor.split(' ')[0]}
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">{t.elementDetails.industrialUses || "Industrial Uses"}</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {element.name === "Hydrogen" ? (
                <>
                  <li>Fuel for rockets and potentially for vehicles</li>
                  <li>Ammonia production for fertilizers</li>
                  <li>Oil refining processes</li>
                  <li>Metal production as a reducing agent</li>
                </>
              ) : element.name === "Helium" ? (
                <>
                  <li>Cooling superconducting magnets in MRI machines</li>
                  <li>Pressurizing rocket fuel tanks</li>
                  <li>Leak detection in vacuum systems</li>
                  <li>Mixed with oxygen for deep-sea diving</li>
                </>
              ) : element.series === "Noble gas" ? (
                <>
                  <li>Lighting and signs (produces colored glow when electrified)</li>
                  <li>Controlled atmospheres for manufacturing</li>
                  <li>Cryogenic applications</li>
                </>
              ) : element.series === "Alkali metal" ? (
                <>
                  <li>Catalysts in chemical reactions</li>
                  <li>Heat transfer applications</li>
                  <li>Production of other chemicals</li>
                </>
              ) : element.series === "Transition metal" ? (
                <>
                  <li>Construction and structural materials</li>
                  <li>Electrical conductors and contacts</li>
                  <li>Catalytic converters</li>
                  <li>Alloys for specialized applications</li>
                </>
              ) : (
                <>
                  <li>Various industrial processes</li>
                  <li>Chemical synthesis</li>
                  <li>Material manufacturing</li>
                </>
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">{t.elementDetails.everydayUses || "Everyday Applications"}</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {element.name === "Hydrogen" ? (
                <>
                  <li>Water (H₂O) - essential for life</li>
                  <li>Hydrogenated vegetable oils in food products</li>
                  <li>Hydrogen peroxide as a disinfectant</li>
                </>
              ) : element.name === "Helium" ? (
                <>
                  <li>Filling balloons and airships</li>
                  <li>Voice-altering effect when inhaled (high-pitched voice)</li>
                  <li>Weather balloons and scientific research</li>
                </>
              ) : element.name === "Oxygen" ? (
                <>
                  <li>Breathing and life support</li>
                  <li>Medical treatments</li>
                  <li>Combustion and burning processes</li>
                </>
              ) : element.name === "Carbon" ? (
                <>
                  <li>All organic compounds and life forms</li>
                  <li>Graphite in pencils</li>
                  <li>Diamonds in jewelry</li>
                  <li>Carbon fiber in sporting goods and high-tech materials</li>
                </>
              ) : element.name === "Gold" || element.name === "Silver" || element.name === "Platinum" ? (
                <>
                  <li>Jewelry and decorative items</li>
                  <li>Electronic components</li>
                  <li>Investments and currency backing</li>
                  <li>Dental applications</li>
                </>
              ) : element.series === "Lanthanide" || element.series === "Actinide" ? (
                <>
                  <li>Powerful magnets in electronics</li>
                  <li>Phosphors in display technologies</li>
                  <li>Nuclear applications (for some actinides)</li>
                  <li>Medical imaging and treatments</li>
                </>
              ) : (
                <>
                  <li>Materials in consumer products</li>
                  <li>Electronics and technology</li>
                  <li>Various everyday chemicals</li>
                </>
              )}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
            {t.elementDetails.funFacts || "Interesting Facts"}
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-blue-700 dark:text-blue-200">
            {element.name === "Hydrogen" ? (
              <>
                <li>The most abundant element in the universe</li>
                <li>Powers the sun through nuclear fusion</li>
                <li>Lightest of all elements</li>
              </>
            ) : element.name === "Helium" ? (
              <>
                <li>The only element discovered first in space, not on Earth</li>
                <li>Named after the Greek god of the Sun, Helios</li>
                <li>Cannot solidify at normal atmospheric pressure, even near absolute zero</li>
              </>
            ) : element.boil && parseInt(element.boil) > 4000 ? (
              <>
                <li>Has extremely high boiling point of {element.boil}K</li>
                <li>One of the most heat-resistant elements known</li>
              </>
            ) : element.melt && parseInt(element.melt) < 273 ? (
              <>
                <li>Melts below the freezing point of water ({element.melt}K)</li>
                <li>Can exist in liquid state at room temperature</li>
              </>
            ) : element.series === "Noble gas" ? (
              <>
                <li>Extremely unreactive due to full electron shells</li>
                <li>Creates colorful glows when electrified</li>
              </>
            ) : (
              <>
                <li>Has unique properties among the elements</li>
                <li>Plays an important role in the periodic table</li>
                {element.discover !== "Ancient" && (
                  <li>Was discovered relatively recently in {element.discover}</li>
                )}
              </>
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationsTab;
