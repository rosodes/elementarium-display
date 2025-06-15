
import React from "react";
import ArgonPhysicalConstantsSection from "./ArgonPhysicalConstantsSection";
import ArgonOxStatesSection from "./ArgonOxStatesSection";
import ArgonReactivitySection from "./ArgonReactivitySection";
import ArgonNaturalOccurrenceSection from "./ArgonNaturalOccurrenceSection";
import ArgonIsotopesSection from "./ArgonIsotopesSection";
import ArgonHistorySection from "./ArgonHistorySection";
import ArgonInterestingFactsSection from "./ArgonInterestingFactsSection";
import ArgonExtractionSection from "./ArgonExtractionSection";
import ArgonCommercialUsesSection from "./ArgonCommercialUsesSection";
import ArgonSafetySection from "./ArgonSafetySection";

const ArgonDetailSections: React.FC = () => {
  return (
    <>
      <ArgonPhysicalConstantsSection />
      <ArgonOxStatesSection />
      <ArgonReactivitySection />
      <ArgonNaturalOccurrenceSection />
      <ArgonIsotopesSection />
      <ArgonHistorySection />
      <ArgonInterestingFactsSection />
      <ArgonExtractionSection />
      <ArgonCommercialUsesSection />
      <ArgonSafetySection />
    </>
  );
};

export default ArgonDetailSections;
