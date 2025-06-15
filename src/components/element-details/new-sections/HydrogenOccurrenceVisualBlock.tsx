import React from "react";
import EnhancedTooltip from "../../ui/tooltip-enhanced";
import { Globe2, Droplets } from "lucide-react";

// Визуальный блок для раздела "Occurrence / Abundance"
const HydrogenOccurrenceVisualBlock: React.FC = () => (
  <div className="flex flex-wrap gap-4 my-2 text-[13px] select-text">
    <EnhancedTooltip
      content="Водород — самый распространённый элемент во Вселенной, основа звёзд."
      side="top"
    >
      <span className="bg-indigo-100 dark:bg-gray-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-lg">
        <Globe2 size={14} className="inline mr-1 align-text-top" />
        Самый распространённый (Вселенная)
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="На Земле водород присутствует в воде (H₂O) и органических соединениях."
      side="top"
    >
      <span className="bg-blue-100 dark:bg-gray-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-lg">
        <Droplets size={14} className="inline mr-1 align-text-top" />
        Вода, органика
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="Данные: CRC Handbook, IUPAC"
      side="top"
    >
      <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-lg">
        Источники
      </span>
    </EnhancedTooltip>
  </div>
);
export default HydrogenOccurrenceVisualBlock;
