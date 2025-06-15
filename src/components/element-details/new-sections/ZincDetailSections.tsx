
import React from "react";
import ZincPhysicalConstantsSection from "./ZincPhysicalConstantsSection";
import ZincOxStatesSection from "./ZincOxStatesSection";
import ZincReactivitySection from "./ZincReactivitySection";
import ZincNaturalOccurrenceSection from "./ZincNaturalOccurrenceSection";
import ZincIsotopesSection from "./ZincIsotopesSection";
import ZincHistorySection from "./ZincHistorySection";
import ZincInterestingFactsSection from "./ZincInterestingFactsSection";
import ZincExtractionSection from "./ZincExtractionSection";
import ZincCommercialUsesSection from "./ZincCommercialUsesSection";
import ZincSafetySection from "./ZincSafetySection";

const ZincDetailSections: React.FC = () => {
  return (
    <>
      <ZincPhysicalConstantsSection />
      <ZincOxStatesSection />
      <ZincReactivitySection />
      <ZincNaturalOccurrenceSection />
      <ZincIsotopesSection />
      <ZincHistorySection />
      <ZincInterestingFactsSection />
      <ZincExtractionSection />
      <ZincCommercialUsesSection />
      <ZincSafetySection />
    </>
  );
};

export default ZincDetailSections;
