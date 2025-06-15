
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import HydrogenOccurrenceVisualBlock from "./HydrogenOccurrenceVisualBlock";
import HydrogenUniverseBarChart from "./HydrogenUniverseBarChart";
import HydrogenNaturalOccurrenceSection from "./HydrogenNaturalOccurrenceSection";
import { PieChart, Table2, Globe, ArrowUpRight } from "lucide-react";

const occurrenceContent = {
  en: {
    title: "Occurrence & Abundance",
    intro: (
      <>
        <b>Hydrogen</b> is by far the most abundant element in the universe and plays a fundamental role everywhere — from powering stars to making up water, living things and all organic molecules.
      </>
    ),
    facts: [
      "Hydrogen makes up ~75% of all ordinary mass in the universe and over 90% of all atoms.",
      "It is the main ingredient in stars, gas giants (like Jupiter), nebulae and the interstellar medium (in forms: atomic H, molecular H₂, and ionized H⁺).",
      "On Earth, most hydrogen is chemically bound (mainly in water, H₂O, and organic molecules); the free H₂ gas is rare and escapes to space.",
      "Hydrogen is present in every living cell, mineral, petroleum, and even volcanic and hydrothermal gases.",
      "The Earth's atmosphere contains only trace amounts of H₂ gas (about 0.00005% by volume) — it is too light to remain.",
      "In oceans, hydrogen makes up about 11% of the mass (in H₂O).",
      "Recent discoveries: large subsurface deposits of 'white hydrogen' could be a new clean energy resource.",
    ],
    table: [
      { env: "Universe", percent: "75%", comment: "Fraction of mass, mainly in stars" },
      { env: "Sun", percent: "71%", comment: "Fraction of mass (solar data)" },
      { env: "Earth's Atmosphere", percent: "<0.00005%", comment: "Free H₂ gas, extremely rare" },
      { env: "Oceans", percent: "11%", comment: "Fraction of mass (in H₂O)" },
      { env: "Earth's Crust", percent: "0.15%", comment: "Mostly in minerals, water" },
      { env: "Human body", percent: "10%", comment: "Fraction of atoms" }
    ],
    sources: (
      <span>
        Sources:&nbsp;
        <a
          href="https://www.webelements.com/hydrogen/history.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-700 hover:text-blue-900 dark:text-blue-300"
        >
          WebElements: Hydrogen
          <ArrowUpRight size={13} className="inline ml-1 -mt-0.5" />
        </a>
        , CRC Handbook, NASA, Nature, Britannica, RSC
      </span>
    )
  },
  ru: {
    title: "Встречаемость и распространённость",
    intro: (
      <>
        <b>Водород</b> — безусловный лидер по содержанию во Вселенной, играющий фундаментальную роль от звёзд до воды и органики планеты.
      </>
    ),
    facts: [
      "Водород составляет ~75% массы обычной материи (и более 90% всех атомов) во Вселенной.",
      "Основной компонент звёзд, туманностей, газовых гигантов (Jupiter, Saturn) и межзвёздной среды (в виде атомарного, молекулярного H и ионов H⁺).",
      "На Земле почти весь водород связан в воде (H₂O) и органических молекулах; свободный газообразный водород (H₂) очень редок, быстро уходит в космос.",
      "Присутствует в каждом живом организме, минералах, нефти, вулканических и гидротермальных газах.",
      "В атмосфере Земли содержание H₂ — лишь порядка 0.00005% объёма, т.к. он “убегает” из гравитации.",
      "В океане водород составляет 11% массы воды.",
      "Современные открытия: подземные скопления так называемого «белого водорода» — новый экологичный источник энергии будущего.",
    ],
    table: [
      { env: "Вселенная", percent: "75%", comment: "Доля массы — преимущественно в звёздах" },
      { env: "Солнце", percent: "71%", comment: "Доля массы по солнечным данным" },
      { env: "Атмосфера Земли", percent: "<0.00005%", comment: "Свободный газ H₂, крайне редко" },
      { env: "Океаны", percent: "11%", comment: "Доля массы (H₂O)" },
      { env: "Земная кора", percent: "0.15%", comment: "В минералах, воде" },
      { env: "Организм человека", percent: "10%", comment: "Доля атомов" }
    ],
    sources: (
      <span>
        Источники:&nbsp;
        <a
          href="https://www.webelements.com/hydrogen/history.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-700 hover:text-blue-900 dark:text-blue-300"
        >
          WebElements: Hydrogen
          <ArrowUpRight size={13} className="inline ml-1 -mt-0.5" />
        </a>
        , CRC Handbook, NASA, Nature, Britannica, RSC
      </span>
    )
  },
  uk: {
    title: "Поширеність та наявність",
    intro: (
      <>
        <b>Водень</b> — найпоширеніший елемент у Всесвіті, ключова частина зір, води та всіх органічних молекул на Землі.
      </>
    ),
    facts: [
      "Водень — ≈75% маси звичайної матерії та понад 90% усіх атомів у Всесвіті.",
      "Основний компонент зір і туманностей, атмосфер газових гігантів (Юпітер, Сатурн), а також міжзоряного простору (у вигляді атомарного, молекулярного та йонізованого H).",
      "На Землі майже весь водень — у воді та органіці, вільний газовий водень (H₂) дуже рідкісний (легко залишає атмосферу).",
      "Входить до складу кожного організму, мінералів, нафти, вулканічних і гідротермальних газів.",
      "Концентрація вільного H₂ в атмосфері всього ~0,00005% за об'ємом.",
      "В океанах водень складає 11% маси води.",
      "Підземний «білий водень» — потенційне нове екологічне паливо.",
    ],
    table: [
      { env: "Всесвіт", percent: "75%", comment: "Частка маси, переважно у зірках" },
      { env: "Сонце", percent: "71%", comment: "Частка маси (сонячні дані)" },
      { env: "Атмосфера Землі", percent: "<0.00005%", comment: "Вільний газ H₂, дуже рідко" },
      { env: "Океани", percent: "11%", comment: "Частка маси у воді (H₂O)" },
      { env: "Земна кора", percent: "0.15%", comment: "У мінералах, воді" },
      { env: "Організм людини", percent: "10%", comment: "Частка атомів" }
    ],
    sources: (
      <span>
        Джерела:&nbsp;
        <a
          href="https://www.webelements.com/hydrogen/history.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-700 hover:text-blue-900 dark:text-blue-300"
        >
          WebElements: Hydrogen
          <ArrowUpRight size={13} className="inline ml-1 -mt-0.5" />
        </a>
        , CRC Handbook, NASA, Nature, Britannica, RSC
      </span>
    )
  }
};

