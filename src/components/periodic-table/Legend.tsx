
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

// Список категорий с цветами и описаниями на трёх языках
const LEGEND_ITEMS = [
  {
    colorClass: "bg-s-block",
    label: {
      en: "Blue — s-block",
      ru: "Синий — s-блок",
      uk: "Синій — s-блок",
    },
    description: {
      en: "Alkali & alkaline earth metals (e.g. Li, Na, Mg, Ca)",
      ru: "Щелочные и щелочноземельные металлы (напр. Li, Na, Mg, Ca)",
      uk: "Лужні та лужноземельні метали (напр. Li, Na, Mg, Ca)",
    },
  },
  {
    colorClass: "bg-p-block",
    label: {
      en: "Red — p-block",
      ru: "Красный — p-блок",
      uk: "Червоний — p-блок",
    },
    description: {
      en: "Nonmetals, halogens, noble gases, some metals (e.g. O, N, F, Cl, Ne)",
      ru: "Неметаллы, галогены, благородные газы, некоторые металлы (напр. O, N, F, Cl, Ne)",
      uk: "Неметали, галогени, благородні гази, деякі метали (напр. O, N, F, Cl, Ne)",
    },
  },
  {
    colorClass: "bg-d-block",
    label: {
      en: "Green — d-block",
      ru: "Зелёный — d-блок",
      uk: "Зелений — d-блок",
    },
    description: {
      en: "Transition metals (e.g. Fe, Cu, Ni, Zn)",
      ru: "Переходные металлы (напр. Fe, Cu, Ni, Zn)",
      uk: "Перехідні метали (напр. Fe, Cu, Ni, Zn)",
    },
  },
  {
    colorClass: "bg-f-block",
    label: {
      en: "Purple — f-block",
      ru: "Фиолетовый — f-блок",
      uk: "Фіолетовий — f-блок",
    },
    description: {
      en: "Lanthanides & actinides (e.g. La, Ce, U, Pu)",
      ru: "Лантаноиды и актиноиды (напр. La, Ce, U, Pu)",
      uk: "Лантаноїди й актиноїди (напр. La, Ce, U, Pu)",
    },
  },
  {
    colorClass: "bg-alkali",
    label: {
      en: "Light blue — alkali metals",
      ru: "Голубой — щелочные металлы",
      uk: "Блакитний — лужні метали",
    },
    description: {
      en: "E.g. lithium, sodium (Li, Na)",
      ru: "Например, литий, натрий (Li, Na)",
      uk: "Напр. літій, натрій (Li, Na)",
    },
  },
  {
    colorClass: "bg-post_transition",
    label: {
      en: "Yellow — post-transition metals",
      ru: "Жёлтый — постпереходные металлы",
      uk: "Жовтий — постперехідні метали",
    },
    description: {
      en: "E.g. aluminium, indium (Al, In)",
      ru: "Например, алюминий, индий (Al, In)",
      uk: "Напр. алюміній, індій (Al, In)",
    },
  },
  {
    colorClass: "bg-metalloid",
    label: {
      en: "Orange — metalloids",
      ru: "Оранжевый — металлоиды",
      uk: "Помаранчевий — металоїди",
    },
    description: {
      en: "E.g. boron, silicon (B, Si)",
      ru: "Например, бор, кремний (B, Si)",
      uk: "Напр. бор, кремній (B, Si)",
    },
  },
  {
    colorClass: "bg-unknown",
    label: {
      en: "Gray — unknown/incomplete",
      ru: "Серый — неизвестные/неполные",
      uk: "Сірий — невідомі/неповні",
    },
    description: {
      en: "Elements with incomplete/unverified properties",
      ru: "Элементы с неполными или неподтверждёнными свойствами",
      uk: "Елементи з неповними або непідтвердженими властивостями",
    },
  },
  {
    colorClass: "bg-noble",
    label: {
      en: "Black — noble gases",
      ru: "Чёрный — благородные газы",
      uk: "Чорний — благородні гази",
    },
    description: {
      en: "E.g. helium, neon, argon (He, Ne, Ar)",
      ru: "Например, гелий, неон, аргон (He, Ne, Ar)",
      uk: "Напр. гелій, неон, аргон (He, Ne, Ar)",
    },
  },
];

const RADIOACTIVE = {
  label: {
    en: "Radioactive elements",
    ru: "Радиоактивные элементы",
    uk: "Радіоактивні елементи",
  },
  description: {
    en: "Marked with a pulsating red dot or background — nuclei are unstable.",
    ru: "Помечены пульсирующей красной точкой или фоном — ядра нестабильны.",
    uk: "Позначено пульсуючою червоною крапкою чи фоном — ядра нестабільні.",
  },
};

const getLang = (l: string) => (["ru", "en", "uk"].includes(l) ? l : "en");

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
            <div
              className={`w-5 h-5 rounded border ${item.colorClass} mt-0.5 flex-shrink-0`}
              aria-label={item.label[lang]}
              title={item.label[lang]}
            />
            <div>
              <div className="font-medium text-gray-800 dark:text-gray-100">{item.label[lang]}</div>
              <div className="text-gray-500 dark:text-gray-400 text-[11px] leading-tight mt-0.5">
                {item.description[lang]}
              </div>
            </div>
          </div>
        ))}
        {/* Радиоактивные элементы */}
        <div key="radioactive" className="flex items-start gap-2">
          <div className="relative w-5 h-5 rounded border border-red-400 bg-transparent mt-0.5 flex-shrink-0">
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse border border-red-500"></span>
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
