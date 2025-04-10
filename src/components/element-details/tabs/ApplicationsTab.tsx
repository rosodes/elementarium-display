
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useLanguage } from '../../../context/LanguageContext';

interface ApplicationsTabProps {
  element: Element;
  categoryColor: string;
}

// Mock data for usage distribution - in a real app, this would come from an API or data file
const getUsageDistributionData = (element: Element) => {
  // Generate some mock data based on element properties
  const atomicNum = parseInt(element.atomic);
  
  // Define some common usage sectors
  const sectors = [
    'Electronics', 
    'Construction', 
    'Healthcare', 
    'Energy', 
    'Transportation', 
    'Agriculture', 
    'Research'
  ];
  
  // Get 3-5 random sectors
  const numSectors = Math.max(3, Math.min(5, Math.floor(atomicNum % 5) + 3));
  const selectedSectors = [];
  
  // Ensure we don't select the same sector twice
  const usedIndices = new Set();
  while (selectedSectors.length < numSectors) {
    const idx = Math.floor(Math.random() * sectors.length);
    if (!usedIndices.has(idx)) {
      usedIndices.add(idx);
      selectedSectors.push(sectors[idx]);
    }
  }
  
  // Generate percentages that sum to 100
  let remainingPercent = 100;
  const result = [];
  
  for (let i = 0; i < selectedSectors.length; i++) {
    if (i === selectedSectors.length - 1) {
      // Last sector gets remaining percentage
      result.push({
        name: selectedSectors[i],
        value: remainingPercent
      });
    } else {
      // Generate a random percentage between 5% and 50%
      const percent = Math.floor(Math.random() * Math.min(remainingPercent - 5, 45)) + 5;
      remainingPercent -= percent;
      result.push({
        name: selectedSectors[i],
        value: percent
      });
    }
  }
  
  return result;
};

const ApplicationsTab = ({ element, categoryColor }: ApplicationsTabProps) => {
  const { t } = useLanguage();
  const usageData = getUsageDistributionData(element);
  
  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-3">
          {t.elementDetails.keyApplications} {element.symbol}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Industry Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t.elementDetails.industrialUses}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Manufacturing of {element.series.toLowerCase()} components</li>
                <li>Used in specialized industrial processes</li>
                <li>
                  {element.category === 'metal' || element.category === 'metalloid' 
                    ? 'Production of alloys and compounds' 
                    : 'Chemical synthesis and reactions'}
                </li>
                {element.category === 'metal' && <li>Electrical conductors and wiring</li>}
                {element.electroneg && parseFloat(element.electroneg) > 2.5 && 
                  <li>Catalysts for chemical reactions</li>}
              </ul>
            </CardContent>
          </Card>
          
          {/* Usage Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t.ui?.usageDistribution || 'Usage Distribution'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={usageData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {usageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Usage Percentage']}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 text-xs text-center text-gray-500">
                {t.ui?.simulatedData || 'This is simulated data for demonstration purposes'}
              </div>
            </CardContent>
          </Card>
          
          {/* Everyday Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t.elementDetails.everydayUses}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {element.category === 'metal' && (
                  <>
                    <li>Consumer electronics and devices</li>
                    <li>Construction materials and tools</li>
                  </>
                )}
                {element.category === 'nonmetal' && (
                  <>
                    <li>Chemical compounds in household products</li>
                    <li>Food additives and preservatives</li>
                  </>
                )}
                {element.category === 'noble gas' && (
                  <>
                    <li>Lighting applications</li>
                    <li>Protective atmospheres</li>
                  </>
                )}
                <li>Commercial and consumer applications</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Fun Facts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t.elementDetails.funFacts}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                {element.name} ({element.symbol}) has atomic number {element.atomic} and was 
                {element.discover === "Ancient" ? " known since ancient times" : ` discovered in ${element.discover}`}.
              </p>
              
              <p>
                It belongs to the {element.series.toLowerCase()} series of elements and is located in 
                period {element.period} and group {element.group} of the periodic table.
              </p>
              
              {element.melt && element.boil && (
                <p>
                  It has a melting point of {element.melt} K and a boiling point of {element.boil} K, 
                  making it {parseInt(element.melt) < 273 ? 'a substance that is typically found in liquid or gaseous form at room temperature'
                  : parseInt(element.melt) > 1000 ? 'a substance with a high melting point' : 'a solid at room temperature'}.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Separator />
      
      {/* Historical Timeline */}
      <div>
        <h2 className="text-xl font-bold mb-3">{t.elementDetails.discovery || 'Discovery'}</h2>
        
        <Card>
          <CardContent className="pt-4">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-0 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
              
              <div className="ml-6 space-y-6">
                {/* Discovery Point */}
                <div>
                  <div className="absolute -left-1 mt-1.5 w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="font-semibold">{element.discover === "Ancient" ? "Ancient Times" : element.discover}</div>
                  <div className="text-sm mt-1">
                    {element.discover === "Ancient" ? 
                      `${element.name} (${element.symbol}) has been known since ancient times.` :
                      `${element.name} was discovered in ${element.discover}.`
                    }
                  </div>
                </div>
                
                {/* Usage Point */}
                <div>
                  <div className="absolute -left-1 mt-1.5 w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="font-semibold">{t.elementDetails.applications}</div>
                  <div className="text-sm mt-1">
                    As understanding of {element.symbol} grew, scientists discovered its unique properties and applications.
                  </div>
                </div>
                
                {/* Modern Era */}
                <div>
                  <div className="absolute -left-1 mt-1.5 w-3 h-3 rounded-full bg-purple-500"></div>
                  <div className="font-semibold">Present Day</div>
                  <div className="text-sm mt-1">
                    Today, {element.name} is used in various applications and continues to be studied for new possibilities.
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationsTab;
