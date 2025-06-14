import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Separator } from '@/components/ui/separator';
import ElectronShellVisualization from '../ElectronShellVisualization';
import { useLanguage } from '../../../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ElectronOrbitalsVisualization from '../visualizations/ElectronOrbitalsVisualization';
import IsotopeChart from '../../../i18n/modules/elementDetails/IsotopeChart';
import HydrogenIsotopesSection from "../new-sections/HydrogenIsotopesSection";
import HydrogenCrystalStructureSection from "../new-sections/HydrogenCrystalStructureSection";
import HydrogenComparisonsSection from "../new-sections/HydrogenComparisonsSection";

interface StructureTabProps {
  element: Element;
  categoryColor: string;
}

const StructureTab = ({ element, categoryColor }: StructureTabProps) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* --- ДОБАВЛЕННЫЕ СЕКЦИИ ТОЛЬКО ДЛЯ ГИДРОГЕНА --- */}
      {element.atomic === "1" && (
        <>
          <HydrogenIsotopesSection />
          <HydrogenCrystalStructureSection />
          <HydrogenComparisonsSection />
        </>
      )}
      {/* Расширенная информация по оболочкам и структуре */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left column - основные сведения об электронных слоях */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>{t.elementDetails.atomicStructure}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="font-medium">{t.elementDetails.electronConfig}:</div>
                <div>{element.electronstring}</div>
                <div className="font-medium">{t.elementDetails.shells}:</div>
                <div>
                  {element.electrons.map((count, i) => (
                    <span key={i} className="mr-2">
                      {i+1}: {count}e⁻
                    </span>
                  ))}
                </div>
                {element.quantum && (
                  <>
                    <div className="font-medium">{t.elementDetails.quantumNumbers}:</div>
                    <div>
                      <span>{t.elementDetails.principal}: n = {element.quantum.n}; </span>
                      <span>{t.elementDetails.azimuthal}: l = {element.quantum.l}; </span>
                      <span>{t.elementDetails.magnetic}: m = {element.quantum.m}</span>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
          <ElectronShellVisualization 
            element={element}
            categoryColor={categoryColor}
          />
        </div>

        {/* Right column - визуализации */}
        <div>
          <ElectronOrbitalsVisualization 
            element={element}
            categoryColor={categoryColor}
          />
          <IsotopeChart 
            element={element}
            categoryColor={categoryColor}
          />
        </div>
      </div>
      
      <Separator />
      
      {/* Атомные радиусы */}
      <div>
        <h2 className="text-xl font-bold mb-3">{t.elementDetails.atomicRadii}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {element.radius?.calculated && (
            <Card>
              <CardContent className="pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{element.radius.calculated}</div>
                  <div className="text-sm text-gray-500">pm</div>
                  <div className="mt-2 text-sm font-medium">{t.elementDetails.calculated}</div>
                </div>
              </CardContent>
            </Card>
          )}
          {element.radius?.empirical && (
            <Card>
              <CardContent className="pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{element.radius.empirical}</div>
                  <div className="text-sm text-gray-500">pm</div>
                  <div className="mt-2 text-sm font-medium">{t.elementDetails.empirical}</div>
                </div>
              </CardContent>
            </Card>
          )}
          {element.radius?.covalent && (
            <Card>
              <CardContent className="pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{element.radius.covalent}</div>
                  <div className="text-sm text-gray-500">pm</div>
                  <div className="mt-2 text-sm font-medium">{t.elementDetails.covalent}</div>
                </div>
              </CardContent>
            </Card>
          )}
          {element.radius?.vanderwaals && (
            <Card>
              <CardContent className="pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{element.radius.vanderwaals}</div>
                  <div className="text-sm text-gray-500">pm</div>
                  <div className="mt-2 text-sm font-medium">{t.elementDetails.vanDerWaals}</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default StructureTab;
