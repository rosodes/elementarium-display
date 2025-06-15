
import React from "react";
import SodiumPhysicalConstantsSection from "./SodiumPhysicalConstantsSection";
import SodiumOxStatesSection from "./SodiumOxStatesSection";
import SodiumReactivitySection from "./SodiumReactivitySection";
import SodiumNaturalOccurrenceSection from "./SodiumNaturalOccurrenceSection";
import SodiumIsotopesSection from "./SodiumIsotopesSection";
import SodiumHistorySection from "./SodiumHistorySection";
import SodiumInterestingFactsSection from "./SodiumInterestingFactsSection";
import SodiumExtractionSection from "./SodiumExtractionSection";
import SodiumCommercialUsesSection from "./SodiumCommercialUsesSection";
import SodiumSafetySection from "./SodiumSafetySection";

const SodiumDetailSections: React.FC = () => {
  return (
    <>
      <SodiumPhysicalConstantsSection />
      <SodiumOxStatesSection />
      <SodiumReactivitySection />
      <SodiumNaturalOccurrenceSection />
      <SodiumIsotopesSection />
      <SodiumHistorySection />
      <SodiumInterestingFactsSection />
      <SodiumExtractionSection />
      <SodiumCommercialUsesSection />
      <SodiumSafetySection />
    </>
  );
};

export default SodiumDetailSections;
