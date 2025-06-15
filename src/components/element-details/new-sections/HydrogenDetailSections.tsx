
import React from "react";
import HydrogenOverviewSection from "./HydrogenOverviewSection";
import HydrogenPhysicalConstantsSection from "./HydrogenPhysicalConstantsSection";
import HydrogenOxStatesSection from "./HydrogenOxStatesSection";
import HydrogenReactivitySection from "./HydrogenReactivitySection";
import HydrogenIsotopesSection from "./HydrogenIsotopesSection";
import HydrogenVisualSection from "./HydrogenVisualSection";
import HydrogenCrystalStructureSection from "./HydrogenCrystalStructureSection";
import HydrogenCommercialUsesSection from "./HydrogenCommercialUsesSection";
import HydrogenComparisonsSection from "./HydrogenComparisonsSection";
import HydrogenDistributionPieChart from "./HydrogenDistributionPieChart";
import HydrogenUniverseBarChart from "./HydrogenUniverseBarChart";
import HydrogenSpectralSeriesSection from "./HydrogenSpectralSeriesSection";
import HydrogenEnergySection from "./HydrogenEnergySection";
import HydrogenPropertiesVisualBlock from "./HydrogenPropertiesVisualBlock";
import HydrogenAtomicStructureVisualBlock from "./HydrogenAtomicStructureVisualBlock";
import HydrogenApplicationsVisualBlock from "./HydrogenApplicationsVisualBlock";
import HydrogenHistoryVisualBlock from "./HydrogenHistoryVisualBlock";
import HydrogenOccurrenceVisualBlock from "./HydrogenOccurrenceVisualBlock";
import HydrogenCompoundsVisualBlock from "./HydrogenCompoundsVisualBlock";
import HydrogenBioVisualBlock from "./HydrogenBioVisualBlock";
import HydrogenProductionVisualBlock from "./HydrogenProductionVisualBlock";
import HydrogenSafetyVisualBlock from "./HydrogenSafetyVisualBlock";

import HydrogenHistorySection from "./HydrogenHistorySection";
import HydrogenOccurrenceSection from "./HydrogenOccurrenceSection";
import HydrogenCompoundsSection from "./HydrogenCompoundsSection";
import HydrogenBioSection from "./HydrogenBioSection";
import HydrogenProductionSection from "./HydrogenProductionSection";
import HydrogenSafetySection from "./HydrogenSafetySection";
import HydrogenNaturalOccurrenceSection from "./HydrogenNaturalOccurrenceSection";
import SpectralAndIsotopeFacts from "./HydrogenSpectralAndIsotopeSection";

const HydrogenDetailSections: React.FC = () => {
  return (
    <>
      <HydrogenOverviewSection />
      <HydrogenPhysicalConstantsSection />
      <HydrogenPropertiesVisualBlock />

      <HydrogenOxStatesSection />
      <HydrogenAtomicStructureVisualBlock />
      <HydrogenReactivitySection />

      <HydrogenOccurrenceSection />
      <HydrogenCompoundsSection />
      <HydrogenBioSection />
      <HydrogenProductionSection />
      <HydrogenSafetySection />
      
      <HydrogenIsotopesSection />
      <HydrogenVisualSection />
      <HydrogenCrystalStructureSection />
      <HydrogenCommercialUsesSection />
      <HydrogenComparisonsSection />
      <HydrogenSpectralSeriesSection />
      <HydrogenEnergySection />
      <HydrogenDistributionPieChart />
      <HydrogenUniverseBarChart />
      <HydrogenHistoryVisualBlock />
      <HydrogenOccurrenceVisualBlock />
      <HydrogenCompoundsVisualBlock />
      <HydrogenBioVisualBlock />
      <HydrogenProductionVisualBlock />
      <HydrogenSafetyVisualBlock />
      <SpectralAndIsotopeFacts />
      <HydrogenHistorySection />
    </>
  );
};

export default HydrogenDetailSections;
