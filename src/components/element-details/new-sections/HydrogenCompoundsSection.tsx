
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HydrogenCompoundsVisualBlock from "./HydrogenCompoundsVisualBlock";

const compoundsContent = {
  en: {
    title: "Compounds & Chemistry",
    body: [
      "Hydrogen forms only a few elements with itself (H₂) but tens of thousands of known compounds with other elements.",
      "Hydrogen is essential in all acids; key industrial acids (like sulfuric, hydrochloric, nitric) contain it.",
      "Forms both covalent (e.g., H₂O, CH₄) and ionic (NaH, CaH₂) hydrides, as well as various transition-metal hydride complexes.",
      "Water (H₂O) is the most crucial hydrogen compound, basis of all known life; hydrogen bonding underpins water's unique properties.",
      "Hydrocarbons: molecules composed of hydrogen and carbon (methane, ethane, benzene, polymers) — foundation for life, energy, and chemistry.",
      "Hydrogen is present in almost every organic biological molecule (proteins, DNA, fats, carbohydrates).",
      "Special compounds: deuterium oxide (D₂O, ‘heavy water’) is used in nuclear reactors; tritiated water serves as a tracer in biology.",
      "Main-group hydrides (NH₃, PH₃, B₂H₆, SiH₄) are vital in industry, research, and rocket fuels."
    ],
    sources: "Sources: WebElements, CRC Handbook, chemistry textbooks, PubChem"
  },
  ru: {
    title: "Соединения и химия",
    body: [
      "Водород образует немного соединений с собой (H₂), но десятки тысяч — с другими элементами.",
      "Входит в состав всех кислот; важнейшие промышленные кислоты (серная, соляная, азотная) содержат его.",
      "Образует ковалентные (H₂O, CH₄) и ионные гидриды (NaH, CaH₂), а также комплексы с переходными металлами.",
      "Вода (H₂O) — основной носитель водорода, определяет свойства биосферы (водородная связь).",
      "Углеводороды (H и C) — метан, этан, бензол, полимеры — база органики, топлива и химии.",
      "Во всех органических молекулах (белки, ДНК, жиры, углеводы) присутствует водород.",
      "Особые соединения: тяжёлая вода (D₂O) используется в ядерных реакторах, третиевая вода — индикатор в биологических исслед.",
      "Гидриды главных подгрупп (NH₃, PH₃, B₂H₆, SiH₄) — важны в промышленности и ракетных топливах."
    ],
    sources: "Источники: WebElements, CRC Handbook, учебники химии, PubChem"
  },
  uk: {
    title: "Сполуки та хімія",
    body: [
      "Водень формує мало сполук із собою (H₂), але десятки тисяч із іншими елементами.",
      "Є у складі всіх кислот; основні кислоти хімічної промисловості містять водень.",
      "Створює ковалентні (H₂O, CH₄) та іонні (NaH, CaH₂) гідриди, а також комплекси з металами.",
      "Вода (H₂O) — ключова сполука водню для життя й властивостей живих систем.",
      "Вуглеводні (H і C) — метан, етан, бензен, полімери — основа енергетики, органіки, хімії.",
      "Практично в кожній органічній молекулі є водень (білки, ДНК, жири, цукри).",
      "Особливі сполуки: важка вода (D₂O) — для реакторів, тритієва вода — для біотрасування.",
      "Гідриди головних підгруп (NH₃, PH₃, B₂H₆, SiH₄) — важливі для промисловості та ракетних палив."
    ],
    sources: "Джерела: WebElements, CRC Handbook, підручники хімії, PubChem"
  }
};

const HydrogenCompoundsSection: React.FC = () => {
  const { language } = useLanguage();
  const data = compoundsContent[language] || compoundsContent.en;
  return (
    <section>
      <h2 className="text-lg font-bold mb-2 text-lime-700 dark:text-lime-200">
        {data.title}
      </h2>
      <ul className="list-disc pl-4 marker:text-lime-500 text-xs space-y-1 mb-3">
        {data.body.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>
      <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
      <HydrogenCompoundsVisualBlock />
    </section>
  );
};

export default HydrogenCompoundsSection;
