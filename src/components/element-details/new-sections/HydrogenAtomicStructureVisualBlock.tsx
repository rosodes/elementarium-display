import React from "react";
import EnhancedTooltip from "../../ui/tooltip-enhanced";
import { Info } from "lucide-react";

/**
 * Визуальный блок: атомная структура и изотопы
 */
const HydrogenAtomicStructureVisualBlock: React.FC = () => (
  <div className="flex gap-4 flex-wrap my-2 text-[13px] select-text">
    <EnhancedTooltip
      content="Протий (¹H): 1 протон, 0 нейтронов; Дейтерий (²H): 1 протон, 1 нейтрон; Тритий (³H): 1 протон, 2 нейтрона."
      side="top"
    >
      <span className="bg-sky-100 dark:bg-gray-900 text-sky-700 dark:text-sky-200 py-1 px-3 rounded-lg">
        Изотопы: ¹H, ²H, ³H
        <Info size={13} className="inline ml-1 align-text-top"/>
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="Электронная конфигурация: 1s¹"
      side="top"
    >
      <span className="bg-fuchsia-100 dark:bg-gray-900 text-fuchsia-700 dark:text-fuchsia-200 py-1 px-3 rounded-lg">
        [1s¹]
        <Info size={13} className="inline ml-1 align-text-top"/>
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="Энергетические уровни: n=1 (основной), возбуждённые n=2,3,…"
      side="top"
    >
      <span className="bg-indigo-100 dark:bg-gray-900 text-indigo-700 dark:text-indigo-200 py-1 px-3 rounded-lg">
        n=1, 2, 3…
        <Info size={13} className="inline ml-1 align-text-top"/>
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="Валентность — обычно 1, степени окисления: +1, -1"
      side="top"
    >
      <span className="bg-teal-100 dark:bg-gray-900 text-teal-700 dark:text-teal-200 py-1 px-3 rounded-lg">
        Валентность: 1
        <Info size={13} className="inline ml-1 align-text-top"/>
      </span>
    </EnhancedTooltip>
  </div>
);

export default HydrogenAtomicStructureVisualBlock;
