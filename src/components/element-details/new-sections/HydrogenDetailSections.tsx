import React from "react";
// ... импорт текущих секций как раньше
import HydrogenPhysicalConstantsSection from "./HydrogenPhysicalConstantsSection";
import HydrogenOxStatesSection from "./HydrogenOxStatesSection";
import HydrogenReactivitySection from "./HydrogenReactivitySection";
import HydrogenNaturalOccurrenceSection from "./HydrogenNaturalOccurrenceSection";
import HydrogenIsotopesSection from "./HydrogenIsotopesSection";
import HydrogenVisualSection from "./HydrogenVisualSection";
import HydrogenHistorySection from "./HydrogenHistorySection";
import HydrogenInterestingFactsSection from "./HydrogenInterestingFactsSection";
import HydrogenExtractionSection from "./HydrogenExtractionSection";
import HydrogenCrystalStructureSection from "./HydrogenCrystalStructureSection";
import HydrogenCommercialUsesSection from "./HydrogenCommercialUsesSection";
import HydrogenComparisonsSection from "./HydrogenComparisonsSection";
import HydrogenDistributionPieChart from "./HydrogenDistributionPieChart";
import HydrogenUniverseBarChart from "./HydrogenUniverseBarChart";
import HydrogenSpectralSeriesSection from "./HydrogenSpectralSeriesSection";
import HydrogenEnergySection from "./HydrogenEnergySection";
import HydrogenSafetySection from "./HydrogenSafetySection";
import HydrogenOverviewVisualBlock from "./HydrogenOverviewVisualBlock";
import HydrogenPropertiesVisualBlock from "./HydrogenPropertiesVisualBlock";
import HydrogenAtomicStructureVisualBlock from "./HydrogenAtomicStructureVisualBlock";
import HydrogenApplicationsVisualBlock from "./HydrogenApplicationsVisualBlock";
import HydrogenHistoryVisualBlock from "./HydrogenHistoryVisualBlock";
import HydrogenOccurrenceVisualBlock from "./HydrogenOccurrenceVisualBlock";
import HydrogenCompoundsVisualBlock from "./HydrogenCompoundsVisualBlock";
import HydrogenBioVisualBlock from "./HydrogenBioVisualBlock";
import HydrogenProductionVisualBlock from "./HydrogenProductionVisualBlock";
import HydrogenSafetyVisualBlock from "./HydrogenSafetyVisualBlock";
import { useLanguage } from "../../../context/LanguageContext";

/**
 * Дополнительный блок "Overview" с краткой таблицей, названием на разных языках и ключевой ролью.
 */
