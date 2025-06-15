
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { PieChart, Globe2 } from "lucide-react";
import HydrogenOccurrenceVisualBlock from "./HydrogenOccurrenceVisualBlock";
import HydrogenNaturalOccurrenceSection from "./HydrogenNaturalOccurrenceSection";

const occurrenceContent = {
  en: {
    title: "Occurrence & Abundance",
    facts: [
      "Most abundant element in the Universe (~75% by mass), forms the bulk of stars and interstellar medium.",
      "Very rare as H₂ gas on Earth (escapes gravity), but present everywhere as part of water (H₂O) and organics.",
      "Major component in gas giant planets (Jupiter, Saturn).",
      "Essential in all biological life: part of water, fats, proteins, nucleic acids.",
      "Found as a minor component in volcanic and deep-earth gases."
    ],
    sources: "Sources: CRC Handbook, WebElements, NASA, IUPAC"
  },
  ru: {
    title: "Распространённость и встречаемость",
    facts: [
      "Самый распространённый элемент Вселенной (~75% массы), основа звёзд и межзвёздной среды.",
      "На Земле крайне редок в виде Н₂, но находится повсеместно в составе воды и органики.",
      "Основная часть газовых гигантов (Юпитер, Сатурн) — водород.",
      "Ключевой для жизненных процессов: входит в воду, жиры, белки, нуклеиновые кислоты.",
      "В малых количествах входит в вулканические и глубинные газы."
    ],
    sources: "Источники: CRC Handbook, WebElements, NASA, IUPAC"
  },
  uk: {
    title: "Поширеність та наявність",
    facts: [
      "Найпоширеніший у Всесвіті (~75% маси), основа зір і міжзоряної речовини.",
      "На Землі як Н₂ трапляється рідко (швидко втрачається атмосферою), але всюди у складі води і органіки.",
      "Основна складова газових гігантів (Юпітер, Сатурн) — водень.",
      "Важливий для життя: є у складі води, жирів, білків, нуклеїнових кислот.",
      "В невеликих кількостях — у вулканічних і глибоких газах."
    ],
    sources: "Джерела: CRC Handbook, WebElements, NASA, IUPAC"
  }
};

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
          <ul className="list-disc pl-4 space-y-1 marker:text-indigo-500">
            {data.facts.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
        </CardContent>
      </Card>
      <HydrogenOccurrenceVisualBlock />
      <HydrogenNaturalOccurrenceSection />
    </section>
  );
};
export default HydrogenOccurrenceSection;
