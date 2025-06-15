
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Factory, Repeat2, Table } from "lucide-react";
import HydrogenProductionVisualBlock from "./HydrogenProductionVisualBlock";

const productionContent = {
  en: {
    title: "Production & Synthesis",
    facts: [
      "Steam methane reforming (SMR) is the dominant industrial source: ~48% of world H₂ uses this method (CH₄ + H₂O → CO + 3H₂).",
      "Electrolysis of water is growing rapidly, enabling production of 'green hydrogen' with renewable electricity.",
      "Coal gasification and partial oxidation of hydrocarbons provide large quantities, though not climate-friendly.",
      "By-product method: hydrogen is released during chloralkali production (NaCl electrolysis).",
      "Laboratory H₂ made by reacting metals such as Zn and Fe with acids.",
      "Annual global H₂ production (2022): ~94 million metric tons (IEA); used mainly for ammonia production (fertilizer), oil refining, and methanol.",
      "Only ~0.1% of hydrogen is currently made via renewables/electrolysis—decarbonizing the sector is a major focus.",
      "Tech: Purification can be done by pressure swing adsorption (PSA) or membrane filtration.",
      "Hydrogen can be liquefied and transported cryogenically or as a compressed gas.",
      "Fusion (future): hydrogen isotopes (deuterium/tritium) are the fuels in experimental fusion reactors (e.g., ITER)."
    ],
    table: [
      { method: "Steam Methane Reforming", share: "48%", note: "Main industrial source, fossil gas" },
      { method: "Oil / Refineries", share: "30%", note: "By-product of oil refining" },
      { method: "Coal Gasification", share: "18%", note: "Mainly in China" },
      { method: "Electrolysis (Green H₂)", share: "0.1%", note: "Growing rapidly, renewable" },
      { method: "Other / By-products", share: "~4%", note: "Chloralkali process, lab" }
    ],
    sources: "Sources: IEA, DOE Hydrogen Program, WebElements, Wikipedia"
  },
  ru: {
    title: "Производство и синтез",
    facts: [
      "Паровой риформинг метана (SMR) — основной промышленный способ (~48% мирового H₂, CH₄ + H₂O → CO + 3H₂).",
      "Электролиз воды набирает обороты, позволяет производить 'зелёный водород' с помощью ВИЭ.",
      "Газификация угля и частичное окисление также дают H₂ — но они неэкологичны.",
      "В процессе хлор-щёлочного электролиза выделяется водород как побочный продукт.",
      "В лабораториях H₂ получают действием кислот на цинк или железо.",
      "Годовое мировое производство H₂: ~94 млн тонн (2022, IEA), основное применение — NH₃, нефтепереработка, метанол.",
      "Только 0,1% водорода сейчас производится экологично — декарбонизация отрасли в фокусе.",
      "Очистка — давление и мембранные методы (PSA, фильтрация).",
      "Транспортировка: жидкий (крио), сжатый газ.",
      "Будущее: термоядерная энергетика на изотопах водорода (ITER и др.)."
    ],
    table: [
      { method: "Паровой риформинг метана", share: "48%", note: "Основной источник, природный газ" },
      { method: "Нефть / Нефтепереработка", share: "30%", note: "Побочный продукт" },
      { method: "Газификация угля", share: "18%", note: "Китай, другие регионы" },
      { method: "Электролиз", share: "0,1%", note: "Рост, экологичный H₂" },
      { method: "Прочие методы", share: "~4%", note: "Побочн. продукты, лаборатории" }
    ],
    sources: "Источники: IEA, DOE Hydrogen Program, WebElements, Wikipedia"
  },
  uk: {
    title: "Виробництво і синтез",
    facts: [
      "Парова риформінг метану — домінантний промисловий процес (~48% H₂ у світі).",
      "Електроліз води стрімко розвивається, забезпечує 'зелений водень'.",
      "Газифікація вугілля й часткове окиснення — також значні джерела.",
      "Побічний продукт електролізу NaCl (хлор-лугова промисловість).",
      "Лабораторний H₂ — реакція металу з кислотою.",
      "Світове виробництво H₂ у 2022 р. — ~94 млн тонн (IEA).",
      "Зелений H₂ — лише 0,1%, поступово зростає.",
      "Очищення: PSA, мембранні технології.",
      "Транспортування: зрідження, стиск.",
      "У майбутньому — термоядерна енергетика (ізотопи водню)."
    ],
    table: [
      { method: "Парова риформінг метану", share: "48%", note: "Головне джерело, природний газ" },
      { method: "Нафта / Переробка", share: "30%", note: "Побічний продукт" },
      { method: "Газифікація вугілля", share: "18%", note: "Переважно Китай" },
      { method: "Електроліз (зелений H₂)", share: "0,1%", note: "Зростаюча частка, екологічний H₂" },
      { method: "Інші / Побічні", share: "~4%", note: "Лабораторії, побічні процеси" }
    ],
    sources: "Джерела: IEA, DOE Hydrogen Program, WebElements, Wikipedia"
  }
};

const HydrogenProductionSection: React.FC = () => {
  const { language } = useLanguage();
  const locale = productionContent[language] ? language : "en";
  const data = productionContent[locale];

  return (
    <section>
      <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-lime-800 dark:text-lime-200">
        <Factory size={19} className="shrink-0" />
        {data.title}
      </h2>
      <Card className="mb-4 border-lime-200 dark:border-lime-700">
        <CardHeader className="bg-lime-50 dark:bg-gray-800 py-3 px-4">
          <CardTitle className="text-base flex items-center gap-2 text-lime-800 dark:text-lime-200">
            <Repeat2 size={16} />
            {data.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-xs space-y-2">
          <ul
            className="list-disc pl-4 space-y-1 marker:text-lime-600"
            dangerouslySetInnerHTML={{
              __html: data.facts.map(f => `<li>${f}</li>`).join('')
            }}
          />
          <div className="overflow-x-auto">
            <table className="min-w-[320px] border border-lime-100 dark:border-lime-700 mx-auto rounded my-2 text-[11px]">
              <thead>
                <tr className="bg-lime-100 dark:bg-gray-800 text-lime-900 dark:text-lime-200">
                  <th className="p-1 text-left"><Table size={12} className="inline mr-1" />Method</th>
                  <th className="p-1 text-center">Share</th>
                  <th className="p-1 text-left">Comment</th>
                </tr>
              </thead>
              <tbody>
                {data.table.map((row, i) => (
                  <tr key={row.method} className={i % 2 ? "bg-lime-50 dark:bg-gray-900/40" : ""}>
                    <td className="p-1 font-semibold">{row.method}</td>
                    <td className="p-1 text-center">{row.share}</td>
                    <td className="p-1">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
        </CardContent>
      </Card>
      <HydrogenProductionVisualBlock />
    </section>
  );
};

export default HydrogenProductionSection;
