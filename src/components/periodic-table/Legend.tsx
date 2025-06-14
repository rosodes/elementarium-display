
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

// Определяем допустимые языки
type Lang = "ru" | "en" | "uk";
const getLang = (l: string): Lang => {
  if (["ru", "en", "uk"].includes(l)) return l as Lang;
  return "en";
};

/** Данные по цветам и блокам/категориям */
const LEGEND_ITEMS = [
  {
    colorClass: "bg-s-block",
    label: {
      ru: "Синий — s-блок",
      en: "Blue — s-block",
      uk: "Синій — s-блок",
    },
    description: {
      ru: "Щелочные и щелочноземельные металлы (например, Li, Na, Mg, Ca)",
      en: "Alkali & alkaline earth metals (e.g. Li, Na, Mg, Ca)",
      uk: "Лужні та лужноземельні метали (напр. Li, Na, Mg, Ca)",
    },
  },
  {
    colorClass: "bg-p-block",
    label: {
      ru: "Красный — p-блок",
      en: "Red — p-block",
      uk: "Червоний — p-блок",
    },
    description: {
      ru: "Неметаллы, галогены, благородные газы и некоторые металлы (например, O, N, F, Cl, Ne)",
      en: "Nonmetals, halogens, noble gases, some metals (e.g. O, N, F, Cl, Ne)",
      uk: "Неметали, галогени, благородні гази, деякі метали (напр. O, N, F, Cl, Ne)",
    },
  },
  {
    colorClass: "bg-d-block",
    label: {
      ru: "Зелёный — d-блок",
      en: "Green — d-block",
      uk: "Зелений — d-блок",
    },
    description: {
      ru: "Переходные металлы (например, Fe, Cu, Ni, Zn)",
      en: "Transition metals (e.g. Fe, Cu, Ni, Zn)",
      uk: "Перехідні метали (напр. Fe, Cu, Ni, Zn)",
    },
  },
  {
    colorClass: "bg-f-block",
    label: {
      ru: "Фиолетовый — f-блок",
      en: "Purple — f-block",
      uk: "Фіолетовий — f-блок",
    },
    description: {
      ru: "Лантаноиды и актиноиды (например, La, Ce, U, Pu)",
      en: "Lanthanides & actinides (e.g. La, Ce, U, Pu)",
      uk: "Лантаноїди й актиноїди (напр. La, Ce, U, Pu)",
    },
  },
  {
    colorClass: "bg-alkali",
    label: {
      ru: "Голубой — щелочные металлы",
      en: "Light blue — alkali metals",
      uk: "Блакитний — лужні метали",
    },
    description: {
      ru: "Например, литий, натрий (Li, Na)",
      en: "E.g. lithium, sodium (Li, Na)",
      uk: "Напр. літій, натрій (Li, Na)",
    },
  },
  {
    colorClass: "bg-post_transition",
    label: {
      ru: "Жёлтый — постпереходные металлы",
      en: "Yellow — post-transition metals",
      uk: "Жовтий — постперехідні метали",
    },
    description: {
      ru: "Например, алюминий, индий (Al, In)",
      en: "E.g. aluminium, indium (Al, In)",
      uk: "Напр. алюміній, індій (Al, In)",
    },
  },
  {
    colorClass: "bg-metalloid",
    label: {
      ru: "Оранжевый — металлоиды",
      en: "Orange — metalloids",
      uk: "Помаранчевий — металоїди",
    },
    description: {
      ru: "Например, бор, кремний (B, Si)",
      en: "E.g. boron, silicon (B, Si)",
      uk: "Напр. бор, кремній (B, Si)",
    },
  },
  {
    colorClass: "bg-unknown",
    label: {
      ru: "Серый — неизвестные",
      en: "Gray — unknown/incomplete",
      uk: "Сірий — невідомі/неповні",
    },
    description: {
      ru: "Элементы с неполными или неподтверждёнными свойствами",
      en: "Elements with incomplete/unverified properties",
      uk: "Елементи з неповними або непідтвердженими властивостями",
    },
  },
  {
    colorClass: "bg-noble",
    label: {
      ru: "Чёрный — благородные газы",
      en: "Black — noble gases",
      uk: "Чорний — благородні гази",
    },
    description: {
      ru: "Например, гелий, неон, аргон (He, Ne, Ar)",
      en: "E.g. helium, neon, argon (He, Ne, Ar)",
      uk: "Напр. гелій, неон, аргон (He, Ne, Ar)",
    },
  },
];

// Данные для радиоактивных элементов
const RADIOACTIVE = {
  label: {
    ru: "Радиоактивные элементы",
    en: "Radioactive elements",
    uk: "Радіоактивні елементи",
  },
  description: {
    ru: "Помечены пульсирующей красной точкой или фоном — ядра нестабильны.",
    en: "Marked with a pulsating red dot or background — nuclei are unstable.",
    uk: "Позначено пульсуючою червоною крапкою чи фоном — ядра нестабільні.",
  },
};

const Legend: React.FC = () => {
  const { language } = useLanguage();
  const lang = getLang(language);

  return (
    <section className="legend flex flex-col gap-4 mb-6 text-xs max-w-xl">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {lang === "ru" && "Цвета элементов в таблице Менделеева"}
        {lang === "en" && "Element colors in the Periodic Table"}
        {lang === "uk" && "Кольори елементів у періодичній таблиці"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {LEGEND_ITEMS.map((item) => (
          <div key={item.colorClass} className="flex items-start gap-2">
            <div className={`w-5 h-5 rounded border ${item.colorClass} mt-0.5 flex-shrink-0`} aria-label={item.label[lang]} title={item.label[lang]} />
            <div>
              <span className="font-medium text-gray-800 dark:text-gray-100">{item.label[lang]}</span>
              <div className="text-gray-500 dark:text-gray-400 text-[11px] leading-tight mt-0.5">
                {item.description[lang]}
              </div>
            </div>
          </div>
        ))}
        {/* Радиоактивные элементы (пульсирующая красная точка) */}
        <div key="radioactive" className="flex items-start gap-2">
          <div className="relative w-5 h-5 rounded border border-red-400 bg-white mt-0.5 flex-shrink-0">
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </span>
          </div>
          <div>
            <span className="font-medium text-red-600 dark:text-red-400">{RADIOACTIVE.label[lang]}</span>
            <div className="text-gray-500 dark:text-gray-400 text-[11px] leading-tight mt-0.5">
              {RADIOACTIVE.description[lang]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legend;
