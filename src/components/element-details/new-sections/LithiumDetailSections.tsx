
import React from "react";
import LithiumPhysicalConstantsSection from "./LithiumPhysicalConstantsSection";
import LithiumOxStatesSection from "./LithiumOxStatesSection";
import LithiumReactivitySection from "./LithiumReactivitySection";
import LithiumNaturalOccurrenceSection from "./LithiumNaturalOccurrenceSection";
import LithiumIsotopesSection from "./LithiumIsotopesSection";
import LithiumHistorySection from "./LithiumHistorySection";
import LithiumInterestingFactsSection from "./LithiumInterestingFactsSection";
import LithiumExtractionSection from "./LithiumExtractionSection";
import LithiumCommercialUsesSection from "./LithiumCommercialUsesSection";
import LithiumSafetySection from "./LithiumSafetySection";

const LithiumDetailSections: React.FC = () => {
  return (
    <>
      <LithiumPhysicalConstantsSection />
      <LithiumOxStatesSection />
      <LithiumReactivitySection />
      <LithiumNaturalOccurrenceSection />
      <LithiumIsotopesSection />
      <LithiumHistorySection />
      <LithiumInterestingFactsSection />
      <LithiumExtractionSection />
      <LithiumCommercialUsesSection />
      <LithiumSafetySection />
    </>
  );
};

export default LithiumDetailSections;
