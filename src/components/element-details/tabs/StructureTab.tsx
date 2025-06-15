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
        <div className="p-4 mb-2 rounded-lg border border-blue-100 bg-blue-50 dark:bg-gray-800">
          <h3 className="font-semibold text-blue-700 dark:text-blue-200 mb-2 text-base">Атомное строение водорода</h3>
          <ul className="list-disc pl-4 text-xs marker:text-blue-400">
            <li>Электронная конфигурация: 1s¹</li>
            <li>Число протонов: 1; электронов: 1; нейтронов: зависит от изотопа</li>
            <li>Валентность: 1; степени окисления: –1, +1</li>
            <li>Основные изотопы:
              <ul className="ml-4 list-[circle]">
                <li>Протий (¹H, 99.9885%, стабильный)</li>
                <li>Дейтерий (²H, D, 0.0115%, стабильный)</li>
                <li>Тритий (³H, T, радиоактивный, период полураспада ~12.3 лет)</li>
              </ul>
            </li>
            <li>Основные энергетические уровни: 1</li>
            <li>Классические спектральные серии: Lyman, Balmer, Paschen и др.
              <ul className="ml-4 list-[circle]">
                <li>Lyman (УФ): n=1 (121.6 нм и др.)</li>
                <li>Balmer (видимый): n=2 (656.3, 486.1, 434.0, 410.2 нм)</li>
                <li>Paschen (ИК): n=3</li>
              </ul>
            </li>
          </ul>
          <div className="mt-2 text-[11px] text-gray-500">
            Источники: CRC Handbook, Atkins, IUPAC, physics.nist.gov
          </div>
        </div>
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
