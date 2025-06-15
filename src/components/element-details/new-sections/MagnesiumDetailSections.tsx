
import React from "react";
import MagnesiumPhysicalConstantsSection from "./MagnesiumPhysicalConstantsSection";
import MagnesiumOxStatesSection from "./MagnesiumOxStatesSection";
import MagnesiumReactivitySection from "./MagnesiumReactivitySection";
import MagnesiumNaturalOccurrenceSection from "./MagnesiumNaturalOccurrenceSection";
import MagnesiumIsotopesSection from "./MagnesiumIsotopesSection";
import MagnesiumHistorySection from "./MagnesiumHistorySection";
import MagnesiumInterestingFactsSection from "./MagnesiumInterestingFactsSection";
import MagnesiumExtractionSection from "./MagnesiumExtractionSection";
import MagnesiumCommercialUsesSection from "./MagnesiumCommercialUsesSection";
import MagnesiumSafetySection from "./MagnesiumSafetySection";

const MagnesiumDetailSections: React.FC = () => {
  return (
    <>
      <MagnesiumPhysicalConstantsSection />
      <MagnesiumOxStatesSection />
      <MagnesiumReactivitySection />
      <MagnesiumNaturalOccurrenceSection />
      <MagnesiumIsotopesSection />
      <MagnesiumHistorySection />
      <MagnesiumInterestingFactsSection />
      <MagnesiumExtractionSection />
      <MagnesiumCommercialUsesSection />
      <MagnesiumSafetySection />
    </>
  );
};

export default MagnesiumDetailSections;