const OverviewTable = () => {
  const { t, language } = useLanguage();
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-2">{language === "ru" ? "Обзор" : language === "uk" ? "Огляд" : "Overview"}</h2>
      <div className="overflow-x-auto text-xs sm:text-sm">
        <table className="min-w-[360px] border rounded-lg mb-2 bg-white dark:bg-gray-950 shadow">
          <tbody>
            <tr className="border-b">
              <td className="font-medium p-2">{language === "ru" ? "Название (лат/рус/укр)" : language === "uk" ? "Назва (лат/рос/укр)" : "Name (lat/ru/uk)"}</td>
              <td className="p-2">
                Hydrogen / Водород / Водень
              </td>
            </tr>
            <tr className="border-b">
              <td className="font-medium p-2">{t.elementDetails?.symbol ?? "Symbol"}</td>
              <td className="p-2">H</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium p-2">{t.elementDetails?.atomicNumber ?? "Atomic number"}</td>
              <td className="p-2">1</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium p-2">{language === "ru" ? "Тип" : language === "uk" ? "Тип" : "Type"}</td>
              <td className="p-2">{language === "ru" ? "Неметалл (уникальный, часто отдельная группа)" : language === "uk" ? "Неметал (унікальний, часто виділяється окремо)" : "Nonmetal (unique, often separated)"}</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium p-2">{language === "ru" ? "Краткое описание" : language === "uk" ? "Короткий опис" : "Short description"}</td>
              <td className="p-2">
                {language === "ru"
                  ? "Водород — самый лёгкий и распространённый элемент во Вселенной, основной строительный блок звёзд, важен в органике и энергетике"
                  : language === "uk"
                  ? "Водень — найлегший та найпоширеніший у Всесвіті елемент, основа зір, ключовий для органіки й енергетики"
                  : "Hydrogen is the lightest and most abundant element in the universe, a key building block of stars, vital in organic chemistry and energy"}
              </td>
            </tr>
            <tr className="border-b">
              <td className="font-medium p-2">{language === "ru" ? "Уникальность" : language === "uk" ? "Унікальність" : "Unique features"}</td>
              <td className="p-2">
                {language === "ru"
                  ? "Не относится ни к одной группе период. таблицы, образует двуатомные молекулы H₂, ключ для синтеза аммиака, топлива, диамагнетик"
                  : language === "uk"
                  ? "Не належить жодній групі таблиці, утворює двоатомні молекули H₂, ключ до синтезу амоніаку, палива, діамагнетик"
                  : "Not part of any table group, forms diatomic H₂ molecules, key to ammonia/fuel synthesis, diamagnetic"}
              </td>
            </tr>
            <tr>
              <td className="font-medium p-2">{language === "ru" ? "Роль и применение" : language === "uk" ? "Роль та застосування" : "Role & significance"}</td>
              <td className="p-2">
                {language === "ru"
                  ? "Топливо будущего, компонент воды и органики, стандарт для атомных масс"
                  : language === "uk"
                  ? "Паливо майбутнього, частина води, органіки, стандарт для атомних мас"
                  : "The fuel of the future, part of water/organics, standard for atomic mass"}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-[11px] text-gray-500">
          {language === "ru"
            ? "Источники: WebElements, IUPAC, CRC Handbook"
            : language === "uk"
            ? "Джерела: WebElements, IUPAC, CRC Handbook"
            : "Sources: WebElements, IUPAC, CRC Handbook"}
        </div>
      </div>
    </div>
  );
};

/**
 * Дополнительная секция для детализации спектра, энергетических уровней и изотопов
 */
