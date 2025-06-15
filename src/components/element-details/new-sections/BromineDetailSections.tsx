
import React from "react";
import BrominePhysicalConstantsSection from "./BrominePhysicalConstantsSection";
import BromineOxStatesSection from "./BromineOxStatesSection";
import BromineReactivitySection from "./BromineReactivitySection";
import BromineNaturalOccurrenceSection from "./BromineNaturalOccurrenceSection";
import BromineIsotopesSection from "./BromineIsotopesSection";
import BromineHistorySection from "./BromineHistorySection";
import BromineInterestingFactsSection from "./BromineInterestingFactsSection";
import BromineExtractionSection from "./BromineExtractionSection";
import BromineCommercialUsesSection from "./BromineCommercialUsesSection";
import BromineSafetySection from "./BromineSafetySection";

const BromineDetailSections: React.FC = () => {
  return (
    <>
      <BrominePhysicalConstantsSection />
      <BromineOxStatesSection />
      <BromineReactivitySection />
      <BromineNaturalOccurrenceSection />
      <BromineIsotopesSection />
      <BromineHistorySection />
      <BromineInterestingFactsSection />
      <BromineExtractionSection />
      <BromineCommercialUsesSection />
      <BromineSafetySection />
    </>
  );
};

export default BromineDetailSections;
