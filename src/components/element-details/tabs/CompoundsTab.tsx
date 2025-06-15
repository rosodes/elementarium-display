import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenCompoundsSection from "../new-sections/HydrogenCompoundsSection";
import HeliumOxStatesSection from "../new-sections/HeliumOxStatesSection";
import HeliumReactivitySection from "../new-sections/HeliumReactivitySection";
import LithiumOxStatesSection from "../new-sections/LithiumOxStatesSection";
import LithiumReactivitySection from "../new-sections/LithiumReactivitySection";
import BerylliumOxStatesSection from "../new-sections/BerylliumOxStatesSection";
import BerylliumReactivitySection from "../new-sections/BerylliumReactivitySection";
import BoronOxStatesSection from "../new-sections/BoronOxStatesSection";
import BoronReactivitySection from "../new-sections/BoronReactivitySection";
import CarbonOxStatesSection from "../new-sections/CarbonOxStatesSection";
import CarbonReactivitySection from "../new-sections/CarbonReactivitySection";
import FluorineOxStatesSection from "../new-sections/FluorineOxStatesSection";
import FluorineReactivitySection from "../new-sections/FluorineReactivitySection";
import NeonOxStatesSection from "../new-sections/NeonOxStatesSection";
import NeonReactivitySection from "../new-sections/NeonReactivitySection";
import SodiumOxStatesSection from "../new-sections/SodiumOxStatesSection";
import SodiumReactivitySection from "../new-sections/SodiumReactivitySection";
import MagnesiumOxStatesSection from "../new-sections/MagnesiumOxStatesSection";
import MagnesiumReactivitySection from "../new-sections/MagnesiumReactivitySection";
import AluminumOxStatesSection from "../new-sections/AluminumOxStatesSection";
import AluminumReactivitySection from "../new-sections/AluminumReactivitySection";
import SiliconOxStatesSection from "../new-sections/SiliconOxStatesSection";

const CompoundsTab = ({ element }: { element: Element }) => (
  <div className="text-base space-y-6">
    {element.atomic === "1" ? (
      <HydrogenCompoundsSection />
    ) : element.atomic === "2" ? (
      <>
        <HeliumOxStatesSection />
        <HeliumReactivitySection />
      </>
    ) : element.atomic === "3" ? (
      <>
        <LithiumOxStatesSection />
        <LithiumReactivitySection />
      </>
    ) : element.atomic === "4" ? (
      <>
        <BerylliumOxStatesSection />
        <BerylliumReactivitySection />
      </>
    ) : element.atomic === "5" ? (
      <>
        <BoronOxStatesSection />
        <BoronReactivitySection />
      </>
    ) : element.atomic === "6" ? (
      <>
        <CarbonOxStatesSection />
        <CarbonReactivitySection />
      </>
    ) : element.atomic === "9" ? (
      <>
        <FluorineOxStatesSection />
        <FluorineReactivitySection />
      </>
    ) : element.atomic === "10" ? (
      <>
        <NeonOxStatesSection />
        <NeonReactivitySection />
      </>
    ) : element.atomic === "11" ? (
      <>
        <SodiumOxStatesSection />
        <SodiumReactivitySection />
      </>
    ) : element.atomic === "12" ? (
      <>
        <MagnesiumOxStatesSection />
        <MagnesiumReactivitySection />
      </>
    ) : element.atomic === "13" ? (
      <>
        <AluminumOxStatesSection />
        <AluminumReactivitySection />
      </>
    ) : element.atomic === "14" ? (
      <>
        <SiliconOxStatesSection />
      </>
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-emerald-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Here you will find essential information about key compounds and chemistry of this element.
      </p>
    )}
  </div>
);
export default CompoundsTab;
