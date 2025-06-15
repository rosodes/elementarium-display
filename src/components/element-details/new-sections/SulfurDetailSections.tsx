
import React from "react";
import SulfurPhysicalConstantsSection from "./SulfurPhysicalConstantsSection";
import SulfurOxStatesSection from "./SulfurOxStatesSection";
import SulfurReactivitySection from "./SulfurReactivitySection";
import SulfurNaturalOccurrenceSection from "./SulfurNaturalOccurrenceSection";
import SulfurIsotopesSection from "./SulfurIsotopesSection";
import SulfurHistorySection from "./SulfurHistorySection";
import SulfurInterestingFactsSection from "./SulfurInterestingFactsSection";
import SulfurExtractionSection from "./SulfurExtractionSection";
import SulfurCommercialUsesSection from "./SulfurCommercialUsesSection";
import SulfurSafetySection from "./SulfurSafetySection";

const SulfurDetailSections: React.FC = () => {
  return (
    <>
      <SulfurPhysicalConstantsSection />
      <SulfurOxStatesSection />
      <SulfurReactivitySection />
      <SulfurNaturalOccurrenceSection />
      <SulfurIsotopesSection />
      <SulfurHistorySection />
      <SulfurInterestingFactsSection />
      <SulfurExtractionSection />
      <SulfurCommercialUsesSection />
      <SulfurSafetySection />
    </>
  );
};

export default SulfurDetailSections;
