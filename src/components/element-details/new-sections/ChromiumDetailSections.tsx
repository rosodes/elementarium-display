
import React from "react";
import ChromiumPhysicalConstantsSection from "./ChromiumPhysicalConstantsSection";
import ChromiumOxStatesSection from "./ChromiumOxStatesSection";
import ChromiumReactivitySection from "./ChromiumReactivitySection";
import ChromiumNaturalOccurrenceSection from "./ChromiumNaturalOccurrenceSection";
import ChromiumIsotopesSection from "./ChromiumIsotopesSection";
import ChromiumHistorySection from "./ChromiumHistorySection";
import ChromiumInterestingFactsSection from "./ChromiumInterestingFactsSection";
import ChromiumExtractionSection from "./ChromiumExtractionSection";
import ChromiumCommercialUsesSection from "./ChromiumCommercialUsesSection";
import ChromiumSafetySection from "./ChromiumSafetySection";

const ChromiumDetailSections: React.FC = () => {
  return (
    <>
      <ChromiumPhysicalConstantsSection />
      <ChromiumOxStatesSection />
      <ChromiumReactivitySection />
      <ChromiumNaturalOccurrenceSection />
      <ChromiumIsotopesSection />
      <ChromiumHistorySection />
      <ChromiumInterestingFactsSection />
      <ChromiumExtractionSection />
      <ChromiumCommercialUsesSection />
      <ChromiumSafetySection />
    </>
  );
};
export default ChromiumDetailSections;
