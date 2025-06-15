
import React from "react";
import GermaniumPhysicalConstantsSection from "./GermaniumPhysicalConstantsSection";
import GermaniumOxStatesSection from "./GermaniumOxStatesSection";
import GermaniumReactivitySection from "./GermaniumReactivitySection";
import GermaniumNaturalOccurrenceSection from "./GermaniumNaturalOccurrenceSection";
import GermaniumIsotopesSection from "./GermaniumIsotopesSection";
import GermaniumHistorySection from "./GermaniumHistorySection";
import GermaniumInterestingFactsSection from "./GermaniumInterestingFactsSection";
import GermaniumExtractionSection from "./GermaniumExtractionSection";
import GermaniumCommercialUsesSection from "./GermaniumCommercialUsesSection";
import GermaniumSafetySection from "./GermaniumSafetySection";

const GermaniumDetailSections: React.FC = () => {
  return (
    <>
      <GermaniumPhysicalConstantsSection />
      <GermaniumOxStatesSection />
      <GermaniumReactivitySection />
      <GermaniumNaturalOccurrenceSection />
      <GermaniumIsotopesSection />
      <GermaniumHistorySection />
      <GermaniumInterestingFactsSection />
      <GermaniumExtractionSection />
      <GermaniumCommercialUsesSection />
      <GermaniumSafetySection />
    </>
  );
};

export default GermaniumDetailSections;
