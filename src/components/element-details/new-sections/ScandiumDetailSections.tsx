
import React from "react";
import ScandiumPhysicalConstantsSection from "./ScandiumPhysicalConstantsSection";
import ScandiumOxStatesSection from "./ScandiumOxStatesSection";
import ScandiumReactivitySection from "./ScandiumReactivitySection";
import ScandiumNaturalOccurrenceSection from "./ScandiumNaturalOccurrenceSection";
import ScandiumIsotopesSection from "./ScandiumIsotopesSection";
import ScandiumHistorySection from "./ScandiumHistorySection";
import ScandiumInterestingFactsSection from "./ScandiumInterestingFactsSection";
import ScandiumExtractionSection from "./ScandiumExtractionSection";
import ScandiumCommercialUsesSection from "./ScandiumCommercialUsesSection";
import ScandiumSafetySection from "./ScandiumSafetySection";

const ScandiumDetailSections: React.FC = () => {
  return (
    <>
      <ScandiumPhysicalConstantsSection />
      <ScandiumOxStatesSection />
      <ScandiumReactivitySection />
      <ScandiumNaturalOccurrenceSection />
      <ScandiumIsotopesSection />
      <ScandiumHistorySection />
      <ScandiumInterestingFactsSection />
      <ScandiumExtractionSection />
      <ScandiumCommercialUsesSection />
      <ScandiumSafetySection />
    </>
  );
};

export default ScandiumDetailSections;
