
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../../../context/LanguageContext';

interface ElementPropertyRadarProps {
  element: Element;
  categoryColor: string;
}

const ElementPropertyRadar = ({ element, categoryColor }: ElementPropertyRadarProps) => {
  const { t } = useLanguage();
  
  // Normalize values for radar chart (0-100 scale)
  const normalizeValue = (value: string | undefined, min: number, max: number): number => {
    if (!value) return 0;
    const num = parseFloat(value);
    if (isNaN(num)) return 0;
    return ((num - min) / (max - min)) * 100;
  };
  
  const getRadarData = () => {
    // Get property values or defaults
    const electroneg = element.electroneg ? parseFloat(element.electroneg) : 0;
    const melt = element.melt ? parseFloat(element.melt) : 0;
    const boil = element.boil ? parseFloat(element.boil) : 0;
    const density = element.density?.stp ? parseFloat(element.density.stp) : 0;
    const atomicRadius = element.radius?.empirical ? parseFloat(element.radius.empirical) : 0;
    
    // Create normalized radar data
    return [
      {
        property: t.elementDetails.electronegativity || 'Electronegativity',
        value: normalizeValue(element.electroneg, 0, 4),
        actualValue: electroneg
      },
      {
        property: t.elementDetails.meltingPoint || 'Melting Point',
        value: normalizeValue(element.melt, 0, 3800), // Tungsten ~3695K
        actualValue: melt
      },
      {
        property: t.elementDetails.boilingPoint || 'Boiling Point',
        value: normalizeValue(element.boil, 0, 5900), // Tungsten ~5828K
        actualValue: boil
      },
      {
        property: t.elementDetails.density || 'Density',
        value: normalizeValue(element.density?.stp, 0, 22.6), // Osmium ~22.6 g/cm³
        actualValue: density
      },
      {
        property: t.elementDetails.atomicRadius || 'Atomic Radius',
        value: normalizeValue(element.radius?.empirical, 0, 300), // Cesium ~300pm
        actualValue: atomicRadius
      }
    ];
  };
  
  const radarData = getRadarData();
  
  // Extract primary color from Tailwind class
  const color = categoryColor.split(' ')[0] || 'bg-blue-500';
  
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-sm">{t.elementDetails.properties} - {element.symbol}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={90} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="property" />
              <PolarRadiusAxis domain={[0, 100]} axisLine={false} tick={false} />
              <Radar
                name={element.name}
                dataKey="value"
                stroke={color.replace('bg-', 'text-')}
                fill={color}
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 text-xs">
          {radarData.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span className="font-medium">{item.property}:</span>
              <span>{item.actualValue > 0 ? item.actualValue : 'N/A'}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ElementPropertyRadar;
