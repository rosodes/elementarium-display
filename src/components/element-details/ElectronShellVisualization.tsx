
import React from 'react';
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';

interface ElectronShellVisualizationProps {
  element: Element;
  categoryColor: string;
}

const ElectronShellVisualization = ({ element, categoryColor }: ElectronShellVisualizationProps) => {
  const { t } = useLanguage();
  
  if (!element.electrons || element.electrons.length === 0) return null;
  
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 rounded-md p-4 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-base sm:text-lg font-bold mb-3">{t.elementDetails.electronShellVisualization}</h3>
      
      {/* Added min-height to ensure the visualization has enough space */}
      <div className="flex justify-center py-8" style={{ minHeight: "220px" }}>
        <div className="relative">
          {/* Electron shells visualization */}
          {element.electrons.map((count, index) => {
            const diameter = (index + 1) * 40;
            return (
              <div 
                key={index}
                className="rounded-full absolute border border-gray-300 dark:border-gray-600"
                style={{
                  width: `${diameter}px`,
                  height: `${diameter}px`,
                  left: `calc(50% - ${diameter / 2}px)`,
                  top: `calc(50% - ${diameter / 2}px)`,
                }}
              >
                {/* Electrons in the shell */}
                {Array.from({ length: Math.min(count, 8) }).map((_, i) => {
                  const angle = (i / Math.min(count, 8)) * Math.PI * 2;
                  const x = Math.cos(angle) * (diameter / 2);
                  const y = Math.sin(angle) * (diameter / 2);
                  return (
                    <div
                      key={i}
                      className={`absolute w-3 h-3 rounded-full ${categoryColor}`}
                      style={{
                        left: `calc(50% + ${x}px - 6px)`,
                        top: `calc(50% + ${y}px - 6px)`,
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
          {/* Nucleus */}
          <div className={`${categoryColor} w-8 h-8 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-xs font-bold`}>
            {element.symbol}
          </div>
        </div>
      </div>
      <div className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
        {t.elementDetails.electronConfig}: {element.electronstring}
      </div>
    </div>
  );
};

export default ElectronShellVisualization;
