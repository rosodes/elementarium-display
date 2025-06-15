
import React from "react";
import BerylliumPhysicalConstantsSection from "./BerylliumPhysicalConstantsSection";
import BerylliumOxStatesSection from "./BerylliumOxStatesSection";
import BerylliumReactivitySection from "./BerylliumReactivitySection";
import BerylliumNaturalOccurrenceSection from "./BerylliumNaturalOccurrenceSection";
import BerylliumIsotopesSection from "./BerylliumIsotopesSection";
import BerylliumHistorySection from "./BerylliumHistorySection";
import BerylliumInterestingFactsSection from "./BerylliumInterestingFactsSection";
import BerylliumExtractionSection from "./BerylliumExtractionSection";
import BerylliumCommercialUsesSection from "./BerylliumCommercialUsesSection";
import BerylliumSafetySection from "./BerylliumSafetySection";

const BerylliumDetailSections: React.FC = () => {
  return (
    <>
      <BerylliumPhysicalConstantsSection />
      <BerylliumOxStatesSection />
      <BerylliumReactivitySection />
      <BerylliumNaturalOccurrenceSection />
      <BerylliumIsotopesSection />
      <BerylliumHistorySection />
      <BerylliumInterestingFactsSection />
      <BerylliumExtractionSection />
      <BerylliumCommercialUsesSection />
      <BerylliumSafetySection />
    </>
  );
};

export default BerylliumDetailSections;
