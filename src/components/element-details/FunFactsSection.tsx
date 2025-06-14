
import React from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Element } from "../../data/elementTypes";

// Пример структуры фактов (добавляйте по мере необходимости)
const elementFunFacts: Record<string, string[]> = {
  "Hydrogen": [
    "Hydrogen is the only element that doesn't have neutrons in its most common isotope.",
    "It makes up about 75% of the normal matter in the universe.",
    "Hydrogen is used as fuel in some rockets."
  ],
  "Lead": [
    "Lead was used in Roman water pipes and cosmetics.",
    "The symbol Pb comes from the Latin word 'plumbum.'",
    "Lead is one of the few metals that is not a good electricity conductor."
  ],
};

interface FunFactsSectionProps {
  element: Element;
}

const FunFactsSection: React.FC<FunFactsSectionProps> = ({ element }) => {
  const { t } = useLanguage();
  const facts = elementFunFacts[element.name ?? ""] || [];

  if (!facts.length) {
    return (
      <div className="mt-3">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="text-yellow-400 w-5 h-5" />
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {t.elementDetails?.funFacts || "Fun Facts"}
          </span>
        </div>
        <div className="text-xs text-gray-500 italic">{t.elementDetails?.notAvailable}</div>
      </div>
    );
  }

  return (
    <div className="mt-3">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="text-yellow-400 w-5 h-5" />
        <span className="font-semibold text-gray-700 dark:text-gray-200">
          {t.elementDetails?.funFacts || "Fun Facts"}
        </span>
      </div>
      <ul className="ml-4 list-disc text-xs text-gray-700 dark:text-gray-200 space-y-1">
        {facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default FunFactsSection;

