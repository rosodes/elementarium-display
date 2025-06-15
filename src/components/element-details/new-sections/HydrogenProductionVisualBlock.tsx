
import React from "react";
import EnhancedTooltip from "../../ui/tooltip-enhanced";
import { Factory, Repeat2 } from "lucide-react";

// Визуальный блок для раздела "Production / Synthesis"
const HydrogenProductionVisualBlock: React.FC = () => (
  <div className="flex flex-wrap gap-4 my-2 text-[13px]">
    <EnhancedTooltip
      content="Основной мировой способ — паровой реформинг метана (CH₄ + H₂O → CO + 3H₂)."
      side="top"
    >
      <span className="bg-lime-100 dark:bg-gray-900 text-lime-800 dark:text-lime-200 px-3 py-1 rounded-lg">
        <Factory size={14} className="inline mr-1 align-text-top" />
        Паровой реформинг
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="Электролиз воды — способ получения зелёного водорода."
      side="top"
    >
      <span className="bg-blue-100 dark:bg-gray-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-lg">
        <Repeat2 size={14} className="inline mr-1 align-text-top" />
        Электролиз H₂O
      </span>
    </EnhancedTooltip>
  </div>
);
export default HydrogenProductionVisualBlock;
