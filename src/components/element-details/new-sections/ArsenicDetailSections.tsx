
import React from "react";
import ArsenicPhysicalConstantsSection from "./ArsenicPhysicalConstantsSection";
import ArsenicOxStatesSection from "./ArsenicOxStatesSection";
import ArsenicReactivitySection from "./ArsenicReactivitySection";
import ArsenicNaturalOccurrenceSection from "./ArsenicNaturalOccurrenceSection";
import ArsenicIsotopesSection from "./ArsenicIsotopesSection";
import ArsenicHistorySection from "./ArsenicHistorySection";
import ArsenicInterestingFactsSection from "./ArsenicInterestingFactsSection";
import ArsenicExtractionSection from "./ArsenicExtractionSection";
import ArsenicCommercialUsesSection from "./ArsenicCommercialUsesSection";
import ArsenicSafetySection from "./ArsenicSafetySection";

const ArsenicDetailSections: React.FC = () => {
  return (
    <>
      <ArsenicPhysicalConstantsSection />
      <ArsenicOxStatesSection />
      <ArsenicReactivitySection />
      <ArsenicNaturalOccurrenceSection />
      <ArsenicIsotopesSection />
      <ArsenicHistorySection />
      <ArsenicInterestingFactsSection />
      <ArsenicExtractionSection />
      <ArsenicCommercialUsesSection />
      <ArsenicSafetySection />
    </>
  );
};

export default ArsenicDetailSections;
