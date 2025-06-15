
import React from "react";
import { Element } from "../../../data/elementTypes";
const HistoryTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2">History / Discovery</h2>
    <div className="text-sm text-gray-700 dark:text-gray-100">
      {element.atomic === "1" ? (
        <div>
          <ul className="list-disc pl-5 mb-2 text-xs">
            <li>
              Открыт в 1766 году английским химиком <b>Генри Кавендишем</b>.
            </li>
            <li>
              Название "Hydrogen" предложил Антуан Лавуазье (1783), происходит от греч. "hydro" (вода) + "genes" (рождающий).
            </li>
            <li>
              Ранее назывался "inflammable air" («горючий воздух»).
            </li>
            <li>
              Первые крупные исследования: эксперименты по сжиганию и выделению воды.
            </li>
            <li>
              Первыми способами получения стало действие кислот на металлы: Zn + H₂SO₄ → H₂ + ZnSO₄.
            </li>
            <li>
              Важное историческое событие: дирижабли на водороде (XIX–XX вв.), использование в ядерных и термоядерных реакциях.
            </li>
          </ul>
          <div className="text-[11px] text-gray-500 mt-2">
            Источники: IUPAC Gold Book, CRC Handbook, Britannica, Atkins
          </div>
        </div>
      ) : (
        <p>Информация об открытии, этимологии, исторических фактах и первооткрывателях элемента появится здесь.</p>
      )}
    </div>
  </div>
);
export default HistoryTab;
