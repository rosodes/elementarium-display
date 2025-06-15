
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HydrogenOccurrenceVisualBlock from "./HydrogenOccurrenceVisualBlock";
import HydrogenNaturalOccurrenceSection from "./HydrogenNaturalOccurrenceSection";
import { PieChart, Table } from "lucide-react";

const occurrenceContent = {
  en: {
    title: "Occurrence & Abundance",
    facts: [
      "Hydrogen is the single most abundant element in the universe: ≈ 75% of normal matter by mass, >90% of atoms.",
      "It dominates the composition of stars and gas giants (Jupiter, Saturn), mainly as atomic and molecular hydrogen.",
      "In interstellar medium, found as atomic H, molecular H₂, and ionized H⁺.",
      "On Earth, most hydrogen is chemically bound in water (H₂O) and organic molecules; free H₂ is rare due to its tendency to escape gravity.",
      "Atmospheric H₂ concentration on Earth is extremely low (~0.00005% by volume).",
      "Hydrogen is present in all living organisms, minerals, petroleum, volcanic and hydrothermal gases.",
      "Recent discoveries: subsurface ('white') hydrogen deposits could be a new energy resource."
    ],
    table: [
      { env: "Universe", percent: "75% (mass)", comment: "Hydrogen mass share of the universe" },
      { env: "Sun", percent: "71%", comment: "Hydrogen in solar composition" },
      { env: "Earth's Atmosphere", percent: "<0.00005%", comment: "Molecular hydrogen (H₂)" },
      { env: "Oceans", percent: "11%", comment: "Hydrogen in H₂O by mass" },
      { env: "Earth's Crust", percent: "0.15%", comment: "Mostly in minerals & water" },
      { env: "Human body", percent: "10%", comment: "Atom fraction in the human body" }
    ],
    sources: "Sources: CRC Handbook, NASA, WebElements, Nature"
  },
  ru: {
    title: "Распространённость и встречаемость",
    facts: [
      "Водород — самый распространённый элемент (~75% массы обычной материи, >90% числа атомов).",
      "Основная составляющая звёзд, туманностей, газовых гигантов (водород в виде H и H₂).",
      "В межзвёздной среде — атомарный, молекулярный и ионизированный водород.",
      "На Земле почти весь водород связан в воде и органике, свободного газа крайне мало (улетучивается из атмосферы).",
      "Доля H₂ в атмосфере Земли — всего 0,00005%.",
      "Входит в состав живых организмов, минералов, нефти, газов вулканов и источников.",
      "Открытия подземных запасов («белый» водород) — перспективное экологичное сырьё для энергетики."
    ],
    table: [
      { env: "Вселенная", percent: "75%", comment: "Доля массы" },
      { env: "Солнце", percent: "71%", comment: "Содержание водорода" },
      { env: "Атмосфера Земли", percent: "<0.00005%", comment: "Молекулярный H₂" },
      { env: "Океаны", percent: "11%", comment: "Вода" },
      { env: "Земная кора", percent: "0.15%", comment: "В минералах, воде" },
      { env: "Организм человека", percent: "10%", comment: "Доля атомов" }
    ],
    sources: "Источники: CRC Handbook, NASA, WebElements, Nature"
  },
  uk: {
    title: "Поширеність та наявність",
    facts: [
      "Водень — найпоширеніший елемент у Всесвіті (~75% маси звичайної матерії, >90% атомів).",
      "Основна складова зір, туманностей, атмосфер Юпітера й Сатурна (у вигляді H, H₂).",
      "У міжзоряному середовищі зустрічається як атомарний, молекулярний та іонізований водень.",
      "На Землі водень переважно у воді та органічних молекулах; у вигляді вільного газу рідкісний (легко йде з атмосфери).",
      "Концентрація H₂ в атмосфері ~0,00005% (дуже мало).",
      "Входить до складу живих організмів, мінералів, нафти, вулканічних й гідротермальних газів.",
      "Підземний 'білий' водень — потенційне нове джерело енергії."
    ],
    table: [
      { env: "Всесвіт", percent: "75%", comment: "Частка маси" },
      { env: "Сонце", percent: "71%", comment: "Вміст водню" },
      { env: "Атмосфера Землі", percent: "<0.00005%", comment: "H₂" },
      { env: "Океани", percent: "11%", comment: "У складі води" },
      { env: "Земна кора", percent: "0.15%", comment: "У мінералах, воді" },
      { env: "Людина", percent: "10%", comment: "Частка атомів" }
    ],
    sources: "Джерела: CRC Handbook, NASA, WebElements, Nature"
  }
};

const HydrogenOccurrenceSection: React.FC = () => {
  const { language } = useLanguage();
  const data = occurrenceContent[language] || occurrenceContent.en;
  return (
    <section>
      <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-200 flex items-center gap-2">
        <PieChart size={17} />
        {data.title}
      </h2>
      <ul className="list-disc pl-4 marker:text-indigo-500 text-xs space-y-1 mb-3">
        {data.facts.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[350px] border border-indigo-100 dark:border-indigo-800 mx-auto rounded text-[11px]">
          <thead>
            <tr className="bg-indigo-100 dark:bg-gray-800 text-indigo-900 dark:text-indigo-200">
              <th className="p-1 text-left"><Table size={12} className="inline mr-1" />Environment</th>
              <th className="p-1">H fraction</th>
              <th className="p-1 text-left">Comment</th>
            </tr>
          </thead>
          <tbody>
            {data.table.map((row, i) => (
              <tr key={row.env} className={i % 2 ? "bg-indigo-50 dark:bg-gray-900/40" : ""}>
                <td className="p-1">{row.env}</td>
                <td className="p-1 text-center">{row.percent}</td>
                <td className="p-1">{row.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
      <HydrogenOccurrenceVisualBlock />
      <HydrogenNaturalOccurrenceSection />
    </section>
  );
};

export default HydrogenOccurrenceSection;
