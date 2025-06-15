
import React from "react";
import GalliumPhysicalConstantsSection from "./GalliumPhysicalConstantsSection";
import GalliumOxStatesSection from "./GalliumOxStatesSection";
import GalliumReactivitySection from "./GalliumReactivitySection";
import GalliumNaturalOccurrenceSection from "./GalliumNaturalOccurrenceSection";
import GalliumIsotopesSection from "./GalliumIsotopesSection";
import GalliumHistorySection from "./GalliumHistorySection";
import GalliumInterestingFactsSection from "./GalliumInterestingFactsSection";
import GalliumExtractionSection from "./GalliumExtractionSection";
import GalliumCommercialUsesSection from "./GalliumCommercialUsesSection";
import GalliumSafetySection from "./GalliumSafetySection";

const GalliumDetailSections: React.FC = () => {
  return (
    <>
      <GalliumPhysicalConstantsSection />
      <GalliumOxStatesSection />
      <GalliumReactivitySection />
      <GalliumNaturalOccurrenceSection />
      <GalliumIsotopesSection />
      <GalliumHistorySection />
      <GalliumInterestingFactsSection />
      <GalliumExtractionSection />
      <GalliumCommercialUsesSection />
      <GalliumSafetySection />
    </>
  );
};

export default GalliumDetailSections;
