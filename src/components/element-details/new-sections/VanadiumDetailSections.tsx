
import React from "react";
import VanadiumPhysicalConstantsSection from "./VanadiumPhysicalConstantsSection";
import VanadiumOxStatesSection from "./VanadiumOxStatesSection";
import VanadiumReactivitySection from "./VanadiumReactivitySection";
import VanadiumNaturalOccurrenceSection from "./VanadiumNaturalOccurrenceSection";
import VanadiumIsotopesSection from "./VanadiumIsotopesSection";
import VanadiumHistorySection from "./VanadiumHistorySection";
import VanadiumInterestingFactsSection from "./VanadiumInterestingFactsSection";
import VanadiumExtractionSection from "./VanadiumExtractionSection";
import VanadiumCommercialUsesSection from "./VanadiumCommercialUsesSection";
import VanadiumSafetySection from "./VanadiumSafetySection";

const VanadiumDetailSections: React.FC = () => {
  return (
    <>
      <VanadiumPhysicalConstantsSection />
      <VanadiumOxStatesSection />
      <VanadiumReactivitySection />
      <VanadiumNaturalOccurrenceSection />
      <VanadiumIsotopesSection />
      <VanadiumHistorySection />
      <VanadiumInterestingFactsSection />
      <VanadiumExtractionSection />
      <VanadiumCommercialUsesSection />
      <VanadiumSafetySection />
    </>
  );
};

export default VanadiumDetailSections;
