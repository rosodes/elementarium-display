
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HydrogenSafetyVisualBlock from "./HydrogenSafetyVisualBlock";

const safetyContent = {
  en: {
    title: "Safety & Precautions",
    facts: [
      "Hydrogen (H₂) is extremely flammable; forms explosive mixtures with air (4–75% H₂ by volume).",
      "The flame of hydrogen is almost invisible in daylight—thermal detectors are needed for safety.",
      "Leaks easily through small gaps; accumulates in enclosed or poorly ventilated spaces.",
      "Hydrogen–air mixtures can ignite from a tiny spark, static, or even a hot surface.",
      "Major asphyxiation risk if H₂ displaces oxygen in confined spaces; not directly toxic.",
      "Liquid hydrogen (−253°C) is a cryogenic hazard—causes severe frostbite and structural embrittlement.",
      "Compounds like hydrogen sulfide (H₂S) and phosphine (PH₃) are acutely toxic and require special care.",
      "Strict safety codes regulate H₂ pipelines, cylinders, fueling stations; sensors and venting are vital.",
      "Hydrogen is odorless and colorless—leaks cannot be detected by human senses.",
      "Special protocols address hydrogen handling during fueling and in laboratories (grounding, ventilation, emergency shutdowns)."
    ],
    sources: "Sources: CRC Handbook, OSHA, NIOSH, hydrogen industry safety protocols"
  },
  ru: {
    title: "Безопасность и меры предосторожности",
    facts: [
      "Водород (H₂) исключительно взрывоопасен: образует взрывчатые смеси с воздухом (4–75% объёма).",
      "Пламя H₂ практически невидимо днём — применяются тепловые датчики.",
      "Газ легко проникает через мельчайшие щели, накапливается в непроветриваемых пространствах.",
      "Взрыв возможен от малейшей искры, статики, горячего предмета.",
      "Существенный риск удушья при вытеснении кислорода, газ не токсичен, но очень опасен.",
      "Жидкий водород (−253°C) — криогенная опасность: вызывает обморожения, разрушает материалы.",
      "Токсичные соединения: сероводород (H₂S), фосфин (PH₃) требуют особых мер.",
      "Действуют строгие регламенты на хранение, транспорт, заправки; необходимы датчики и вентиляция.",
      "Без цвета и запаха — утечки не чувствует человек, обнаруживаются приборами.",
      "Особые протоколы хранения, профилактики разрядов и ЧП в лабораториях и на производстве."
    ],
    sources: "Источники: CRC Handbook, OSHA, промышленные стандарты, НИИОТ"
  },
  uk: {
    title: "Безпека та застереження",
    facts: [
      "Водень надзвичайно вибухонебезпечний: у суміші з повітрям (4–75%) багатий на ризики.",
      "Полум’я H₂ практично невидиме, потрібна термодіагностика для безпеки.",
      "Герметичність критична: H₂ просочується крізь мікротріщини та накопичується.",
      "Займання можливо навіть від дуже малої іскри чи гарячої поверхні.",
      "Є ризик задухи при витісненні кисню — газ не токсичний, але небезпечний.",
      "Рідкий водень (−253°C) — сильний криогенний чинник: обмороження, руйнування матеріалів.",
      "Багато сполук (H₂S, PH₃) — дуже небезпечні й отруйні.",
      "Жорсткі норми безпеки для зберігання, транспортування, заправок; детектори і вентиляція.",
      "Геть безбарвний і без запаху — утечка непомітна для людини.",
      "Спецпротоколи для лабораторій, заправок, транспорту (заземлення, вентиляція, аварійне відключення)."
    ],
    sources: "Джерела: CRC Handbook, OSHA, стандарти безпеки"
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
