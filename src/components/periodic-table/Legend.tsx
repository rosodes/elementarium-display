
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { AlertCircle } from "lucide-react";

// Основные цвета категорий (самые яркие/базовые группы)
const blockColorDescriptions = [
  {
    colorClass: "bg-s-block",
    colorName: { ru: "Синий", en: "Blue", uk: "Синій" },
    label: { ru: "s-блок", en: "s-block", uk: "s-блок" },
    description: {
      ru: "Щелочные и щелочноземельные металлы: очень активные, легко вступают в реакции. Примеры: Na, K, Mg, Ca.",
      en: "Alkali and alkaline earth metals: very reactive, easily form compounds. Examples: Na, K, Mg, Ca.",
      uk: "Лужні та лужноземельні метали: дуже реактивні, легко вступають у реакції. Приклади: Na, K, Mg, Ca."
    }
  },
  {
    colorClass: "bg-p-block",
    colorName: { ru: "Красный", en: "Red", uk: "Червоний" },
    label: { ru: "p-блок", en: "p-block", uk: "p-блок" },
    description: {
      ru: "Неметаллы, галогены, благородные газы и часть металлов. Примеры: O, N, F, Cl, Ne.",
      en: "Nonmetals, halogens, noble gases, and some metals. Examples: O, N, F, Cl, Ne.",
      uk: "Неметали, галогени, благородні гази та частина металів. Приклади: O, N, F, Cl, Ne."
    }
  },
  {
    colorClass: "bg-d-block",
    colorName: { ru: "Зелёный", en: "Green", uk: "Зелений" },
    label: { ru: "d-блок", en: "d-block", uk: "d-блок" },
    description: {
      ru: "Переходные металлы: прочные, часто используются в сплавах. Примеры: Fe, Cu, Ni, Zn, Ag, Au.",
      en: "Transition metals: strong, widely used in alloys and industry. Examples: Fe, Cu, Ni, Zn, Ag, Au.",
      uk: "Перехідні метали: міцні, часто використовуються в сплавах. Приклади: Fe, Cu, Ni, Zn, Ag, Au."
    }
  },
  {
    colorClass: "bg-f-block",
    colorName: { ru: "Фиолетовый", en: "Violet", uk: "Фіолетовий" },
    label: { ru: "f-блок", en: "f-block", uk: "f-блок" },
    description: {
      ru: "Лантаноиды и актиноиды: редко встречаются, важны для техники и медицины. Примеры: U, Pu, La, Ce.",
      en: "Lanthanides and actinides: rare, important for technology and medicine. Examples: U, Pu, La, Ce.",
      uk: "Лантаноїди й актиноїди: рідкі, важливі для техніки й медицини. Приклади: U, Pu, La, Ce."
    }
  },
];

// Дополнительные отображаемые категории (если нужны)
const extraCategories = [
  {
    colorClass: "bg-metalloid",
    colorName: { ru: "Оранжевый", en: "Orange", uk: "Помаранчевий" },
    label: { ru: "Металлоиды", en: "Metalloids", uk: "Металоїди" },
    description: {
      ru: "Пограничные свойства между металлами и неметаллами. Примеры: B, Si, Ge, As.",
      en: "Borderline properties between metals and nonmetals. Examples: B, Si, Ge, As.",
      uk: "Властивості між металами й неметалами. Приклади: B, Si, Ge, As."
    }
  },
  {
    colorClass: "bg-post_transition",
    colorName: { ru: "Жёлтый", en: "Yellow", uk: "Жовтий" },
    label: { ru: "Постпереходные металлы", en: "Post-transition metals", uk: "Постперехідні метали" },
    description: {
      ru: "Мягкие и легкоплавкие металлы. Примеры: Al, Sn, Pb.",
      en: "Soft and low-melting metals. Examples: Al, Sn, Pb.",
      uk: "М’які та легкоплавкі метали. Приклади: Al, Sn, Pb."
    }
  },
  {
    colorClass: "bg-noble",
    colorName: { ru: "Чёрный", en: "Black", uk: "Чорний" },
    label: { ru: "Благородные газы", en: "Noble gases", uk: "Благородні гази" },
    description: {
      ru: "Химически инертные газы. Примеры: He, Ne, Ar, Kr, Xe, Rn.",
      en: "Chemically inert gases. Examples: He, Ne, Ar, Kr, Xe, Rn.",
      uk: "Хімічно інертні гази. Приклади: He, Ne, Ar, Kr, Xe, Rn."
    }
  },
  {
    colorClass: "bg-unknown",
    colorName: { ru: "Серый", en: "Grey", uk: "Сірий" },
    label: { ru: "Неизвестно", en: "Unknown", uk: "Невідомо" },
    description: {
      ru: "Элементы, свойства которых неизвестны или малоизучены.",
      en: "Elements with unknown or poorly studied properties.",
      uk: "Елементи з невідомими або маловивченими властивостями."
    }
  },
];

// Язык для локализации
const getCurrentLang = (lang: string) => (["ru", "en", "uk"].includes(lang) ? lang : "en");

// Радиоактивность отдельно с особым значком
const radioactiveInfo = {
  colorClass: "bg-white border border-red-400 relative",
  icon: (
    <span className="absolute w-2 h-2 bg-red-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow"></span>
  ),
  label: {
    ru: "Радиоактивные элементы",
    en: "Radioactive elements",
    uk: "Радіоактивні елементи"
  },
  description: {
    ru: "Помечены красной точкой. Ядра нестабильны, могут распадаться с излучением.",
    en: "Marked with a red dot. Their nuclei are unstable and can decay, emitting radiation.",
    uk: "Позначені червоною крапкою. Ядра нестабільні, можуть розпадатися з випромінюванням."
  }
};

const Legend: React.FC = () => {
  const { language } = useLanguage();
  const lang = getCurrentLang(language);

  return (
    <section className="legend flex flex-col gap-3 mb-6 text-xs max-w-xl">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {lang === "ru" && "Значение цветов в таблице:"}
        {lang === "en" && "What colors mean in the table:"}
        {lang === "uk" && "Що означають кольори таблиці:"}
      </h2>
      {/* Основные группы и блоки */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {[...blockColorDescriptions, ...extraCategories].map((block) => (
          <div key={block.colorClass} className="flex items-start gap-2">
            <div
              className={`w-4 h-4 rounded border ${block.colorClass} mt-0.5 flex-shrink-0`}
              aria-label={block.label[lang]}
            ></div>
            <div>
              <span className="font-medium text-gray-800 dark:text-gray-100">
                {block.label[lang]}
              </span>
              <span className="ml-1 text-gray-500 dark:text-gray-400">
                ({block.colorName[lang]})
              </span>
              <div className="text-gray-500 dark:text-gray-400 text-[11px] leading-tight mt-0.5">
                {block.description[lang]}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Радиоактивные элементы */}
      <div className="flex items-start gap-2 mt-2 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="relative w-4 h-4 rounded border border-red-400 bg-white flex items-center justify-center mr-1">
          {radioactiveInfo.icon}
        </div>
        <div>
          <span className="font-medium text-red-600 dark:text-red-400">
            {radioactiveInfo.label[lang]}
          </span>
          <div className="text-gray-500 dark:text-gray-400 text-[11px] mt-0.5">
            {radioactiveInfo.description[lang]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legend;

