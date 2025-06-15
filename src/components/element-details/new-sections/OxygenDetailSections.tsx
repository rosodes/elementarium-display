
import React from "react";
import OxygenPhysicalConstantsSection from "./OxygenPhysicalConstantsSection";
import OxygenOxStatesSection from "./OxygenOxStatesSection";
import OxygenReactivitySection from "./OxygenReactivitySection";
import OxygenNaturalOccurrenceSection from "./OxygenNaturalOccurrenceSection";
import OxygenIsotopesSection from "./OxygenIsotopesSection";
import OxygenHistorySection from "./OxygenHistorySection";
import OxygenInterestingFactsSection from "./OxygenInterestingFactsSection";
import OxygenExtractionSection from "./OxygenExtractionSection";
import OxygenCommercialUsesSection from "./OxygenCommercialUsesSection";
import OxygenSafetySection from "./OxygenSafetySection";

const OxygenDetailSections: React.FC = () => {
  return (
    <>
      <OxygenPhysicalConstantsSection />
      <OxygenOxStatesSection />
      <OxygenReactivitySection />
      <OxygenNaturalOccurrenceSection />
      <OxygenIsotopesSection />
      <OxygenHistorySection />
      <OxygenInterestingFactsSection />
      <OxygenExtractionSection />
      <OxygenCommercialUsesSection />
      <OxygenSafetySection />
    </>
  );
};

export default OxygenDetailSections;
