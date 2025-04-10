
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Atom } from 'lucide-react';
import ElectronShellVisualization from '../ElectronShellVisualization';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface StructureTabProps {
  element: Element;
  categoryColor: string;
}

const StructureTab = ({ element, categoryColor }: StructureTabProps) => {
  const { t } = useLanguage();
  
  // Generate electron shell distribution data for visualization
  const getElectronDistributionData = () => {
    return element.electrons.map((count, index) => ({
      name: `${t.elementDetails.shell || 'Shell'} ${index + 1}`,
      value: count
    }));
  };
  
  // Generate colors for the pie chart based on the shell number
  const getElectronShellColors = () => {
    const baseColor = categoryColor.split(' ')[0];
    // Generate different shades of the base color
    return element.electrons.map((_, index) => {
      const opacity = 1 - (index * 0.15);
      // For safety, ensure opacity doesn't go below 0.3
      return baseColor.replace(')', `, ${Math.max(0.3, opacity)})`);
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
        <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4">
          <CardTitle className="text-lg flex items-center">
            <Atom className="w-5 h-5 mr-2" />
            {t.elementDetails.electronShellVisualization}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <ElectronShellVisualization element={element} categoryColor={categoryColor} />
          
          {/* Add electron shell distribution chart */}
          <div className="mt-6 h-64">
            <h3 className="text-base font-medium mb-2">{t.elementDetails.electronDistribution || "Electron Distribution"}</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={getElectronDistributionData()}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}`}
                >
                  {getElectronDistributionData().map((_, index) => (
                    <Cell key={`cell-${index}`} fill={getElectronShellColors()[index]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [value, name]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{t.elementDetails.atomicRadii || "Atomic Radii"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center my-4">
              <div className="relative w-60 h-60 flex items-center justify-center">
                {/* Show different radii if available */}
                {element.radius?.vanderwaals && (
                  <div className="absolute rounded-full border-2 border-dashed border-yellow-400 dark:border-yellow-600 opacity-30"
                      style={{ 
                        width: `${parseInt(element.radius.vanderwaals) / 2}px`, 
                        height: `${parseInt(element.radius.vanderwaals) / 2}px` 
                      }} />
                )}
                
                {element.radius?.covalent && (
                  <div className="absolute rounded-full border-2 border-blue-400 dark:border-blue-600 opacity-50"
                      style={{ 
                        width: `${Math.max(parseInt(element.radius.covalent), 30)}px`, 
                        height: `${Math.max(parseInt(element.radius.covalent), 30)}px` 
                      }} />
                )}
                
                {element.radius?.calculated && (
                  <div className="absolute rounded-full border-2 border-green-400 dark:border-green-600"
                      style={{ 
                        width: `${Math.max(parseInt(element.radius.calculated), 20)}px`, 
                        height: `${Math.max(parseInt(element.radius.calculated), 20)}px` 
                      }} />
                )}
                
                <div className={`${categoryColor} w-10 h-10 rounded-full flex items-center justify-center z-10`}>
                  {element.symbol}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs mt-4">
              {element.radius?.calculated && (
                <>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 dark:bg-green-600 rounded-full mr-2"></div>
                    <span>{t.elementDetails.calculated || "Calculated"}:</span>
                  </div>
                  <div>{element.radius.calculated} pm</div>
                </>
              )}
              
              {element.radius?.covalent && (
                <>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 dark:bg-blue-600 rounded-full mr-2"></div>
                    <span>{t.elementDetails.covalent || "Covalent"}:</span>
                  </div>
                  <div>{element.radius.covalent} pm</div>
                </>
              )}
              
              {element.radius?.vanderwaals && (
                <>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 dark:bg-yellow-600 rounded-full mr-2"></div>
                    <span>{t.elementDetails.vanDerWaals || "Van der Waals"}:</span>
                  </div>
                  <div>{element.radius.vanderwaals} pm</div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{t.elementDetails.quantumNumbers || "Quantum Numbers"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="font-medium">n ({t.elementDetails.principal || "Principal"}):</div>
              <div>{element.quantum?.n}</div>
              
              <div className="font-medium">l ({t.elementDetails.azimuthal || "Azimuthal"}):</div>
              <div>{element.quantum?.l}</div>
              
              <div className="font-medium">m ({t.elementDetails.magnetic || "Magnetic"}):</div>
              <div>{element.quantum?.m}</div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-2">{t.elementDetails.orbitalDiagram || "Orbital Diagram"}</h4>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md overflow-x-auto whitespace-pre-wrap">
                <code className="text-xs">
                  {element.expandedconfig.split(' ').map((orbital, i) => (
                    <span key={i} className="mr-1">
                      {orbital.includes('/') ? (
                        <>
                          {orbital.split('/')[0]}
                          <span className="text-blue-600 dark:text-blue-400">
                            {orbital.split('/')[1]}
                          </span>
                        </>
                      ) : orbital}
                    </span>
                  ))}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StructureTab;
