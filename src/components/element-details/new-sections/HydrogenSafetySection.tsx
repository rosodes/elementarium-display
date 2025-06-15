
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HydrogenSafetyVisualBlock from "./HydrogenSafetyVisualBlock";

const safetyContent = {
  en: {
    title: "Safety & Precautions",
    facts: [
      "Hydrogen gas (H₂) is extremely flammable — forms explosive mixtures with air from 4–75% H₂ by volume.",
      "It burns with an almost invisible pale blue flame — difficult to see outdoors, requiring thermal detectors.",
      "H₂ leaks easily through small gaps due to tiny molecular size; accumulates in enclosed spaces.",
      "Explosion risks: hydrogen-air mixtures can ignite with minimal spark, static or even warm objects.",
      "Asphyxiation risk if H₂ displaces oxygen in confined areas; not directly toxic, but suffocating.",
      "Liquid hydrogen is cryogenic (−253°C): direct contact causes severe frostbite, structural embrittlement.",
      "Many metal hydrides and hydrogen compounds (e.g. hydrogen sulfide, phosphine) are toxic and require special handling.",
      "Strict industry codes for H₂ storage, pipelines, and fueling stations minimize accidents.",
      "Odorless, so not detected by smell: leaks require sensors and good ventilation."
    ],
    sources: "Sources: CRC Handbook, OSHA, hydrogen industry safety protocols"
  },
  ru: {
    title: "Безопасность и меры предосторожности",
    facts: [
      "Газ H₂ чрезвычайно взрывоопасен — образует взрывчатые смеси с воздухом (4–75% по объему).",
      "Горит практически невидимым пламенем — обнаруживается датчиками температуры.",
      "Водород легко проникает через мельчайшие щели, накапливается в замкнутых пространствах.",
      "Взрыв происходит даже от слабых искр, электростатики, горячих предметов.",
      "Есть риск удушья при замещении кислорода в помещении: газ не токсичен, но вытесняет O₂.",
      "Жидкий H₂ — криогенное вещество (−253°C): вызывает сильные обморожения, разрушает металлы.",
      "Многие гидриды и соединения (H₂S, PH₃) ядовиты — требуют особой осторожности.",
      "На производствах строгие нормы безопасности, особые системы обнаружения утечек, вентиляция.",
      "Нет запаха — обнаружение только специальными приборами."
    ],
    sources: "Источники: CRC Handbook, OSHA, промышленные регламенты"
  },
  uk: {
    title: "Безпека та застереження",
    facts: [
      "Водень (H₂) — надзвичайно вибухонебезпечний: із повітрям (4–75% H₂) створює вибухову суміш.",
      "Горить майже невидимим блакитним полум’ям — для виявлення потрібна термодіагностика.",
      "Легко просочується через дрібні отвори, накопичується в закритих приміщеннях.",
      "Вибухає навіть від невеликої іскри чи статичного розряду.",
      "Може витіснити O₂ — ризик асфіксії, хоч сам не токсичний.",
      "Рідкий водень криогенний (−253°C): небезпечний обмороженнями й руйнує метали.",
      "Багато гідридів, сполук H₂ токсичні (H₂S, PH₃) — потрібні спецзаходи.",
      "У промисловості діють суворі закони безпеки, спеціальні детектори.",
      "Не має запаху — витік виявляють датчиками."
    ],
    sources: "Джерела: CRC Handbook, підприємницькі стандарти"
  }
};

const HydrogenSafetySection: React.FC = () => {
  const { language } = useLanguage();
  const data = safetyContent[language] || safetyContent.en;
  return (
    <section>
      <h2 className="text-lg font-bold mb-2 text-red-700 dark:text-red-200">
        {data.title}
      </h2>
      <ul className="list-disc pl-4 marker:text-red-500 text-xs space-y-1 mb-3">
        {data.facts.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>
      <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
      <HydrogenSafetyVisualBlock />
    </section>
  );
};

export default HydrogenSafetySection;
