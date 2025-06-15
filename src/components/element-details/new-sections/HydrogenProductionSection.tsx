import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Factory, Repeat2, Table } from "lucide-react";
import HydrogenProductionVisualBlock from "./HydrogenProductionVisualBlock";

const productionContent = {
  en: {
    title: "Production & Synthesis",
    facts: [
      "Steam methane reforming (SMR) is the primary method for industrial hydrogen, accounting for about 48% of global H₂ output: CH₄ + H₂O → CO + 3H₂.",
      "Electrolysis of water is expanding as costs fall and renewable energy expands: H₂O + electricity → H₂ + ½O₂ ('green hydrogen').",
      "Coal gasification and partial oxidation of hydrocarbons contribute significant amounts, mostly in China and elsewhere.",
      "The chloralkali process (NaCl electrolysis) produces hydrogen as a by-product.",
      "Hydrogen can also be generated using biomass gasification, photocatalytic water splitting (mimicking photosynthesis), and microbial processes.",
      "Laboratory methods: metals such as zinc or iron react with acids to release hydrogen (Zn + 2HCl → ZnCl₂ + H₂).",
      "Annual global hydrogen production (2022) is ~94 million tonnes; >50% is used for ammonia (NH₃) production, ~30% for oil refining, ~8% methanol, rest for electronics, glass, food, etc.",
      "Only ~0.1% of global hydrogen is made via renewables/electrolysis compared to fossil sources — decarbonizing this is a priority ('hydrogen economy').",
      "Purification techniques include pressure swing adsorption (PSA), membrane separation, and cryogenic distillation.",
      "Hydrogen is stored as compressed gas, cryogenic liquid, or chemically in metal hydrides/ammonia.",
      "Future: nuclear fusion (experimental, with deuterium or tritium) may provide vast amounts of energy using hydrogen isotopes.",
    ],
    table: [
      { method: "Steam Methane Reforming", share: "48%", note: "Natural gas; produces CO₂ unless captured" },
      { method: "Oil / Refineries", share: "30%", note: "By-product of hydrocracking and desulfurization" },
      { method: "Coal Gasification", share: "18%", note: "Main source in China, high CO₂ footprint" },
      { method: "Electrolysis (Green H₂)", share: "0.1%", note: "Renewable, zero emission, rapidly growing" },
      { method: "Biomass, photolysis etc.", share: "~4%", note: "Emerging, less common; e.g. microbial" },
    ],
    sources: "Sources: IEA, DOE Hydrogen Program, WebElements, Wikipedia, Science"
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
