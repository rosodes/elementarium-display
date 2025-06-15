
import React from "react";
import HydrogenHistoryVisualBlock from "./HydrogenHistoryVisualBlock";
import { useLanguage } from "../../../context/LanguageContext";
import { BookOpen } from "lucide-react";

const detailedSummary = {
  en: "Hydrogen was the first element isolated as a pure substance, fundamentally changing our understanding of chemistry and the structure of matter. From ballooning and airships to quantum theory, nuclear fusion, and the hydrogen economy, the story of hydrogen interweaves with milestones of science and technology.",
  ru: "Водород стал первым элементом, выделенным как индивидуальное вещество, что перевернуло представления о строении материи. Его история — это путь от дирижаблей к квантовой механике, управляемому термояду и будущей водородной энергетике.",
  uk: "Водень — перший ізольований хімічний елемент, який змінив розуміння природи речовини. Його історія пов'язана з дирижаблями, квантовою теорією, термоядерним синтезом і майбутньою енергетикою."
};

const sources = {
  en: "Sources: WebElements, CRC Handbook, Nature, Royal Society of Chemistry, Encyclopedia Britannica",
  ru: "Источники: WebElements, CRC Handbook, Nature, Royal Society of Chemistry, Britannica",
  uk: "Джерела: WebElements, CRC Handbook, Nature, Royal Society of Chemistry, Britannica"
};

const stepHeaders = {
  en: [
    "Discovery and Isolation",
    "Naming and Early Studies",
    "Milestone Experiments",
    "Role in Physical Sciences",
    "Modern Developments"
  ],
  ru: [
    "Открытие и выделение",
    "Название и ранние исследования",
    "Важнейшие эксперименты",
    "Роль в физических науках",
    "Современные этапы"
  ],
  uk: [
    "Відкриття й виділення",
    "Назва й ранні дослідження",
    "Ключові експерименти",
    "Роль у фізичних науках",
    "Сучасні досягнення"
  ]
};

const factsByStep = {
  en: [
    [
      "Henry Cavendish isolated and described hydrogen gas in 1766, identifying it as an inflammable air distinct from others.",
      "Cavendish realized hydrogen produced water upon combustion, suggesting its chemical nature."
    ],
    [
      "In 1783, Antoine Lavoisier demonstrated that water is a compound of hydrogen and oxygen, coining the name 'hydrogène' (Greek for 'water-former').",
      "The term became universal in science; 'hydrogen' is still the root of its modern name."
    ],
    [
      "Hydrogen was used in balloons and airships (notably the Hindenburg disaster in 1937).",
      "20th-century astrophysics discovered hydrogen’s role in stellar fusion (the Sun’s energy)."
    ],
    [
      "Hydrogen’s spectral lines shaped quantum theory (Bohr model).",
      "Deuterium and tritium (heavy isotopes) were isolated in the 1930s, leading to advances in nuclear fusion."
    ],
    [
      "First hydrogen bomb was detonated in 1952 via fusion of deuterium and tritium.",
      "Hydrogen is central to proposals for a 'green hydrogen economy'."
    ]
  ],
  ru: [
    [
      "Генри Кавендиш выделил водород в 1766 году, описав его как «горючий воздух».",
      "Кавендиш установил, что при сгорании водорода образуется вода."
    ],
    [
      "В 1783 году Лавуазье доказал, что вода — это соединение водорода и кислорода, дал название «hydrogène».",
      "Этот термин стал международным стандартом."
    ],
    [
      "Водород широко применялся в воздухоплавании и дирижаблях (катастрофа Гинденбурга, 1937).",
      "В XX веке учёные открыли термоядерную роль водорода в звёздах."
    ],
    [
      "Изучение спектров водорода привело к созданию квантовой механики (модель Бора).",
      "Дейтерий и тритий были выделены в 1930-х — основа термоядерной энергетики."
    ],
    [
      "Первая термоядерная бомба испытана в 1952 году.",
      "Современные перспективы — развитие «зелёной» водородной энергетики."
    ]
  ],
  uk: [
    [
      "Генрі Кавендіш у 1766 р. виділив водень як окремий газ ('горюче повітря').",
      "Він встановив, що спалювання водню дає воду."
    ],
    [
      "У 1783 р. Лавуазьє довів, що вода — це сполука водню й кисню, і ввів ім'я 'hydrogène'.",
      "Назва закріпилася у світовій науці."
    ],
    [
      "Водень використовувався у повітроплаванні та дирижаблях (Гінденбург, 1937).",
      "XX століття — відкриття термоядерної ролі водню у зорях."
    ],
    [
      "Спектри водню дали старт квантовій теорії (Борівська модель).",
      "Дейтерій і тритій відкрили у 1930-х; це база для ядерного синтезу."
    ],
    [
      "Першу водневу бомбу підірвали у 1952 році.",
      "Сучасна наука — розвиток ринку «зеленого» водню."
    ]
  ]
};

const HydrogenHistoryCompositeSection: React.FC = () => {
  const { language } = useLanguage();
  const t = { ...stepHeaders, en: stepHeaders.en }[language] || stepHeaders.en;
  const facts = factsByStep[language] || factsByStep.en;
  const summary = detailedSummary[language] || detailedSummary.en;
  const src = sources[language] || sources.en;

  return (
    <section className="space-y-4">
      <HydrogenHistoryVisualBlock />
      
      <div className="mt-2">
        <h2 className="text-lg font-bold mb-2 text-sky-700 dark:text-sky-200 flex items-center gap-2">
          <BookOpen size={20} className="inline mb-1" />
          {language === "ru"
            ? "История открытия и изучения"
            : language === "uk"
            ? "Історія відкриття і досліджень"
            : "History & Discovery"}
        </h2>
        <div className="space-y-3 ml-1">
          {t.map((header, idx) => (
            <div key={idx}>
              <div className="font-semibold text-sky-800 dark:text-sky-300 mb-1">{`${idx + 1}. ${header}`}</div>
              <ul className="list-disc pl-6 space-y-1 marker:text-sky-400">
                {facts[idx].map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-blue-50 dark:bg-gray-900 rounded p-3 text-[13px] text-blue-900 dark:text-blue-200 shadow border border-blue-100 dark:border-gray-700">
          {summary}
        </div>
        <div className="mt-2 text-[11px] text-gray-500">{src}</div>
      </div>
    </section>
  );
};

export default HydrogenHistoryCompositeSection;
