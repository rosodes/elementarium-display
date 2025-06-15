import React from "react";
import EnhancedTooltip from "../../ui/tooltip-enhanced";
import { FlaskConical, Beaker } from "lucide-react";

// Визуальный блок для раздела "Compounds / Chemistry"
const HydrogenCompoundsVisualBlock: React.FC = () => (
  <div className="flex flex-wrap gap-4 my-2 text-[13px] select-text">
    <EnhancedTooltip
      content="Вода — главное соединение водорода (H₂O)."
      side="top"
    >
      <span className="bg-cyan-100 dark:bg-gray-900 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-lg">
        H₂O (вода)
        <FlaskConical size={14} className="inline ml-1 align-text-top" />
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="Аммиак — NH₃, важное промышленное соединение."
      side="top"
    >
      <span className="bg-emerald-100 dark:bg-gray-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-lg">
        NH₃ (аммиак)
        <Beaker size={14} className="inline ml-1 align-text-top" />
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="Больше химии о водороде — WebElements, химические справочники."
      side="top"
    >
      <span className="bg-sky-100 dark:bg-gray-900 text-sky-800 dark:text-sky-200 px-3 py-1 rounded-lg underline cursor-pointer">
        Справочник
      </span>
    </EnhancedTooltip>
  </div>
);
export default HydrogenCompoundsVisualBlock;
