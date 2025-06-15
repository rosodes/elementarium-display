
import React from "react";
import TitaniumPhysicalConstantsSection from "./TitaniumPhysicalConstantsSection";
import TitaniumOxStatesSection from "./TitaniumOxStatesSection";
import TitaniumReactivitySection from "./TitaniumReactivitySection";
import TitaniumNaturalOccurrenceSection from "./TitaniumNaturalOccurrenceSection";
import TitaniumIsotopesSection from "./TitaniumIsotopesSection";
import TitaniumHistorySection from "./TitaniumHistorySection";
import TitaniumInterestingFactsSection from "./TitaniumInterestingFactsSection";
import TitaniumExtractionSection from "./TitaniumExtractionSection";
import TitaniumCommercialUsesSection from "./TitaniumCommercialUsesSection";
import TitaniumSafetySection from "./TitaniumSafetySection";

const TitaniumDetailSections: React.FC = () => {
  return (
    <>
      <TitaniumPhysicalConstantsSection />
      <TitaniumOxStatesSection />
      <TitaniumReactivitySection />
      <TitaniumNaturalOccurrenceSection />
      <TitaniumIsotopesSection />
      <TitaniumHistorySection />
      <TitaniumInterestingFactsSection />
      <TitaniumExtractionSection />
      <TitaniumCommercialUsesSection />
      <TitaniumSafetySection />
    </>
  );
};

export default TitaniumDetailSections;
