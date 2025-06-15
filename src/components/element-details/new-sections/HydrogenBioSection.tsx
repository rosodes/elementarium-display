
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HydrogenBioVisualBlock from "./HydrogenBioVisualBlock";

const bioContent = {
  en: {
    title: "Biological Role & Toxicity",
    facts: [
      "Hydrogen is indispensable for all known life: occurs in water (H₂O), all proteins, nucleic acids (DNA/RNA), fats, and carbohydrates.",
      "Over 60% of the atoms in the human body are hydrogen (though only ~10% by mass).",
      "Hydrogen ions (protons, H⁺) are vital for pH regulation, cellular energy production (ATP synthesis), and bioenergetic processes.",
      "ATP-dependent hydrogen transport and hydrogenases are key in respiration and photosynthesis.",
      "Molecular H₂ is non-toxic but can cause asphyxiation at high concentrations (displaces O₂ in air).",
      "Certain microbes metabolize H₂, enabling anaerobic life (e.g., deep sea vents).",
      "Toxic hydrogen compounds: hydrogen sulfide (H₂S), hydrogen cyanide (HCN), phosphine (PH₃) are extremely poisonous and hazardous.",
      "Research explores antioxidant and anti-inflammatory effects of H₂ in medicine and therapy.",
      "Deuterium (heavy hydrogen, D) and tritium (radioactive ³H) used in medical diagnostics/tracing.",
      "Hydrogen breath tests are diagnostic for digestive disorders (SIBO, lactose intolerance).",
      "Hydrogen bonds stabilize the structures of biopolymers, including DNA and proteins."
    ],
    sources: "Sources: medical journals, CRC Handbook, PubMed, Nature Reviews Molecular Cell Biology"
  },
  ru: {
    title: "Биологическая роль и токсичность",
    facts: [
      "Водород необходим для жизни: содержится в воде, белках, ДНК, жирах и углеводах.",
      "Более 60% атомов в теле человека — водород (по массе около 10%).",
      "Ионы H⁺ важны для кислотно-щелочного баланса, энергетики клетки (АТФ), обмена веществ.",
      "Гидрогеназы и переносы водорода — основа дыхания и фотосинтеза.",
      "Молекулярный H₂ нетоксичен, но при высоких концентрациях вытесняет кислород (риски удушья).",
      "Многие бактерии используют H₂ для анаэробного метаболизма (например, в гидротермальных источниках).",
      "Крайне ядовитые соединения: сероводород (H₂S), цианистый водород (HCN), фосфин (PH₃).",
      "Медицинские исследования изучают антиоксидантные и противовоспалительные свойства H₂.",
      "Дейтерий и тритий используются в биомедицине и биотрассировке.",
      "Дыхательные тесты H₂ применяют для диагностики желудочно-кишечных заболеваний.",
      "Водородные связи формируют стабильные структуры белков, ДНК и других биомолекул."
    ],
    sources: "Источники: медицинские журналы, CRC Handbook, PubMed"
  },
  uk: {
    title: "Біологічна роль і токсичність",
    facts: [
      "Водень — обов’язковий елемент для життя: у воді, білках, ДНК, жирах, вуглеводах.",
      "Більше 60% атомів у людському організмі — водень (~10% маси).",
      "Іони H⁺ (протони) критичні для регуляції рН, синтезу АТФ, енергетики клітини.",
      "Водневі ферменти (гідрогенази) відіграють ключову роль у диханні, фотосинтезі.",
      "Молекулярний H₂ нетоксичний, але у високій концентрації витісняє O₂ — ризик асфіксії.",
      "Деякі мікроорганізми живляться H₂ (глибоководні джерела).",
      "Токсичні сполуки — сірководень (H₂S), ціанід (HCN), фосфін (PH₃) — небезпечні.",
      "Досліджується лікувальний та антиоксидантний потенціал молекулярного H₂.",
      "Дейтерій, тритій — в медичній діагностиці/трасуванні.",
      "Видихальні тести H₂ для діагностики травлення.",
      "Водневі зв’язки стабілізують структуру ДНК, білків, біополімерів."
    ],
    sources: "Джерела: медичні журнали, CRC Handbook, PubMed"
  }
};

const HydrogenBioSection: React.FC = () => {
  const { language } = useLanguage();
  const data = bioContent[language] || bioContent.en;
  return (
    <section>
      <h2 className="text-lg font-bold mb-2 text-rose-700 dark:text-rose-200">
        {data.title}
      </h2>
      <ul className="list-disc pl-4 marker:text-rose-500 text-xs space-y-1 mb-3">
        {data.facts.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>
      <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
      <HydrogenBioVisualBlock />
    </section>
  );
};

export default HydrogenBioSection;
