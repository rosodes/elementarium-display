
import React from "react";
import NeonPhysicalConstantsSection from "./NeonPhysicalConstantsSection";
import NeonOxStatesSection from "./NeonOxStatesSection";
import NeonReactivitySection from "./NeonReactivitySection";
import NeonNaturalOccurrenceSection from "./NeonNaturalOccurrenceSection";
import NeonIsotopesSection from "./NeonIsotopesSection";
import NeonHistorySection from "./NeonHistorySection";
import NeonInterestingFactsSection from "./NeonInterestingFactsSection";
import NeonExtractionSection from "./NeonExtractionSection";
import NeonCommercialUsesSection from "./NeonCommercialUsesSection";
import NeonSafetySection from "./NeonSafetySection";

const NeonDetailSections: React.FC = () => {
  return (
    <>
      <NeonPhysicalConstantsSection />
      <NeonOxStatesSection />
      <NeonReactivitySection />
      <NeonNaturalOccurrenceSection />
      <NeonIsotopesSection />
      <NeonHistorySection />
      <NeonInterestingFactsSection />
      <NeonExtractionSection />
      <NeonCommercialUsesSection />
      <NeonSafetySection />
    </>
  );
};

export default NeonDetailSections;
