
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { HeartHandshake, Activity } from "lucide-react";
import HydrogenBioVisualBlock from "./HydrogenBioVisualBlock";

const bioContent = {
  en: {
    title: "Biological Role & Toxicity",
    facts: [
      "Essential for all life: part of every organic molecule and water.",
      "Hydrogen is not toxic, but hydrogen gas (H₂) can asphyxiate by displacing oxygen in confined spaces.",
      "<b>Biological functions:</b> involved in energy transfer (NADH/NADPH), acid-base homeostasis, and proton gradients.",
      "No official exposure limit; asphyxiation risk if oxygen is low.",
      "Some hydrogen compounds (e.g., H₂S, PH₃) are highly toxic!",
      "Investigated as antioxidant and for medical therapy (e.g., ischemia, inflammation)."
    ],
    sources: "Sources: CRC Handbook, Medical chemistry, scientific articles"
  },
  ru: {
    title: "Биологическая роль и токсичность",
    facts: [
      "Необходим для всей жизни: входит в состав воды и всех органических молекул.",
      "Водород не токсичен, но газ H₂ может вызвать удушье, вытеснив кислород.",
      "<b>Функции:</b> участие в переносе энергии (NADH/NADPH), кислотно-щелочном балансе, протонных градиентах.",
      "Официальных норм не установлено; опасность удушья при низком кислороде.",
      "Некоторые соединения (H₂S, PH₃) — чрезвычайно токсичны.",
      "Изучается как антиоксидант и для медицинских целей (ишемия, воспаления и др.)."
    ],
    sources: "Источники: CRC Handbook, медицинская химия, научные статьи"
  },
  uk: {
    title: "Біологічна роль і токсичність",
    facts: [
      "Необхідний для життя: є в складі води та органіки.",
      "Водень не є токсичним, але газ H₂ може спричинити задуху (витіснення кисню).",
      "<b>Біофункції:</b> перенос енергії (NADH/NADPH), кислотно-лужний баланс, протонні градієнти.",
      "Офіційних лімітів впливу немає; ризик асфіксії при низькому O₂.",
      "Деякі сполуки (H₂S, PH₃) дуже токсичні!",
      "Досліджується як антиоксидант, терапія (ішемія, запалення)."
    ],
    sources: "Джерела: CRC Handbook, медична хімія, наукові статті"
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
            className="list-disc pl-4 space-y-1 marker:text-rose-500"
            dangerouslySetInnerHTML={{
              __html: data.facts.map(f => `<li>${f}</li>`).join('')
            }}
          />
          <div className="mt-2 text-[11px] text-gray-500">{data.sources}</div>
        </CardContent>
      </Card>
      <HydrogenBioVisualBlock />
    </section>
  );
};

export default HydrogenBioSection;
