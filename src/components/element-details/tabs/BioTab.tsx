
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenBioSection from "../new-sections/HydrogenBioSection";
import HeliumInterestingFactsSection from "../new-sections/HeliumInterestingFactsSection";
import LithiumBioSection from "../new-sections/LithiumBioSection";
import BerylliumBioSection from "../new-sections/BerylliumBioSection";
import BoronBioSection from "../new-sections/BoronBioSection";
import CarbonBioSection from "../new-sections/CarbonBioSection";
import NitrogenBioSection from "../new-sections/NitrogenBioSection";
import OxygenBioSection from "../new-sections/OxygenBioSection";
import FluorineBioSection from "../new-sections/FluorineBioSection";
import NeonBioSection from "../new-sections/NeonBioSection";
import SodiumBioSection from "../new-sections/SodiumBioSection";
import MagnesiumBioSection from "../new-sections/MagnesiumBioSection";
import AluminumBioSection from "../new-sections/AluminumBioSection";

const BioTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenBioSection />
    ) : element.atomic === "2" ? (
      <HeliumInterestingFactsSection />
    ) : element.atomic === "3" ? (
      <LithiumBioSection />
    ) : element.atomic === "4" ? (
      <BerylliumBioSection />
    ) : element.atomic === "5" ? (
      <BoronBioSection />
    ) : element.atomic === "6" ? (
      <CarbonBioSection />
    ) : element.atomic === "7" ? (
      <NitrogenBioSection />
    ) : element.atomic === "8" ? (
      <OxygenBioSection />
    ) : element.atomic === "9" ? (
      <FluorineBioSection />
    ) : element.atomic === "10" ? (
      <NeonBioSection />
    ) : element.atomic === "11" ? (
      <SodiumBioSection />
    ) : element.atomic === "12" ? (
      <MagnesiumBioSection />
    ) : element.atomic === "13" ? (
      <AluminumBioSection />
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-rose-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Information about biological role, toxicity, or lack thereof will be displayed here for this element.
      </p>
    )}
  </div>
);
export default BioTab;
