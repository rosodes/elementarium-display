
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../../../context/LanguageContext';

interface IsotopeChartProps {
  element: Element;
  categoryColor: string;
}

const IsotopeChart = ({ element, categoryColor }: IsotopeChartProps) => {
  const { t } = useLanguage();
  
  // Generate simulated isotope data based on atomic number
  const generateIsotopeData = () => {
    const atomicNumber = parseInt(element.atomic);
    const isotopeCount = element.isotopes || Math.min(5, Math.max(2, Math.floor(atomicNumber / 10)));
    const baseNeutrons = atomicNumber;
    
    return Array.from({ length: isotopeCount }).map((_, index) => {
      const neutronOffset = index - Math.floor(isotopeCount / 2);
      const neutrons = baseNeutrons + neutronOffset;
      const abundance = index === Math.floor(isotopeCount / 2) ? 100 - (isotopeCount * 5) : Math.random() * 20 + 5;
      
      return {
        isotope: `${element.symbol}-${atomicNumber + neutrons}`,
        abundance: parseFloat(abundance.toFixed(2)),
        halfLife: index === Math.floor(isotopeCount / 2) ? 'stable' : `${Math.random().toFixed(2)}×10^${Math.floor(Math.random() * 10)}y`
      };
    });
  };
  
  const isotopeData = generateIsotopeData();
  
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-lg">{t.elementDetails.isotopes || "Isotopes"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={isotopeData}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            >
              <XAxis dataKey="isotope" angle={-45} textAnchor="end" height={60} />
              <YAxis label={{ value: 'Abundance (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                formatter={(value, name) => [`${value}%`, 'Natural Abundance']}
                labelFormatter={(label) => `Isotope: ${label}`}
              />
              <Bar dataKey="abundance" fill={categoryColor.split(' ')[0]} name="Natural Abundance (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="p-2 text-left">Isotope</th>
                  <th className="p-2 text-right">Abundance (%)</th>
                  <th className="p-2 text-right">Half-Life</th>
                </tr>
              </thead>
              <tbody>
                {isotopeData.map((isotope, i) => (
                  <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2 text-left font-medium">{isotope.isotope}</td>
                    <td className="p-2 text-right">{isotope.abundance}%</td>
                    <td className="p-2 text-right">{isotope.halfLife}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IsotopeChart;
