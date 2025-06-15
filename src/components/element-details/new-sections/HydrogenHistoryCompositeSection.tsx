
import React from "react";
import HydrogenHistoryVisualBlock from "./HydrogenHistoryVisualBlock";
import { useLanguage } from "../../../context/LanguageContext";
import { BookOpen, Landmark, Trophy, FlaskConical, Atom, Sun, ArrowUpRight } from "lucide-react";

const detailedSummary = {
  en: (
    <>
      <strong>Hydrogen</strong> holds a special place: the first element isolated as a pure substance and the key to understanding the building blocks of matter.
      <br />
      Its story stretches from the <b>Age of Enlightenment</b> to today’s <span className="font-semibold text-green-600 dark:text-green-300">hydrogen economy</span>.
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li><b>1766:</b> <span className="text-orange-700 dark:text-orange-300">Henry Cavendish</span> first isolated hydrogen, noticing it was a distinct, "inflammable air". Later, he found it combined with oxygen to form water.</li>
        <li><b>1783:</b> <span className="text-cyan-700 dark:text-cyan-300">Antoine Lavoisier</span> proved water was not an element, but a compound of hydrogen and oxygen, and gave the element its lasting name.</li>
        <li><b>19th c.:</b> Balloons and early airships symbolized flight’s new age but also dangerous accidents (as in the Hindenburg disaster, 1937).</li>
        <li><b>1920s–30s:</b> Quantum theory leapt forward as the hydrogen atom revealed key features of atomic structure (Bohr’s model), and new isotopes, deuterium and tritium, were discovered, laying the foundation for controlled nuclear fusion.</li>
        <li><b>1952:</b> The first hydrogen bomb—an epoch-making (if tragic) demonstration of nuclear fusion’s power.</li>
        <li><b>21st c.:</b> Hydrogen emerges at the heart of green energy proposals, seen as a future clean fuel.</li>
      </ul>
      <div className="italic pt-2 text-sm text-sky-800 dark:text-sky-100">Hydrogen’s journey reads like the story of chemistry itself: tinkering, discovery, and hope for solutions to tomorrow’s challenges.</div>
    </>
  ),
  ru: (
    <>
      <strong>Водород</strong> — первый выделенный элемент, ключ к пониманию материи.
      <br />
      Его путь: от эпохи Просвещения до идеи <span className="font-semibold text-green-700 dark:text-green-300">водородной энергетики</span> XXI века.
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li><b>1766:</b> <span className="text-orange-700 dark:text-orange-300">Генри Кавендиш</span> выделяет водород («горючий воздух») и доказывает его уникальные свойства. При сгорании превращается в воду.</li>
        <li><b>1783:</b> <span className="text-cyan-700 dark:text-cyan-300">Антуан Лавуазье</span> доказывает, что вода — не стихия, а соединение водорода с кислородом, и даёт новую терминологию.</li>
        <li><b>XIX век:</b> Воздушные шары, дирижабли, а также опасности (Гинденбург, 1937).</li>
        <li><b>1920-е — 30-е:</b> Исследования спектра водорода и открытие дейтерия, трития вносят вклад в атомную модель, фундамент холодного и термоядерного синтеза.</li>
        <li><b>1952:</b> Первый термоядерный взрыв — яркая, но трагическая иллюстрация силы водорода.</li>
        <li><b>XXI век:</b> Ключевая надежда «зелёной» энергетики и будущего планеты.</li>
      </ul>
      <div className="italic pt-2 text-sm text-sky-800 dark:text-sky-100">История водорода — история самой химии: от подвижного эксперимента до решения проблем будущего.</div>
    </>
  ),
  uk: (
    <>
      <strong>Водень</strong> — перший ідентифікований елемент та ключ до будови речовини.
      <br />
      Його шлях &mdash; від часів Просвітництва до <span className="font-semibold text-green-700 dark:text-green-300">зеленої водневої енергетики</span> сучасності.
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li><b>1766:</b> <span className="text-orange-700 dark:text-orange-300">Генрі Кавендіш</span> виділяє водень, доводить його унікальність; під час згоряння утворює воду.</li>
        <li><b>1783:</b> <span className="text-cyan-700 dark:text-cyan-300">Антуан Лавуазьє</span> показує, що вода — це сполука, а не елемент, дає ім’я «hydrogène».</li>
        <li><b>XIX ст.:</b> Дирижаблі, повітряні кулі і трагедії аеронавтики (Гінденбург, 1937).</li>
        <li><b>1920–30-ті:</b> Дослідження атомної будови, відкриття ізотопів (дейтерій, тритій) — фундамент термоядерної енергетики.</li>
        <li><b>1952:</b> Перша воднева бомба — технологічний і трагічний рубіж.</li>
        <li><b>XXI століття:</b> Водень розглядають як паливо чистого майбутнього.</li>
      </ul>
      <div className="italic pt-2 text-sm text-sky-800 dark:text-sky-100">Історія водню — історія хімії, відкриттів і сподівань на майбутнє.</div>
    </>
  ),
};

