
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Factory, Repeat2 } from "lucide-react";
import HydrogenProductionVisualBlock from "./HydrogenProductionVisualBlock";

const productionContent = {
  en: {
    title: "Production & Synthesis",
    facts: [
      "<b>Steam methane reforming (SMR):</b> primary industrial method (CH₄ + H₂O → CO + 3H₂).",
      "<b>Electrolysis of water:</b> produces “green hydrogen” from renewable electricity.",
      "<b>Partial oxidation, thermal cracking of hydrocarbons, and coal gasification:</b> alternative large-scale methods.",
      "<b>Laboratory:</b> metals + acids (e.g. Zn + HCl).",
      "Global annual H₂ production &gt; 94 million tons (2022, IEA); mostly for ammonia, refining, and methanol.",
      "Technology trends: increasing share of green H₂, energy storage, fuel cells."
    ],
    sources: "Sources: IEA, DOE Hydrogen Program, WebElements"
  },
  ru: {
    title: "Производство и синтез",
    facts: [
      "<b>Паровой реформинг метана (SMR):</b> главный промышленный способ (CH₄ + H₂O → CO + 3H₂).",
      "<b>Электролиз воды:</b> получение «зелёного водорода» из возобновляемой энергии.",
      "<b>Частичное окисление, термический крекинг, газификация угля:</b> альтернативные крупные процессы.",
      "<b>Лаборатория:</b> получение из металлов и кислот (например, Zn + HCl).",
      "Годовое мировое производство H₂ более 94 млн. тонн (2022); используется для аммиака, переработки, метанола.",
      "Тренды: рост «зелёного» H₂, хранение энергии, топливные элементы."
    ],
    sources: "Источники: IEA, DOE Hydrogen Program, WebElements"
  },
  uk: {
    title: "Виробництво і синтез",
    facts: [
      "<b>Парова риформінг метану (SMR):</b> основний промисловий метод (CH₄ + H₂O → CO + 3H₂).",
      "<b>Електроліз води:</b> отримання «зеленого» водню з ВДЕ.",
      "<b>Часткове окиснення, термокрекінг, газифікація вугілля:</b> альтернативні способи.",
      "<b>Лабораторія:</b> взаємодія металів з кислотами (напр. Zn + HCl).",
      "Світове виробництво H₂ &gt; 94 млн т (2022); переважно для аміаку, очищення, метанолу.",
      "Тренди: зростає частка «зеленого» H₂, зберігання, паливні елементи."
    ],
    sources: "Джерела: IEA, DOE Hydrogen Program, WebElements"
  }
};

const HydrogenProductionSection: React.FC = () => {
  const { language } = useLanguage();
  const locale = productionContent[language] ? language : "en";
  const data = productionContent[locale];

  return (
    <section>
      <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-lime-800 dark:text-lime-200">
        <Factory size={19} className="shrink-0" />
        {data.title}
      </h2>
      <Card className="mb-4 border-lime-200 dark:border-lime-700">
        <CardHeader className="bg-lime-50 dark:bg-gray-800 py-3 px-4">
          <CardTitle className="text-base flex items-center gap-2 text-lime-800 dark:text-lime-200">
            <Repeat2 size={16} />
            {data.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-xs space-y-2">
          <ul
            className="list-disc pl-4 space-y-1 marker:text-lime-600"
            dangerouslySetInnerHTML={{
              __html: data.facts.map(f => `<li>${f}</li>`).join('')
            }}
          />
          <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
        </CardContent>
      </Card>
      <HydrogenProductionVisualBlock />
    </section>
  );
};

export default HydrogenProductionSection;
