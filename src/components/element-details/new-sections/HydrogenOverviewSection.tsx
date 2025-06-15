
import React from "react";
import HydrogenOverviewVisualBlock from "./HydrogenOverviewVisualBlock";
import { useLanguage } from "../../../context/LanguageContext";

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

const HydrogenOverviewSection = () => (
  <>
    <OverviewTable />
    <HydrogenOverviewVisualBlock />
  </>
);

export default HydrogenOverviewSection;
