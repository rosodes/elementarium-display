
import React from "react";
import BoronPhysicalConstantsSection from "./BoronPhysicalConstantsSection";
import BoronOxStatesSection from "./BoronOxStatesSection";
import BoronReactivitySection from "./BoronReactivitySection";
import BoronNaturalOccurrenceSection from "./BoronNaturalOccurrenceSection";
import BoronIsotopesSection from "./BoronIsotopesSection";
import BoronHistorySection from "./BoronHistorySection";
import BoronInterestingFactsSection from "./BoronInterestingFactsSection";
import BoronExtractionSection from "./BoronExtractionSection";
import BoronCommercialUsesSection from "./BoronCommercialUsesSection";
import BoronSafetySection from "./BoronSafetySection";

const BoronDetailSections: React.FC = () => {
  return (
    <>
      <BoronPhysicalConstantsSection />
      <BoronOxStatesSection />
      <BoronReactivitySection />
      <BoronNaturalOccurrenceSection />
      <BoronIsotopesSection />
      <BoronHistorySection />
      <BoronInterestingFactsSection />
      <BoronExtractionSection />
      <BoronCommercialUsesSection />
      <BoronSafetySection />
    </>
  );
};

export default BoronDetailSections;
