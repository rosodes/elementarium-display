import React from "react";
import { Element } from "../../data/elementTypes";
import { useLanguage } from "../../context/LanguageContext";
import { AlertCircle, Sparkles } from "lucide-react";
import FunFactsSection from "./FunFactsSection";

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
  "Oxygen": {
    toxicity: "Oxygen is essential for life but can be toxic at high partial pressures.",
    bioRole: "Crucial for aerobic respiration in most living organisms.",
    precautions: "Avoid high oxygen concentrations under pressure; can promote combustion.",
    ecologicalImpact: "Vital for Earth's ecosystems; part of the oxygen cycle.",
    reactivity: "Highly reactive, supports combustion, forms oxides with most elements."
  },
  "Sodium": {
    toxicity: "Pure sodium is highly reactive and burns on contact with water or moist air.",
    bioRole: "Essential mineral for nerve and muscle function in animals.",
    precautions: "Handle in oil or inert atmosphere; never touch with wet hands.",
    ecologicalImpact: "Not environmentally hazardous as a mineral salt; pure form dangerous to aquatic life.",
    reactivity: "Reacts explosively with water, forming sodium hydroxide and hydrogen."
  },
  "Carbon": {
    toxicity: "Elemental carbon is generally non-toxic, but some forms (fine dust) can be harmful if inhaled.",
    bioRole: "Carbon is essential for all known life; forms the backbone of organic molecules.",
    precautions: "Avoid inhaling dust (especially charcoal or carbon black).",
    ecologicalImpact: "Carbon is a key part of Earth's carbon cycle; excess CO₂ is a climate concern.",
    reactivity: "Relatively unreactive at room temperature; reacts with oxygen when burned."
  },
  "Nitrogen": {
    toxicity: "Non-toxic and inert at standard conditions, but can cause asphyxiation in confined spaces.",
    bioRole: "Vital element for all organisms—found in proteins and DNA.",
    precautions: "Avoid confined spaces with nitrogen gas—risk of oxygen displacement.",
    ecologicalImpact: "Key nutrient; excessive nitrogen in fertilizers leads to water pollution.",
    reactivity: "Inert as N₂ molecule, but reactive as part of compounds (e.g., ammonia, nitrates)."
  },
  "Iron": {
    toxicity: "Essential in small quantities, but toxic in excess (especially in supplement form).",
    bioRole: "Carries oxygen in blood (hemoglobin); vital for life.",
    precautions: "Avoid excessive intake; toxic to aquatic life in large concentrations.",
    ecologicalImpact: "Rusts readily, entering soils and waters; generally low ecological toxicity.",
    reactivity: "Reacts with oxygen and water (rusts easily); forms many important alloys."
  },
  "Copper": {
    toxicity: "Essential trace element, but toxic in large amounts to humans and aquatic life.",
    bioRole: "Important in enzymes and cellular respiration.",
    precautions: "Minimize dust inhalation and ingestion of large quantities.",
    ecologicalImpact: "Can accumulate in water and soils, affecting aquatic organisms.",
    reactivity: "Forms patina in moist air; reacts with acids and bases."
  },
  "Chlorine": {
    toxicity: "Toxic and corrosive gas; irritates eyes and lungs; dangerous in high concentrations.",
    bioRole: "Important for life in ionic form (Cl⁻); no role for elemental gas.",
    precautions: "Handle only in ventilated areas; avoid inhalation and skin contact.",
    ecologicalImpact: "Used as disinfectant; can form harmful byproducts in water.",
    reactivity: "Highly reactive; forms chlorides with most elements."
  },
  "Gold": {
    toxicity: "Gold metal is non-toxic and safe for use in food and electronics.",
    bioRole: "No known biological function; considered biologically inert.",
    precautions: "Gold salts can be toxic if ingested.",
    ecologicalImpact: "Mining and extraction impact environment; metal itself is not harmful.",
    reactivity: "Chemically inert; does not oxidize under normal conditions."
  },
};

// Секция токсичности
const ToxicitySection: React.FC<{ toxData: any; t: any }> = ({ toxData, t }) => {
  const hasAnyToxData = toxData.toxicity || toxData.bioRole || toxData.precautions;
  return (
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
  );
};


// Секция экологии и реакционности
const EcologySection: React.FC<{ toxData: any; t: any }> = ({ toxData, t }) => {
  const hasAnyEcoData = toxData.ecologicalImpact || toxData.reactivity;
  return (
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
  );
};

interface Props {
  element: Element;
}
const AdditionalInfo: React.FC<Props> = ({ element }) => {
  const { t } = useLanguage();

  const toxData = elementToxicityData[element.name ?? ""] || {};

  return (
    <div>
      {element.summary && (
        <p className="mb-2">{element.summary}</p>
      )}

      <ToxicitySection toxData={toxData} t={t} />
      <EcologySection toxData={toxData} t={t} />
      <FunFactsSection element={element} />
    </div>
  );
};

export default AdditionalInfo;
