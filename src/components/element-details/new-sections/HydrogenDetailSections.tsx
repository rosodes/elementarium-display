import React from "react";
import HydrogenIsotopesSection from "./HydrogenIsotopesSection";
import HydrogenOxStatesSection from "./HydrogenOxStatesSection";
import HydrogenExtractionSection from "./HydrogenExtractionSection";
import HydrogenCrystalStructureSection from "./HydrogenCrystalStructureSection";
import HydrogenComparisonsSection from "./HydrogenComparisonsSection";
import HydrogenVisualSection from "./HydrogenVisualSection";
import HydrogenReactivitySection from "./HydrogenReactivitySection";
import HydrogenCommercialUsesSection from "./HydrogenCommercialUsesSection";
import HydrogenPhysicalConstantsSection from "./HydrogenPhysicalConstantsSection";
import HydrogenNaturalOccurrenceSection from "./HydrogenNaturalOccurrenceSection";
import HydrogenHistorySection from "./HydrogenHistorySection";
import HydrogenInterestingFactsSection from "./HydrogenInterestingFactsSection";
import HydrogenSpectralSeriesSection from "./HydrogenSpectralSeriesSection";
import HydrogenEnergySection from "./HydrogenEnergySection";
import HydrogenSafetySection from "./HydrogenSafetySection";

/**
 * Все расширенные секции по Hydrogen объединённые в один компонент для OverviewTab.
 */
const HydrogenDetailSections: React.FC = () => {
  return (
    <>
      <HydrogenIsotopesSection />
      <HydrogenPhysicalConstantsSection />
      <HydrogenOxStatesSection />
      <HydrogenCrystalStructureSection />
      <HydrogenNaturalOccurrenceSection />
      <HydrogenExtractionSection />
      <HydrogenReactivitySection />
      <HydrogenCommercialUsesSection />
      <HydrogenComparisonsSection />
      <HydrogenHistorySection />
      <HydrogenVisualSection />
      <HydrogenInterestingFactsSection />
      <HydrogenSpectralSeriesSection />
      <HydrogenEnergySection />
      <HydrogenSafetySection />
    </>
  );
};

export default HydrogenDetailSections;
