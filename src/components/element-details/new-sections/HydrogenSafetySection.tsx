
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Flame, ShieldAlert } from "lucide-react";
import HydrogenSafetyVisualBlock from "./HydrogenSafetyVisualBlock";

const safetyContent = {
  en: {
    title: "Safety & Precautions",
    facts: [
      "<b>Extreme flammability!</b> Explosive with air (flammability limits: 4–75% H₂).",
      "Rapidly diffuses, leaks easily due to low molecular mass.",
      "Non-toxic, but dangerous asphyxiant (if it displaces oxygen).",
      "Safety measures: ventilation, leak detectors, remove ignition sources.",
      "Storage: high-strength pressure cylinders, cool and away from flame.",
      "Transport: specialized tanks, cryogenic containers for liquid H₂.",
      "H₂ flame is nearly invisible—hidden danger!",
      "Not environmentally toxic, but improper use is hazardous."
    ],
    sources: "Sources: OSHA, NIOSH, IUPAC, CRC Handbook"
  },
  ru: {
    title: "Безопасность и меры предосторожности",
    facts: [
      "<b>Чрезвычайно горюч!</b> Взрывоопасен в воздухе (пределы 4–75% H₂).",
      "Быстро диффундирует, легко утекает из-за низкой массы.",
      "Не токсичен, но опасен как удушающий агент (вытеснение кислорода).",
      "Меры: вентиляция, датчики утечек, устранение источников искры.",
      "Хранение: прочные баллоны, прохлада, вдали от огня.",
      "Транспорт: спец. цистерны, криогенные ёмкости для жидкого H₂.",
      "Пламя H₂ почти не видно — скрытая опасность!",
      "Не экологический токсикант, но неправильное обращение опасно."
    ],
    sources: "Источники: OSHA, NIOSH, IUPAC, CRC Handbook"
  },
  uk: {
    title: "Безпека та застороги",
    facts: [
      "<b>Вкрай займистий!</b> Вибухонебезпечний у повітрі (межі 4–75% H₂).",
      "Швидко дифундує, легко просочується через низьку масу.",
      "Нетоксичний, але небезпечний як асфіксант (витісняє кисень).",
      "Міри: вентиляція, датчики витоку, уникати іскріння.",
      "Зберігання: міцні балони, прохолода, подалі від вогню.",
      "Транспорт: спецтанки, кріогенні ємності для рідкого H₂.",
      "Полум'я H₂ майже невидиме — прихована небезпека!",
      "Не екотоксикант, але неправильне використання небезпечне."
    ],
    sources: "Джерела: OSHA, NIOSH, IUPAC, CRC Handbook"
  }
};

const HydrogenSafetySection: React.FC = () => {
  const { language } = useLanguage();
  const locale = safetyContent[language] ? language : "en";
  const data = safetyContent[locale];

  return (
    <section>
      <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-red-700 dark:text-red-200">
        <Flame size={19} className="shrink-0" />
        {data.title}
      </h2>
      <Card className="mb-4 border-red-200 dark:border-red-700">
        <CardHeader className="bg-red-50 dark:bg-gray-800 py-3 px-4">
          <CardTitle className="text-base flex items-center gap-2 text-red-700 dark:text-red-200">
            <ShieldAlert size={16} />
            {data.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-xs space-y-2">
          <ul
            className="list-disc pl-4 space-y-1 marker:text-red-600"
            dangerouslySetInnerHTML={{
              __html: data.facts.map(f => `<li>${f}</li>`).join('')
            }}
          />
          <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
        </CardContent>
      </Card>
      <HydrogenSafetyVisualBlock />
    </section>
  );
};

export default HydrogenSafetySection;
