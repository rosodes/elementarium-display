
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';

interface HistoricalUsageChartProps {
  element: Element;
  categoryColor: string;
}

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

// Parse color from tailwind class
const extractColor = (categoryColor: string, theme: string) => {
  // Default colors based on theme
  const defaultColors = {
    light: '#3b82f6', // blue-500
    dark: '#60a5fa'  // blue-400
  };
  
  // Try to extract color from class name
  if (categoryColor) {
    const colorMatch = categoryColor.match(/bg-([a-z]+)-(\d+)/);
    if (colorMatch) {
      const colorName = colorMatch[1];
      const shade = parseInt(colorMatch[2]);
      
      // Simple color mapping
      const colorMap: Record<string, Record<number, Record<string, string>>> = {
        blue: {
          500: { light: '#3b82f6', dark: '#60a5fa' },
          600: { light: '#2563eb', dark: '#3b82f6' },
        },
        red: {
          500: { light: '#ef4444', dark: '#f87171' },
          600: { light: '#dc2626', dark: '#ef4444' },
        },
        green: {
          500: { light: '#22c55e', dark: '#4ade80' },
          600: { light: '#16a34a', dark: '#22c55e' },
        },
        purple: {
          500: { light: '#a855f7', dark: '#c084fc' },
          600: { light: '#9333ea', dark: '#a855f7' },
        },
        yellow: {
          500: { light: '#eab308', dark: '#facc15' },
          600: { light: '#ca8a04', dark: '#eab308' },
        },
      };
      
      return colorMap[colorName]?.[shade]?.[theme] || defaultColors[theme as keyof typeof defaultColors];
    }
  }
  
  return defaultColors[theme as keyof typeof defaultColors];
};

const HistoricalUsageChart = ({ element, categoryColor }: HistoricalUsageChartProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const historicalData = getHistoricalUsageData(element);
  const barColor = extractColor(categoryColor, theme);
  
  return (
    <div className="h-[180px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={historicalData}
          margin={{ top: 5, right: 5, left: 5, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#4b5563' : '#e5e7eb'} />
          <XAxis 
            dataKey="year" 
            tick={{ fill: theme === 'dark' ? '#d1d5db' : '#6b7280' }}
          />
          <YAxis 
            tick={{ fill: theme === 'dark' ? '#d1d5db' : '#6b7280' }}
          />
          <Tooltip 
            formatter={(value) => [`${value}`, 'Usage Index']}
            contentStyle={{ 
              backgroundColor: theme === 'dark' ? '#374151' : '#fff',
              border: `1px solid ${theme === 'dark' ? '#4b5563' : '#e5e7eb'}`,
              borderRadius: '0.375rem',
              color: theme === 'dark' ? '#f3f4f6' : '#111827'
            }}
          />
          <Bar 
            dataKey="usage" 
            fill={barColor} 
            name="Usage Index"
            animationBegin={300}
            animationDuration={1200}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoricalUsageChart;
