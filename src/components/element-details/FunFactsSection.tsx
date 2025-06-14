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
  "Oxygen": [
    "Oxygen makes up about 21% of Earth's atmosphere.",
    "Nearly two-thirds of the mass of the human body is oxygen.",
    "Liquid and solid oxygen are pale blue in color.",
    "Oxygen was independently discovered by Carl Scheele and Joseph Priestley."
  ],
  "Sodium": [
    "Sodium was first isolated by Humphry Davy in 1807 using electrolysis.",
    "The symbol Na comes from the Latin word 'natrium.'",
    "Sodium is so reactive it must be stored under oil.",
    "It's a key component in table salt (NaCl)."
  ],
  "Mercury": [
    "Mercury is the only metal that's liquid at room temperature.",
    "Also called 'quick silver,' it was used in thermometers and barometers.",
    "Mercury's symbol Hg comes from the Latin name 'hydrargyrum', meaning 'water-silver'."
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
