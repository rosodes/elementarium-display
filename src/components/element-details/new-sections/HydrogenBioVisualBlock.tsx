import React from "react";
import EnhancedTooltip from "../../ui/tooltip-enhanced";
import { HeartHandshake, Activity } from "lucide-react";

// Визуальный блок для раздела "Biological Role / Toxicity"
const HydrogenBioVisualBlock: React.FC = () => (
  <div className="flex flex-wrap gap-4 my-2 text-[13px] select-text">
    <EnhancedTooltip
      content="Входит в состав всех живых организмов, часть воды и органики."
      side="top"
    >
      <span className="bg-rose-100 dark:bg-gray-900 text-rose-800 dark:text-rose-200 px-3 py-1 rounded-lg">
        <HeartHandshake size={14} className="inline mr-1 align-text-top" />
        Обязателен для жизни
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="Водород не токсичен. Смеси с воздухом — взрывоопасны! Follow safety."
      side="top"
    >
      <span className="bg-yellow-100 dark:bg-gray-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-lg">
        <Activity size={14} className="inline mr-1 align-text-top" />
        Нетоксичен (но опасные смеси!)
      </span>
    </EnhancedTooltip>
  </div>
);
export default HydrogenBioVisualBlock;
