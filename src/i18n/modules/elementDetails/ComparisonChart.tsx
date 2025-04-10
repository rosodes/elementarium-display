
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../../../context/LanguageContext';

interface ComparisonChartProps {
  element: Element;
  neighborElements: Element[];
  property: 'melt' | 'boil' | 'electroneg' | 'density';
  categoryColor: string;
}

const ComparisonChart = ({ element, neighborElements, property, categoryColor }: ComparisonChartProps) => {
  const { t } = useLanguage();
  
  // Generate labels based on property
  const getPropertyLabel = () => {
    switch (property) {
      case 'melt':
        return t.elementDetails.meltingPoint || 'Melting Point (K)';
      case 'boil':
        return t.elementDetails.boilingPoint || 'Boiling Point (K)';
      case 'electroneg':
        return t.elementDetails.electronegativity || 'Electronegativity';
      case 'density':
        return t.elementDetails.density || 'Density (g/cm³)';
      default:
        return '';
    }
  };
  
  // Prepare data for the chart
  const prepareChartData = () => {
    return [...neighborElements, element]
      .sort((a, b) => parseInt(a.atomic) - parseInt(b.atomic))
      .map(el => {
        let propertyValue: number | null = null;
        
        if (property === 'melt' && el.melt) {
          propertyValue = parseFloat(el.melt);
        } else if (property === 'boil' && el.boil) {
          propertyValue = parseFloat(el.boil);
        } else if (property === 'electroneg' && el.electroneg) {
          propertyValue = parseFloat(el.electroneg);
        } else if (property === 'density' && el.density?.stp) {
          propertyValue = parseFloat(el.density.stp);
        }
        
        return {
          name: el.symbol,
          value: propertyValue,
          isTarget: el.atomic === element.atomic
        };
      })
      .filter(item => item.value !== null);
  };
  
  const chartData = prepareChartData();
  
  if (chartData.length < 2) return null;
  
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-sm">{getPropertyLabel()} - Period Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [value, getPropertyLabel()]}
                labelFormatter={(label) => `Element: ${label}`}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={categoryColor.split(' ')[0]} 
                activeDot={{ r: 8 }}
                dot={(props: any) => {
                  const { cx, cy, payload } = props;
                  return payload.isTarget ? (
                    <circle cx={cx} cy={cy} r={6} strokeWidth={2} fill={categoryColor.split(' ')[0]} />
                  ) : (
                    <circle cx={cx} cy={cy} r={4} fill={categoryColor.split(' ')[0]} />
                  );
                }}
                name={getPropertyLabel()}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonChart;
