
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HydrogenProductionVisualBlock from "./HydrogenProductionVisualBlock";

const productionContent = {
  en: {
    title: "Production & Synthesis",
    body: [
      "Almost 90% of industrial hydrogen is produced from fossil fuels—mainly by steam methane reforming (natural gas: CH₄ + H₂O → CO + 3H₂); also via coal gasification (water-gas shift reaction).",
      "Electrolysis of water (2H₂O → 2H₂ + O₂) provides high-purity, 'green hydrogen' if renewable energy is used.",
      "Byproduct hydrogen comes from processes such as chlor-alkali (NaOH, Cl₂ production) and petroleum refining.",
      "Laboratory synthesis: reaction of active metals (e.g., Zn, Al) with acids or bases liberates H₂.",
      "Other innovative routes: thermochemical water splitting (solar, nuclear, metal oxide cycles), photocatalytic and biological methods (algae, bacteria).",
      "'White' hydrogen (naturally generated underground) is a prospective source under active research.",
      "Storage and transport: compressed gas, liquefied hydrogen, metal hydrides, ammonia as carrier."
    ],
    sources: "Sources: IEA, CRC Handbook, hydrogen industry reports, Nature Energy"
  },
  ru: {
    title: "Получение и синтез",
    body: [
      "Почти 90% мирового водорода получают из ископаемого топлива: паровой реформинг метана (CH₄ + H₂O → CO + 3H₂), углефикация (реакция с H₂O).",
      "Электролиз воды (2H₂O → 2H₂ + O₂) — 'зелёный' и чистый водород при использовании ВИЭ.",
      "Побочный водород образуется в процессах производства NaOH, Cl₂ (хлор-щелочной электролиз), нефтепереработке.",
      "В лабораториях H₂ выделяют при реакции активных металлов (Zn, Al) с кислотами/щелочами.",
      "Научные инновации: терморасщепление (солнечная, ядерная энергетика), фотокатализ, биогенные процессы (водоросли, бактерии).",
      "'Белый' природный водород (подземный генерация) — перспективное сырьё.",
      "Хранение и транспорт: газ под давлением, жидкий криогенный H₂, метангидриды, аммиак как носитель."
    ],
    sources: "Источники: IEA, CRC Handbook, отчёты отрасли, Nature Energy"
  },
  uk: {
    title: "Добування і синтез",
    body: [
      "Близько 90% водню у світі добувають із викопного палива: парова конверсія метану (CH₄ + H₂O → CO + 3H₂), газифікація вугілля.",
      "Електроліз води (2H₂O → 2H₂ + O₂) дає 'зелений' водень при енергії з ВДЕ.",
      "Побічний водень отримують на хлор-лужних виробництвах та НПЗ.",
      "У лабораторії H₂ отримують дією кислот або лугів на активні метали (Zn, Al).",
      "Нові методи: термохімічне розщеплення води (сонячна/ядерна енергія), фотокаталіз, біологічне виробництво (водорості, бактерії).",
      "'Білий' водень (природні надра) активно досліджується як ресурс.",
      "Зберігання, транспортування: газ, рідкий H₂, гідриди металів, аміак."
    ],
    sources: "Джерела: IEA, CRC Handbook, галузеві звіти, Nature Energy"
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
