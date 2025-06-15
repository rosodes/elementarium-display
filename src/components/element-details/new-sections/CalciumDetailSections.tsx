
import React from "react";
import CalciumPhysicalConstantsSection from "./CalciumPhysicalConstantsSection";
import CalciumOxStatesSection from "./CalciumOxStatesSection";
import CalciumReactivitySection from "./CalciumReactivitySection";
import CalciumNaturalOccurrenceSection from "./CalciumNaturalOccurrenceSection";
import CalciumIsotopesSection from "./CalciumIsotopesSection";
import CalciumHistorySection from "./CalciumHistorySection";
import CalciumInterestingFactsSection from "./CalciumInterestingFactsSection";
import CalciumExtractionSection from "./CalciumExtractionSection";
import CalciumCommercialUsesSection from "./CalciumCommercialUsesSection";
import CalciumSafetySection from "./CalciumSafetySection";

const CalciumDetailSections: React.FC = () => {
  return (
    <>
      <CalciumPhysicalConstantsSection />
      <CalciumOxStatesSection />
      <CalciumReactivitySection />
      <CalciumNaturalOccurrenceSection />
      <CalciumIsotopesSection />
      <CalciumHistorySection />
      <CalciumInterestingFactsSection />
      <CalciumExtractionSection />
      <CalciumCommercialUsesSection />
      <CalciumSafetySection />
    </>
  );
};

export default CalciumDetailSections;
