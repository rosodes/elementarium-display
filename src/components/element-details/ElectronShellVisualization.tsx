
import React, { useEffect, useRef } from 'react';
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

interface ElectronShellVisualizationProps {
  element: Element;
  categoryColor: string;
}

const ElectronShellVisualization = ({ element, categoryColor }: ElectronShellVisualizationProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  
  if (!element.electrons || element.electrons.length === 0) return null;
  
  // Parse color from tailwind class
  const extractColor = () => {
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
        
        // Simple color mapping (expanded as needed)
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
          pink: {
            500: { light: '#ec4899', dark: '#f472b6' },
            600: { light: '#db2777', dark: '#ec4899' },
          },
          indigo: {
            500: { light: '#6366f1', dark: '#818cf8' },
            600: { light: '#4f46e5', dark: '#6366f1' },
          },
          orange: {
            500: { light: '#f97316', dark: '#fb923c' },
            600: { light: '#ea580c', dark: '#f97316' },
          },
        };
        
        return colorMap[colorName]?.[shade]?.[theme] || defaultColors[theme as keyof typeof defaultColors];
      }
    }
    
    return defaultColors[theme as keyof typeof defaultColors];
  };
  
  const electronColor = extractColor();
  const shellColor = theme === 'dark' ? '#6b7280' : '#d1d5db';
  const size = 300; // SVG size
  const center = size / 2;
  const maxElectrons = Math.max(...element.electrons);
  const nucleusRadius = 20;
  
  // Create electron shells
  const renderElectronShells = () => {
    return element.electrons.map((electronCount, shellIndex) => {
      const shellRadius = 40 + shellIndex * 40;
      const electrons = Math.min(electronCount, 8); // Show max 8 electrons per shell
      
      // Electrons
      const electronElements = Array.from({ length: electrons }).map((_, i) => {
        const angle = (i / electrons) * Math.PI * 2;
        const x = center + shellRadius * Math.cos(angle);
        const y = center + shellRadius * Math.sin(angle);
        
        return (
          <g key={`electron-${shellIndex}-${i}`}>
            <circle
              cx={x}
              cy={y}
              r={6}
              fill={electronColor}
              className="electron"
            >
              <animate
                attributeName="opacity"
                values="0.7;1;0.7"
                dur={`${2 + shellIndex * 0.5}s`}
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${center} ${center}`}
                to={`360 ${center} ${center}`}
                dur={`${10 - shellIndex}s`}
                repeatCount="indefinite"
                additive="sum"
              />
            </circle>
          </g>
        );
      });
      
      return (
        <g key={`shell-${shellIndex}`}>
          <circle
            cx={center}
            cy={center}
            r={shellRadius}
            fill="none"
            stroke={shellColor}
            strokeWidth="1"
            strokeDasharray={shellIndex % 2 === 0 ? "2 2" : "none"}
            className="electron-shell"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.4;0.8;0.4"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          {electronElements}
        </g>
      );
    });
  };
  
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 rounded-md p-4 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-base sm:text-lg font-bold mb-3">{t.elementDetails.electronShellVisualization}</h3>
      
      <div className="flex justify-center py-4">
        <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
          <svg ref={svgRef} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <defs>
              <radialGradient id="nucleusGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor={electronColor} stopOpacity="1" />
                <stop offset="100%" stopColor={electronColor} stopOpacity="0.7" />
              </radialGradient>
              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Background glow */}
            <circle
              cx={center}
              cy={center}
              r={nucleusRadius * 1.5}
              fill="url(#nucleusGradient)"
              opacity="0.3"
            >
              <animate 
                attributeName="r" 
                values={`${nucleusRadius * 1.3};${nucleusRadius * 1.5};${nucleusRadius * 1.3}`} 
                dur="4s" 
                repeatCount="indefinite" 
              />
            </circle>
            
            {/* Electron shells */}
            {renderElectronShells()}
            
            {/* Nucleus */}
            <circle
              cx={center}
              cy={center}
              r={nucleusRadius}
              fill="url(#nucleusGradient)"
              filter="url(#glow)"
              className="nucleus"
            >
              <animate
                attributeName="r"
                values={`${nucleusRadius-2};${nucleusRadius};${nucleusRadius-2}`}
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Element symbol in nucleus */}
            <text
              x={center}
              y={center}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              {element.symbol}
            </text>
          </svg>
        </div>
      </div>
      
      <div className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
        {t.elementDetails.electronConfig}: {element.electronstring}
      </div>
    </div>
  );
};

export default ElectronShellVisualization;
