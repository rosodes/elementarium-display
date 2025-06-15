
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HydrogenOccurrenceVisualBlock from "./HydrogenOccurrenceVisualBlock";
import HydrogenNaturalOccurrenceSection from "./HydrogenNaturalOccurrenceSection";
import { PieChart, Globe2, Table } from "lucide-react";

const occurrenceContent = {
  en: {
    title: "Occurrence & Abundance",
    facts: [
      "Hydrogen is by far the most abundant element in the universe: ~75% of normal matter by mass, ~92% by atom count.",
      "The Sun and most stars are made mainly from hydrogen; they shine by fusing hydrogen into helium (hydrogen fusion).",
      "Hydrogen dominates the atmospheres of gas giants like Jupiter and Saturn both as H₂ and atomic H.",
      "Hydrogen occurs in interstellar space as atomic H, molecular H₂, and as H⁺ ions (plasma).",
      "Earth's atmosphere contains only trace hydrogen — H₂ about 0.00005% — because the gas escapes to space.",
      "Most hydrogen on Earth is locked in water (H₂O), about 11% of water's mass, covering 71% of Earth's surface.",
      "Essential in all living things — proteins, DNA, fats, and carbohydrates.",
      "Hydrogen found in minerals, hydrated salts, clays, volcanic and hydrothermal emissions.",
      "Underground 'white hydrogen' reservoirs are a potential new energy source.",
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
      "Водород — самый распространённый элемент (~75% массы обычной материи).",
      "Главное вещество звёзд, основа современных космологических моделей.",
      "В атмосферах газовых гигантов — преимущественно водород.",
      "В межзвёздной среде встречается в разных формах: H, H₂, H⁺.",
      "На Земле молекулярный водород (H₂) — крайне редок в атмосфере (0.00005%), легко уходит в космос.",
      "Основная часть — связана в воде (11% массы океанов), а также в минералах и органике.",
      "Входит в состав всех живых существ — белки, ДНК, жиры, углеводы.",
      "Обнаружен в гидратированных минералах, глинах, вулканических и гидротермальных выбросах.",
      "Недавно открытые запасы подземного «белого водорода» рассматриваются как перспективный природный источник."
    ],
    table: [
      { env: "Вселенная", percent: "75%", comment: "Доля массы" },
      { env: "Солнце", percent: "71%", comment: "Содержание водорода" },
      { env: "Атмосфера Земли", percent: "<0.00005%", comment: "Молекулярный H₂" },
      { env: "Океаны", percent: "11%", comment: "Вода" },
      { env: "Земная кора", percent: "0.15%", comment: "В минералах, воде" },
      { env: "Организм человека", percent: "10%", comment: "Доля атомов от общего числа" }
    ],
    sources: "Источники: CRC Handbook, NASA, WebElements, Nature"
  },
  uk: {
    title: "Поширеність та наявність",
    facts: [
      "Водень — найпоширеніший у Всесвіті (близько 75% маси).",
      "Головна складова зір, основа космологічних моделей.",
      "В атмосфері Юпітера та Сатурна — переважно водень.",
      "У міжзоряному середовищі трапляється у формах H, H₂, H⁺.",
      "На Землі H₂ дуже мало в атмосфері (0.00005%), газ легко йде в космос.",
      "Переважна частка водню в складі води (11% маси океанів), органіці, мінералах.",
      "Входить в усі органічні молекули, важливий для життя.",
      "Присутній у гідратованих мінералах, глинах, вулканічних і гідротермальних джерелах.",
      "Підземний 'білий водень' розглядається як новий енергоджерело."
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
