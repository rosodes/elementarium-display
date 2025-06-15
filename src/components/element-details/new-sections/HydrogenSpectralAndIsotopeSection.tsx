
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

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

export default SpectralAndIsotopeFacts;
