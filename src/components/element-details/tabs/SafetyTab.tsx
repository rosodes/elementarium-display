
import React from "react";
import { Element } from "../../../data/elementTypes";
const SafetyTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2">Safety / Precautions</h2>
    <div className="text-sm text-gray-700 dark:text-gray-100">
      {element.atomic === "1" ? (
        <div>
          <ul className="list-disc pl-5 text-xs mb-2">
            <li>Основные опасности: чрезвычайно взрывоопасен в смеси с воздухом (границы воспламенения: 4–75% H₂); малый молекулярный вес → быстро диффундирует (утечки).</li>
            <li>Не токсичен, но опасен как асфиксиант (вытесняет O₂).</li>
            <li>Меры: вентиляция, исключение источников воспламенения, применение детекторов H₂.</li>
            <li>Хранение: защищённые баллоны, вдали от тепла и огня, при низком давлении.</li>
            <li>Транспортировка: спецём баллонах, газгольдерах, в жидком виде — криогенные цистерны.</li>
            <li>Нормы: OSHA (США) — 1 ppm, НКПВ — 4%. Утилизация — сгорание под контролем, разбавление в атмосфере.</li>
            <li>Экологическая токсичность: незначительна, не загрязняет окружающую среду при правильном обращении.</li>
          </ul>
          <div className="mt-2 text-[11px] text-gray-500">
            Источники: OSHA, NIOSH, IUPAC, CRC Handbook
          </div>
        </div>
      ) : (
        <p>Данные о мерах безопасности, утилизации, опасностях и нормах для этого элемента будут показаны здесь.</p>
      )}
    </div>
  </div>
);
export default SafetyTab;
