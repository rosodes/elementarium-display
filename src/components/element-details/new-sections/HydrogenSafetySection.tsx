import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Flame, ShieldAlert, Table } from "lucide-react";
import HydrogenSafetyVisualBlock from "./HydrogenSafetyVisualBlock";

const safetyContent = {
  en: {
    title: "Safety & Precautions",
    facts: [
      "<b>Extremely flammable:</b> hydrogen forms explosive mixtures with air in a broad range (4–75% H₂ in air).",
      "Hydrogen has the lowest ignition energy of any element, can ignite from static electricity, hot surface, or spark.",
      "Invisible flame: hydrogen’s flame is nearly invisible in daylight, making burns difficult to detect.",
      "Hydrogen leaks easily: H₂ molecules are small and can escape through seals/valves undetected without proper sensors.",
      "Colorless, odorless—no warning signs in the case of gas leak unless detection devices are in place.",
      "Hydrogen can displace oxygen and cause asphyxiation in confined spaces.",
      "For storage and transport, only use certified, hydrogen-rated high-pressure cylinders or cryogenic tanks.",
      "Ventilation, spark-free tools, and leak detection systems are essential in all hydrogen-handling environments.",
      "Cryogenic hydrogen (liquid, -253°C) can cause frostbite/cold burns and severe overpressure if vaporizes suddenly.",
      "Hydrogen embrittlement can weaken metal tanks/pipes over time.",
      "Not environmentally toxic but can cause catastrophic fires/explosions if mishandled (e.g., Hindenburg disaster).",
      "Regulations: strict codes apply (e.g. OSHA, NFPA, EU-ATEX) for all hydrogen facilities."
    ],
    table: [
      { hazard: "Flammability", advice: "Avoid open flames, static, and sparks; ground all equipment", danger: "Explosion/fire" },
      { hazard: "Leaks", advice: "Install H₂ sensors, ventilation; regular inspection", danger: "Explosion, asphyxia" },
      { hazard: "Cryogenic injury", advice: "Wear insulated gloves, face protection", danger: "Frostbite/cold burns" },
      { hazard: "Invisible flame", advice: "UV/IR detectors, warning signs", danger: "Hidden burns" },
      { hazard: "Pressure", advice: "Use pressure relief valves and burst disks", danger: "Cylinder rupture" },
    ],
    sources: "Sources: OSHA, NIOSH, IUPAC, CRC Handbook, NFPA, Hydrogen Europe"
  },
  ru: {
    title: "Безопасность и меры предосторожности",
    facts: [
      "<b>Крайне горюч:</b> водород образует взрывоопасные смеси с воздухом в широких пределах (4–75%).",
      "Минимальная энергия воспламенения — любой источник искры может вспыхнуть.",
      "Пламя почти невидимо — большой риск для операторов.",
      "Низкая масса и размер молекулы — водород просачивается через большинство материалов.",
      "Не имеет цвета и запаха — утечки часто не заметны и могут привести к удушью.",
      "Только сертифицированные баллоны и арматура — для хранения.",
      "Вентиляция и системы обнаружения утечек обязательны.",
      "Криогенный H₂ (~-253°C) вызывает ожоги, разрывы баллонов.",
      "Инфраструктура для транспортировки должна быть защищена от водородного охрупчивания.",
      "Природный нетоксичен, но неправильное обращение приводит к катастрофам (пример: Гинденбург)."
    ],
    table: [
      { hazard: "Горючесть", advice: "Держать вдали от источников огня", danger: "Взрыв" },
      { hazard: "Утечки", advice: "Датчики, вентиляция обязательны", danger: "Пожар, удушье" },
      { hazard: "Криоожоги", advice: "Перчатки, экраны", danger: "Термические ожоги" },
      { hazard: "Невидимое пламя", advice: "УФ-детекторы, очки", danger: "Ожоги" }
    ],
    sources: "Источники: OSHA, NIOSH, IUPAC, CRC Handbook, NFPA"
  },
  uk: {
    title: "Безпека та застороги",
    facts: [
      "<b>Вкрай займистий:</b> водень утворює вибухонебезпечні суміші з повітрям (4–75%).",
      "Дуже низька енергія займання — легко зайнятися від іскри або електростатики.",
      "Полум'я водню майже не видно.",
      "H₂ швидко просочується крізь матеріали.",
      "Не має запаху/кольору — утечки часто не виявляються.",
      "Використовуйте лише сертифіковані балони та обладнання.",
      "Потрібні вентиляція та датчики газу.",
      "Кріогенний H₂ небезпечний — опіки, вибухи.",
      "Транспортування — тільки спеціальні трубопроводи й ємності.",
      "Природний H₂ не є екотоксикантом, але аварії небезпечні (типу Гінденбург)."
    ],
    table: [
      { hazard: "Займистість", advice: "Тримати подалі від вогню", danger: "Вибух" },
      { hazard: "Витік газу", advice: "Датчики, вентиляція", danger: "Пожежа, задуха" },
      { hazard: "Кріо-опіки", advice: "Термозахисне спорядження", danger: "Опік" },
      { hazard: "Невидиме полум'я", advice: "Детектори UV", danger: "Опік" }
    ],
    sources: "Джерела: OSHA, NIOSH, IUPAC, CRC Handbook, NFPA"
  }
};

const HydrogenSafetySection: React.FC = () => {
  const { language } = useLanguage();
  const locale = safetyContent[language] ? language : "en";
  const data = safetyContent[locale];

  return (
    <section>
      <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-red-700 dark:text-red-200">
        <Flame size={19} className="shrink-0" />
        {data.title}
      </h2>
      <Card className="mb-4 border-red-200 dark:border-red-700">
        <CardHeader className="bg-red-50 dark:bg-gray-800 py-3 px-4">
          <CardTitle className="text-base flex items-center gap-2 text-red-700 dark:text-red-200">
            <ShieldAlert size={16} />
            {data.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-xs space-y-3">
          <ul
            className="list-disc pl-4 space-y-1 marker:text-red-600"
            dangerouslySetInnerHTML={{
              __html: data.facts.map(f => `<li>${f}</li>`).join('')
            }}
          />
          <div className="overflow-x-auto">
            <table className="min-w-[330px] border border-red-100 dark:border-red-700 mx-auto rounded text-[11px]">
              <thead>
                <tr className="bg-red-100 dark:bg-gray-800 text-red-900 dark:text-red-200">
                  <th className="p-1 text-left"><Table size={12} className="inline mr-1" />Hazard</th>
                  <th className="p-1 text-left">Precaution / Advice</th>
                  <th className="p-1 text-left">Danger</th>
                </tr>
              </thead>
              <tbody>
                {data.table.map((row, i) => (
                  <tr key={row.hazard} className={i % 2 ? "bg-red-50 dark:bg-gray-900/40" : ""}>
                    <td className="p-1 font-semibold">{row.hazard}</td>
                    <td className="p-1">{row.advice}</td>
                    <td className="p-1">{row.danger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
        </CardContent>
      </Card>
      <HydrogenSafetyVisualBlock />
    </section>
  );
};

export default HydrogenSafetySection;
