import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useLanguage } from '../../../context/LanguageContext';
import { Info, Thermometer, Box, Award, Atom, Hash, Zap, Layers, BookOpen, Sparkles, Book } from 'lucide-react';
import BasicInfo from '../BasicInfo';
import PhysicalProperties from '../PhysicalProperties';
import AdditionalInfo from '../AdditionalInfo';
import HistoryBlock from '../HistoryBlock'; // add
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import ElementIsotopesTable from "../ElementIsotopesTable"; // добавлено
import HydrogenDetailSections from "../new-sections/HydrogenDetailSections";

interface OverviewTabProps {
  element: Element;
}

const OverviewTab = ({ element }: OverviewTabProps) => {
  const { t } = useLanguage();

  // Карточки с расширенным набором базовой информации
  const renderElementFacts = () => {
    const radioactive =
      typeof element.radioactive !== "undefined"
        ? element.radioactive
        : typeof element.category === "string"
          ? ["actinide", "radioactive"].includes(element.category)
          : false;

    const shortDesc =
      element.summary && typeof element.summary === "string"
        ? element.summary
        : undefined;

    const electronShellsDisplay =
      Array.isArray(element.electrons) && element.electrons.length
        ? element.electrons.join(", ")
        : null;

    const melt = element.melt ? `${element.melt} K` : t.elementDetails.notAvailable;
    const boil = element.boil ? `${element.boil} K` : t.elementDetails.notAvailable;

    const isotopes = element.isotopes
      ? `${element.isotopes}`
      : t.elementDetails.notAvailable;

    const category = element.category ? element.category : t.elementDetails.notAvailable;
    const density = element?.density?.stp ? `${element.density.stp} g/cm³` : t.elementDetails.notAvailable;
    const conductivity = element?.conductivity?.thermal ? `${element.conductivity.thermal} W/(m·K)` : t.elementDetails.notAvailable;

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2 pt-4 flex flex-col items-center">
            <Hash className="h-5 w-5 mb-1" />
            <CardTitle className="text-sm font-medium text-center">{t.elementDetails.series || 'Series'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-center text-gray-600 dark:text-gray-300">{element.series}</p>
            <p className="text-xs text-center mt-2">{t.categories?.[category.toLowerCase()] || category}</p>
          </CardContent>
        </Card>
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2 pt-4 flex flex-col items-center">
            <Atom className="h-5 w-5 mb-1" />
            <CardTitle className="text-sm font-medium text-center">{t.elementDetails.electronDistribution || 'Electron Distribution'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-center text-gray-600 dark:text-gray-300">
              {electronShellsDisplay
                ? `${t.elementDetails.shells || 'Shells'}: ${electronShellsDisplay}`
                : t.elementDetails.notAvailable}
            </p>
            <p className="text-xs text-center mt-2">
              {t.elementDetails.electronConfig}: {element.electronstring || t.elementDetails.notAvailable}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2 pt-4 flex flex-col items-center">
            <Layers className="h-5 w-5 mb-1" />
            <CardTitle className="text-sm font-medium text-center">{t.elementDetails.group || 'Group'} & {t.elementDetails.period || 'Period'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-center text-gray-600 dark:text-gray-300">
              {t.elementDetails.group}: {element.group ?? t.elementDetails.notAvailable}
              <br />
              {t.elementDetails.period}: {element.period ?? t.elementDetails.notAvailable}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2 pt-4 flex flex-col items-center">
            <Sparkles className="h-5 w-5 mb-1" />
            <CardTitle className="text-sm font-medium text-center">{t.elementDetails.electronegativity || 'Electronegativity'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-center text-gray-600 dark:text-gray-300">
              {element.electroneg ?? t.elementDetails.notAvailable}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2 pt-4 flex flex-col items-center">
            <Thermometer className="h-5 w-5 mb-1" />
            <CardTitle className="text-sm font-medium text-center">{t.elementDetails.meltingBoilingPoint || 'Melting & Boiling'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-center text-gray-600 dark:text-gray-300">
              {t.elementDetails.meltingPoint}: {melt}
              <br />
              {t.elementDetails.boilingPoint}: {boil}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2 pt-4 flex flex-col items-center">
            <Zap className="h-5 w-5 mb-1" />
            <CardTitle className="text-sm font-medium text-center">{t.elementDetails.radioactive || 'Radioactive'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-center text-gray-600 dark:text-gray-300">
              {radioactive ? t.elementDetails.yes || "Yes" : t.elementDetails.no || "No"}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2 pt-4 flex flex-col items-center">
            <BookOpen className="h-5 w-5 mb-1" />
            <CardTitle className="text-sm font-medium text-center">{t.elementDetails.isotopes || 'Isotopes'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-center text-gray-600 dark:text-gray-300">
              {isotopes}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2 pt-4 flex flex-col items-center">
            <Book className="h-5 w-5 mb-1" />
            <CardTitle className="text-sm font-medium text-center">{t.elementDetails.density || 'Density'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-center text-gray-600 dark:text-gray-300">
              {density}
            </p>
            <p className="text-xs text-center mt-2">
              {t.elementDetails.conductivity || 'Conductivity'}: {conductivity}
            </p>
          </CardContent>
        </Card>
        {shortDesc && (
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 md:col-span-3">
            <CardHeader className="pb-2 pt-4 flex flex-col items-center">
              <Info className="h-5 w-5 mb-1" />
              <CardTitle className="text-sm font-medium text-center">{t.elementDetails.additionalInfo || "Additional Information"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-center text-gray-600 dark:text-gray-300">{shortDesc}</p>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  // Существующие приложения и доп. разделы, теперь после крупных фактов
  const renderApplications = () => {
    const applications = [
      {
        icon: <Box className="h-5 w-5 mb-1" />,
        title: t.elementDetails.industry || 'Industry',
        description: element.name === "Hydrogen" ? "Fuel cells, rocket fuel, fertilizer production" : 
                     element.name === "Helium" ? "Cooling superconducting magnets, party balloons, diving mixtures" :
                     "Various industrial applications"
      },
      {
        icon: <Award className="h-5 w-5 mb-1" />,
        title: t.elementDetails.discovery || 'Discovery',
        description: element.discover === "Ancient" ? 
                    t.elementDetails.knownSinceAncient || "Known since ancient times" : 
                    `${t.elementDetails.discoveredIn || 'Discovered in'} ${element.discover}`
      },
      {
        icon: <Atom className="h-5 w-5 mb-1" />,
        title: t.elementDetails.structure || 'Structure',
        description: `${element.electrons.length} ${t.elementDetails.shells || 'shells'}, ${t.elementDetails.atomicRadius || 'Atomic radius'}: ${element.radius?.calculated || element.radius?.empirical || '?'} pm`
      }
    ];
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {applications.map((app, index) => (
          <Card key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center justify-center">
                {app.icon}
              </div>
              <CardTitle className="text-sm font-medium text-center">{app.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-center text-gray-600 dark:text-gray-300">
                {app.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
          <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4">
            <CardTitle className="text-lg flex items-center">
              <Info className="w-5 h-5 mr-2" />
              {t.elementDetails.basicInfo}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <BasicInfo element={element} />
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
          <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4">
            <CardTitle className="text-lg flex items-center">
              <Thermometer className="w-5 h-5 mr-2" />
              {t.elementDetails.physicalProperties}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <PhysicalProperties element={element} />
          </CardContent>
        </Card>
      </div>

      {/* Новая секция: подробная таблица изотопов если есть данные */}
      {element.isotopesDetailed && Array.isArray(element.isotopesDetailed) && element.isotopesDetailed.length > 0 && (
        <ElementIsotopesTable isotopes={element.isotopesDetailed} element={element} />
      )}
      {renderElementFacts()}
      <HistoryBlock element={element} />

      {/* === СПЕЦИАЛЬНЫЙ КОНТЕНТ ДЛЯ HYDROGEN === */}
      {element.atomic === "1" && (
        <div className="my-5 rounded-lg border border-blue-200 bg-blue-50 dark:bg-gray-800 p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-2">Водород — Hydrogen (H), №1</h2>
          <p className="mb-2 text-gray-800 dark:text-gray-300 text-sm">
            Водород — самый легкий и самый распространённый элемент Вселенной, неметалл. Играет ключевую роль в химии, биосфере, энергетике (топливо будущего) и астрофизике.
          </p>
          <ul className="list-disc pl-4 marker:text-blue-400 text-xs leading-snug space-y-1">
            <li>Тип элемента: неметалл, "s-блок". Символ: H.</li>
            <li>Основная форма при стандартных условиях: двухатомный газ H₂ без цвета, вкуса и запаха.</li>
            <li>Уникален: иногда проявляет свойства и металлов (под экстремальным давлением).</li>
            <li>Ключевое участие: вода (H₂O), большинство органических соединений, кислоты.</li>
            <li>Основной источник энергии для звёзд (термоядерный синтез).</li>
            <li>Обнаружен в 1766 г. Генри Кавендишем (GB). Название от греч. "порождающий воду".</li>
          </ul>
          <div className="mt-2 text-[11px] text-gray-500">
            Источники: CRC Handbook, IUPAC, WebElements, Atkins, А.М. Петров "Химические элементы".
          </div>
        </div>
      )}
      {/* ========================== */}

      <div className="mt-4">
        <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
          <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4">
            <CardTitle className="text-lg">{t.elementDetails.additionalInfo}</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            {/* Новый раздел по токсичности и мерам безопасности: */}
            <AdditionalInfo element={element} />
          </CardContent>
        </Card>
      </div>
      
      {/* Applications внизу */}
      {renderApplications()}
    </>
  );
};

export default OverviewTab;