const sources = {
  en: (
    <span>
      Sources:&nbsp;
      <a
        href="https://www.webelements.com/hydrogen/history.html"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-700 hover:text-blue-900 dark:text-blue-300"
      >
        WebElements: Hydrogen History
        <ArrowUpRight size={13} className="inline ml-1 -mt-0.5" />
      </a>
      , CRC Handbook, Nature, Royal Society of Chemistry, Encyclopedia Britannica
    </span>
  ),
  ru: (
    <span>
      Источники:&nbsp;
      <a
        href="https://www.webelements.com/hydrogen/history.html"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-700 hover:text-blue-900 dark:text-blue-300"
      >
        WebElements: история H
        <ArrowUpRight size={13} className="inline ml-1 -mt-0.5" />
      </a>
      , CRC Handbook, Nature, RSC, Britannica
    </span>
  ),
  uk: (
    <span>
      Джерела:&nbsp;
      <a
        href="https://www.webelements.com/hydrogen/history.html"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-700 hover:text-blue-900 dark:text-blue-300"
      >
        WebElements: історія водню
        <ArrowUpRight size={13} className="inline ml-1 -mt-0.5" />
      </a>
      , CRC Handbook, Nature, RSC, Britannica
    </span>
  ),
};

const HydrogenHistoryCompositeSection: React.FC = () => {
  const { language } = useLanguage();
  // Титул основной секции — адаптируется под язык
  const sectionTitle =
    language === "ru"
      ? "История открытия и изучения"
      : language === "uk"
      ? "Історія відкриття і досліджень"
      : "History & Discovery";

  return (
    <section className="space-y-5">
      {/* Визуальный таймлайн */}
      <HydrogenHistoryVisualBlock />

      {/* Титул секции */}
      <h2 className="text-lg font-bold mb-1 text-sky-700 dark:text-sky-200 flex items-center gap-2 mt-1">
        <BookOpen size={20} className="inline mb-1" />
        {sectionTitle}
      </h2>

      {/* Новая визуальная шкала: основные эпохи */}
      <div className="flex flex-wrap gap-1 mt-1 text-[13px] font-medium">
        <span className="px-2 py-1 rounded bg-orange-50 dark:bg-orange-900/30 text-orange-800 dark:text-orange-100 flex items-center gap-1">
          <Landmark size={15} /> 18th c: Isolation & Naming
        </span>
        <span className="px-2 py-1 rounded bg-cyan-50 dark:bg-cyan-900/40 text-cyan-900 dark:text-cyan-100 flex items-center gap-1">
          <Trophy size={15} /> Balloons & Airships
        </span>
        <span className="px-2 py-1 rounded bg-yellow-50 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-100 flex items-center gap-1">
          <Atom size={15} /> Atomic Theory & Quantum
        </span>
        <span className="px-2 py-1 rounded bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-100 flex items-center gap-1">
          <FlaskConical size={15} /> Fusion & Bombs
        </span>
        <span className="px-2 py-1 rounded bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-100 flex items-center gap-1">
          <Sun size={15} /> Energy of the Future
        </span>
      </div>

      {/* Подробное содержательное summary */}
      <div className="mt-2 rounded bg-blue-50 dark:bg-gray-900 border border-blue-100 dark:border-gray-700 shadow px-3 py-3 text-[14px] text-blue-900 dark:text-blue-200">
        {detailedSummary[language] || detailedSummary.en}
      </div>

      {/* Список источников */}
      <div className="mt-3 text-[12px] text-gray-600 dark:text-gray-400">{sources[language] || sources.en}</div>
    </section>
  );
};

export default HydrogenHistoryCompositeSection;
