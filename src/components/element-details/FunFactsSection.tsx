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
  "Carbon": [
    "Carbon exists in several allotropes, including diamond, graphite, and graphene.",
    "Every known lifeform is carbon-based.",
    "Carbon's fourth most abundant element in the universe by mass.",
    "The word 'carbon' comes from Latin 'carbo', meaning coal."
  ],
  "Nitrogen": [
    "Makes up 78% of Earth's atmosphere by volume.",
    "Discovered by Daniel Rutherford in 1772.",
    "Liquid nitrogen is used as a coolant and looks like a foggy, boiling fluid.",
    "Essential for all living things."
  ],
  "Iron": [
    "Iron is the most used metal by mass worldwide.",
    "Stellar fusion in massive stars produces iron before a supernova.",
    "Earth's core is believed to be mainly iron and nickel.",
    "Iron turns red when rusted due to oxidation."
  ],
  "Copper": [
    "Copper was the first metal to be used by humans over 10,000 years ago.",
    "Pure copper is reddish-orange and highly conductive.",
    "The Statue of Liberty is made of copper and has turned green due to patina.",
    "Copper's symbol Cu comes from the Latin 'cuprum.'"
  ],
  "Chlorine": [
    "Chlorine is a greenish-yellow gas at room temperature.",
    "First used as a poison gas weapon in World War I.",
    "Added to drinking water for disinfection.",
    "Its name comes from the Greek 'chloros', meaning greenish-yellow."
  ],
  "Gold": [
    "Gold is the most malleable and ductile metal known.",
    "A single gold gram can be beaten into a sheet 1 square meter in area.",
    "Used for thousands of years as money and ornament.",
    "Gold is edible and used on luxury desserts as gold leaf."
  ],
  "Helium": [
    "Helium was discovered in the sun before it was found on Earth.",
    "Helium is the second lightest element.",
    "Because it's lighter than air, helium makes balloons float.",
    "Unlike hydrogen, helium does not burn, so it's used in airships."
  ],
  "Lithium": [
    "Lithium is the lightest metal and can float on oil.",
    "It is used in rechargeable batteries for smartphones and laptops.",
    "Lithium salts are used as mood stabilizers.",
    "When placed in a flame, lithium produces a bright red color."
  ],
  "Beryllium": [
    "Beryllium is two-thirds the density of aluminum but much stiffer.",
    "X-ray windows are made from beryllium because it's nearly transparent to X-rays.",
    "Astronauts' spacesuit visors sometimes use beryllium for strength.",
    "It was once used in gemstones called emeralds (as part of beryl minerals)."
  ],
  "Boron": [
    "Boron helps plants grow and is an essential micronutrient for them.",
    "Boron fibers are used to strengthen aerospace structures.",
    "Boron nitride is harder than diamond in some forms.",
    "Silly Putty owes its unique properties to boron compounds."
  ],
  "Fluorine": [
    "Fluorine is the most reactive of all elements.",
    "Teflon, the non-stick coating, contains fluorine atoms.",
    "Even water can burn in fluorine gas!",
    "Fluoride in toothpaste helps prevent tooth decay."
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
