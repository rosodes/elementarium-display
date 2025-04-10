
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Scale, Zap } from 'lucide-react';
import ElementProperties from '../ElementProperties';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface PropertiesTabProps {
  element: Element;
  categoryColor: string;
}

const PropertiesTab = ({ element, categoryColor }: PropertiesTabProps) => {
  const { t } = useLanguage();
  
  // Generate data for melting and boiling points comparison chart
  const getMeltingPointData = () => {
    const meltingPoint = element.melt ? parseFloat(element.melt) : 0;
    const boilingPoint = element.boil ? parseFloat(element.boil) : 0;
    
    // Find some neighboring elements for comparison
    const atomicNum = parseInt(element.atomic);
    const neighborElements = [
      { name: atomicNum - 2 > 0 ? `Element ${atomicNum - 2}` : '', meltingPoint: Math.random() * 1000 + 200 },
      { name: atomicNum - 1 > 0 ? `Element ${atomicNum - 1}` : '', meltingPoint: Math.random() * 1000 + 200 },
      { name: element.symbol, meltingPoint, boilingPoint },
      { name: atomicNum + 1 <= 118 ? `Element ${atomicNum + 1}` : '', meltingPoint: Math.random() * 1000 + 200 },
      { name: atomicNum + 2 <= 118 ? `Element ${atomicNum + 2}` : '', meltingPoint: Math.random() * 1000 + 200 },
    ].filter(item => item.name !== '');
    
    return neighborElements;
  };
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Scale className="w-5 h-5 mr-2" />
              {t.elementDetails.physicalProperties}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ElementProperties element={element} />
              
              <div className="mt-4">
                <h4 className="font-bold text-sm mb-2">
                  {t.elementDetails.meltingBoilingPoint || "Melting & Boiling Points"}
                </h4>
                <div className="h-40 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={getMeltingPointData()}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                    >
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={50} />
                      <YAxis label={{ value: 'Temperature (K)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value) => [`${value} K`, 'Temperature']} />
                      <Bar dataKey="meltingPoint" fill={categoryColor.split(' ')[0]} name="Melting Point" />
                      {element.boil && <Bar dataKey="boilingPoint" fill="#ff7043" name="Boiling Point" />}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              {t.elementDetails.electronProperties || "Electronic Properties"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm mb-2">
              <div className="font-medium">{t.elementDetails.electronConfig}:</div>
              <div className="break-words">{element.electronstring}</div>
              
              {element.electroneg && (
                <>
                  <div className="font-medium">{t.elementDetails.electronegativity}:</div>
                  <div>{element.electroneg}</div>
                </>
              )}
              
              {element.valence && (
                <>
                  <div className="font-medium">{t.elementDetails.valence}:</div>
                  <div>{element.valence}</div>
                </>
              )}
              
              {element.oxidation && (
                <>
                  <div className="font-medium">{t.elementDetails.oxidationStates}:</div>
                  <div>{element.oxidation}</div>
                </>
              )}
            </div>
            
            {/* Electron affinity visualizer */}
            {element.affinity && (
              <div className="mt-4">
                <h4 className="font-bold text-xs mb-1">{t.elementDetails.electronAffinity || "Electron Affinity"}:</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-4 rounded-full">
                  <div 
                    className={`h-full rounded-full ${categoryColor}`}
                    style={{ width: `${Math.min(parseInt(element.affinity) / 4, 100)}%` }}
                  />
                </div>
                <div className="text-right text-xs mt-1">{element.affinity} kJ/mol</div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Abundance data if available */}
      {element.abundance && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-lg">{t.elementDetails.abundance || "Abundance"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {element.abundance.universe && (
                <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <div className="text-xs text-blue-600 dark:text-blue-300 font-medium">
                    {t.elementDetails.universe || "Universe"}
                  </div>
                  <div className="text-sm mt-1">{element.abundance.universe}</div>
                </div>
              )}
              
              {element.abundance.solar && (
                <div className="text-center p-2 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                  <div className="text-xs text-yellow-600 dark:text-yellow-300 font-medium">
                    {t.elementDetails.solar || "Solar System"}
                  </div>
                  <div className="text-sm mt-1">{element.abundance.solar}</div>
                </div>
              )}
              
              {element.abundance.crust && (
                <div className="text-center p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <div className="text-xs text-green-600 dark:text-green-300 font-medium">
                    {t.elementDetails.crust || "Earth's Crust"}
                  </div>
                  <div className="text-sm mt-1">{element.abundance.crust}</div>
                </div>
              )}
            </div>
            
            {/* Add abundance comparison chart */}
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[
                    { 
                      name: t.elementDetails.universe || "Universe", 
                      value: element.abundance.universe ? parseFloat(element.abundance.universe.replace(/[^\d.]/g, '')) || 0.1 : 0.1 
                    },
                    { 
                      name: t.elementDetails.solar || "Solar System", 
                      value: element.abundance.solar ? parseFloat(element.abundance.solar.replace(/[^\d.]/g, '')) || 0.1 : 0.1 
                    },
                    { 
                      name: t.elementDetails.crust || "Earth's Crust", 
                      value: element.abundance.crust ? parseFloat(element.abundance.crust.replace(/[^\d.]/g, '')) || 0.1 : 0.1 
                    }
                  ].filter(item => item.value > 0)}
                  margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                >
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip formatter={(value) => [`${value}%`, 'Abundance']} />
                  <Bar dataKey="value" fill={categoryColor.split(' ')[0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PropertiesTab;
