
import React from "react";
import PotassiumPhysicalConstantsSection from "./PotassiumPhysicalConstantsSection";
import PotassiumOxStatesSection from "./PotassiumOxStatesSection";
import PotassiumReactivitySection from "./PotassiumReactivitySection";
import PotassiumNaturalOccurrenceSection from "./PotassiumNaturalOccurrenceSection";
import PotassiumIsotopesSection from "./PotassiumIsotopesSection";
import PotassiumHistorySection from "./PotassiumHistorySection";
import PotassiumInterestingFactsSection from "./PotassiumInterestingFactsSection";
import PotassiumExtractionSection from "./PotassiumExtractionSection";
import PotassiumCommercialUsesSection from "./PotassiumCommercialUsesSection";
import PotassiumSafetySection from "./PotassiumSafetySection";

const PotassiumDetailSections: React.FC = () => {
  return (
    <>
      <PotassiumPhysicalConstantsSection />
      <PotassiumOxStatesSection />
      <PotassiumReactivitySection />
      <PotassiumNaturalOccurrenceSection />
      <PotassiumIsotopesSection />
      <PotassiumHistorySection />
      <PotassiumInterestingFactsSection />
      <PotassiumExtractionSection />
      <PotassiumCommercialUsesSection />
      <PotassiumSafetySection />
    </>
  );
};

export default PotassiumDetailSections;
