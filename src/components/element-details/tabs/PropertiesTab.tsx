
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Separator } from '@/components/ui/separator';
import { ComparisonChart } from '../../../i18n/modules/elementDetails/ComparisonChart';
import { useLanguage } from '../../../context/LanguageContext';
import { getElement } from '../../../data/elements';
import ElementPropertyRadar from '../visualizations/ElementPropertyRadar';
import { Card, CardContent } from '@/components/ui/card';

interface PropertiesTabProps {
  element: Element;
  categoryColor: string;
}

const PropertiesTab = ({ element, categoryColor }: PropertiesTabProps) => {
  const { t } = useLanguage();
  
  // Get neighboring elements for comparison
  const getNeighborElements = () => {
    const atomicNum = parseInt(element.atomic);
    const neighbors: Element[] = [];
    
    // Try to get 2 elements before and after
    for (let i = atomicNum - 2; i <= atomicNum + 2; i++) {
      if (i !== atomicNum) {
        const neighbor = getElement(i);
        if (neighbor) neighbors.push(neighbor);
      }
    }
    
    return neighbors;
  };
  
  const neighborElements = getNeighborElements();
  
  return (
    <div className="space-y-6">
      {/* Physical Properties Section */}
      <div>
        <h2 className="text-xl font-bold mb-3">{t.elementDetails.physicalProperties}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Melting & Boiling Points */}
          <Card>
            <CardContent className="pt-4">
              <h3 className="text-base font-semibold mb-2">{t.elementDetails.meltingBoilingPoint}</h3>
              <div className="space-y-2 text-sm">
                {element.melt && (
                  <div className="flex justify-between">
                    <span>{t.elementDetails.meltingPoint}:</span>
                    <span className="font-medium">{element.melt} K</span>
                  </div>
                )}
                {element.boil && (
                  <div className="flex justify-between">
                    <span>{t.elementDetails.boilingPoint}:</span>
                    <span className="font-medium">{element.boil} K</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Density */}
          {element.density?.stp && (
            <Card>
              <CardContent className="pt-4">
                <h3 className="text-base font-semibold mb-2">{t.elementDetails.density}</h3>
                <div className="flex justify-between text-sm">
                  <span>STP:</span>
                  <span className="font-medium">{element.density.stp} g/cm³</span>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Electron Properties */}
          <Card>
            <CardContent className="pt-4">
              <h3 className="text-base font-semibold mb-2">{t.elementDetails.electronProperties}</h3>
              <div className="space-y-2 text-sm">
                {element.electroneg && (
                  <div className="flex justify-between">
                    <span>{t.elementDetails.electronegativity}:</span>
                    <span className="font-medium">{element.electroneg}</span>
                  </div>
                )}
                {element.affinity && (
                  <div className="flex justify-between">
                    <span>{t.elementDetails.electronAffinity}:</span>
                    <span className="font-medium">{element.affinity} kJ/mol</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Separator />
      
      {/* Abundance Information */}
      {element.abundance && (
        <div>
          <h2 className="text-xl font-bold mb-3">{t.elementDetails.abundance}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {element.abundance.universe && (
              <Card>
                <CardContent className="pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{element.abundance.universe}</div>
                    <div className="text-sm text-gray-500">ppm</div>
                    <div className="mt-2 text-sm font-medium">{t.elementDetails.universe}</div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {element.abundance.solar && (
              <Card>
                <CardContent className="pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{element.abundance.solar}</div>
                    <div className="text-sm text-gray-500">ppm</div>
                    <div className="mt-2 text-sm font-medium">{t.elementDetails.solar}</div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {element.abundance.crust && (
              <Card>
                <CardContent className="pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{element.abundance.crust}</div>
                    <div className="text-sm text-gray-500">ppm</div>
                    <div className="mt-2 text-sm font-medium">{t.elementDetails.crust}</div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}
      
      {/* Comparison Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ElementPropertyRadar
          element={element}
          categoryColor={categoryColor}
        />
        
        {/* Melting Point Comparison */}
        {element.melt && (
          <ComparisonChart
            element={element}
            neighborElements={neighborElements}
            property="melt"
            categoryColor={categoryColor}
          />
        )}
        
        {/* Electronegativity Comparison */}
        {element.electroneg && (
          <ComparisonChart
            element={element}
            neighborElements={neighborElements}
            property="electroneg"
            categoryColor={categoryColor}
          />
        )}
        
        {/* Density Comparison */}
        {element.density?.stp && (
          <ComparisonChart
            element={element}
            neighborElements={neighborElements}
            property="density"
            categoryColor={categoryColor}
          />
        )}
      </div>
    </div>
  );
};

export default PropertiesTab;
