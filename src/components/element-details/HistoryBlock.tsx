import React from "react";
import { Element } from "../../data/elementTypes";
import { useLanguage } from "../../context/LanguageContext";
import { BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

// Историческая справка: имя, год, страна, ученые, контекст
const knownDiscoverers: Record<string, { year: string, country: string, discoverer: string, context: string }> = {
  "Neon": {
    year: "1898",
    country: "United Kingdom",
    discoverer: "Sir William Ramsay, Morris Travers",
    context: "Discovered during experiments separating components of liquefied air. Named from Greek 'neos' (new)."
  },
  // Можно добавить остальных, когда потребуется
};

type Props = { element: Element };

const HistoryBlock = ({ element }: Props) => {
  const { t } = useLanguage();

  const historical = knownDiscoverers[element.name];

  if (!historical) return null;

  return (
    <Card className="border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm my-4">
      <CardHeader className="flex flex-col items-center pb-2 pt-4">
        <BookOpen className="h-5 w-5 mb-1" />
        <CardTitle className="text-sm font-medium text-center">{t.elementDetails.tabs.history || "History"}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-center text-gray-600 dark:text-gray-300 mb-2">
          <b>{t.elementDetails.discovered || "Discovered"}:</b> {historical.year}
          <br />
          <b>{t.elementDetails.is || "By"}:</b> {historical.discoverer}
          <br />
          <b>{t.elementDetails.additionalInfo || "Country"}:</b> {historical.country}
        </p>
        <p className="text-xs text-center text-gray-600 dark:text-gray-300">{historical.context}</p>
      </CardContent>
    </Card>
  );
};

export default HistoryBlock;
