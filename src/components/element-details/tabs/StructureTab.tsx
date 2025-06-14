
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Separator } from '@/components/ui/separator';
import ElectronShellVisualization from '../ElectronShellVisualization';
import { useLanguage } from '../../../context/LanguageContext';
import ElectronOrbitalsVisualization from '../visualizations/ElectronOrbitalsVisualization';
import IsotopeChart from '../../../i18n/modules/elementDetails/IsotopeChart';
import AtomicStructureCard from '../structure/AtomicStructureCard';
import AtomicRadiiSection from '../structure/AtomicRadiiSection';

interface StructureTabProps {
  element: Element;
  categoryColor: string;
}

const StructureTab = ({ element, categoryColor }: StructureTabProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left column */}
        <div>
          <h2 className="text-xl font-bold mb-3">{t.elementDetails.atomicStructure}</h2>
          
          <AtomicStructureCard element={element} />
          
          {/* Electron Shell Visualization */}
          <ElectronShellVisualization 
            element={element}
            categoryColor={categoryColor}
          />
        </div>
        
        {/* Right column */}
        <div>
          {/* New Electron Orbitals Visualization */}
          <ElectronOrbitalsVisualization 
            element={element}
            categoryColor={categoryColor}
          />
          
          {/* Isotope Chart */}
          <IsotopeChart 
            element={element}
            categoryColor={categoryColor}
          />
        </div>
      </div>
      
      <Separator />
      
      <AtomicRadiiSection element={element} />
    </div>
  );
};

export default StructureTab;
