
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Landmark, BookOpen, Timeline } from "lucide-react";
import HydrogenHistoryVisualBlock from "./HydrogenHistoryVisualBlock";

const historyContent = {
  en: {
    title: "History & Discovery",
    blocks: [
      {
        title: "Key Milestones in Hydrogen Discovery",
        period: [
          { year: 1500, event: "Paracelsus observed 'inflammable air' from metals + acid, but did not isolate or identify the element." },
          { year: 1671, event: "Robert Boyle produced hydrogen by mixing iron filings and dilute acids." },
          { year: 1766, event: "Henry Cavendish identified hydrogen gas as 'inflammable air' and established its properties (England)." },
          { year: 1781, event: "Cavendish showed hydrogen forms water upon combustion with oxygen." },
          { year: 1783, event: "Antoine Lavoisier officially named it 'hydrogène' (water-former), recognizing it as an element." },
          { year: 1800, event: "William Nicholson and Anthony Carlisle discovered electrolysis, producing hydrogen from water using electricity." },
          { year: 1937, event: "Hindenburg airship disaster due to hydrogen as a lifting gas brought safety concerns into focus." },
          { year: 1952, event: "First hydrogen bomb (thermonuclear fusion) test." },
        ],
        facts: [
          "Hydrogen played a critical role in the early development of both chemistry and physics: its spectrum provided clues for quantum theory.",
          "First element to be artificially produced (by electrolysis) and later by nuclear fusion.",
          "Hydrogen was vital in ballooning and airship history as a lifting gas before helium supplanted it for safety.",
          "The quantum mechanical model (Bohr, 1913) was based initially on hydrogen atom spectra."
        ],
        sources: "Sources: IUPAC Gold Book, CRC Handbook, WebElements, Britannica"
      }
    ]
  },
  ru: {
    title: "История и открытие",
    blocks: [
      {
        title: "Ключевые этапы в открытии водорода",
        period: [
          { year: 1500, event: "Парацельс наблюдал «воспламеняемый воздух» при растворении металлов в кислотах, но не выделял элемент." },
          { year: 1671, event: "Роберт Бойль получил водород смешиванием железа с кислотой." },
          { year: 1766, event: "Генри Кавендиш выделил и определил свойства газообразного водорода." },
          { year: 1781, event: "Кавендиш доказал, что водород сгорает с кислородом с образованием воды." },
          { year: 1783, event: "Антуан Лавуазье назвал элемент 'hydrogène'." },
          { year: 1800, event: "Николсон и Карлайл открыли электролиз воды с выделением водорода." },
          { year: 1937, event: "Катастрофа дирижабля Гинденбург — основные вопросы безопасности водорода." },
          { year: 1952, event: "Первое испытание водородной (термоядерной) бомбы." },
        ],
        facts: [
          "Водород был ключом в появлении квантовой механики — спектр атома H стал первым экспериментальным обоснованием модели Бора.",
          "Первый элемент, полученный электрохимически и затем искусственно путём ядерного синтеза.",
          "Долгое время водород был основным подъёмным газом для воздушных шаров и дирижаблей.",
          "Разработка спектроскопии, квантовой механики, ядерной физики тесно связана с H."
        ],
        sources: "Источники: IUPAC Gold Book, CRC Handbook, WebElements, Britannica"
      }
    ]
  },
  uk: {
    title: "Історія та відкриття",
    blocks: [
      {
        title: "Ключові віхи відкриття водню",
        period: [
          { year: 1500, event: "Парацельс спостерігав вихід «запального повітря» при розчиненні металів у кислотах." },
          { year: 1671, event: "Роберт Бойль отримав водень із заліза й кислоти." },
          { year: 1766, event: "Генрі Кавендіш ідентифікував водень як новий газ." },
          { year: 1781, event: "Кавендіш показав, що H при згорянні утворює воду." },
          { year: 1783, event: "Антуан Лавуазьє назвав елемент 'hydrogène'." },
          { year: 1800, event: "Відкриття електролізу води (Ніколсон, Карлейл)." },
          { year: 1937, event: "Катастрофа дирижабля Гінденбург." },
          { year: 1952, event: "Перше випробування термоядерної бомби." },
        ],
        facts: [
          "Гідроген — ключ до квантової механіки (модель Бора 1913 р.).",
          "Перший елемент, отриманий шляхом електролізу та синтезу.",
          "Значення в історії повітроплавання, фізики й хімії.",
          "Поява спектроскопії, ядерної фізики — завдяки вивченню H."
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
          <table className="w-full mb-3 text-xs border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md overflow-x-auto">
            <thead>
              <tr className="bg-orange-100 dark:bg-gray-800 text-orange-900 dark:text-orange-200">
                <th className="p-1 font-semibold text-left">Year</th>
                <th className="p-1 font-semibold text-left">Event</th>
              </tr>
            </thead>
            <tbody>
              {block.period.map((row, idx) => (
                <tr key={row.year} className={idx % 2 ? "bg-orange-50 dark:bg-gray-900/50" : ""}>
                  <td className="p-1 font-medium">{row.year}</td>
                  <td className="p-1">{row.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul
            className="list-disc pl-4 space-y-1 marker:text-orange-500"
            dangerouslySetInnerHTML={{
              __html: block.facts.map(p => `<li>${p}</li>`).join('')
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
