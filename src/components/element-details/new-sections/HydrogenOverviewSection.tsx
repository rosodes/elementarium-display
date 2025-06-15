
import React from "react";
import HydrogenOverviewVisualBlock from "./HydrogenOverviewVisualBlock";
import { useLanguage } from "../../../context/LanguageContext";

const OverviewTable = () => {
  const { t, language } = useLanguage();
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-2">
        {language === "ru"
          ? "Обзор"
          : language === "uk"
          ? "Огляд"
          : "Overview"}
      </h2>
      <div className="overflow-x-auto text-xs sm:text-sm">
        <table className="min-w-[360px] border rounded-lg mb-2 bg-white dark:bg-gray-950 shadow">
          <tbody>
            <tr className="border-b">
              <td className="font-medium p-2">
                {language === "ru"
                  ? "Название (лат/рус/укр)"
                  : language === "uk"
                  ? "Назва (лат/рос/укр)"
                  : "Name (lat/ru/uk)"}
              </td>
              <td className="p-2">Hydrogen / Водород / Водень</td>
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
                  ? "Водород — самый лёгкий элемент, важнейший компонент воды, органики и топлива будущего."
                  : language === "uk"
                  ? "Водень — найлегший елемент, основа води, органіки й перспективного пального."
                  : "Hydrogen is the lightest element, key component of water, organics, and the fuel of the future."}
              </td>
            </tr>
            <tr className="border-b">
              <td className="font-medium p-2">{language === "ru" ? "Уникальность" : language === "uk" ? "Унікальність" : "Unique features"}</td>
              <td className="p-2">
                {language === "ru"
                  ? "Единственный элемент без нейтрона (¹H), образует двухатомные молекулы H₂, не относится ни к одной группе таблицы."
                  : language === "uk"
                  ? "Єдиний елемент без нейтрона (¹H), утворює двоатомні молекули H₂, не належить жодній групі таблиці."
                  : "The only element with a no-neutron isotope (¹H), forms diatomic H₂ molecules, not assigned to any periodic table group."}
              </td>
            </tr>
            <tr>
              <td className="font-medium p-2">{language === "ru" ? "Роль и применение" : language === "uk" ? "Роль та застосування" : "Role & significance"}</td>
              <td className="p-2">
                {language === "ru"
                  ? "Компонент воды, органики, топливо будущего, стандарт атомных масс."
                  : language === "uk"
                  ? "Частина води, органіки, паливо майбутнього, стандарт атомних мас."
                  : "Part of water/organics, fuel of the future, atomic-mass standard."}
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
