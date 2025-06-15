
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Beaker, FlaskConical } from "lucide-react";
import HydrogenCompoundsVisualBlock from "./HydrogenCompoundsVisualBlock";

const compoundsContent = {
  en: {
    title: "Key hydrogen compounds",
    compounds: [
      { name: "Water (H₂O)", desc: "most important hydrogen compound, universal solvent, vital for life." },
      { name: "Ammonia (NH₃)", desc: "industrial chemical, fertilizer, refrigerant." },
      { name: "Methane (CH₄)", desc: "primary component of natural gas, key fuel." },
      { name: "Hydrochloric acid (HCl)", desc: "strong acid, essential in chemical industry and physiology." },
      { name: "Hydrogen peroxide (H₂O₂)", desc: "oxidizer and disinfectant." },
      { name: "Metal hydrides (LiH, NaH, CaH₂)", desc: "used for hydrogen storage, chemical synthesis." }
    ],
    sources: "Sources: CRC Handbook, WebElements"
  },
  ru: {
    title: "Основные соединения водорода",
    compounds: [
      { name: "Вода (H₂O)", desc: "важнейшее соединение, универсальный растворитель, необходима для жизни." },
      { name: "Аммиак (NH₃)", desc: "промышленный химикат, удобрение, хладагент." },
      { name: "Метан (CH₄)", desc: "главная составляющая природного газа, важное топливо." },
      { name: "Хлороводород (HCl)", desc: "сильная кислота, нужна в химии и физиологии." },
      { name: "Перекись водорода (H₂O₂)", desc: "окислитель, антисептик." },
      { name: "Гидриды металлов (LiH, NaH, CaH₂)", desc: "хранение водорода, химический синтез." }
    ],
    sources: "Источники: CRC Handbook, WebElements"
  },
  uk: {
    title: "Основні сполуки водню",
    compounds: [
      { name: "Вода (H₂O)", desc: "універсальна сполука, розчинник, необхідна для життя." },
      { name: "Амоніак (NH₃)", desc: "промисловий хімікат, добриво, холодоагент." },
      { name: "Метан (CH₄)", desc: "головний компонент природного газу, паливо." },
      { name: "Хлороводень (HCl)", desc: "сильна кислота, важлива у промисловості та фізіології." },
      { name: "Перекис водню (H₂O₂)", desc: "окиснювач, дезінфікуючий засіб." },
      { name: "Гідриди металів (LiH, NaH, CaH₂)", desc: "для зберігання водню та хімсинтезу." }
    ],
    sources: "Джерела: CRC Handbook, WebElements"
  }
};

const HydrogenCompoundsSection: React.FC = () => {
  const { language } = useLanguage();
  const locale = compoundsContent[language] ? language : "en";
  const data = compoundsContent[locale];

  return (
    <section>
      <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-200">
        <Beaker size={19} className="shrink-0" />
        {data.title}
      </h2>
      <Card className="mb-4 border-emerald-200 dark:border-emerald-700">
        <CardHeader className="bg-emerald-50 dark:bg-gray-800 py-3 px-4">
          <CardTitle className="text-base flex items-center gap-2 text-emerald-700 dark:text-emerald-200">
            <FlaskConical size={16} />
            {data.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-xs">
          <ul className="list-disc pl-4 space-y-1 marker:text-emerald-500">
            {data.compounds.map((c, i) => (
              <li key={i}>
                <b>{c.name}:</b> {c.desc}
              </li>
            ))}
          </ul>
          <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
        </CardContent>
      </Card>
      <HydrogenCompoundsVisualBlock />
    </section>
  );
};

export default HydrogenCompoundsSection;
