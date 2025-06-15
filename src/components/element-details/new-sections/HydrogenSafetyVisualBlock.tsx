import React from "react";
import EnhancedTooltip from "../../ui/tooltip-enhanced";
import { Flame, ShieldAlert } from "lucide-react";

// Визуальный блок для раздела "Safety / Precautions"
const HydrogenSafetyVisualBlock: React.FC = () => (
  <div className="flex flex-wrap gap-4 my-2 text-[13px] select-text">
    <EnhancedTooltip
      content="Водород + воздух = взрывоопасно! Пламя почти не видно."
      side="top"
    >
      <span className="bg-red-100 dark:bg-gray-900 text-red-700 dark:text-red-200 px-3 py-1 rounded-lg">
        <Flame size={14} className="inline mr-1 align-text-top" />
        Взрывоопасен!
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="Работать только с датчиками и вентиляцией. Хранить вдали от источников воспламенения."
      side="top"
    >
      <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-lg">
        <ShieldAlert size={14} className="inline mr-1 align-text-top" />
        Контроль &amp; защита
      </span>
    </EnhancedTooltip>
  </div>
);
export default HydrogenSafetyVisualBlock;
