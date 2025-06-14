
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const legendColors = [
  {
    colorClass: "bg-s-block",
    label: { ru: "S-блок", en: "s-block", uk: "s-блок" },
    description: {
      ru: "Щелочные и щелочноземельные металлы (например, Li, Na, Mg, Ca)",
      en: "Alkali & Alkaline earth metals (e.g. Li, Na, Mg, Ca)",
      uk: "Лужні та лужноземельні метали (наприклад, Li, Na, Mg, Ca)"
    }
  },
  {
    colorClass: "bg-p-block",
    label: { ru: "P-блок", en: "p-block", uk: "p-блок" },
    description: {
      ru: "Неметаллы, галогены, благородные газы и часть металлов (например, O, N, F, Cl, Ne)",
      en: "Nonmetals, halogens, noble gases, some metals (e.g. O, N, F, Cl, Ne)",
      uk: "Неметали, галогени, благородні гази та частина металів (наприклад, O, N, F, Cl, Ne)"
    }
  },
  {
    colorClass: "bg-d-block",
    label: { ru: "D-блок", en: "d-block", uk: "d-блок" },
    description: {
      ru: "Переходные металлы (например, Fe, Cu, Ni, Zn)",
      en: "Transition metals (e.g. Fe, Cu, Ni, Zn)",
      uk: "Перехідні метали (наприклад, Fe, Cu, Ni, Zn)"
    }
  },
  {
    colorClass: "bg-f-block",
    label: { ru: "F-блок", en: "f-block", uk: "f-блок" },
    description: {
      ru: "Лантаноиды и актиноиды (например, La, Ce, U, Pu)",
      en: "Lanthanides & actinides (e.g. La, Ce, U, Pu)",
      uk: "Лантаноїди й актиноїди (наприклад, La, Ce, U, Pu)"
    }
  },
  {
    colorClass: "bg-alkali",
    label: { ru: "Щелочные металлы", en: "Alkali metals", uk: "Лужні метали" },
    description: {
      ru: "Самые активные металлы, только s-блок (например, Li, Na, K)",
      en: "Most reactive s-block metals (e.g. Li, Na, K)",
      uk: "Найбільш реактивні s-блок метали (наприклад, Li, Na, K)"
    }
  },
  {
    colorClass: "bg-post_transition",
    label: { ru: "Постпереходные металлы", en: "Post-transition metals", uk: "Постперехідні метали" },
    description: {
      ru: "Мягкие металлы, p-блок (например, Al, In, Sn, Pb)",
      en: "Soft p-block metals (e.g. Al, In, Sn, Pb)",
      uk: "М’які p-блок метали (наприклад, Al, In, Sn, Pb)"
    }
  },
  {
    colorClass: "bg-metalloid",
    label: { ru: "Металлоиды", en: "Metalloids", uk: "Металоїди" },
    description: {
      ru: "Граница между металлами и неметаллами (например, B, Si, Ge)",
      en: "Borderline properties (e.g. B, Si, Ge)",
      uk: "Межа між металами та неметалами (наприклад, B, Si, Ge)"
    }
  },
  {
    colorClass: "bg-noble",
    label: { ru: "Благородные газы", en: "Noble gases", uk: "Благородні гази" },
    description: {
      ru: "Химически инертные gазы (например, He, Ne, Ar)",
      en: "Chemically inert gases (e.g. He, Ne, Ar)",
      uk: "Хімічно інертні гази (наприклад, He, Ne, Ar)"
    }
  },
  {
    colorClass: "bg-unknown",
    label: { ru: "Неизвестные", en: "Unknown", uk: "Невідомо" },
    description: {
      ru: "Элементы с неполными/неподтверждёнными свойствами",
      en: "Elements with unknown/incomplete properties",
      uk: "Елементи з невідомими/неповними властивостями"
    }
  }
];

const radioactiveLegend = {
  colorClass: "bg-white border border-red-400 relative",
  icon: (
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
    </span>
  ),
  label: {
    ru: "Радиоактивные элементы",
    en: "Radioactive elements",
    uk: "Радіоактивні елементи"
  },
  description: {
    ru: "Помечены пульсирующей красной точкой — их ядра нестабильны.",
    en: "Marked with pulsating red dot — nuclei are unstable.",
    uk: "Позначені пульсуючою червоною крапкою — ядра нестабільні."
  }
};

const getLang = (l: string) => ["ru", "en", "uk"].includes(l) ? l : "en";

const Legend: React.FC = () => {
  const { language } = useLanguage();
  const lang = getLang(language);

  return (
    <section className="legend flex flex-col gap-4 mb-6 text-xs max-w-xl">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {lang === "ru" && "Значения цветов на таблице Менделеева"}
        {lang === "en" && "Universal color meaning in the Periodic Table"}
        {lang === "uk" && "Значення кольорів у періодичній таблиці"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {legendColors.map((item) => (
          <div key={item.colorClass} className="flex items-start gap-2">
            <div className={`w-4 h-4 rounded border ${item.colorClass} mt-0.5 flex-shrink-0`} aria-label={item.label[lang]} />
            <div>
              <span className="font-medium text-gray-800 dark:text-gray-100">{item.label[lang]}</span>
              <div className="text-gray-500 dark:text-gray-400 text-[11px] leading-tight mt-0.5">
                {item.description[lang]}
              </div>
            </div>
          </div>
        ))}
        {/* Radioactive legend placed in grid too */}
        <div key="radioactive" className="flex items-start gap-2">
          <div className="relative w-4 h-4 rounded border border-red-400 bg-white flex-shrink-0 mt-0.5">
            {radioactiveLegend.icon}
          </div>
          <div>
            <span className="font-medium text-red-600 dark:text-red-400">{radioactiveLegend.label[lang]}</span>
            <div className="text-gray-500 dark:text-gray-400 text-[11px] leading-tight mt-0.5">
              {radioactiveLegend.description[lang]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legend;
