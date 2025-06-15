
import React from "react";
import FluorinePhysicalConstantsSection from "./FluorinePhysicalConstantsSection";
import FluorineOxStatesSection from "./FluorineOxStatesSection";
import FluorineReactivitySection from "./FluorineReactivitySection";
import FluorineNaturalOccurrenceSection from "./FluorineNaturalOccurrenceSection";
import FluorineIsotopesSection from "./FluorineIsotopesSection";
import FluorineInterestingFactsSection from "./FluorineInterestingFactsSection";
import FluorineSafetySection from "./FluorineSafetySection";

const FluorineDetailSections: React.FC = () => (
  <>
    <FluorinePhysicalConstantsSection />
    <FluorineOxStatesSection />
    <FluorineReactivitySection />
    <FluorineNaturalOccurrenceSection />
    <FluorineIsotopesSection />
    <FluorineInterestingFactsSection />
    <FluorineSafetySection />
  </>
);

export default FluorineDetailSections;
