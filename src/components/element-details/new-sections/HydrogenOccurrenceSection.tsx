import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { PieChart, Globe2, Table } from "lucide-react";
import HydrogenOccurrenceVisualBlock from "./HydrogenOccurrenceVisualBlock";
import HydrogenNaturalOccurrenceSection from "./HydrogenNaturalOccurrenceSection";

const occurrenceContent = {
  en: {
    title: "Occurrence & Abundance",
    facts: [
      "Hydrogen is by far the most abundant element in the universe: composing ~75% of normal matter by mass, ~92% by atoms.",
      "The Sun and most stars are made mainly from hydrogen; they shine by fusing hydrogen into helium (hydrogen fusion).",
      "On giant planets like Jupiter and Saturn, hydrogen dominates (both as H₂ and atomic).",
      "In interstellar space, hydrogen is found as atomic H, molecular H₂, and even as H⁺ ions (plasma).",
      "Earth's atmosphere contains only trace hydrogen (H₂ ~0.00005%) since the light gas escapes into space.",
      "Most hydrogen on Earth is chemically locked in water (H₂O), which makes up about 11% hydrogen by mass and covers 71% of Earth's surface.",
      "Hydrogen is a core component of all living things and organic molecules — present in proteins, DNA, fats, carbohydrates.",
      "Hydrogen is found in minerals (hydroxides, clays, hydrated salts) in the Earth's crust.",
      "Volcanic and hydrothermal sources release molecular hydrogen; seeps are found globally.",
      "On meteorites, the Moon, and in comets/ice, hydrogen mirrors cosmic ratios.",
      "Natural hydrogen reservoirs underground are an emerging research/investment field ('white hydrogen')."
    ],
    sources: "Sources: CRC Handbook, NASA, ESA, WebElements, Britannica, Nature, Science"
  },
  ru: {
    title: "Распространённость и встречаемость",
    facts: [
      "Водород — самый распространённый элемент во Вселенной (~75% массы обычной материи).",
      "Основное топливо звёзд (ядерный синтез, цепи pp и CNO).",
      "Основная составляющая атмосферы газовых гигантов Юпитера и Сатурна.",
      "На Земле молекулярный водород (H₂) — крайне редок в атмосфере (~0.00005%), выделяется в вулканических дымовых трубах.",
      "Почти весь водород на Земле связан в воде (~11% массы океанов).",
      "Около 10% атомов человеческого тела — водород.",
      "Содержится во всех органических молекулах: белки, жиры, ДНК.",
      "Сходные доли H и в солнечном составе, и в метеоритах.",
      "Обильный элемент в гидратированных минералах земной коры.",
      "Освобождается в процессе серпентинизации горных пород, и как глубинный газ."
    ],
    sources: "Источники: CRC Handbook, NASA, WebElements, Энциклопедия Британника"
  },
  uk: {
    title: "Поширеність та наявність",
    facts: [
      "Водень — найпоширеніший у Всесвіті (~75% маси).",
      "Головне паливо для зір (термоядерний синтез, ланцюги pp і CNO).",
      "Складає основну частину Юпітера та Сатурна.",
      "На Землі молекулярний H₂ трапляється рідко в атмосфері (~0.00005%), але присутній у вулканах і джерелах.",
      "Переважна частка — у складі води (~11% маси океанів).",
      "Близько 10% атомів у тілі людини — водень.",
      "Усі органічні молекули містять водень: білки, жири, нуклеїнові кислоти.",
      "У Сонці й метеоритах вміст H співставний з космічним.",
      "Входить до складу гідратованих мінералів, глин.",
      "Виділяється при серпентинизації порід, може бути глибокоземним газом."
    ],
    sources: "Джерела: CRC Handbook, NASA, WebElements, Британіка"
  }
};

const occurrenceTableData = [
  { env: "Universe", percent: "75%", desc: "Hydrogen mass share of universe" },
  { env: "Sun", percent: "71%", desc: "Hydrogen content in the Sun" },
  { env: "Earth's Atmosphere", percent: "<0.00005%", desc: "Molecular hydrogen (H₂)" },
  { env: "Oceans", percent: "11%", desc: "Hydrogen in H₂O by mass" },
  { env: "Earth's Crust", percent: "0.15%", desc: "Mostly in minerals & water" },
  { env: "Human body", percent: "10%", desc: "Atom fraction in humans" }
];

const HydrogenOccurrenceSection: React.FC = () => {
  const { language } = useLanguage();
  const locale = occurrenceContent[language] ? language : "en";
  const data = occurrenceContent[locale];

  return (
    <section>
      <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-indigo-700 dark:text-indigo-200">
        <PieChart size={19} className="shrink-0" />
        {data.title}
      </h2>
      <Card className="mb-4 border-indigo-200 dark:border-indigo-700">
        <CardHeader className="bg-indigo-50 dark:bg-gray-800 py-3 px-4">
          <CardTitle className="text-base flex items-center gap-2 text-indigo-700 dark:text-indigo-200">
            <Globe2 size={15} />
            {data.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-xs">
          <ul className="list-disc pl-4 space-y-1 marker:text-indigo-500 mb-2">
            {data.facts.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <div className="overflow-x-auto mt-2 mb-2">
            <table className="min-w-[350px] border border-indigo-100 dark:border-indigo-800 mx-auto rounded text-[11px]">
              <thead>
                <tr className="bg-indigo-100 dark:bg-gray-800 text-indigo-900 dark:text-indigo-200">
                  <th className="p-1 text-left"><Table size={12} className="inline mr-1" />Environment</th>
                  <th className="p-1">H fraction</th>
                  <th className="p-1 text-left">Comment</th>
                </tr>
              </thead>
              <tbody>
                {occurrenceTableData.map((row, i) => (
                  <tr key={row.env} className={i % 2 ? "bg-indigo-50 dark:bg-gray-900/40" : ""}>
                    <td className="p-1">{row.env}</td>
                    <td className="p-1 text-center">{row.percent}</td>
                    <td className="p-1">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
        </CardContent>
      </Card>
      <HydrogenOccurrenceVisualBlock />
      <HydrogenNaturalOccurrenceSection />
    </section>
  );
};

export default HydrogenOccurrenceSection;
