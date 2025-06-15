
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Globe2, PieChart } from "lucide-react";

const contents = {
  en: {
    title: "Occurrence & Abundance",
    text: [
      "Second most abundant element in the observable universe after hydrogen.",
      "Created by nuclear fusion in stars and through radioactive decay (alpha decay) of heavy elements on Earth.",
      "Rare in Earth's atmosphere (~0.00052% by volume) — lighter than air, escapes gravity.",
      "Main terrestrial sources: natural gas fields (contains up to 7% helium in some fields).",
      "Crucial for cryogenics, science, and industry due to inertness and low boiling point.",
    ],
    sources: "Sources: CRC Handbook, WebElements, NASA, IUPAC"
  },
  ru: {
    title: "Распространённость и встречаемость",
    text: [
      "Второй по распространённости элемент во Вселенной после водорода.",
      "Образуется в звёздах при термоядерных реакциях и на Земле при радиоактивном распаде тяжелых элементов (альфа-распад).",
      "В атмосфере Земли очень мало — 0,00052% по объему, быстро уходит в космос.",
      "Основной источник на Земле — природный газ (иногда до 7% гелия в отдельных месторождениях).",
      "Ключевой для криогеники, науки и промышленности благодаря инертности и низкой температуре кипения.",
    ],
    sources: "Источники: CRC Handbook, WebElements, NASA, IUPAC"
  },
  uk: {
    title: "Поширеність та наявність",
    text: [
      "Другий за поширеністю елемент у Всесвіті після водню.",
      "Утворюється термоядерними реакціями в зорях і внаслідок альфа-розпаду важких елементів на Землі.",
      "В атмосфері Землі дуже мало — 0,00052% за об'ємом, легший за повітря, утікає в космос.",
      "Основне джерело на Землі — природний газ (до 7% в деяких покладах).",
      "Критично важливий для кріогеніки, науки та промисловості через інертність і низьку температуру кипіння.",
    ],
    sources: "Джерела: CRC Handbook, WebElements, NASA, IUPAC"
  }
};

const HeliumOccurrenceSection: React.FC = () => {
  const { language } = useLanguage();
  const loc = contents[language] ? language : "en";
  const data = contents[loc];

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
            {data.text.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
        </CardContent>
      </Card>
      {/* Дополнительно визуальные блоки можно вынести как отдельные компоненты */}
    </section>
  );
};
export default HeliumOccurrenceSection;
