
import React from "react";
import FluorinePhysicalConstantsSection from "./FluorinePhysicalConstantsSection";
import FluorineOxStatesSection from "./FluorineOxStatesSection";
import FluorineReactivitySection from "./FluorineReactivitySection";
import FluorineNaturalOccurrenceSection from "./FluorineNaturalOccurrenceSection";
import FluorineIsotopesSection from "./FluorineIsotopesSection";
import FluorineHistorySection from "./FluorineHistorySection";
import FluorineInterestingFactsSection from "./FluorineInterestingFactsSection";
import FluorineExtractionSection from "./FluorineExtractionSection";
import FluorineCommercialUsesSection from "./FluorineCommercialUsesSection";
import FluorineSafetySection from "./FluorineSafetySection";

const FluorineDetailSections: React.FC = () => {
  return (
    <>
      <FluorinePhysicalConstantsSection />
      <FluorineOxStatesSection />
      <FluorineReactivitySection />
      <FluorineNaturalOccurrenceSection />
      <FluorineIsotopesSection />
      <FluorineHistorySection />
      <FluorineInterestingFactsSection />
      <FluorineExtractionSection />
      <FluorineCommercialUsesSection />
      <FluorineSafetySection />
    </>
  );
};

export default FluorineDetailSections;
