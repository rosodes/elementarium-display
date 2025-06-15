
import React from "react";
import SiliconPhysicalConstantsSection from "./SiliconPhysicalConstantsSection";
import SiliconOxStatesSection from "./SiliconOxStatesSection";
import SiliconReactivitySection from "./SiliconReactivitySection";
import SiliconNaturalOccurrenceSection from "./SiliconNaturalOccurrenceSection";
import SiliconIsotopesSection from "./SiliconIsotopesSection";
import SiliconHistorySection from "./SiliconHistorySection";
import SiliconInterestingFactsSection from "./SiliconInterestingFactsSection";
import SiliconExtractionSection from "./SiliconExtractionSection";
import SiliconCommercialUsesSection from "./SiliconCommercialUsesSection";
import SiliconSafetySection from "./SiliconSafetySection";

const SiliconDetailSections: React.FC = () => {
  return (
    <>
      <SiliconPhysicalConstantsSection />
      <SiliconOxStatesSection />
      <SiliconReactivitySection />
      <SiliconNaturalOccurrenceSection />
      <SiliconIsotopesSection />
      <SiliconHistorySection />
      <SiliconInterestingFactsSection />
      <SiliconExtractionSection />
      <SiliconCommercialUsesSection />
      <SiliconSafetySection />
    </>
  );
};

export default SiliconDetailSections;
