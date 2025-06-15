import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenProductionSection from "../new-sections/HydrogenProductionSection";
import HeliumExtractionSection from "../new-sections/HeliumExtractionSection";
import LithiumExtractionSection from "../new-sections/LithiumExtractionSection";
import BerylliumExtractionSection from "../new-sections/BerylliumExtractionSection";
import BoronExtractionSection from "../new-sections/BoronExtractionSection";
import CarbonExtractionSection from "../new-sections/CarbonExtractionSection";
import NeonExtractionSection from "../new-sections/NeonExtractionSection";
import SodiumExtractionSection from "../new-sections/SodiumExtractionSection";
import MagnesiumExtractionSection from "../new-sections/MagnesiumExtractionSection";
import AluminumExtractionSection from "../new-sections/AluminumExtractionSection";
import SiliconExtractionSection from "../new-sections/SiliconExtractionSection";
import PhosphorusExtractionSection from "../new-sections/PhosphorusExtractionSection";
import SulfurExtractionSection from "../new-sections/SulfurExtractionSection";
import FluorineExtractionSection from "../new-sections/FluorineExtractionSection";

const ProductionTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenProductionSection />
    ) : element.atomic === "2" ? (
      <HeliumExtractionSection />
    ) : element.atomic === "3" ? (
      <LithiumExtractionSection />
    ) : element.atomic === "4" ? (
      <BerylliumExtractionSection />
    ) : element.atomic === "5" ? (
      <BoronExtractionSection />
    ) : element.atomic === "6" ? (
      <CarbonExtractionSection />
    ) : element.atomic === "7" ? (
      <NitrogenExtractionSection />
    ) : element.atomic === "8" ? (
      <OxygenExtractionSection />
    ) : element.atomic === "9" ? (
      <FluorineExtractionSection />
    ) : element.atomic === "10" ? (
      <NeonExtractionSection />
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-purple-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Methods of production, industrial synthesis and relevant data for this element will be shown here.
      </p>
    }
  </div>
);
export default ProductionTab;
