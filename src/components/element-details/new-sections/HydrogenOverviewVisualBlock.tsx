
import React from "react";
import { Link } from "react-router-dom";
import EnhancedTooltip from "../../ui/tooltip-enhanced";
import { Info } from "lucide-react";

/**
 * Визуальный блок для Overview: иконки, полезные ссылки
 */
const HydrogenOverviewVisualBlock: React.FC = () => (
  <div className="flex flex-row flex-wrap mt-2 items-center gap-3">
    <EnhancedTooltip
      content={
        <div className="max-w-xs text-xs">
          WebElements — популярная база свойств элементов.
        </div>
      }
      side="right"
      delay={200}
      portalled
    >
      <a
        href="https://www.webelements.com/hydrogen/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-2 py-1 text-blue-700 dark:text-blue-300 underline rounded hover:bg-blue-50 dark:hover:bg-gray-800 text-xs"
      >
        <Info size={15} className="mr-1" /> WebElements
      </a>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="IUPAC: международный союз теоретической и прикладной химии, официальный источник обозначений."
      side="right"
      portalled
    >
      <a
        href="https://iupac.qmul.ac.uk/AtWt/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-2 py-1 text-blue-700 dark:text-blue-300 underline rounded hover:bg-blue-50 dark:hover:bg-gray-800 text-xs"
      >
        <Info size={15} className="mr-1" /> IUPAC
      </a>
    </EnhancedTooltip>
    <EnhancedTooltip
      content="CRC Handbook — мировое издание справочных данных по химии и физике."
      side="right"
      portalled
    >
      <a
        href="https://hbcp.chemnetbase.com/faces/contents/contents.jsp"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-2 py-1 text-blue-700 dark:text-blue-300 underline rounded hover:bg-blue-50 dark:hover:bg-gray-800 text-xs"
      >
        <Info size={15} className="mr-1" /> CRC Handbook
      </a>
    </EnhancedTooltip>
  </div>
);

export default HydrogenOverviewVisualBlock;
