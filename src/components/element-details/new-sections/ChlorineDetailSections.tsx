
import React from "react";
import ChlorinePhysicalConstantsSection from "./ChlorinePhysicalConstantsSection";
import ChlorineOxStatesSection from "./ChlorineOxStatesSection";
import ChlorineReactivitySection from "./ChlorineReactivitySection";
import ChlorineNaturalOccurrenceSection from "./ChlorineNaturalOccurrenceSection";
import ChlorineIsotopesSection from "./ChlorineIsotopesSection";
import ChlorineHistorySection from "./ChlorineHistorySection";
import ChlorineInterestingFactsSection from "./ChlorineInterestingFactsSection";
import ChlorineExtractionSection from "./ChlorineExtractionSection";
import ChlorineCommercialUsesSection from "./ChlorineCommercialUsesSection";
import ChlorineSafetySection from "./ChlorineSafetySection";

const ChlorineDetailSections: React.FC = () => {
  return (
    <>
      <ChlorinePhysicalConstantsSection />
      <ChlorineOxStatesSection />
      <ChlorineReactivitySection />
      <ChlorineNaturalOccurrenceSection />
      <ChlorineIsotopesSection />
      <ChlorineHistorySection />
      <ChlorineInterestingFactsSection />
      <ChlorineExtractionSection />
      <ChlorineCommercialUsesSection />
      <ChlorineSafetySection />
    </>
  );
};

export default ChlorineDetailSections;
