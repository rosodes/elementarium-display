import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenHistorySection from "../new-sections/HydrogenHistorySection";
import HeliumHistorySection from "../new-sections/HeliumHistorySection";
import LithiumHistorySection from "../new-sections/LithiumHistorySection";
import BerylliumHistorySection from "../new-sections/BerylliumHistorySection";
import BoronHistorySection from "../new-sections/BoronHistorySection";
import CarbonHistorySection from "../new-sections/CarbonHistorySection";
import NeonHistorySection from "../new-sections/NeonHistorySection";
import SodiumHistorySection from "../new-sections/SodiumHistorySection";
import MagnesiumHistorySection from "../new-sections/MagnesiumHistorySection";
import AluminumHistorySection from "../new-sections/AluminumHistorySection";
import SiliconHistorySection from "../new-sections/SiliconHistorySection";
import PhosphorusHistorySection from "../new-sections/PhosphorusHistorySection";

const HistoryTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenHistorySection />
    ) : element.atomic === "2" ? (
      <HeliumHistorySection />
    ) : element.atomic === "3" ? (
      <LithiumHistorySection />
    ) : element.atomic === "4" ? (
      <BerylliumHistorySection />
    ) : element.atomic === "5" ? (
      <BoronHistorySection />
    ) : element.atomic === "6" ? (
      <CarbonHistorySection />
    ) : element.atomic === "10" ? (
      <NeonHistorySection />
    ) : element.atomic === "11" ? (
      <SodiumHistorySection />
    ) : element.atomic === "12" ? (
      <MagnesiumHistorySection />
    ) : element.atomic === "13" ? (
      <AluminumHistorySection />
    ) : element.atomic === "14" ? (
      <SiliconHistorySection />
    ) : element.atomic === "15" ? (
      <PhosphorusHistorySection />
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-orange-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Information about discovery, etymology, historical facts and discoverers of this element will be shown here.
      </p>
    )}
  </div>
);
export default HistoryTab;
