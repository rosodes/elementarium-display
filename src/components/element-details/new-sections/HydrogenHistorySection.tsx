
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
        title: "Key Milestones in Hydrogen Discovery",
        period: [
          { year: 1500, event: "Paracelsus observed 'inflammable air' from metals + acid, laying the groundwork for later discovery." },
          { year: 1671, event: "Robert Boyle produced hydrogen systematically, but its elemental nature was unclear." },
          { year: 1766, event: "Henry Cavendish isolated hydrogen as a colorless, 'inflammable air' with unique properties. He realized it was a substance different from air (England)." },
          { year: 1781, event: "Cavendish demonstrated hydrogen combusts with oxygen to form water, a key discovery for chemistry." },
          { year: 1783, event: "Antoine Lavoisier, in France, officially named the element 'hydrogène' (water-former), confirming it as fundamental." },
          { year: 1783, event: "The first hydrogen balloon flight took place in Paris, showing its utility in lifting gases." },
          { year: 1800, event: "Electrolysis discovered by Nicholson and Carlisle: hydrogen produced from water using electricity, leading to clean methods of generation." },
          { year: 1869, event: "Dmitri Mendeleev included hydrogen as a prototype of group 1 in his periodic table; H remains exceptional." },
          { year: 1894, event: "Lord Rayleigh and Sir William Ramsay’s work on atmospheric gases showed hydrogen’s rarity in air, clarifying cosmic abundance." },
          { year: 1913, event: "Niels Bohr used hydrogen’s atomic spectrum to formulate quantum theory; H is the prototype atom for physics." },
          { year: 1937, event: "Hindenburg airship disaster vividly demonstrated hydrogen's explosion hazard and changed airship use forever." },
          { year: 1952, event: "First hydrogen bomb (thermonuclear fusion) detonated, showing H as a potential for immense energy release." },
        ],
        facts: [
          "Hydrogen’s simplicity (one proton + one electron) made it the central case for atomic structure and quantum mechanics.",
          "Hydrogen was the first element ever artificially produced by electrolysis and by nuclear fusion.",
          "Its chemical properties inspired the development of concepts like acids, bases, and valence.",
          "Hydrogen’s spectrum established the core rules of quantum theory (Rydberg, Balmer series).",
          "The element's name is derived from Greek words for 'water' (hydro) and 'forming' (genes).",
          "Hydrogen-containing balloons ushered in the era of human flight before helium's discovery."
        ],
        sources: "Sources: IUPAC Gold Book, CRC Handbook, WebElements, Britannica, F.A. Carey 'Organic Chemistry'"
      }
    ]
  },
  ru: {
    title: "История и открытие",
    blocks: [
      {
        title: "Ключевые этапы в открытии водорода",
        period: [
          { year: 1500, event: "Парацельс заметил выделение «воспламеняемого воздуха» при реакции металлов с кислотами — фундамент для открытия водорода." },
          { year: 1671, event: "Роберт Бойль первым строго описал выделение этого газа, но не понял его природы." },
          { year: 1766, event: "Генри Кавендиш выделил водород, обнаружив его необычайную легкость и горючесть." },
          { year: 1781, event: "Кавендиш показал: при сгорании H образуется вода, чем доказал существование элемента." },
          { year: 1783, event: "Антуан Лавуазье назвал элемент hydrogène и подтвердил его фундаментальность." },
          { year: 1783, event: "Первый полет воздушного шара на водороде в Париже — начало эпохи воздухоплавания." },
          { year: 1800, event: "Николсон и Карлайл открыли электролиз воды — новый химический путь получения H." },
          { year: 1869, event: "Менделеев включил H как особый элемент вне групп." },
          { year: 1894, event: "Работа Рамзая и Рэлейя подтверждает редкость H в атмосфере, но его космическое изобилие." },
          { year: 1913, event: "Спектр H — основа для модели атома Бора, зарождение квантовой теории." },
          { year: 1937, event: "Катастрофа Гинденбурга показала взрывоопасность газообразного H." },
          { year: 1952, event: "Испытание первой водородной бомбы — новая эра энергетики и вооружений." },
        ],
        facts: [
          "Водород — простейший и уникальный элемент: один протон, один электрон.",
          "Первый искусственно полученный элемент (электролиз, ядерный синтез).",
          "Роль в развитии представлений о кислотах, валентности и структуре атома.",
          "Спектр H лег в основу квантовой механики (Ридберг, Бальмер).",
          "Название от греческого: 'образующий воду'.",
          "Дирижабли на H — начало эры воздухоплавания."
        ],
        sources: "Источники: IUPAC Gold Book, CRC Handbook, WebElements, Britannica, Кэрри 'Органическая химия'"
      }
    ]
  },
  uk: {
    title: "Історія та відкриття",
    blocks: [
      {
        title: "Ключові віхи відкриття водню",
        period: [
          { year: 1500, event: "Парацельс першим помітив виділення «запального повітря» в реакціях металів з кислотами." },
          { year: 1671, event: "Роберт Бойль систематично отримував газ, але щодо його природи були сумніви." },
          { year: 1766, event: "Генрі Кавендіш виокремив водень, вивчив його властивості." },
          { year: 1781, event: "Кавендіш довів утворення води при згорянні H." },
          { year: 1783, event: "Антуан Лавуазьє дав назву hydrogène (утворюючий воду)." },
          { year: 1783, event: "Перший політ аеростата на водні — Париж." },
          { year: 1800, event: "Відкриття електролізу води як шляху отримання H₂." },
          { year: 1869, event: "Менделєєв підкреслив унікальність H — окремо від груп." },
          { year: 1894, event: "Дослідження атмосферних газів — роль H у космосі." },
          { year: 1913, event: "Спектр атома H лежить в основі моделі Бора." },
          { year: 1937, event: "Аварія «Гінденбурга» підкреслила небезпеку вибухів H₂." },
          { year: 1952, event: "Випробування термоядерної бомби на водні." },
        ],
        facts: [
          "Гідроген — найпростіший атом, критично важливий для квантової фізики.",
          "Перший штучно синтезований (електроліз, термоядерний синтез).",
          "Розвиток концепцій кислот, валентності і атомарної фізики.",
          "Спектральні серії H — підгрунтя квантової механіки.",
          "Назва — з грецької («утворює воду»).",
          "Аеростати на H започаткували епоху авіації."
        ],
        sources: "Джерела: IUPAC Gold Book, CRC Handbook, WebElements, Britannica, Carey 'Organic Chemistry'"
      }
    ]
  },
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
                <th className="p-1 font-semibold text-left">{locale === "en" ? "Year" : "Год"}</th>
                <th className="p-1 font-semibold text-left">{locale === "en" ? "Event" : "Событие"}</th>
              </tr>
            </thead>
            <tbody>
              {block.period.map((row, idx) => (
                <tr key={row.year + row.event} className={idx % 2 ? "bg-orange-50 dark:bg-gray-900/50" : ""}>
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
