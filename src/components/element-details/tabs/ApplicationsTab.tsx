import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '../../../context/LanguageContext';
import { Badge } from '@/components/ui/badge';

// Импортируем дополнительные секции
import UsageDistributionChart from '../visualizations/UsageDistributionChart';
import ElementTimeline from '../visualizations/ElementTimeline';
import IndustrialUses from '../applications/IndustrialUses';
import EverydayUses from '../applications/EverydayUses';
import UsageSection from '../applications/UsageSection';
import DiscoverySection from '../applications/DiscoverySection';

// Импорт секций применения для водорода:
import HydrogenCommercialUsesSection from "../new-sections/HydrogenCommercialUsesSection";
import HydrogenExtractionSection from "../new-sections/HydrogenExtractionSection";

interface ApplicationsTabProps {
  element: Element;
  categoryColor: string;
}

const ApplicationsTab = ({ element, categoryColor }: ApplicationsTabProps) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 max-w-full">
      <UsageSection element={element} categoryColor={categoryColor} />
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      <IndustrialUses element={element} />
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      <EverydayUses element={element} />
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      <UsageDistributionChart element={element} />
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      <ElementTimeline element={element} />
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      <DiscoverySection element={element} />

      {/* --- ДОПОЛНЕНИЯ ДЛЯ HYDROGEN --- */}
      {element.atomic === "1" && (
        <div className="rounded-lg border border-blue-100 bg-blue-50 dark:bg-gray-800 p-4 text-xs mt-3">
          <h3 className="text-base font-bold mb-2 text-blue-700 dark:text-blue-200">Направления использования водорода</h3>
          <ul className="list-disc pl-4 marker:text-blue-400 space-y-1">
            <li>Промышленность: производство аммиака (NH₃, удобрения), метанола, гидрогенизация масел, нефтепереработка</li>
            <li>Энергетика: топливные элементы, получение "зеленого" водорода, двигатели ракет</li>
            <li>Медицина: исследования в ядерной медицине, вдыхание H₂ как антиоксиданта</li>
            <li>Наука: стандарт для определения атомных масс</li>
            <li>Быт: баллоны для сварки/резки металлов</li>
            <li>Ключевые продукты: вода (H₂O), аммиак, хлорводород, металлы и др.</li>
            <li>Текущие тренды: декарбонизация, альтернативная энергетика на водороде</li>
          </ul>
          <div className="mt-2 text-[11px] text-gray-500">Источник: IEA, CRC Handbook, DOE Hydrogen Program, WebElements</div>
        </div>
      )}
      {/* --- ДОПОЛНЕНИЕ ДЛЯ HYDROGEN --- */}
      {element.atomic === "1" && (
        <>
          <HydrogenExtractionSection />
          <HydrogenCommercialUsesSection />
        </>
      )}
    </div>
  );
};
export default ApplicationsTab;
