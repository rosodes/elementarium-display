
import React from "react";
import PhosphorusPhysicalConstantsSection from "./PhosphorusPhysicalConstantsSection";
import PhosphorusOxStatesSection from "./PhosphorusOxStatesSection";
import PhosphorusReactivitySection from "./PhosphorusReactivitySection";
import PhosphorusNaturalOccurrenceSection from "./PhosphorusNaturalOccurrenceSection";
import PhosphorusIsotopesSection from "./PhosphorusIsotopesSection";
import PhosphorusHistorySection from "./PhosphorusHistorySection";
import PhosphorusInterestingFactsSection from "./PhosphorusInterestingFactsSection";
import PhosphorusExtractionSection from "./PhosphorusExtractionSection";
import PhosphorusCommercialUsesSection from "./PhosphorusCommercialUsesSection";
import PhosphorusSafetySection from "./PhosphorusSafetySection";

const PhosphorusDetailSections: React.FC = () => {
  return (
    <>
      <PhosphorusPhysicalConstantsSection />
      <PhosphorusOxStatesSection />
      <PhosphorusReactivitySection />
      <PhosphorusNaturalOccurrenceSection />
      <PhosphorusIsotopesSection />
      <PhosphorusHistorySection />
      <PhosphorusInterestingFactsSection />
      <PhosphorusExtractionSection />
      <PhosphorusCommercialUsesSection />
      <PhosphorusSafetySection />
    </>
  );
};

export default PhosphorusDetailSections;