const SpectralAndIsotopeFacts = () => {
  const { t, language } = useLanguage();
  return (
    <div className="my-4">
      <h3 className="font-bold text-base mb-1">{language === "ru" ? "Спектры, изотопы и строение атома" : language === "uk" ? "Спектри, ізотопи та будова атома" : "Spectra, isotopes & atomic structure"}</h3>
      <ul className="list-disc pl-5 text-xs space-y-1 marker:text-blue-500">
        <li>
          {language === "ru"
            ? "Основные изотопы: протий (¹H — 99,9885%), дейтерий (²H/D — 0,0115%), тритий (³H/T — радиоактивный, период полураспада 12,32 года)"
            : language === "uk"
            ? "Основні ізотопи: протій (¹H — 99,9885%), дейтерій (²H/D — 0,0115%), тритій (³H/T — радіоактивний, період напіврозпаду 12,32 року)"
            : "Main isotopes: protium (¹H — 99.9885%), deuterium (²H/D — 0.0115%), tritium (³H/T — radioactive, 12.32 year half-life)"}
        </li>
        <li>
          {language === "ru"
            ? "Спектральные линии Бальмера: 656.3 нм (Hα), 486.1 нм (Hβ), 434.0 нм (Hγ), 410.2 нм (Hδ)"
            : language === "uk"
            ? "Спектральні лінії Бальмера: 656.3 нм (Hα), 486.1 нм (Hβ), 434.0 нм (Hγ), 410.2 нм (Hδ)"
            : "Balmer spectral lines: 656.3 nm (Hα), 486.1 nm (Hβ), 434.0 nm (Hγ), 410.2 nm (Hδ)"}
        </li>
        <li>
          {language === "ru"
            ? "Число протонов: 1; электронов: 1; нейтронов: обычно 0 (протий), 1 (дейтерий), 2 (тритий)"
            : language === "uk"
            ? "Кількість протонів: 1; електронів: 1; нейтронів: зазвичай 0 (протій), 1 (дейтерій), 2 (тритій)"
            : "Protons: 1; Electrons: 1; Neutrons: 0 (protium), 1 (deuterium), 2 (tritium)"}
        </li>
        <li>
          {language === "ru"
            ? "Энергетические уровни: основной (n=1), возбуждённые (n=2,3,...)."
            : language === "uk"
            ? "Енергетичні рівні: основний (n=1), збуджені (n=2,3,...)"
            : "Energy levels: ground state (n=1), excited (n=2,3,...)"}
        </li>
        <li>
          {language === "ru"
            ? "Диамагнетик, радиус атома: 53 пм ( расчётный), 37 пм (ковалентный), 120 пм (Ван-дер-Ваальса)"
            : language === "uk"
            ? "Діамагнетик, радіус атома: 53 пм (розрахунковий), 37 пм (ковалентний), 120 пм (Ван-дер-Ваальса)"
            : "Diamagnetic; atomic radii: 53 pm (calc.), 37 pm (covalent), 120 pm (van der Waals)"}
        </li>
      </ul>
      <div className="mt-2 text-[11px] text-gray-500">
        {language === "ru"
          ? "Источники: IUPAC, CRC Handbook, physics.nist.gov"
          : language === "uk"
          ? "Джерела: IUPAC, CRC Handbook, physics.nist.gov"
          : "Sources: IUPAC, CRC Handbook, physics.nist.gov"}
      </div>
    </div>
  );
};

/**
 * Обновлённые секции для HydrogenDetailSections:
 * - Для каждого блока — визуальный инфоблок, ссылками или инфографикой, tooltips, icons.
 */
const HydrogenDetailSections: React.FC = () => {
  return (
    <>
      {/* Overview + визуальный блок-ссылки */}
      <OverviewTable />
      <HydrogenOverviewVisualBlock />

      {/* Properties/Physical Constants */}
      <HydrogenPhysicalConstantsSection />
      <HydrogenPropertiesVisualBlock />

      {/* Atomic structure, isotopes, уровни */}
      <HydrogenOxStatesSection />
      <HydrogenAtomicStructureVisualBlock />
      <HydrogenReactivitySection />
      <HydrogenNaturalOccurrenceSection />
      <HydrogenIsotopesSection />
      <HydrogenVisualSection />
      <HydrogenHistorySection />
      <HydrogenInterestingFactsSection />

      {/* Spectral series, isotopic facts */}
      <SpectralAndIsotopeFacts />

      {/* Applications/Uses: визуальный блок */}
      <HydrogenExtractionSection />
      <HydrogenApplicationsVisualBlock />
      <HydrogenCrystalStructureSection />
      <HydrogenCommercialUsesSection />
      <HydrogenComparisonsSection />

      {/* New extended/visual blocks */}
      <HydrogenSpectralSeriesSection />
      <HydrogenEnergySection />
      <HydrogenSafetySection />
      <HydrogenDistributionPieChart />
      <HydrogenUniverseBarChart />

      {/* Новые визуальные блоки для каждого тематического раздела */}
      {/* После History / Discovery */}
      <HydrogenHistoryVisualBlock />
      {/* После Occurrence / Abundance */}
      <HydrogenOccurrenceVisualBlock />
      {/* После Compounds / Chemistry */}
      <HydrogenCompoundsVisualBlock />
      {/* После Biological Role / Toxicity */}
      <HydrogenBioVisualBlock />
      {/* После Production / Synthesis */}
      <HydrogenProductionVisualBlock />
      {/* После Safety / Precautions */}
      <HydrogenSafetyVisualBlock />
    </>
  );
};

export default HydrogenDetailSections;
