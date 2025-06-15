
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HydrogenBioVisualBlock from "./HydrogenBioVisualBlock";

const bioContent = {
  en: {
    title: "Biological Role & Toxicity",
    facts: [
      "Hydrogen is essential for life: present in water (H₂O), all proteins, nucleic acids (DNA/RNA), fats, carbohydrates.",
      "~63% of the atoms in your body are hydrogen, though only about 10% by mass.",
      "Hydrogen ions (protons, H⁺) crucial for cell pH regulation, energy transport (ATP synthesis), bioenergetics.",
      "Hydrogen transfer via coenzymes NADH/NADPH is vital in respiration, photosynthesis.",
      "Molecular hydrogen (H₂) is non-toxic, but can cause asphyxia at high concentrations (displaces O₂).",
      "Clinical research explores antioxidant/anti-inflammatory properties of H₂; possible therapeutic roles.",
      "Hydrogen breath tests diagnose digestive issues (SIBO, lactose intolerance).",
      "Biomolecules' structures (proteins, DNA) are stabilized by hydrogen bonding.",
      "Some bacteria/archaea metabolize hydrogen for energy — allowing anaerobic life.",
      "Toxic hydrogen compounds: hydrogen sulfide (H₂S), hydrogen cyanide (HCN), phosphine (PH₃) are extremely poisonous.",
      "Tritium (³H, radioactive) is used for tracing in medicine."
    ],
    sources: "Sources: medical journals, CRC Handbook, Nature Reviews MCB"
  },
  ru: {
    title: "Биологическая роль и токсичность",
    facts: [
      "Водород жизненно необходим: входит в воду (H₂O), белки, ДНК, жиры, углеводы.",
      "До 63% атомов в организме — это H, но по массе лишь 10%.",
      "Протоны H⁺ регулируют рН клеток, отвечают за энергетический обмен (АТФ).",
      "Перенос атомов H по NADH/NADPH — ключ к дыханию, фотосинтезу.",
      "Сам H₂ не токсичен, но может вытеснять O₂ (удушье при высоких концентрациях).",
      "Исследуется лечебный потенциал антиоксидантных свойств H₂ (научные клинические исследования).",
      "Дыхательные тесты с H₂ для диагностики ЖКТ.",
      "Водородные связи стабилизируют структуры белков и ДНК.",
      "Многие микроорганизмы используют H₂ для получения энергии.",
      "Ядовитые соединения: сероводород (H₂S), цианистый водород (HCN), фосфин (PH₃) — крайне опасны.",
      "Радиоактивный тритий (³H) используют в биомедицине."
    ],
    sources: "Источники: медицинские журналы, CRC Handbook"
  },
  uk: {
    title: "Біологічна роль і токсичність",
    facts: [
      "Водень необхідний для життя: у воді, білках, ДНК, жирах і вуглеводах.",
      "Близько 63% атомів тіла — H, але по масі тільки 10%.",
      "Іони H⁺ важливі для регуляції pH та енергетики клітини.",
      "Передача H через НАДН/НАДФН — основа дихання, фотосинтезу.",
      "Молекулярний H₂ не токсичний, але у великій кількості витісняє O₂ (ризик асфіксії).",
      "Вивчаються антиоксидантні медичні ефекти H₂ (клінічні дослідження).",
      "Дихальні тести із H₂ для діагностики ШКТ.",
      "Водневі зв’язки стабілізують ДНК, білки.",
      "Деякі бактерії використовують H₂ як джерело енергії.",
      "Токсичні сполуки: сірководень (H₂S), ціанід (HCN), фосфін (PH₃) — надзвичайно отруйні.",
      "Радіоактивний тритій (³H) використовується у медицині."
    ],
    sources: "Джерела: медичні журнали, CRC Handbook"
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
