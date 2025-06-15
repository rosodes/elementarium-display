
import React from "react";
import NickelPhysicalConstantsSection from "./NickelPhysicalConstantsSection";
import NickelOxStatesSection from "./NickelOxStatesSection";
import NickelReactivitySection from "./NickelReactivitySection";
import NickelNaturalOccurrenceSection from "./NickelNaturalOccurrenceSection";
import NickelIsotopesSection from "./NickelIsotopesSection";
import NickelHistorySection from "./NickelHistorySection";
import NickelInterestingFactsSection from "./NickelInterestingFactsSection";
import NickelExtractionSection from "./NickelExtractionSection";
import NickelCommercialUsesSection from "./NickelCommercialUsesSection";
import NickelSafetySection from "./NickelSafetySection";

const NickelDetailSections: React.FC = () => {
  return (
    <>
      <NickelPhysicalConstantsSection />
      <NickelOxStatesSection />
      <NickelReactivitySection />
      <NickelNaturalOccurrenceSection />
      <NickelIsotopesSection />
      <NickelHistorySection />
      <NickelInterestingFactsSection />
      <NickelExtractionSection />
      <NickelCommercialUsesSection />
      <NickelSafetySection />
    </>
  );
};

export default NickelDetailSections;
