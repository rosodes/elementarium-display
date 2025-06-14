
import React from "react";
import { Element } from "../../data/elementTypes";
import { useLanguage } from "../../context/LanguageContext";
import { AlertCircle, Sparkles } from "lucide-react";

// Расширенный набор информации по токсичности, экологии и реакционности
const elementToxicityData: Record<
  string,
  {
    toxicity?: string;
    bioRole?: string;
    precautions?: string;
    ecologicalImpact?: string;
    reactivity?: string;
  }
> = {
  "Neon": {
    toxicity: "Neon is a chemically inert noble gas and is considered non-toxic and environmentally harmless.",
    bioRole: "Neon has no known biological role in living organisms.",
    precautions: "No special precautions are needed under normal handling; asphyxiation possible in closed spaces.",
    ecologicalImpact: "No environmental impact; does not react in atmosphere or biosphere.",
    reactivity: "Very low. Forms no stable compounds under normal conditions."
  },
  "Lead": {
    toxicity: "Lead is toxic to humans and animals, affecting the nervous system and organs.",
    bioRole: "Lead has no biological role and is a potent neurotoxin.",
    precautions: "Avoid inhalation and ingestion. Use protective gear when handling compounds or dust.",
    ecologicalImpact: "Persistent environmental pollutant; accumulates in soils and organisms.",
    reactivity: "Reacts with acids; forms lead compounds that may be more toxic."
  },
  "Mercury": {
    toxicity: "Mercury and its compounds are highly toxic, especially as vapor or methylmercury.",
    bioRole: "Mercury has no biological role and is hazardous to health.",
    precautions: "Handle only in well-ventilated areas and avoid skin contact. Mercury spills require special cleanup.",
    ecologicalImpact: "Bioaccumulates; can be converted to highly toxic methylmercury in aquatic systems.",
    reactivity: "Forms amalgams with metals; reacts with sulfur and some acids."
  },
  "Arsenic": {
    toxicity: "Arsenic is extremely poisonous in elemental and compound form.",
    bioRole: "Arsenic is not essential for humans; some organisms use trace amounts.",
    precautions: "Use gloves and avoid inhalation of dust. Arsenic compounds must be labeled as hazardous.",
    ecologicalImpact: "Contaminates groundwater; long-term threat to human and ecosystem health.",
    reactivity: "Oxidizes in air, forms various oxides and acids; reacts with halogens."
  },
  "Hydrogen": {
    toxicity: "Hydrogen is not toxic, but can be an asphyxiant at high concentrations.",
    bioRole: "No direct biological role, but is part of water and all organic molecules.",
    precautions: "Highly flammable; use in well-ventilated areas away from ignition sources.",
    ecologicalImpact: "No direct negative ecological impact; important in energy cycles.",
    reactivity: "Highly reactive gas, especially with oxygen; forms water explosively."
  },
};

interface Props {
  element: Element;
}
const AdditionalInfo: React.FC<Props> = ({ element }) => {
  const { t } = useLanguage();

  const toxData = elementToxicityData[element.name ?? ""] || {};

  const hasAnyToxData = toxData.toxicity || toxData.bioRole || toxData.precautions;
  const hasAnyEcoData = toxData.ecologicalImpact || toxData.reactivity;

  return (
    <div>
      {element.summary && (
        <p className="mb-2">{element.summary}</p>
      )}
      {/* Токсичность и безопасность */}
      <div className="mt-3">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="text-amber-400 w-5 h-5" />
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {t.elementDetails?.toxicityInfo || "Toxicity & Safety"}
          </span>
        </div>
        {hasAnyToxData ? (
          <ul className="ml-2 space-y-1 text-xs text-gray-700 dark:text-gray-200">
            {toxData.toxicity && (
              <li>
                <span className="font-medium">{t.elementDetails?.toxicityInfo || "Toxicity"}:</span>{" "}
                {toxData.toxicity}
              </li>
            )}
            {toxData.bioRole && (
              <li>
                <span className="font-medium">{t.elementDetails?.bioRole || "Biological role"}:</span>{" "}
                {toxData.bioRole}
              </li>
            )}
            {toxData.precautions && (
              <li>
                <span className="font-medium">{t.elementDetails?.precautions || "Precautions"}:</span>{" "}
                {toxData.precautions}
              </li>
            )}
          </ul>
        ) : (
          <span className="text-xs text-gray-500 italic">{t.elementDetails?.noToxicityInfo || "No significant toxicity or precaution information."}</span>
        )}
      </div>

      {/* Экология и реакционная способность */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="text-green-500 w-5 h-5" />
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {t.elementDetails?.ecologyInfo || "Ecology & Reactivity"}
          </span>
        </div>
        {hasAnyEcoData ? (
          <ul className="ml-2 space-y-1 text-xs text-gray-700 dark:text-gray-200">
            {toxData.ecologicalImpact && (
              <li>
                <span className="font-medium">{t.elementDetails?.ecologicalImpact || "Ecological impact"}:</span>{" "}
                {toxData.ecologicalImpact}
              </li>
            )}
            {toxData.reactivity && (
              <li>
                <span className="font-medium">{t.elementDetails?.reactivity || "Reactivity"}:</span>{" "}
                {toxData.reactivity}
              </li>
            )}
          </ul>
        ) : (
          <span className="text-xs text-gray-500 italic">{t.elementDetails?.noEcologyInfo || "No significant ecological or reactivity information yet."}</span>
        )}
      </div>
    </div>
  );
};

export default AdditionalInfo;
