
import React from "react";
import ManganesePhysicalConstantsSection from "./ManganesePhysicalConstantsSection";
import ManganeseOxStatesSection from "./ManganeseOxStatesSection";
import ManganeseReactivitySection from "./ManganeseReactivitySection";
import ManganeseNaturalOccurrenceSection from "./ManganeseNaturalOccurrenceSection";
import ManganeseIsotopesSection from "./ManganeseIsotopesSection";
import ManganeseHistorySection from "./ManganeseHistorySection";
import ManganeseInterestingFactsSection from "./ManganeseInterestingFactsSection";
import ManganeseExtractionSection from "./ManganeseExtractionSection";
import ManganeseCommercialUsesSection from "./ManganeseCommercialUsesSection";
import ManganeseSafetySection from "./ManganeseSafetySection";

const ManganeseDetailSections: React.FC = () => {
  return (
    <>
      <ManganesePhysicalConstantsSection />
      <ManganeseOxStatesSection />
      <ManganeseReactivitySection />
      <ManganeseNaturalOccurrenceSection />
      <ManganeseIsotopesSection />
      <ManganeseHistorySection />
      <ManganeseInterestingFactsSection />
      <ManganeseExtractionSection />
      <ManganeseCommercialUsesSection />
      <ManganeseSafetySection />
    </>
  );
};
export default ManganeseDetailSections;
