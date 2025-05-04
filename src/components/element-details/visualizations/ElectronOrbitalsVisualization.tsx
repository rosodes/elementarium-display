
import React, { useEffect, useRef } from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';

interface ElectronOrbitalsVisualizationProps {
  element: Element;
  categoryColor: string;
}

const ElectronOrbitalsVisualization = ({ element, categoryColor }: ElectronOrbitalsVisualizationProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { t } = useLanguage();
  const { theme } = useTheme();
  
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
        };
        
        return colorMap[colorName]?.[shade]?.[theme] || defaultColors[theme as keyof typeof defaultColors];
      }
    }
    
    return defaultColors[theme as keyof typeof defaultColors];
  };
  
  const electronColor = extractColor();
  const size = 280; // SVG size
  const center = size / 2;
  const nucleusRadius = 20;
  
  // Create orbital paths and electrons
  const renderOrbitals = () => {
    return element.electrons.map((electronCount, shellIndex) => {
      const shellRadius = 30 + (shellIndex * 35);
      const electrons = Math.min(electronCount, 8); // Show max 8 electrons per shell
      const orbitalPath = [];
      
      // Create slightly elliptical path for orbital
      for (let i = 0; i <= 360; i += 5) { // Optimize by reducing points
        const angle = (i * Math.PI) / 180;
        const x = center + shellRadius * Math.cos(angle);
        const y = center + shellRadius * 0.9 * Math.sin(angle); // 0.9 to make it slightly elliptical
        orbitalPath.push(`${x},${y}`);
      }
      
      // Create electrons for this shell with optimized animation
      const electronElements = Array.from({ length: electrons }).map((_, i) => {
        // Start at different angles
        const startOffset = (i / electrons) * 100;
        const animationDuration = 6 + shellIndex * 2;
        
        return (
          <circle
            key={`electron-${shellIndex}-${i}`}
            r="6"
            fill={electronColor}
            className="electron-particle"
          >
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur={`${1 + Math.random()}s`}
              repeatCount="indefinite"
            />
            <animateMotion
              path={`M ${orbitalPath.join(' ')} Z`}
              begin={`${i * 0.5}s`}
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
              rotate="auto"
            />
            {/* Add glow effect */}
            <filter id={`glow-${shellIndex}-${i}`}>
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </circle>
        );
      });
      
      // If there are more electrons than shown, add indicator
      let extraIndicator = null;
      if (electronCount > 8) {
        extraIndicator = (
          <text
            x={center + shellRadius * 0.7}
            y={center - shellRadius * 0.7}
            fill={theme === 'dark' ? '#d1d5db' : '#4b5563'}
            fontSize="12"
            textAnchor="middle"
          >
            +{electronCount - 8}
          </text>
        );
      }
      
      return (
        <g key={`orbital-${shellIndex}`} className="orbital-shell">
          {/* Orbital path */}
          <path
            d={`M ${orbitalPath.join(' ')} Z`}
            fill="none"
            stroke={theme === 'dark' ? '#4b5563' : '#d1d5db'}
            strokeWidth="1"
            opacity="0.6"
          />
          {electronElements}
          {extraIndicator}
        </g>
      );
    });
  };
  
  // Add pulse animation to nucleus
  useEffect(() => {
    if (!svgRef.current) return;
    
    const nucleus = svgRef.current.querySelector('.nucleus');
    if (nucleus) {
      nucleus.classList.add('animate-pulse');
    }
  }, []);
  
  return (
    <Card className="mt-4 overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="bg-gray-50 dark:bg-gray-800/50 pb-2">
        <CardTitle className="text-sm text-gray-700 dark:text-gray-200">{t.elementDetails.orbitalDiagram}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full" style={{ height: '280px' }}>
          {/* Add CSS for enhanced visual effects */}
          <style jsx>{`
            .electron-particle {
              filter: drop-shadow(0 0 2px ${electronColor});
            }
            .nucleus-pulse {
              animation: nucleus-pulse 3s infinite;
            }
            @keyframes nucleus-pulse {
              0% { r: ${nucleusRadius - 2}; }
              50% { r: ${nucleusRadius + 2}; }
              100% { r: ${nucleusRadius - 2}; }
            }
            .orbital-shell:hover path {
              stroke: ${electronColor};
              opacity: 0.8;
              transition: all 0.3s ease;
            }
          `}</style>
          
          <svg 
            ref={svgRef} 
            width="100%" 
            height="100%"
            viewBox={`0 0 ${size} ${size}`}
            preserveAspectRatio="xMidYMid meet"
            className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900"
          >
            {/* Background gradient */}
            <defs>
              <radialGradient id="nucleusGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor={electronColor} stopOpacity="1" />
                <stop offset="100%" stopColor={electronColor} stopOpacity="0.6" />
              </radialGradient>
              
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Electron orbitals and electrons */}
            {renderOrbitals()}
            
            {/* Nucleus */}
            <g className="nucleus" filter="url(#glow)">
              <circle
                cx={center}
                cy={center}
                r={nucleusRadius}
                fill="url(#nucleusGradient)"
                className="nucleus-pulse"
              />
              
              {/* Element symbol in nucleus */}
              <text
                x={center}
                y={center}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="14"
                fontWeight="bold"
              >
                {element.symbol}
              </text>
            </g>
          </svg>
        </div>
        <div className="p-4 pt-2">
          <div className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
            {t.elementDetails.electronConfig}: {element.electronstring}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ElectronOrbitalsVisualization;
