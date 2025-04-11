
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useLanguage } from '../../../context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { InfoIcon } from 'lucide-react';

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

// Generate mock historical usage data
const getHistoricalUsageData = (element: Element) => {
  const years = [1980, 1990, 2000, 2010, 2020];
  const result = [];
  
  // Base value that depends on atomic number for some variety
  const baseValue = (parseInt(element.atomic) % 10) + 1;
  
  // Generate increasing usage trend with some randomness
  let prevValue = baseValue;
  for (const year of years) {
    // Increase by 10-30% from previous + add some randomness
    const growthFactor = 1 + (Math.random() * 0.2 + 0.1);
    const value = Math.round(prevValue * growthFactor);
    prevValue = value;
    
    result.push({
      year: year.toString(),
      usage: value
    });
  }
  
  return result;
};

const ApplicationsTab = ({ element, categoryColor }: ApplicationsTabProps) => {
  const { t } = useLanguage();
  const usageData = getUsageDistributionData(element);
  const historicalData = getHistoricalUsageData(element);
  
  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];
  
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-xl font-bold">
            {t.elementDetails.keyApplications} {element.symbol}
          </h2>
          <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
            {element.category}
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Industry Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                {t.elementDetails.industrialUses}
                <InfoIcon className="h-4 w-4 text-muted-foreground" />
              </CardTitle>
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
              <div className="mt-2 text-xs text-center text-muted-foreground">
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
          
          {/* Historical Usage Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Historical Usage Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={historicalData}
                    margin={{ top: 5, right: 5, left: 5, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}`, 'Usage Index']} />
                    <Bar dataKey="usage" fill={categoryColor || "#8884d8"} name="Usage Index" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 text-xs text-center text-muted-foreground">
                {t.ui?.note || 'Note'}: Usage index is relative and represents global consumption trends
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Separator />
      
      {/* Discovery Timeline */}
      <div>
        <h2 className="text-xl font-bold mb-3">{t.elementDetails.discovery || 'Discovery'}</h2>
        
        <Card>
          <CardContent className="pt-6">
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
