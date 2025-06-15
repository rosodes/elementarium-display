
import React from "react";
import NitrogenPhysicalConstantsSection from "./NitrogenPhysicalConstantsSection";
import NitrogenOxStatesSection from "./NitrogenOxStatesSection";
import NitrogenReactivitySection from "./NitrogenReactivitySection";
import NitrogenNaturalOccurrenceSection from "./NitrogenNaturalOccurrenceSection";
import NitrogenIsotopesSection from "./NitrogenIsotopesSection";
import NitrogenHistorySection from "./NitrogenHistorySection";
import NitrogenInterestingFactsSection from "./NitrogenInterestingFactsSection";
import NitrogenExtractionSection from "./NitrogenExtractionSection";
import NitrogenCommercialUsesSection from "./NitrogenCommercialUsesSection";
import NitrogenSafetySection from "./NitrogenSafetySection";

const NitrogenDetailSections: React.FC = () => {
  return (
    <>
      <NitrogenPhysicalConstantsSection />
      <NitrogenOxStatesSection />
      <NitrogenReactivitySection />
      <NitrogenNaturalOccurrenceSection />
      <NitrogenIsotopesSection />
      <NitrogenHistorySection />
      <NitrogenInterestingFactsSection />
      <NitrogenExtractionSection />
      <NitrogenCommercialUsesSection />
      <NitrogenSafetySection />
    </>
  );
};

export default NitrogenDetailSections;
