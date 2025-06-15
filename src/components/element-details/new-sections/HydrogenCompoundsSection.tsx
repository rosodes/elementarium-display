
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HydrogenCompoundsVisualBlock from "./HydrogenCompoundsVisualBlock";

const compoundsContent = {
  en: {
    title: "Compounds & Chemistry",
    body: [
      "Hydrogen forms only a few simple, stable molecules with itself (H₂) but thousands of compounds with other elements.",
      "All acids contain hydrogen; HCl (hydrochloric acid), H₂SO₄ (sulfuric acid), and HNO₃ (nitric acid) are among the most important chemicals in industry.",
      "Hydrogen forms covalent (H₂O, CH₄) and ionic hydrides (NaH, CaH₂) and also metal hydride complexes.",
      "Water (H₂O), the most vital compound for life, covers most of Earth's surface; hydrogen bonding is essential for water's properties.",
      "Hydrocarbons (molecules of H and C) — methane, ethane, benzene, polymers — are the basis for fossil fuels and organic chemistry.",
      "Hydrides of main group elements are varied (NH₃, PH₃, SiH₄, B₂H₆) and include industrial feedstocks and high-energy rocket fuels.",
      "Biological molecules — DNA, proteins, sugars — owe their structures to hydrogen bonding.",
      "Isotopic compounds: deuterium oxide (D₂O, 'heavy water') for nuclear reactors; tritiated water for radiotracing in biology."
    ],
    sources: "Sources: WebElements, CRC Handbook, chemistry textbooks"
  },
  ru: {
    title: "Соединения и химия",
    body: [
      "Водород образует мало стабильных молекул с собой (H₂), но тысячи соединений с другими элементами.",
      "Все кислоты содержат водород — HCl, H₂SO₄, HNO₃ — важнейшие реагенты промышленности.",
      "Водород образует ковалентные (H₂O, CH₄) и ионные гидриды (NaH, CaH₂), а также комплексы с металлами.",
      "Вода H₂O — важнейшее соединение для жизни, покрывает большую часть планеты, водородная связь определяет её свойства.",
      "Углеводороды (соединения H и C) — метан, этан, бензол, полимеры — основа органической химии и топлива.",
      "Гидриды главных подгрупп (NH₃, PH₃, SiH₄, B₂H₆) — сырье для промышленности, топлива ракет.",
      "Биомолекулы — ДНК, белки, сахара — зависят от водородных связей.",
      "Изотопные соединения: тяжелая вода (D₂O) для реакторов, третиевая вода — маркёр в исследованиях."
    ],
    sources: "Источники: WebElements, CRC Handbook, учебники по химии"
  },
  uk: {
    title: "Сполуки та хімія",
    body: [
      "Водень утворює небагато стабільних молекул з собою (H₂), але тисячі з іншими елементами.",
      "Всі кислоти містять водень — HCl, H₂SO₄, HNO₃ — основа хімічної індустрії.",
      "Водень формує ковалентні (H₂O, CH₄) й іонні гідриди (NaH, CaH₂), а також метал-гідридні комплекси.",
      "Вода (H₂O) — основна речовина життя, більша частина поверхні Землі, завдяки водневим зв’язкам.",
      "Вуглеводні (H і C) — метан, етан, бензен, полімери — основа органічної хімії й палива.",
      "Гідриди головних підгруп (NH₃, PH₃, SiH₄, B₂H₆) — сировина і ракетне паливо.",
      "Біомолекули — ДНК, білки, цукри — залежать від водневих зв’язків.",
      "Ізотопні сполуки: важка вода (D₂O) для реакторів, тритієва для маркування у біології."
    ],
    sources: "Джерела: WebElements, CRC Handbook, підручники хімії"
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
