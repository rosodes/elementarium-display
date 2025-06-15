
import React from "react";
import CobaltPhysicalConstantsSection from "./CobaltPhysicalConstantsSection";
import CobaltOxStatesSection from "./CobaltOxStatesSection";
import CobaltReactivitySection from "./CobaltReactivitySection";
import CobaltNaturalOccurrenceSection from "./CobaltNaturalOccurrenceSection";
import CobaltIsotopesSection from "./CobaltIsotopesSection";
import CobaltHistorySection from "./CobaltHistorySection";
import CobaltInterestingFactsSection from "./CobaltInterestingFactsSection";
import CobaltExtractionSection from "./CobaltExtractionSection";
import CobaltCommercialUsesSection from "./CobaltCommercialUsesSection";
import CobaltSafetySection from "./CobaltSafetySection";

const CobaltDetailSections: React.FC = () => {
  return (
    <>
      <CobaltPhysicalConstantsSection />
      <CobaltOxStatesSection />
      <CobaltReactivitySection />
      <CobaltNaturalOccurrenceSection />
      <CobaltIsotopesSection />
      <CobaltHistorySection />
      <CobaltInterestingFactsSection />
      <CobaltExtractionSection />
      <CobaltCommercialUsesSection />
      <CobaltSafetySection />
    </>
  );
};

export default CobaltDetailSections;
