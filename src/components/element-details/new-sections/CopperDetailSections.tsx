
import React from "react";
import CopperPhysicalConstantsSection from "./CopperPhysicalConstantsSection";
import CopperOxStatesSection from "./CopperOxStatesSection";
import CopperReactivitySection from "./CopperReactivitySection";
import CopperNaturalOccurrenceSection from "./CopperNaturalOccurrenceSection";
import CopperIsotopesSection from "./CopperIsotopesSection";
import CopperHistorySection from "./CopperHistorySection";
import CopperInterestingFactsSection from "./CopperInterestingFactsSection";
import CopperExtractionSection from "./CopperExtractionSection";
import CopperCommercialUsesSection from "./CopperCommercialUsesSection";
import CopperSafetySection from "./CopperSafetySection";

const CopperDetailSections: React.FC = () => {
  return (
    <>
      <CopperPhysicalConstantsSection />
      <CopperOxStatesSection />
      <CopperReactivitySection />
      <CopperNaturalOccurrenceSection />
      <CopperIsotopesSection />
      <CopperHistorySection />
      <CopperInterestingFactsSection />
      <CopperExtractionSection />
      <CopperCommercialUsesSection />
      <CopperSafetySection />
    </>
  );
};

export default CopperDetailSections;
