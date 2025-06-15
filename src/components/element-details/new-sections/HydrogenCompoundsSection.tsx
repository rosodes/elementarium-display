import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Beaker, FlaskConical, Table } from "lucide-react";
import HydrogenCompoundsVisualBlock from "./HydrogenCompoundsVisualBlock";

// Expanded compounds data
const compoundsContent = {
  en: {
    title: "Key Hydrogen Compounds",
    compounds: [
      { name: "Water (H₂O)", desc: "Covers 71% of Earth's surface; universal solvent, vital for all living systems. Hydrogen bonds make ice less dense than water and drive life’s chemistry." },
      { name: "Ammonia (NH₃)", desc: "Basis of most fertilizers; colorless, pungent gas, primary use of industrial hydrogen (Haber–Bosch process)." },
      { name: "Methane (CH₄)", desc: "Main component of natural gas, important energy source and greenhouse gas." },
      { name: "Hydrochloric acid (HCl)", desc: "Strong acid used in the stomach for digestion and widely in industry." },
      { name: "Hydrogen sulfide (H₂S)", desc: "Toxic gas with a rotten egg odor, found in volcanic gases, sewers, biological decay." },
      { name: "Hydrogen peroxide (H₂O₂)", desc: "Antiseptic, oxidizer, rocket propellant; decomposes into H₂O + O₂ with catalyst." },
      { name: "Metal hydrides (LiH, NaH, CaH₂)", desc: "Reagents in organic syntheses, hydrogen storage, desiccants." },
      { name: "Phosphine (PH₃)", desc: "Highly toxic gas, used as pesticide for stored grain, and in semiconductors." },
      { name: "Hydrides of transition metals", desc: "Catalysts in hydrogenation reactions (e.g., PdH, NiH in food industry and organic chemistry)." },
      { name: "Deuterium oxide (D₂O, heavy water)", desc: "Used as neutron moderator in nuclear reactors, isotopic studies." },
    ],
    facts: [
      "Hydrogen forms more compounds than any element except carbon; hydrides range from ionic (e.g., NaH) to covalent (CH₄) to metallic.",
      "In organic chemistry, hydrogenation (adding H₂ to unsaturated compounds) turns vegetable oils into margarine, plays a key role in producing fuels, and removes sulfur from oil.",
      "Hydrogen’s unique ability to participate in proton transfer (acid/base chemistry) shapes all biological reactions.",
      "Hydride ions (H⁻) play vital roles in reduction reactions and in advanced batteries.",
      "Hydrogen is essential for production of ammonia, methanol, refined fuels, and many pharmaceuticals."
    ],
    sources: "Sources: CRC Handbook, WebElements, Wikipedia, Organic Chemistry texts"
  },
  ru: {
    title: "Основные соединения водорода",
    compounds: [
      { name: "Вода (H₂O)", desc: "Главный растворитель, необходимость для жизни." },
      { name: "Аммиак (NH₃)", desc: "Удобрения, хладагент, промышленный продукт." },
      { name: "Метан (CH₄)", desc: "Топливо, парниковый газ, основная часть природного газа." },
      { name: "Хлороводород (HCl)", desc: "Кислота, промышленная и физиологическая важность." },
      { name: "Сероводород (H₂S)", desc: "Токсичный газ с запахом, вулканы, канализация." },
      { name: "Перекись водорода (H₂O₂)", desc: "Окислитель, антисептик, топливо для ракет." },
      { name: "Гидриды металлов (LiH, NaH, CaH₂)", desc: "Хранение H, осушители, синтез." },
      { name: "Фосфин (PH₃)", desc: "Токсичный газ, используется в полупроводниках." },
      { name: "Гидриды переходных металлов", desc: "Катализаторы гидрирования, напр. PdH." }
    ],
    facts: [
      "Водород химически связывается с большинством элементов.",
      "Гидриды применяются для хранения энергии и как восстановители.",
      "H₂ реагирует с галогенами с взрывом, образуя сильные кислоты.",
      "Гидрирование — важный процесс для пищевой и промышленной химии.",
      "Вода, аммиак и метан — наиболее распространённые молекулы во Вселенной."
    ],
    sources: "Источники: CRC Handbook, WebElements, Wikipedia"
  },
  uk: {
    title: "Основні сполуки водню",
    compounds: [
      { name: "Вода (H₂O)", desc: "Головний розчинник, основа життя." },
      { name: "Амоніак (NH₃)", desc: "Добрива, холодоагент, промисловість." },
      { name: "Метан (CH₄)", desc: "Паливо, парниковий газ, природний газ." },
      { name: "Хлороводень (HCl)", desc: "Сильна кислота." },
      { name: "Сірководень (H₂S)", desc: "Токсичний газ, вулкани." },
      { name: "Перекис водню (H₂O₂)", desc: "Окисник, антисептик." },
      { name: "Гідриди металів (LiH, NaH, CaH₂)", desc: "Зберігання, синтез." },
      { name: "Фосфін (PH₃)", desc: "Токсичний газ." },
      { name: "Гідриди перехідних металів", desc: "Каталіз у хімії." }
    ],
    facts: [
      "Водень має безліч сполук.",
      "Гідриди важливі для акумуляції енергії й у реакціях відновлення.",
      "H₂ вибухово реагує з галогенами.",
      "Гідрування — головний процес харчової та промислової хімії.",
      "Вода, амоніак, метан — серед наймасовіших молекул у Всесвіті."
    ],
    sources: "Джерела: CRC Handbook, WebElements, Wikipedia"
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
          <table className="min-w-[340px] border border-emerald-100 dark:border-emerald-800 mx-auto rounded my-2 text-[11px]">
            <thead>
              <tr className="bg-emerald-100 dark:bg-gray-800 text-emerald-900 dark:text-emerald-200">
                <th className="p-1 text-left"><Table size={12} className="inline mr-1" />Compound</th>
                <th className="p-1 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {data.compounds.map((c, i) => (
                <tr key={c.name} className={i % 2 ? "bg-emerald-50 dark:bg-gray-900/20" : ""}>
                  <td className="p-1 font-semibold">{c.name}</td>
                  <td className="p-1">{c.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="list-disc pl-4 space-y-1 marker:text-emerald-500 my-2">
            {data.facts.map((fact, idx) => (
              <li key={idx}>{fact}</li>
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
