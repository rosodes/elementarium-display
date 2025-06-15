import React from "react";
import EnhancedTooltip from "../../ui/tooltip-enhanced";
import { Info } from "lucide-react";

/**
 * Визуальный блок: основные виды применения
 */
const HydrogenApplicationsVisualBlock: React.FC = () => (
  <div className="flex gap-4 flex-wrap my-2 text-[13px] select-text">
    <EnhancedTooltip content="Аммиак — удобрения, более 150 млн тонн/год" side="top">
      <span className="bg-blue-100 dark:bg-gray-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-lg">
        NH₃ (Haber-Bosch)
        <Info size={13} className="inline ml-1 align-text-top"/>
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip content="Водород — компонент ракетного топлива" side="top">
      <span className="bg-yellow-100 dark:bg-gray-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-lg">
        Топливо (ракеты, топливные элементы)
        <Info size={13} className="inline ml-1 align-text-top"/>
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip content="Гидрогенизация жиров — производство маргарина, пищ. масел" side="top">
      <span className="bg-rose-100 dark:bg-gray-900 text-rose-800 dark:text-rose-200 px-3 py-1 rounded-lg">
        Гидрогенизация
        <Info size={13} className="inline ml-1 align-text-top"/>
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip content="Возможен как чистое зелёное топливо будущего (энергетика, экология)" side="top">
      <span className="bg-emerald-100 dark:bg-gray-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-lg">
        Зеленый водород
        <Info size={13} className="inline ml-1 align-text-top"/>
      </span>
    </EnhancedTooltip>
  </div>
);

export default HydrogenApplicationsVisualBlock;
