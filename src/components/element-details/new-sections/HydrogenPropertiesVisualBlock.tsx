
import React from "react";
import EnhancedTooltip from "../../ui/tooltip-enhanced";
import { Info } from "lucide-react";

/**
 * Мини-инфографика для основных физических свойств (Properties)
 */
const HydrogenPropertiesVisualBlock: React.FC = () => (
  <div className="my-2 flex flex-row flex-wrap gap-2 text-[13px]">
    <EnhancedTooltip content="Гидроген — газ без цвета, вкуса и запаха" side="top">
      <span className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-200 rounded-lg">
        Газ (25 °C)
        <Info size={13} className="inline ml-1 align-text-top" />
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip content="Средняя атомная масса согласно IUPAC (2023)" side="top">
      <span className="px-3 py-1 bg-sky-100 dark:bg-gray-900 text-sky-700 dark:text-sky-200 rounded-lg">
        Атомная масса: 1.008
        <Info size={13} className="inline ml-1 align-text-top" />
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip content="Диамагнитный (не притягивается магнитом)" side="top">
      <span className="px-3 py-1 bg-emerald-100 dark:bg-gray-900 text-emerald-700 dark:text-emerald-200 rounded-lg">
        Диамагнетик
        <Info size={13} className="inline ml-1 align-text-top" />
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip content="Точка кипения: -252.9°C" side="top">
      <span className="px-3 py-1 bg-amber-100 dark:bg-gray-900 text-amber-700 dark:text-amber-200 rounded-lg">
        Кипит: -252.9°C
        <Info size={13} className="inline ml-1 align-text-top" />
      </span>
    </EnhancedTooltip>
    <EnhancedTooltip content="Плотность газа при Н.У.: 0.0899 г/л" side="top">
      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 rounded-lg">
        Плотность: 0.0899 г/л
        <Info size={13} className="inline ml-1 align-text-top" />
      </span>
    </EnhancedTooltip>
  </div>
);

export default HydrogenPropertiesVisualBlock;
