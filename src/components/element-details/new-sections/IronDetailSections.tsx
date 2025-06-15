
import React from "react";
import IronPhysicalConstantsSection from "./IronPhysicalConstantsSection";
import IronOxStatesSection from "./IronOxStatesSection";
import IronReactivitySection from "./IronReactivitySection";
import IronNaturalOccurrenceSection from "./IronNaturalOccurrenceSection";
import IronIsotopesSection from "./IronIsotopesSection";
import IronHistorySection from "./IronHistorySection";
import IronInterestingFactsSection from "./IronInterestingFactsSection";
import IronExtractionSection from "./IronExtractionSection";
import IronCommercialUsesSection from "./IronCommercialUsesSection";
import IronSafetySection from "./IronSafetySection";

const IronDetailSections: React.FC = () => {
  return (
    <>
      <IronPhysicalConstantsSection />
      <IronOxStatesSection />
      <IronReactivitySection />
      <IronNaturalOccurrenceSection />
      <IronIsotopesSection />
      <IronHistorySection />
      <IronInterestingFactsSection />
      <IronExtractionSection />
      <IronCommercialUsesSection />
      <IronSafetySection />
    </>
  );
};

export default IronDetailSections;
