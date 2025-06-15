
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { HeartHandshake, Activity, Table } from "lucide-react";
import HydrogenBioVisualBlock from "./HydrogenBioVisualBlock";

const bioContent = {
  en: {
    title: "Biological Role & Toxicity",
    facts: [
      "Hydrogen is indispensable for all known life forms: it constitutes about 63% of human body atoms (by count).",
      "Component of water, proteins, DNA/RNA, carbohydrates, and fats.",
      "No toxicity for molecular hydrogen itself, but it can displace oxygen and cause asphyxiation in confined spaces.",
      "Essential for acid-base balance: protons (H⁺) regulate pH of body fluids.",
      "Participation in ATP energy transfer via proton gradients (mitochondria, photosynthesis).",
      "NADH/NADPH hydrogen atoms are key in biochemical redox (energy) reactions.",
      "Hydrogen breath tests are used for diagnosing gastrointestinal disorders (e.g., lactose intolerance).",
      "Hydrogen-rich water and H₂ gas are being investigated as antioxidants in medical therapy for ischemia, inflammation, and neurodegeneration.",
      "Exposure to hydrogen sulfide (H₂S) or phosphine (PH₃) is highly toxic—hydrogen *compounds* may be extremely dangerous.",
      "Hydrogen metabolism in bacteria: many microbes produce or consume H₂ as part of their energy cycle."
    ],
    table: [
      { effect: "Asphyxiation risk (H₂ gas)", comment: "In high concentrations—displaces oxygen in air" },
      { effect: "Not carcinogenic", comment: "No evidence for mutagenicity or carcinogenicity" },
      { effect: "Hydrogen therapy", comment: "Possible benefits as antioxidant (research ongoing)" },
      { effect: "Toxic compounds", comment: "H₂S, PH₃, HF – highly toxic, handle with care!" }
    ],
    sources: "Sources: CRC Handbook, medical chemistry, scientific articles, WHO"
  },
  ru: {
    title: "Биологическая роль и токсичность",
    facts: [
      "Водород необходим для всей жизни: до 63% атомов в теле человека — H.",
      "Входит в воду, белки, ДНК/РНК, жиры, углеводы.",
      "Сам водород не токсичен, но может вытеснять кислород в замкнутых помещениях, вызывая удушье.",
      "Активно регулирует кислотно-щелочной баланс (рН), как протоны H⁺.",
      "Участвует в энергетических потоках: АТФ, митохондрии, фотосинтез.",
      "NADH/NADPH переносят атомы водорода в реакциях клеток.",
      "Используется в гидроген-дыхательных тестах и клинической диагностике.",
      "H₂O и газовый H₂ исследуются как потенциальные антиоксиданты.",
      "Соединения H₂S, PH₃, HF – чрезвычайно ядовиты, обращение крайне осторожно!",
      "Микроорганизмы работают с H₂ — обмен и выделение."
    ],
    table: [
      { effect: "Риск удушья (H₂)", comment: "При высоких концентрациях — вытеснение O₂" },
      { effect: "Не канцерогенен", comment: "Нет данных о канцерогенности водорода" },
      { effect: "Терапия H₂", comment: "Перспектива как антиоксидант (исследуется)" },
      { effect: "Ядовитые соединения", comment: "H₂S, PH₃, HF – опасны!" }
    ],
    sources: "Источники: Справочник CRC, медицинская химия, научные статьи, ВОЗ"
  },
  uk: {
    title: "Біологічна роль і токсичність",
    facts: [
      "Водень — незамінний елемент для всіх форм життя (63% атомів тіла людини — H).",
      "Складова води, білків, ДНК, жирів і вуглеводів.",
      "Молекулярний водень не токсичний, але може розріджувати повітря (асфіксія).",
      "Регулює кислотно-лужний баланс (рН, H⁺).",
      "Важлива роль у передачі енергії: АТФ, мітохондрії.",
      "НАДН/NADPH переносять H в реакціях.",
      "Дихальні тести з воднем — частина клінічної діагностики.",
      "H₂, H₂O — перспективні антиоксиданти.",
      "Сполуки H₂S, PH₃, HF — дуже токсичні!",
      "Бактерії виробляють і споживають H₂."
    ],
    table: [
      { effect: "Ризик асфіксії (H₂)", comment: "Високі концентрації — витіснення O₂" },
      { effect: "Не є канцерогеном", comment: "Немає даних щодо канцерогенності" },
      { effect: "Терапія H₂", comment: "Потенціал як антиоксидант (дослідження)" },
      { effect: "Токсичні сполуки", comment: "H₂S, PH₃, HF – дуже токсичні!" }
    ],
    sources: "Джерела: CRC Handbook, медична хімія, наукові статті, WHO"
  }
};

const HydrogenBioSection: React.FC = () => {
  const { language } = useLanguage();
  const locale = bioContent[language] ? language : "en";
  const data = bioContent[locale];

  return (
    <section>
      <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-200">
        <Activity size={19} className="shrink-0" />
        {data.title}
      </h2>
      <Card className="mb-4 border-rose-200 dark:border-rose-700">
        <CardHeader className="bg-rose-50 dark:bg-gray-800 py-3 px-4">
          <CardTitle className="text-base flex items-center gap-2 text-rose-700 dark:text-rose-200">
            <HeartHandshake size={16} />
            {data.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-xs">
          <ul
            className="list-disc pl-4 space-y-1 marker:text-rose-500 mb-4"
            dangerouslySetInnerHTML={{
              __html: data.facts.map(f => `<li>${f}</li>`).join('')
            }}
          />
          <div className="overflow-x-auto">
            <table className="min-w-[320px] border border-rose-100 dark:border-rose-700 mx-auto rounded text-[11px]">
              <thead>
                <tr className="bg-rose-100 dark:bg-gray-800 text-rose-900 dark:text-rose-200">
                  <th className="p-1 text-left"><Table size={12} className="inline mr-1" />Effect</th>
                  <th className="p-1 text-left">Comment</th>
                </tr>
              </thead>
              <tbody>
                {data.table.map((row, i) => (
                  <tr key={row.effect} className={i % 2 ? "bg-rose-50 dark:bg-gray-900/40" : ""}>
                    <td className="p-1 font-semibold">{row.effect}</td>
                    <td className="p-1">{row.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
        </CardContent>
      </Card>
      <HydrogenBioVisualBlock />
    </section>
  );
};

export default HydrogenBioSection;
