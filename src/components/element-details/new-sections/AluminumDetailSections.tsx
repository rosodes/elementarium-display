
import React from "react";
import AluminumPhysicalConstantsSection from "./AluminumPhysicalConstantsSection";
import AluminumOxStatesSection from "./AluminumOxStatesSection";
import AluminumReactivitySection from "./AluminumReactivitySection";
import AluminumNaturalOccurrenceSection from "./AluminumNaturalOccurrenceSection";
import AluminumIsotopesSection from "./AluminumIsotopesSection";
import AluminumHistorySection from "./AluminumHistorySection";
import AluminumInterestingFactsSection from "./AluminumInterestingFactsSection";
import AluminumExtractionSection from "./AluminumExtractionSection";
import AluminumCommercialUsesSection from "./AluminumCommercialUsesSection";
import AluminumSafetySection from "./AluminumSafetySection";

const AluminumDetailSections: React.FC = () => {
  return (
    <>
      <AluminumPhysicalConstantsSection />
      <AluminumOxStatesSection />
      <AluminumReactivitySection />
      <AluminumNaturalOccurrenceSection />
      <AluminumIsotopesSection />
      <AluminumHistorySection />
      <AluminumInterestingFactsSection />
      <AluminumExtractionSection />
      <AluminumCommercialUsesSection />
      <AluminumSafetySection />
    </>
  );
};

export default AluminumDetailSections;
