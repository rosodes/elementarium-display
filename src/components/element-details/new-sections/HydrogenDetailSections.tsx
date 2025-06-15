
import React from "react";
import HydrogenOverviewSection from "./HydrogenOverviewSection";
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
import HydrogenDistributionPieChart from "./HydrogenDistributionPieChart";
import HydrogenUniverseBarChart from "./HydrogenUniverseBarChart";
import HydrogenSpectralSeriesSection from "./HydrogenSpectralSeriesSection";
import HydrogenEnergySection from "./HydrogenEnergySection";
import HydrogenSafetySection from "./HydrogenSafetySection";
import HydrogenPropertiesVisualBlock from "./HydrogenPropertiesVisualBlock";
import HydrogenAtomicStructureVisualBlock from "./HydrogenAtomicStructureVisualBlock";
import HydrogenApplicationsVisualBlock from "./HydrogenApplicationsVisualBlock";
import HydrogenHistoryVisualBlock from "./HydrogenHistoryVisualBlock";
import HydrogenOccurrenceVisualBlock from "./HydrogenOccurrenceVisualBlock";
import HydrogenCompoundsVisualBlock from "./HydrogenCompoundsVisualBlock";
import HydrogenBioVisualBlock from "./HydrogenBioVisualBlock";
import HydrogenProductionVisualBlock from "./HydrogenProductionVisualBlock";
import HydrogenSafetyVisualBlock from "./HydrogenSafetyVisualBlock";
import SpectralAndIsotopeFacts from "./HydrogenSpectralAndIsotopeSection";

// Секция по деталям водорода с использованием отдельных тематических блоков
const HydrogenDetailSections: React.FC = () => {
  return (
    <>
      <HydrogenOverviewSection />

      <HydrogenPhysicalConstantsSection />
      <HydrogenPropertiesVisualBlock />

      <HydrogenOxStatesSection />
      <HydrogenAtomicStructureVisualBlock />
      <HydrogenReactivitySection />
      <HydrogenNaturalOccurrenceSection />
      <HydrogenIsotopesSection />
      <HydrogenVisualSection />
      <HydrogenHistorySection />
      <HydrogenInterestingFactsSection />

      <SpectralAndIsotopeFacts />

      <HydrogenExtractionSection />
      <HydrogenApplicationsVisualBlock />
      <HydrogenCrystalStructureSection />
      <HydrogenCommercialUsesSection />
      <HydrogenComparisonsSection />
      <HydrogenSpectralSeriesSection />
      <HydrogenEnergySection />
      <HydrogenSafetySection />
      <HydrogenDistributionPieChart />
      <HydrogenUniverseBarChart />
      <HydrogenHistoryVisualBlock />
      <HydrogenOccurrenceVisualBlock />
      <HydrogenCompoundsVisualBlock />
      <HydrogenBioVisualBlock />
      <HydrogenProductionVisualBlock />
      <HydrogenSafetyVisualBlock />
    </>
  );
};

export default HydrogenDetailSections;