const HydrogenOccurrenceSection: React.FC = () => {
  const { language } = useLanguage();
  const data = occurrenceContent[language] || occurrenceContent.en;

  return (
    <section className="space-y-5">
      {/* ВИЗУАЛЬНЫЙ ОБЗОР — плашки, сразу под заголовком */}
      <HydrogenOccurrenceVisualBlock />
      {/* Заголовок */}
      <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-200 flex items-center gap-2 mt-2">
        <PieChart size={20} className="inline mb-1" />
        {data.title}
      </h2>
      <div className="text-[15px] md:text-base mb-2">{data.intro}</div>
      {/* Основные факты */}
      <ul className="list-disc pl-5 marker:text-indigo-500 text-[15px] space-y-1 mb-2">
        {data.facts.map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>
      {/* ГРАФИК BAR CHART — наглядный сравнительный */}
      <HydrogenUniverseBarChart />
      {/* Таблица сравнительных данных */}
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[370px] border border-indigo-100 dark:border-indigo-800 mx-auto rounded text-[12px]">
          <thead>
            <tr className="bg-indigo-100 dark:bg-gray-800 text-indigo-900 dark:text-indigo-200">
              <th className="p-1 text-left"><Table2 size={13} className="inline mr-1" />Environment</th>
              <th className="p-1">H fraction</th>
              <th className="p-1 text-left">Comment</th>
            </tr>
          </thead>
          <tbody>
            {data.table.map((row, i) => (
              <tr key={row.env} className={i % 2 ? "bg-indigo-50 dark:bg-gray-900/40" : ""}>
                <td className="p-1">{row.env}</td>
                <td className="p-1 text-center">{row.percent}</td>
                <td className="p-1">{row.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-0 text-[12px] text-gray-600 dark:text-gray-400">{data.sources}</div>
      {/* БЛОК ПРО ПРИРОДНЫЕ ФОРМЫ ВСТРЕЧАЕМОСТИ */}
      <HydrogenNaturalOccurrenceSection />
    </section>
  );
};

export default HydrogenOccurrenceSection;

