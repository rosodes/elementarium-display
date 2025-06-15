import React from "react";
import EnhancedTooltip from "../../ui/tooltip-enhanced";
import { Landmark, BookOpen } from "lucide-react";

// Визуальный блок для раздела "History / Discovery"
const HydrogenHistoryVisualBlock: React.FC = () => (
  <div className="flex flex-wrap gap-4 my-2 text-[13px] select-text">
    <EnhancedTooltip
      content="Henry Cavendish (1766, Англия) впервые выделил и описал водород."
      side="top"
    >
      <span className="bg-orange-100 dark:bg-gray-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-lg">
        <Landmark size={14} className="inline mr-1 align-text-top" />
        Открытие: 1766
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="Антуан Лавуазье дал элементу название hydrogène («образующий воду»), подтвердив его реакцию с кислородом."
      side="top"
    >
      <span className="bg-cyan-100 dark:bg-gray-900 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-lg">
        <BookOpen size={14} className="inline mr-1 align-text-top" />
        Название: hydrogène
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip
      content={<a href="https://www.webelements.com/hydrogen/history.html" target="_blank" rel="noopener noreferrer" className="underline">WebElements: история H</a>}
      side="top"
    >
      <span className="bg-blue-100 dark:bg-gray-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-lg underline cursor-pointer">
        Источник
      </span>
    </EnhancedTooltip>
  </div>
);
export default HydrogenHistoryVisualBlock;
