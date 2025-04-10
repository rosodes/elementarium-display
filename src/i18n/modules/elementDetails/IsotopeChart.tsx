
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../../../context/LanguageContext';

interface IsotopeChartProps {
  element: Element;
  categoryColor: string;
}

// Mock isotope data - in a real app, this would come from an API or data file
const getIsotopeData = (element: Element) => {
  // Generate some mock data based on atomic number
  const atomicNum = parseInt(element.atomic);
  const baseCount = Math.max(20, atomicNum * 2);
  
  const getMockAbundance = (isotope: number) => {
    if (isotope === atomicNum) return 100;
    if (isotope === atomicNum + 1) return Math.random() * 20 + 10;
    if (isotope === atomicNum - 1) return Math.random() * 15 + 5;
    return Math.random() * 5;
  };
  
  // Create mock isotope data
  return Array.from({ length: 5 }, (_, i) => {
    const isotopeNum = atomicNum - 2 + i;
    return {
      isotope: `${element.symbol}-${isotopeNum}`,
      abundance: getMockAbundance(isotopeNum),
      halfLife: isotopeNum === atomicNum ? 'Stable' : `${Math.floor(Math.random() * 1000) + 1} y`
    };
  });
};

const IsotopeChart = ({ element, categoryColor }: IsotopeChartProps) => {
  const { t } = useLanguage();
  const isotopeData = getIsotopeData(element);
  
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-sm">{t.elementDetails.isotopes} - {element.symbol}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={isotopeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="isotope" />
              <YAxis label={{ value: 'Abundance (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                formatter={(value, name, props) => {
                  const item = props.payload;
                  return [`${value}% (${item.halfLife})`, 'Abundance'];
                }}
              />
              <Bar 
                dataKey="abundance" 
                fill={categoryColor.split(' ')[0]} 
                name="Abundance"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-xs text-center text-gray-500">
          {t.elementDetails.isotopes} - {t.ui?.note || 'Note'}: {t.ui?.simulatedData || 'This is simulated data for demonstration purposes'}
        </div>
      </CardContent>
    </Card>
  );
};

export default IsotopeChart;
