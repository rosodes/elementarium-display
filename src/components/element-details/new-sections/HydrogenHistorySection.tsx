
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Landmark, BookOpen } from "lucide-react";
import HydrogenHistoryVisualBlock from "./HydrogenHistoryVisualBlock";

const historyContent = {
  en: {
    title: "History & Discovery",
    blocks: [
      {
        title: "How hydrogen was discovered",
        points: [
          "<b>1766:</b> Henry Cavendish (England) isolated a gas he called “inflammable air” by reacting metals with acids.",
          "<b>1783:</b> Antoine Lavoisier named it “hydrogène” (“water former”) after proving its combustion with oxygen creates water.",
          "Paracelsus (16th c.) observed the same gas when dissolving iron in sulfuric acid but didn't identify it as a new element.",
          "The Hindenburg airship disaster (1937) highlighted the risks of using H₂ as a lifting gas."
        ],
        sources: "Sources: IUPAC Gold Book, CRC Handbook, WebElements, Britannica"
      }
    ]
  },
  ru: {
    title: "История и открытие",
    blocks: [
      {
        title: "Как был открыт водород",
        points: [
          "<b>1766:</b> Генри Кавендиш (Англия) выделил газ — «воспламеняемый воздух» реакцией металлов с кислотой.",
          "<b>1783:</b> Антуан Лавуазье дал название «hydrogène» («образующий воду»), доказав получение воды из горения.",
          "Парацельс (XVI в.) наблюдал выделение того же газа, растворяя железо в серной кислоте, но не классифицировал его.",
          "Катастрофа дирижабля Гинденбург (1937) показала опасность водорода как подъемного газа."
        ],
        sources: "Источники: IUPAC Gold Book, CRC Handbook, WebElements, Britannica"
      }
    ]
  },
  uk: {
    title: "Історія та відкриття",
    blocks: [
      {
        title: "Як відкрили водень",
        points: [
          "<b>1766:</b> Генрі Кавендіш (Англія) виділив газ — «запальний повітря», взаємодією металу з кислотою.",
          "<b>1783:</b> Антуан Лавуазьє назвав його «hydrogène» («той, що утворює воду»), довівши утворення води.",
          "Парацельс (XVI ст.) фіксував той же газ у реакції заліза з сірчаною кислотою, але не визнав як елемент.",
          "Катастрофа дирижабля Гінденбург (1937) показала ризик підйомного водню."
        ],
        sources: "Джерела: IUPAC Gold Book, CRC Handbook, WebElements, Britannica"
      }
    ]
  }
};

const HydrogenHistorySection: React.FC = () => {
  const { language } = useLanguage();
  const locale = historyContent[language] ? language : "en";
  const data = historyContent[locale];
  const block = data.blocks[0];
  return (
    <section>
      <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-orange-700 dark:text-orange-200">
        <Landmark size={19} className="shrink-0" />
        {data.title}
      </h2>
      <Card className="mb-4 border-orange-200 dark:border-orange-700">
        <CardHeader className="bg-orange-50 dark:bg-gray-800 py-3 px-4">
          <CardTitle className="text-base flex items-center gap-2 text-orange-700 dark:text-orange-200">
            <BookOpen size={16} />
            {block.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-xs space-y-2">
          <ul
            className="list-disc pl-4 space-y-1 marker:text-orange-500"
            dangerouslySetInnerHTML={{
              __html: block.points.map(p => `<li>${p}</li>`).join('')
            }}
          />
          <div className="mt-2 text-[11px] text-gray-500">{block.sources}</div>
        </CardContent>
      </Card>
      <HydrogenHistoryVisualBlock />
    </section>
  );
};

export default HydrogenHistorySection;
