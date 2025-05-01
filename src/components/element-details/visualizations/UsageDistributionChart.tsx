
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';

interface UsageDistributionChartProps {
  element: Element;
}

// Colors for pie chart
const LIGHT_COLORS = ['#3b82f6', '#22c55e', '#eab308', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'];
const DARK_COLORS = ['#60a5fa', '#4ade80', '#facc15', '#f87171', '#a78bfa', '#22d3ee', '#f472b6'];

// Mock data for usage distribution
const getUsageDistributionData = (element: Element) => {
  // Generate some mock data based on element properties
  const atomicNum = parseInt(element.atomic);
  
  // Define common usage sectors
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

const UsageDistributionChart = ({ element }: UsageDistributionChartProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const usageData = getUsageDistributionData(element);
  
  // Select colors based on theme
  const COLORS = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;
  
  return (
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
            animationBegin={300}
            animationDuration={1500}
          >
            {usageData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Usage Percentage']}
            contentStyle={{ 
              backgroundColor: theme === 'dark' ? '#374151' : '#fff',
              border: `1px solid ${theme === 'dark' ? '#4b5563' : '#e5e7eb'}`,
              borderRadius: '0.375rem',
              color: theme === 'dark' ? '#f3f4f6' : '#111827'
            }}
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsageDistributionChart;
