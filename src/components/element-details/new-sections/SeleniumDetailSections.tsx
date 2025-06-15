
import React from "react";
import SeleniumPhysicalConstantsSection from "./SeleniumPhysicalConstantsSection";
import SeleniumOxStatesSection from "./SeleniumOxStatesSection";
import SeleniumReactivitySection from "./SeleniumReactivitySection";
import SeleniumNaturalOccurrenceSection from "./SeleniumNaturalOccurrenceSection";
import SeleniumIsotopesSection from "./SeleniumIsotopesSection";
import SeleniumHistorySection from "./SeleniumHistorySection";
import SeleniumInterestingFactsSection from "./SeleniumInterestingFactsSection";
import SeleniumExtractionSection from "./SeleniumExtractionSection";
import SeleniumCommercialUsesSection from "./SeleniumCommercialUsesSection";
import SeleniumSafetySection from "./SeleniumSafetySection";

const SeleniumDetailSections: React.FC = () => {
  return (
    <>
      <SeleniumPhysicalConstantsSection />
      <SeleniumOxStatesSection />
      <SeleniumReactivitySection />
      <SeleniumNaturalOccurrenceSection />
      <SeleniumIsotopesSection />
      <SeleniumHistorySection />
      <SeleniumInterestingFactsSection />
      <SeleniumExtractionSection />
      <SeleniumCommercialUsesSection />
      <SeleniumSafetySection />
    </>
  );
};

export default SeleniumDetailSections;
