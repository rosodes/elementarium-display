
import React from "react";
import CarbonPhysicalConstantsSection from "./CarbonPhysicalConstantsSection";
import CarbonOxStatesSection from "./CarbonOxStatesSection";
import CarbonReactivitySection from "./CarbonReactivitySection";
import CarbonNaturalOccurrenceSection from "./CarbonNaturalOccurrenceSection";
import CarbonIsotopesSection from "./CarbonIsotopesSection";
import CarbonHistorySection from "./CarbonHistorySection";
import CarbonInterestingFactsSection from "./CarbonInterestingFactsSection";
import CarbonExtractionSection from "./CarbonExtractionSection";
import CarbonCommercialUsesSection from "./CarbonCommercialUsesSection";
import CarbonSafetySection from "./CarbonSafetySection";

const CarbonDetailSections: React.FC = () => {
  return (
    <>
      <CarbonPhysicalConstantsSection />
      <CarbonOxStatesSection />
      <CarbonReactivitySection />
      <CarbonNaturalOccurrenceSection />
      <CarbonIsotopesSection />
      <CarbonHistorySection />
      <CarbonInterestingFactsSection />
      <CarbonExtractionSection />
      <CarbonCommercialUsesSection />
      <CarbonSafetySection />
    </>
  );
};

export default CarbonDetailSections;
