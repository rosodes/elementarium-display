
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HydrogenProductionVisualBlock from "./HydrogenProductionVisualBlock";

const productionContent = {
  en: {
    title: "Production & Synthesis",
    body: [
      "Hydrogen is mainly produced from natural gas (methane, CH₄) by steam reforming; also by electrolysis of water and via coal gasification. Steam reforming is most common (85–90% of worldwide H₂).",
      "Electrolysis is cleaner but less common; gaining importance for 'green hydrogen' (renewable energy input).",
      "Hydrogen can be produced biologically (algae, bacteria) and by chemical reactions (aluminum or zinc with alkalis, acids with metals).",
      "Nuclear power and solar thermochemical cycles are in development for cleaner large-scale H₂.",
      "H₂ production is energy intensive, often limited by CO₂ emissions (unless using renewable/nuclear sources).",
      "Storage and transport are challenging: compressed gas, cryogenic liquid, or metal hydrides.",
    ],
    sources: "Sources: IEA, CRC Handbook, hydrogen industry reports"
  },
  ru: {
    title: "Получение и синтез",
    body: [
      "В промышленности водород получают в основном из природного газа (метана) — паровым реформингом (85–90% мирового H₂).",
      "Электролиз воды — более экологичный способ, используется для 'зеленого водорода', но доля пока мала.",
      "Получают также биологически (водоросли, бактерии) и химическими методами (кислоты с металлами, алюминий/цинк с щелочами).",
      "Разрабатываются ядерные и солнечные высокотемпературные технологии для чистого H₂.",
      "Производство водорода энергозатратно, часто сопровождается выбросами CO₂ (если не возобновляемые источники).",
      "Хранение и транспортировка сложны: сжатый газ, жидкий криогенный водород, химические носители."
    ],
    sources: "Источники: IEA, CRC Handbook, отчёты отрасли"
  },
  uk: {
    title: "Добування і синтез",
    body: [
      "Основний спосіб отримання водню — парова конверсія метану (CH₄) з природного газу (85–90% H₂).",
      "Електроліз води — екологічний шлях для 'зеленого водню', але масштаб ще невеликий.",
      "Можливе біологічне виробництво (водорості, бактерії) і реакції металів з кислотами чи лугами.",
      "В розробці — ядерні, сонячні, високотемпературні процеси для чистого H₂.",
      "Виробництво енергоємне, нерідко супроводжується викидами CO₂ (крім 'зеленого водню').",
      "Зберігання й транспортування водню — складні (газ, рідкий стан, гідриди)."
    ],
    sources: "Джерела: IEA, CRC Handbook"
  }
};

const HydrogenProductionSection: React.FC = () => {
  const { language } = useLanguage();
  const data = productionContent[language] || productionContent.en;
  return (
    <section>
      <h2 className="text-lg font-bold mb-2 text-orange-700 dark:text-orange-200">
        {data.title}
      </h2>
      <ul className="list-disc pl-4 marker:text-orange-500 text-xs space-y-1 mb-3">
        {data.body.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>
      <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
      <HydrogenProductionVisualBlock />
    </section>
  );
};

export default HydrogenProductionSection;
