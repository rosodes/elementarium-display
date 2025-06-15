
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
      content={
        <a
          href="https://www.webelements.com/hydrogen/history.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-700 hover:text-blue-900 dark:text-blue-200"
          tabIndex={-1}
          onClick={e => e.stopPropagation()}
        >
          WebElements: история H
        </a>
      }
      side="top"
    >
      <button
        type="button"
        className="bg-blue-100 dark:bg-gray-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-lg underline cursor-pointer transition hover:bg-blue-200 dark:hover:bg-blue-800 outline-none"
        onClick={() => window.open("https://www.webelements.com/hydrogen/history.html", "_blank", "noopener,noreferrer")}
        tabIndex={0}
      >
        Источник
      </button>
    </EnhancedTooltip>
  </div>
);
export default HydrogenHistoryVisualBlock;

