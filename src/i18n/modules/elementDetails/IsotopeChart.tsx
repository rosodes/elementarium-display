
import React, { useMemo } from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../../../context/LanguageContext';
import { generateStableIsotopeData } from '../../../utils/chartDataGenerator';

interface IsotopeChartProps {
  element: Element;
  categoryColor: string;
}

const IsotopeChart = ({ element, categoryColor }: IsotopeChartProps) => {
  const { t } = useLanguage();
  
  // Use memoized stable data
  const isotopeData = useMemo(() => {
    const atomicNum = parseInt(element.atomic);
    const stableData = generateStableIsotopeData(atomicNum);
    
    return stableData.map(item => ({
      isotope: `${element.symbol}-${item.isotope}`,
      abundance: item.abundance,
      halfLife: item.halfLife
    }));
  }, [element.atomic, element.symbol]);
  
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
