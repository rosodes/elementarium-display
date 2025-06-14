
import React from "react";
import HydrogenPhysicalConstantsSection from "./HydrogenPhysicalConstantsSection";
import HydrogenOxStatesSection from "./HydrogenOxStatesSection";
import HydrogenReactivitySection from "./HydrogenReactivitySection";
import HydrogenNaturalOccurrenceSection from "./HydrogenNaturalOccurrenceSection";
import HydrogenIsotopesSection from "./HydrogenIsotopesSection";
import HydrogenVisualSection from "./HydrogenVisualSection";
import HydrogenHistorySection from "./HydrogenHistorySection";
import HydrogenInterestingFactsSection from "./HydrogenInterestingFactsSection";
import HydrogenExtractionSection from "./HydrogenExtractionSection";
import HydrogenCrystalStructureSection from "./HydrogenCrystalStructureSection";
import HydrogenCommercialUsesSection from "./HydrogenCommercialUsesSection";
import HydrogenComparisonsSection from "./HydrogenComparisonsSection";
// новые визуальные/анимированные секции:
import HydrogenSpectralSeriesSection from "./HydrogenSpectralSeriesSection";
import HydrogenEnergySection from "./HydrogenEnergySection";
import HydrogenSafetySection from "./HydrogenSafetySection";

const HydrogenDetailSections: React.FC = () => {
  return (
    <>
      <HydrogenPhysicalConstantsSection />
      <HydrogenOxStatesSection />
      <HydrogenReactivitySection />
      <HydrogenNaturalOccurrenceSection />
      <HydrogenIsotopesSection />
      <HydrogenVisualSection />
      <HydrogenHistorySection />
      <HydrogenInterestingFactsSection />
      <HydrogenExtractionSection />
      <HydrogenCrystalStructureSection />
      <HydrogenCommercialUsesSection />
      <HydrogenComparisonsSection />
      {/* добавлены новые расширенные секции */}
      <HydrogenSpectralSeriesSection />
      <HydrogenEnergySection />
      <HydrogenSafetySection />
    </>
  );
};

export default HydrogenDetailSections;

