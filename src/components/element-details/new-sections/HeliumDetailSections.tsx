
import React from "react";
import HeliumPhysicalConstantsSection from "./HeliumPhysicalConstantsSection";
import HeliumOxStatesSection from "./HeliumOxStatesSection";
import HeliumReactivitySection from "./HeliumReactivitySection";
import HeliumOccurrenceSection from "./HeliumOccurrenceSection";
import HeliumIsotopesSection from "./HeliumIsotopesSection";
import HeliumHistorySection from "./HeliumHistorySection";
import HeliumInterestingFactsSection from "./HeliumInterestingFactsSection";
import HeliumExtractionSection from "./HeliumExtractionSection";
import HeliumCommercialUsesSection from "./HeliumCommercialUsesSection";
import HeliumSafetySection from "./HeliumSafetySection";

const HeliumDetailSections: React.FC = () => {
  return (
    <>
      <HeliumPhysicalConstantsSection />
      <HeliumOxStatesSection />
      <HeliumReactivitySection />
      <HeliumOccurrenceSection />
      <HeliumIsotopesSection />
      <HeliumHistorySection />
      <HeliumInterestingFactsSection />
      <HeliumExtractionSection />
      <HeliumCommercialUsesSection />
      <HeliumSafetySection />
    </>
  );
};

export default HeliumDetailSections;
