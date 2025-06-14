
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

type Lang = "ru" | "en" | "uk";
const getLang = (l: string): Lang => {
  if (["ru", "en", "uk"].includes(l)) return l as Lang;
  return "en";
};

const COLORS = [
  {
    colorClass: "bg-s-block",
    label: { ru: "s-блок (синий)", en: "s-block (Blue)", uk: "s-блок (синій)" },
    description: {
      ru: "Щелочные и щелочноземельные металлы. Примеры: Li, Na, Mg, Ca",
      en: "Alkali & alkaline earth metals. Examples: Li, Na, Mg, Ca",
      uk: "Лужні і лужноземельні метали. Наприклад: Li, Na, Mg, Ca"
    }
  },
  {
    colorClass: "bg-p-block",
    label: { ru: "p-блок (красный)", en: "p-block (Red)", uk: "p-блок (червоний)" },
    description: {
      ru: "Неметаллы, галогены, благородные газы и некоторые металлы. Примеры: O, N, F, Cl, Ne",
      en: "Nonmetals, halogens, noble gases, some metals. Examples: O, N, F, Cl, Ne",
      uk: "Неметали, галогени, благородні гази, деякі метали. Наприклад: O, N, F, Cl, Ne"
    }
  },
  {
    colorClass: "bg-d-block",
    label: { ru: "d-блок (зелёный)", en: "d-block (Green)", uk: "d-блок (зелений)" },
    description: {
      ru: "Переходные металлы. Примеры: Fe, Cu, Ni, Zn",
      en: "Transition metals. Examples: Fe, Cu, Ni, Zn",
      uk: "Перехідні метали. Наприклад: Fe, Cu, Ni, Zn"
    }
  },
  {
    colorClass: "bg-f-block",
    label: { ru: "f-блок (фиолетовый)", en: "f-block (Purple)", uk: "f-блок (фіолетовий)" },
    description: {
      ru: "Лантаноиды и актиноиды. Примеры: La, Ce, U, Pu",
      en: "Lanthanides & actinides. Examples: La, Ce, U, Pu",
      uk: "Лантаноїди й актиноїди. Наприклад: La, Ce, U, Pu"
    }
  },
  {
    colorClass: "bg-alkali",
    label: { ru: "Щелочные металлы (голубой)", en: "Alkali metals (Light Blue)", uk: "Лужні метали (блакитний)" },
    description: {
      ru: "Весьма активные металлы s-блока. Примеры: Li, Na, K",
      en: "Highly reactive s-block metals. Examples: Li, Na, K",
      uk: "Дуже реактивні s-блок метали. Наприклад: Li, Na, K"
    }
  },
  {
    colorClass: "bg-post_transition",
    label: { ru: "Постпереходные металлы (жёлтый)", en: "Post-transition metals (Yellow)", uk: "Постперехідні метали (жовтий)" },
    description: {
      ru: "Мягкие p-блок металлы. Примеры: Al, In, Sn, Pb",
      en: "Soft p-block metals. Examples: Al, In, Sn, Pb",
      uk: "М’які p-блок метали. Наприклад: Al, In, Sn, Pb"
    }
  },
  {
    colorClass: "bg-metalloid",
    label: { ru: "Металлоиды (оранжевый)", en: "Metalloids (Orange)", uk: "Металоїди (помаранчевий)" },
    description: {
      ru: "Элементы на границе металлов и неметаллов. Примеры: B, Si, Ge",
      en: "Borderline between metals and nonmetals. Examples: B, Si, Ge",
      uk: "Межа між металами та неметалами. Наприклад: B, Si, Ge"
    }
  },
  {
    colorClass: "bg-noble",
    label: { ru: "Благородные газы (чёрный)", en: "Noble gases (Black)", uk: "Благородні гази (чорний)" },
    description: {
      ru: "Химически инертные p-блок элементы. Примеры: He, Ne, Ar",
      en: "Chemically inert p-block elements. Examples: He, Ne, Ar",
      uk: "Хімічно інертні p-блок елементи. Наприклад: He, Ne, Ar"
    }
  },
  {
    colorClass: "bg-unknown",
    label: { ru: "Неизвестные или неполные (серый)", en: "Unknown/incomplete (Gray)", uk: "Невідомі/неповні (сірий)" },
    description: {
      ru: "Элементы с неполными или неподтверждёнными свойствами.",
      en: "Elements with incomplete or unverified properties.",
      uk: "Елементи з неповними або непідтвердженими властивостями."
    }
  }
];

const RADIOACTIVE = {
  label: {
    ru: "Радиоактивные элементы",
    en: "Radioactive elements",
    uk: "Радіоактивні елементи"
  },
  description: {
    ru: "Помечены пульсирующей красной точкой — их ядра нестабильны.",
    en: "Marked with a pulsating red dot — nuclei are unstable.",
    uk: "Позначено пульсуючою червоною крапкою — ядра нестабільні."
  }
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
        {COLORS.map((item) => (
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
        {/* Радиоактивные элементы */}
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
